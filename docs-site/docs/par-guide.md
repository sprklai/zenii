---
sidebar_position: 13
title: Polyglot Agent Runtime (PAR)
slug: /par-guide
---

# Polyglot Agent Runtime (PAR) Guide

The **Polyglot Agent Runtime** (PAR) lets you run external code from GitHub as Zenii tools and agents. Write a Python script, a Node module, or any executable, declare it in a manifest, and Zenii will install dependencies on demand, run it isolated, and handle failures automatically.

**Key benefits:**
- No fat sidecar bloat — dependencies installed on demand via `uvx`/`npx`
- Self-healing — when a tool fails, Zenii diagnoses and fixes it automatically
- Polyglot — Python (via `uv`), Node/TypeScript (via `npx`), and extensible to any language
- Seamless integration — tools work everywhere: agent, delegation, workflows, CLI, desktop app

---

## 1. Check and Manage Runtimes

PAR needs external runtimes (`uv` for Python, `node` for Node/TS) installed on your system. Check their status first:

```bash
zenii runtime status
```

Example output:
```
  uv       present  0.4.21
  node     present  20.11.1
```

If a runtime is missing, install it:

```bash
# Install uv (Python runtime)
zenii runtime install uv

# Re-check all runtimes after manual install
zenii runtime recheck
```

The daemon will report which runtimes are present, their versions, and — if any are missing — the install command:
```
  python   MISSING
           Run: curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Configuration

In `zenii.toml`:

```toml
[runtimes]
# Auto-install runtimes when encountered (default: false = instructions only)
runtime_auto_install = false

# Directory to store runtime binaries (default: ~/.zenii/runtimes)
# runtimes_dir = "/custom/path/runtimes"

# Shared dependency cache dir (default: ~/.zenii/runtime-cache)
# runtime_cache_dir = "/custom/path/runtime-cache"
```

With `runtime_auto_install = false`, users see install instructions when a runtime is missing. Set to `true` for unattended setup (e.g., CI/CD).

---

## 2. Write a Plugin Manifest

A **plugin** is a TOML file (`zenii-plugin.toml`) that declares tools, skills, and config. For PAR, add `runner`, `package`, and optionally `required_runtime` to each tool.

### Example 1: Python tool from GitHub via `uvx`

```toml
[plugin]
name = "repo-analyzer"
version = "0.2.0"
description = "Analyze a repository structure and complexity"
author = "Your Team"
license = "MIT"
homepage = "https://github.com/yourteam/repo-analyzer"

[[tools]]
name = "analyze"
description = "Analyze a repository: structure, module count, cyclomatic complexity"
binary = "main.py"                                   # Entry script in the repo root
runner = "uvx"                                       # Use uvx to run
package = "git+https://github.com/yourteam/repo-analyzer@v0.2.0"  # GitHub source + ref
required_runtime = "python>=3.11"                    # Doctor checks this

[tools.permissions]
filesystem = ["*"]                                   # Needs to read the repo
network = []

# Optional: evaluation cases used by self-heal
[[tools.tests]]
input = { repo_path = "./test-repo" }
expect = { complexity = { avg = 3.5 } }
```

### Example 2: Node.js tool via `npx`

```toml
[plugin]
name = "markdown-formatter"
version = "1.0.0"
description = "Format and lint markdown"

[[tools]]
name = "format"
description = "Format and lint markdown files"
binary = "src/cli.js"
runner = "npx"
package = "markdown-formatter-cli@1.0.0"  # NPM package
required_runtime = "node>=18.0.0"

[tools.permissions]
filesystem = ["*"]
```

### Example 3: Local Python tool with `uv-run`

```toml
[plugin]
name = "local-scripts"
version = "0.1.0"
description = "Local Python utilities"

[[tools]]
name = "word-count"
description = "Count words in a file"
binary = "tools/word-count.py"
runner = "uv-run"  # Local uv project (no `package` needed)

