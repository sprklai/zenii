/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Page_Title_NewInputs */

const en_wb_page_title_new = /** @type {(inputs: Wb_Page_Title_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New Workflow`)
};

const zh_cn2_wb_page_title_new = /** @type {(inputs: Wb_Page_Title_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建工作流`)
};

const es_wb_page_title_new = /** @type {(inputs: Wb_Page_Title_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevo flujo de trabajo`)
};

const ja_wb_page_title_new = /** @type {(inputs: Wb_Page_Title_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいワークフロー`)
};

const hi_wb_page_title_new = /** @type {(inputs: Wb_Page_Title_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`नया वर्कफ़्लो`)
};

const pt_br2_wb_page_title_new = /** @type {(inputs: Wb_Page_Title_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo Workflow`)
};

const ko_wb_page_title_new = /** @type {(inputs: Wb_Page_Title_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`새 워크플로`)
};

const fr_wb_page_title_new = /** @type {(inputs: Wb_Page_Title_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveau flux de travail`)
};

/**
* | output |
* | --- |
* | "New Workflow" |
*
* @param {Wb_Page_Title_NewInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_page_title_new = /** @type {((inputs?: Wb_Page_Title_NewInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Page_Title_NewInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_page_title_new(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_page_title_new(inputs)
	if (locale === "es") return es_wb_page_title_new(inputs)
	if (locale === "ja") return ja_wb_page_title_new(inputs)
	if (locale === "hi") return hi_wb_page_title_new(inputs)
	if (locale === "pt-BR") return pt_br2_wb_page_title_new(inputs)
	if (locale === "ko") return ko_wb_page_title_new(inputs)
	return fr_wb_page_title_new(inputs)
});