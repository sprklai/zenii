/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_No_WorkflowsInputs */

const en_dashboard_no_workflows = /** @type {(inputs: Dashboard_No_WorkflowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No workflows yet`)
};

const zh_cn2_dashboard_no_workflows = /** @type {(inputs: Dashboard_No_WorkflowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无工作流`)
};

const es_dashboard_no_workflows = /** @type {(inputs: Dashboard_No_WorkflowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay flujos de trabajo`)
};

const ja_dashboard_no_workflows = /** @type {(inputs: Dashboard_No_WorkflowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフローはまだありません`)
};

const hi_dashboard_no_workflows = /** @type {(inputs: Dashboard_No_WorkflowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अभी तक कोई वर्कफ़्लो नहीं`)
};

const pt_br2_dashboard_no_workflows = /** @type {(inputs: Dashboard_No_WorkflowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum workflow ainda`)
};

const ko_dashboard_no_workflows = /** @type {(inputs: Dashboard_No_WorkflowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`아직 워크플로 없음`)
};

const fr_dashboard_no_workflows = /** @type {(inputs: Dashboard_No_WorkflowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun flux de travail`)
};

/**
* | output |
* | --- |
* | "No workflows yet" |
*
* @param {Dashboard_No_WorkflowsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_no_workflows = /** @type {((inputs?: Dashboard_No_WorkflowsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_No_WorkflowsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_no_workflows(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_no_workflows(inputs)
	if (locale === "es") return es_dashboard_no_workflows(inputs)
	if (locale === "ja") return ja_dashboard_no_workflows(inputs)
	if (locale === "hi") return hi_dashboard_no_workflows(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_no_workflows(inputs)
	if (locale === "ko") return ko_dashboard_no_workflows(inputs)
	return fr_dashboard_no_workflows(inputs)
});