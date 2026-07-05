/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, suffix: NonNullable<unknown> }} Dashboard_Workflows_CountInputs */

const en_dashboard_workflows_count = /** @type {(inputs: Dashboard_Workflows_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} workflow${i?.suffix}`)
};

const zh_cn2_dashboard_workflows_count = /** @type {(inputs: Dashboard_Workflows_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 个工作流${i?.suffix}`)
};

const es_dashboard_workflows_count = /** @type {(inputs: Dashboard_Workflows_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} flujo${i?.suffix}`)
};

const ja_dashboard_workflows_count = /** @type {(inputs: Dashboard_Workflows_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} ワークフロー${i?.suffix}`)
};

const hi_dashboard_workflows_count = /** @type {(inputs: Dashboard_Workflows_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} वर्कफ़्लो${i?.suffix}`)
};

const pt_br2_dashboard_workflows_count = /** @type {(inputs: Dashboard_Workflows_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} fluxo${i?.suffix}`)
};

const ko_dashboard_workflows_count = /** @type {(inputs: Dashboard_Workflows_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count}개 워크플로${i?.suffix}`)
};

const fr_dashboard_workflows_count = /** @type {(inputs: Dashboard_Workflows_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} workflow${i?.suffix}`)
};

/**
* | output |
* | --- |
* | "{count} workflow{suffix}" |
*
* @param {Dashboard_Workflows_CountInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_workflows_count = /** @type {((inputs: Dashboard_Workflows_CountInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Workflows_CountInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_workflows_count(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_workflows_count(inputs)
	if (locale === "es") return es_dashboard_workflows_count(inputs)
	if (locale === "ja") return ja_dashboard_workflows_count(inputs)
	if (locale === "hi") return hi_dashboard_workflows_count(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_workflows_count(inputs)
	if (locale === "ko") return ko_dashboard_workflows_count(inputs)
	return fr_dashboard_workflows_count(inputs)
});