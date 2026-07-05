/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflows_Page_TitleInputs */

const en_workflows_page_title = /** @type {(inputs: Workflows_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workflows`)
};

const zh_cn2_workflows_page_title = /** @type {(inputs: Workflows_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`工作流`)
};

const es_workflows_page_title = /** @type {(inputs: Workflows_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flujos de trabajo`)
};

const ja_workflows_page_title = /** @type {(inputs: Workflows_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフロー`)
};

const hi_workflows_page_title = /** @type {(inputs: Workflows_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो`)
};

const pt_br2_workflows_page_title = /** @type {(inputs: Workflows_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fluxos de trabalho`)
};

const ko_workflows_page_title = /** @type {(inputs: Workflows_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로`)
};

const fr_workflows_page_title = /** @type {(inputs: Workflows_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workflows`)
};

/**
* | output |
* | --- |
* | "Workflows" |
*
* @param {Workflows_Page_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_page_title = /** @type {((inputs?: Workflows_Page_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Page_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_page_title(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_page_title(inputs)
	if (locale === "es") return es_workflows_page_title(inputs)
	if (locale === "ja") return ja_workflows_page_title(inputs)
	if (locale === "hi") return hi_workflows_page_title(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_page_title(inputs)
	if (locale === "ko") return ko_workflows_page_title(inputs)
	return fr_workflows_page_title(inputs)
});