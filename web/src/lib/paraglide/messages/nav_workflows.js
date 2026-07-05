/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Nav_WorkflowsInputs */

const en_nav_workflows = /** @type {(inputs: Nav_WorkflowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workflows`)
};

const zh_cn2_nav_workflows = /** @type {(inputs: Nav_WorkflowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`工作流`)
};

const es_nav_workflows = /** @type {(inputs: Nav_WorkflowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flujos de trabajo`)
};

const ja_nav_workflows = /** @type {(inputs: Nav_WorkflowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフロー`)
};

const hi_nav_workflows = /** @type {(inputs: Nav_WorkflowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो`)
};

const pt_br2_nav_workflows = /** @type {(inputs: Nav_WorkflowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fluxos de trabalho`)
};

const ko_nav_workflows = /** @type {(inputs: Nav_WorkflowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로`)
};

const fr_nav_workflows = /** @type {(inputs: Nav_WorkflowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workflows`)
};

/**
* | output |
* | --- |
* | "Workflows" |
*
* @param {Nav_WorkflowsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const nav_workflows = /** @type {((inputs?: Nav_WorkflowsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_WorkflowsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_nav_workflows(inputs)
	if (locale === "zh-CN") return zh_cn2_nav_workflows(inputs)
	if (locale === "es") return es_nav_workflows(inputs)
	if (locale === "ja") return ja_nav_workflows(inputs)
	if (locale === "hi") return hi_nav_workflows(inputs)
	if (locale === "pt-BR") return pt_br2_nav_workflows(inputs)
	if (locale === "ko") return ko_nav_workflows(inputs)
	return fr_nav_workflows(inputs)
});