# Local Python project should have pyproject.toml or requirements.txt
```

### Manifest Fields Reference

| Field | Required | Type | Notes |
|-------|----------|------|-------|
| `plugin.name` | ✓ | string | Alphanumeric, hyphens, underscores only |
| `plugin.version` | ✓ | string | Semantic version (e.g., `1.0.0`) |
| `plugin.description` | ✓ | string | One-line description |
| `plugin.author` | ✗ | string | Author name |
| `tools[].name` | ✓ | string | Tool identifier |
| `tools[].binary` | ✓ | string | Relative path to entry script/binary |
| `tools[].runner` | ✗ | string | `uvx` \| `npx` \| `bunx` \| `uv-run` \| `node` (default: direct binary) |
| `tools[].package` | ✗ | string | Package spec for `uvx`/`npx`/`bunx` — required if runner is one of those |
| `tools[].required_runtime` | ✗ | string | Runtime constraint (e.g., `python>=3.11`, `node>=18`) |
| `tools[].tests` | ✗ | array | Evaluation cases for self-heal (see [Self-Healing](#self-healing)) |
| `tools[].permissions` | ✗ | object | `filesystem`, `network`, `shell`, `credentials` lists |

---

## 3. Install and Manage Plugins

### Install from GitHub

```bash
# Install the whole repo
zenii plugin install https://github.com/yourteam/repo-analyzer

# Install a specific plugin from a monorepo subdirectory
zenii plugin install https://github.com/yourteam/zenii-plugins#plugins/json-formatter

