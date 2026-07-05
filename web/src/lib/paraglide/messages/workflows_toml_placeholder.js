/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflows_Toml_PlaceholderInputs */

const en_workflows_toml_placeholder = /** @type {(inputs: Workflows_Toml_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`id = "my-workflow"
name = "My Workflow"
description = "A sample workflow"

[[steps]]
name = "check-system"
type = "tool"
tool = "system_info"

[steps.args]
action = "os"`)
};

const zh_cn2_workflows_toml_placeholder = /** @type {(inputs: Workflows_Toml_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`id = "my-workflow"
name = "My Workflow"
description = "A sample workflow"

[[steps]]
name = "check-system"
type = "tool"
tool = "system_info"

[steps.args]
action = "os"`)
};

const es_workflows_toml_placeholder = /** @type {(inputs: Workflows_Toml_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`id = "mi-flujo"
name = "Mi flujo de trabajo"
description = "Un flujo de trabajo de ejemplo"

[[steps]]
name = "verificar-sistema"
type = "tool"
tool = "system_info"

[steps.args]
action = "os"`)
};

const ja_workflows_toml_placeholder = /** @type {(inputs: Workflows_Toml_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`id = "my-workflow"
name = "My Workflow"
description = "A sample workflow"

[[steps]]
name = "check-system"
type = "tool"
tool = "system_info"

[steps.args]
action = "os"`)
};

const hi_workflows_toml_placeholder = /** @type {(inputs: Workflows_Toml_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`id = "my-workflow"
name = "My Workflow"
description = "A sample workflow"

[[steps]]
name = "check-system"
type = "tool"
tool = "system_info"

[steps.args]
action = "os"`)
};

const pt_br2_workflows_toml_placeholder = /** @type {(inputs: Workflows_Toml_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`id = "my-workflow"
name = "My Workflow"
description = "A sample workflow"

[[steps]]
name = "check-system"
type = "tool"
tool = "system_info"

[steps.args]
action = "os"`)
};

const ko_workflows_toml_placeholder = /** @type {(inputs: Workflows_Toml_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`id = "my-workflow"
name = "My Workflow"
description = "A sample workflow"

[[steps]]
name = "check-system"
type = "tool"
tool = "system_info"

[steps.args]
action = "os"`)
};

const fr_workflows_toml_placeholder = /** @type {(inputs: Workflows_Toml_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`id = "mon-flux"
name = "Mon flux de travail"
description = "Un exemple de flux de travail"

[[steps]]
name = "verifier-systeme"
type = "tool"
tool = "system_info"

[steps.args]
action = "os"`)
};

/**
* | output |
* | --- |
* | "id = \"my-workflow\" name = \"My Workflow\" description = \"A sample workflow\" [[steps]] name = \"check-system\" type = \"tool\" tool = \"system_info\" [steps.args] act..." |
*
* @param {Workflows_Toml_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_toml_placeholder = /** @type {((inputs?: Workflows_Toml_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Toml_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_toml_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_toml_placeholder(inputs)
	if (locale === "es") return es_workflows_toml_placeholder(inputs)
	if (locale === "ja") return ja_workflows_toml_placeholder(inputs)
	if (locale === "hi") return hi_workflows_toml_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_toml_placeholder(inputs)
	if (locale === "ko") return ko_workflows_toml_placeholder(inputs)
	return fr_workflows_toml_placeholder(inputs)
});