/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Card_Workflows_TitleInputs */

const en_dashboard_card_workflows_title = /** @type {(inputs: Dashboard_Card_Workflows_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workflows`)
};

const zh_cn2_dashboard_card_workflows_title = /** @type {(inputs: Dashboard_Card_Workflows_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`工作流`)
};

const es_dashboard_card_workflows_title = /** @type {(inputs: Dashboard_Card_Workflows_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flujos de trabajo`)
};

const ja_dashboard_card_workflows_title = /** @type {(inputs: Dashboard_Card_Workflows_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフロー`)
};

const hi_dashboard_card_workflows_title = /** @type {(inputs: Dashboard_Card_Workflows_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो`)
};

const pt_br2_dashboard_card_workflows_title = /** @type {(inputs: Dashboard_Card_Workflows_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fluxos de trabalho`)
};

const ko_dashboard_card_workflows_title = /** @type {(inputs: Dashboard_Card_Workflows_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로`)
};

const fr_dashboard_card_workflows_title = /** @type {(inputs: Dashboard_Card_Workflows_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workflows`)
};

/**
* | output |
* | --- |
* | "Workflows" |
*
* @param {Dashboard_Card_Workflows_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_card_workflows_title = /** @type {((inputs?: Dashboard_Card_Workflows_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Card_Workflows_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_card_workflows_title(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_card_workflows_title(inputs)
	if (locale === "es") return es_dashboard_card_workflows_title(inputs)
	if (locale === "ja") return ja_dashboard_card_workflows_title(inputs)
	if (locale === "hi") return hi_dashboard_card_workflows_title(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_card_workflows_title(inputs)
	if (locale === "ko") return ko_dashboard_card_workflows_title(inputs)
	return fr_dashboard_card_workflows_title(inputs)
});