# Install at a specific tag/branch
zenii plugin install https://github.com/yourteam/repo-analyzer@main
```

When you run install, PAR will:
1. **Detect runtimes** — run `doctor.ensure()` to check/install required runtimes
2. **Prime dependencies** — warm the cache so the first tool call is fast
3. **Register the tool** — add it to `ToolRegistry`, making it available everywhere

```
Installing https://github.com/yourteam/repo-analyzer...
  Checking python>=3.11... present
  Priming dependencies (git+https://github.com/yourteam/repo-analyzer@v0.2.0)...
  Tool 'analyze' registered.
```

### Install from Local Directory

```bash
# Install a single plugin
zenii plugin install ./my-plugin --local

# Install all plugins from a directory
zenii plugin install ./plugins --local --all
```

### List and Inspect Installed Plugins

```bash
# List all plugins
zenii plugin list

# Show details of one plugin
zenii plugin info repo-analyzer
```

### Update a Plugin

```bash
# Re-fetch and re-resolve dependencies for a git-based plugin
zenii plugin update repo-analyzer
```

### Remove a Plugin

```bash
zenii plugin remove repo-analyzer
```

---

## 4. Use the Tools

Once installed, your tools are available everywhere in Zenii **without any extra wiring**.

### Via Interactive Chat

```bash
zenii chat

# In the chat:
# > analyze the complexity of a Python project at /home/user/myapp
# [Agent calls the analyze tool automatically]
```

The agent sees all available tools and calls them when relevant to the conversation.

### Via CLI Direct Tool Call

```bash
# Call a tool directly
zenii tool execute analyze '{"repo_path": "."}'
```

Response:
```json
{
  "success": true,
  "output": {
    "repo_path": ".",
    "file_count": 142,
    "complexity": {
      "avg": 3.2,
      "max": 8
    }
  }
}
```

### Via HTTP API

```bash
# List all available tools (including your plugins)
curl http://localhost:18981/tools | jq '.[] | select(.name | contains("analyze"))'

# Execute a tool via HTTP
curl -X POST http://localhost:18981/tools/analyze/execute \
  -H 'Content-Type: application/json' \
  -d '{"repo_path": "."}'
```

### Via Delegation

The agent can delegate sub-tasks to other agents, which can use your tools:

```bash
# Configure delegation in zenii.toml
[agent]
delegation_enabled = true
delegation_model = "gpt-4o"  # or another model

# In chat, say:
# > use the repo analyzer to check my code, then summarize findings
```

### Via Workflows

Reference tools by name in a TOML workflow:

```toml
[[steps]]
name = "analyze"
tool = "analyze"
params = { repo_path = "{{repo_path}}" }

[[steps]]
name = "summarize"
tool = "summarize"
params = { findings = "{{steps.analyze.output}}" }
```

---

## 5. Self-Healing

When a tool fails, PAR automatically diagnoses and repairs it — no manual intervention needed.

### When Self-Heal Triggers

Self-healing runs when:
- A tool with declared `tests` fails
- The tool declares `runner`, `package`, and `required_runtime`
- `plugin_auto_repair_enabled = true` (default)

### Repair Strategies

**Dependency missing** (e.g., `ModuleNotFoundError: requests`):
- Adds the missing module to the manifest
- Re-resolves dependencies
- Retries

**Logic bug** (e.g., function signature changed):
- Analyzes the error trace and prior attempts
- Uses an LLM to generate a patch
- Tests the patch against the tool's test cases
- Applies the patch if tests pass

**Transient error** (e.g., network timeout):
- Retries with exponential backoff

**User-action needed** (e.g., missing API key):
- Fails immediately with instructions

### Example: Automatic Fix

Tool declares a test:

```toml
[[tools.tests]]
input = { repo_path = "./fixtures/sample-repo" }
expect = { complexity = { avg = 3.5 } }
```

On first run, the tool fails with:
```
ModuleNotFoundError: No module named 'radon'
```

PAR automatically:
1. Adds `radon` to the tool's dependencies
2. Re-installs dependencies
3. Reruns the tool
4. Tool succeeds, returns result

All transparent to the caller — no error surface, just success.

### Configuration

In `zenii.toml`:

```toml
[plugins]
# Enable auto-repair (default: true)
plugin_auto_repair_enabled = true

# Max attempts to heal one failure (default: 3)
heal_max_attempts = 3

# Token budget for LLM reflection (default: 5000)
heal_token_budget = 5000

# Wall-clock timeout for healing loop (default: 30 seconds)
heal_wall_clock_secs = 30
```

Disable healing per-tool by removing the `tests` section from its manifest.

---

## 6. Real-World Examples

### Example 1: GitHub Repo Analyzer

Create a GitHub repo with this structure:

```
repo-analyzer/
├── zenii-plugin.toml
├── pyproject.toml
└── main.py
```

**pyproject.toml:**
```toml
[project]
name = "repo-analyzer"
version = "0.2.0"
description = "Analyze repository structure"
requires-python = ">=3.11"
dependencies = ["radon", "pathspec"]
```

**main.py:**
```python
import sys
import json
from pathspec import PathSpec
from radon.complexity import cc_visit

def analyze(repo_path: str) -> dict:
    """Analyze repo structure and complexity."""
    py_files = []
    for root, dirs, files in os.walk(repo_path):
        # Skip common ignore patterns
        for f in files:
            if f.endswith('.py'):
                py_files.append(os.path.join(root, f))
    
    complexities = []
    for f in py_files:
        with open(f) as fp:
            results = cc_visit(fp.read())
            for result in results:
                complexities.append(result.complexity)
    
    return {
        "success": True,
        "output": {
            "file_count": len(py_files),
            "complexity": {
                "avg": sum(complexities) / len(complexities) if complexities else 0,
                "max": max(complexities) if complexities else 0
            }
        }
    }

if __name__ == "__main__":
    repo_path = json.loads(sys.stdin.read()).get("repo_path", ".")
    result = analyze(repo_path)
    print(json.dumps(result))
```

**zenii-plugin.toml:**
```toml
[plugin]
name = "repo-analyzer"
version = "0.2.0"
description = "Analyze repository complexity"

[[tools]]
name = "analyze"
description = "Analyze repo structure and complexity"
binary = "main.py"
runner = "uvx"
package = "git+https://github.com/yourteam/repo-analyzer@v0.2.0"
required_runtime = "python>=3.11"

[[tools.tests]]
input = { repo_path = "." }
expect = { complexity = { avg = 3 } }  # smoke test

[tools.permissions]
filesystem = ["*"]
```

Install and use:
```bash
zenii plugin install https://github.com/yourteam/repo-analyzer
zenii chat
# > check my repo complexity
```

### Example 2: JSON Schema Validator

A Node.js tool using `npx`:

**zenii-plugin.toml:**
```toml
[plugin]
name = "json-validator"
version = "1.0.0"
description = "Validate JSON against a schema"

[[tools]]
name = "validate"
description = "Validate JSON data against a JSON schema"
binary = "dist/cli.js"
runner = "npx"
package = "@json-validator/core@1.0.0"
required_runtime = "node>=18.0.0"

[[tools.tests]]
input = { json = { name = "test" }, schema = { type = "object" } }
expect = { valid = true }
```

Install and use:
```bash
zenii plugin install https://github.com/yourteam/json-validator
zenii tool execute validate \
  '{"json": {"name": "Alice"}, "schema": {"type": "object", "properties": {"name": {"type": "string"}}}}'
```

### Example 3: MCP Server (Option A)

If your external code speaks the MCP protocol, register it via the MCP launcher (no plugin manifest needed):

```bash
# MCP launcher builds: uvx --from git+URL@ref entry-script
# Zenii discovers tools automatically from the MCP handshake
zenii mcp install https://github.com/yourteam/mcp-weather-service
```

Tools from the MCP server are discovered and registered automatically.

---

## 7. Troubleshooting

### Runtime Not Found

```
✗ Doctor check failed: python>=3.11 not present
  Install: curl -LsSf https://astral.sh/uv/install.sh | sh
```

**Fix:** Run the install command, then retry:
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
zenii runtime recheck
zenii plugin install <url>
```

### Tool Execution Timeout

If a tool is slow on first run (cold dependency cache), increase the timeout:

```toml
[plugins]
plugin_execute_timeout_secs = 60  # default: 30
```

### Tool Fails with "Module Not Found"

1. Check the manifest declares `tests` — if not, self-heal won't run
2. Add a test case to the manifest:
   ```toml
   [[tools.tests]]
   input = { sample_data = "..." }
   expect = { success = true }
   ```
3. Re-install or retry — self-heal will add the missing module

### Tool Output is Empty or Wrong

Check `heal_max_attempts` — if healing is retrying too much, it might time out:

```toml
[plugins]
heal_max_attempts = 5          # Increase retries
heal_token_budget = 10000      # Increase LLM budget
heal_wall_clock_secs = 60      # Increase time limit
```

### Disable Self-Heal for Debugging

```toml
[plugins]
plugin_auto_repair_enabled = false
```

Then run the tool directly to see the actual error:
```bash
zenii tool execute your-tool '{"key": "value"}'
```

---

## 8. Best Practices

### Writing Tools

- **Expect JSON on stdin**: Tools receive arguments as JSON on stdin
- **Return JSON on stdout**: Tools return `{"success": true, "output": {...}}`
- **Secrets via env, not args**: PAR injects secrets as environment variables (never on the command line)
- **Large outputs via scratch**: If a tool returns large/binary data, write it to `$ZENII_AGENT_SCRATCH` and return a path

### Plugin Manifests

- **Pin versions**: Use exact refs in `package` (`@v1.2.3`, not `@latest`)
- **Declare permissions**: List `filesystem`, `network`, `credentials` used
- **Include tests**: Even simple smoke tests help self-heal diagnose issues
- **Use descriptive names**: Tool names should be clear — `analyze`, `validate`, `transform`

### Monitoring

Enable debug logging to trace tool calls and healing:

```toml
[logging]
level = "debug"
```

Then check logs:
```bash
tail -f ~/.zenii/logs/zenii.log | grep -i "plugin\|heal\|tool"
```

---

## Next Steps

- Read the **[CLI Reference](./cli-reference#plugin)** for all plugin commands
- Check **[Architecture](./architecture#plugin-architecture-phase-9)** for internals
- See **[Processes](./processes#polyglot-agent-runtime-flow)** for how PAR works under the hood
- Browse real plugins: [zenii-plugins GitHub org](https://github.com/sprklai/zenii-plugins)
