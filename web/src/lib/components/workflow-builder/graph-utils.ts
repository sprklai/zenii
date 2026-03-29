import type { Node, Edge } from '@xyflow/svelte';

import { nodeRegistry } from './node-registry';

export interface WorkflowMeta {
  id?: string;
  name: string;
  description: string;
  schedule: string | null;
}

export interface NodePosition {
  x: number;
  y: number;
}

export interface WorkflowLayout {
  [stepName: string]: NodePosition;
}

export interface WorkflowStep {
  name: string;
  type: string;
  depends_on: string[];
  tool?: string;
  args?: Record<string, unknown>;
  prompt?: string;
  model?: string;
  seconds?: number;
  expression?: string;
  if_true?: string;
  if_false?: string;
  steps?: string[];
  timeout_secs?: number;
  retry?: number;
  failure_policy?: string;
}

export interface Workflow {
  id: string;
  name: string;
  description: string;
  schedule: string | null;
  steps: WorkflowStep[];
  layout?: WorkflowLayout;
  created_at: string;
  updated_at: string;
}

/**
 * Convert a backend Workflow to @xyflow/svelte nodes and edges.
 */
export function workflowToGraph(workflow: Workflow): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = workflow.steps.map((step) => {
    const defType = step.type === 'tool' ? (step.tool ?? step.type) : step.type;
    const def = nodeRegistry.get(defType);
    const nodeData = def?.fromStep ? def.fromStep(step as unknown as Record<string, unknown>) : { ...step };

    nodeData.definitionType = defType;
    nodeData.stepName = step.name;

    if (step.timeout_secs !== undefined) nodeData.timeout_secs = step.timeout_secs;
    if (step.retry !== undefined) nodeData.retry = step.retry;
    if (step.failure_policy !== undefined) nodeData.failure_policy = step.failure_policy;

    return {
      id: step.name,
      type: def?.visual ?? 'standard',
      position: workflow.layout?.[step.name] ?? { x: 0, y: 0 },
      data: nodeData,
    } satisfies Node;
  });

  const edges = deriveEdges(workflow.steps);

  if (!workflow.layout) {
    const laid = autoLayout(nodes, edges);
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].position = laid[i].position;
    }
  }

  return { nodes, edges };
}

/**
 * Convert @xyflow/svelte nodes and edges back to a backend Workflow.
 */
export function graphToWorkflow(
  nodes: Node[],
  edges: Edge[],
  meta: WorkflowMeta,
): Workflow {
  const incomingEdges = new Map<string, string[]>();
  for (const edge of edges) {
    const existing = incomingEdges.get(edge.target) ?? [];
    existing.push(edge.source);
    incomingEdges.set(edge.target, existing);
  }

  const steps: WorkflowStep[] = nodes.map((node) => {
    const data = node.data as Record<string, unknown>;
    const defType = data.definitionType as string | undefined;
    const def = defType ? nodeRegistry.get(defType) : undefined;
    const stepFields = def?.toStep ? def.toStep(data) : {};

    const step: WorkflowStep = {
      ...(stepFields as Partial<WorkflowStep>),
      type: (stepFields as Record<string, unknown>).type as string ?? 'tool',
      name: (data.stepName as string) || node.id,
      depends_on: incomingEdges.get(node.id) ?? [],
    };

    if (data.timeout_secs !== undefined) step.timeout_secs = data.timeout_secs as number;
    if (data.retry !== undefined) step.retry = data.retry as number;
    if (data.failure_policy !== undefined) step.failure_policy = data.failure_policy as string;

    return step;
  });

  const layout: WorkflowLayout = {};
  for (const node of nodes) {
    const stepName = (node.data as Record<string, unknown>).stepName as string || node.id;
    layout[stepName] = { x: node.position.x, y: node.position.y };
  }

  const id = meta.id ?? slugify(meta.name);

  return {
    id,
    name: meta.name,
    description: meta.description,
    schedule: meta.schedule,
    steps,
    layout,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
}

/**
 * Simple topological-sort-based auto-layout for workflow nodes.
 *
 * Assigns nodes to columns based on dependency depth, then spaces
 * them evenly within each column.
 */
export function autoLayout(nodes: Node[], edges: Edge[]): Node[] {
  if (nodes.length === 0) return [];

  const nodeIds = new Set(nodes.map((n) => n.id));
  const incomingMap = new Map<string, Set<string>>();
  const outgoingMap = new Map<string, Set<string>>();

  for (const id of nodeIds) {
    incomingMap.set(id, new Set());
    outgoingMap.set(id, new Set());
  }

  for (const edge of edges) {
    if (nodeIds.has(edge.source) && nodeIds.has(edge.target)) {
      incomingMap.get(edge.target)!.add(edge.source);
      outgoingMap.get(edge.source)!.add(edge.target);
    }
  }

  // Kahn's algorithm for topological ordering with column assignment
  const columnOf = new Map<string, number>();
  const queue: string[] = [];

  for (const id of nodeIds) {
    if (incomingMap.get(id)!.size === 0) {
      queue.push(id);
      columnOf.set(id, 0);
    }
  }

  const sorted: string[] = [];
  while (queue.length > 0) {
    const current = queue.shift()!;
    sorted.push(current);
    const col = columnOf.get(current) ?? 0;

    for (const neighbor of outgoingMap.get(current) ?? []) {
      const incoming = incomingMap.get(neighbor)!;
      incoming.delete(current);

      // Assign the maximum column among all dependencies
      const existingCol = columnOf.get(neighbor) ?? 0;
      columnOf.set(neighbor, Math.max(existingCol, col + 1));

      if (incoming.size === 0) {
        queue.push(neighbor);
      }
    }
  }

  // Any nodes not reached (cycles or isolated) get placed in column 0
  for (const id of nodeIds) {
    if (!columnOf.has(id)) {
      columnOf.set(id, 0);
      sorted.push(id);
    }
  }

  // Group nodes by column
  const columns = new Map<number, string[]>();
  for (const id of sorted) {
    const col = columnOf.get(id) ?? 0;
    const group = columns.get(col) ?? [];
    group.push(id);
    columns.set(col, group);
  }

  // Assign positions
  const X_START = 100;
  const X_GAP = 300;
  const Y_GAP = 150;

  const positionMap = new Map<string, NodePosition>();
  for (const [col, ids] of columns) {
    const x = X_START + col * X_GAP;
    for (let i = 0; i < ids.length; i++) {
      positionMap.set(ids[i], { x, y: i * Y_GAP });
    }
  }

  return nodes.map((node) => ({
    ...node,
    position: positionMap.get(node.id) ?? node.position,
  }));
}

/**
 * Derive edges from workflow step dependency declarations.
 */
export function deriveEdges(steps: WorkflowStep[]): Edge[] {
  const edges: Edge[] = [];

  for (const step of steps) {
    for (const dep of step.depends_on) {
      edges.push({
        id: `e-${dep}-${step.name}`,
        source: dep,
        target: step.name,
        animated: false,
        type: 'default',
      });
    }
  }

  return edges;
}

/**
 * Generate a unique step name, appending _1, _2, etc. if the base name is taken.
 */
export function generateStepName(baseName: string, existingNames: string[]): string {
  const nameSet = new Set(existingNames);

  if (!nameSet.has(baseName)) {
    return baseName;
  }

  let counter = 1;
  while (nameSet.has(`${baseName}_${counter}`)) {
    counter++;
  }

  return `${baseName}_${counter}`;
}

/**
 * Create a URL-friendly slug from a workflow name.
 */
function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    || 'workflow';
}
