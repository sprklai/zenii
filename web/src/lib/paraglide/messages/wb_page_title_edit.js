/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Page_Title_EditInputs */

const en_wb_page_title_edit = /** @type {(inputs: Wb_Page_Title_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit Workflow`)
};

const zh_cn2_wb_page_title_edit = /** @type {(inputs: Wb_Page_Title_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑工作流`)
};

const es_wb_page_title_edit = /** @type {(inputs: Wb_Page_Title_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar flujo de trabajo`)
};

const ja_wb_page_title_edit = /** @type {(inputs: Wb_Page_Title_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフローを編集`)
};

const hi_wb_page_title_edit = /** @type {(inputs: Wb_Page_Title_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो संपादित करें`)
};

const pt_br2_wb_page_title_edit = /** @type {(inputs: Wb_Page_Title_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar Workflow`)
};

const ko_wb_page_title_edit = /** @type {(inputs: Wb_Page_Title_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로 편집`)
};

const fr_wb_page_title_edit = /** @type {(inputs: Wb_Page_Title_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier le flux de travail`)
};

/**
* | output |
* | --- |
* | "Edit Workflow" |
*
* @param {Wb_Page_Title_EditInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_page_title_edit = /** @type {((inputs?: Wb_Page_Title_EditInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Page_Title_EditInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_page_title_edit(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_page_title_edit(inputs)
	if (locale === "es") return es_wb_page_title_edit(inputs)
	if (locale === "ja") return ja_wb_page_title_edit(inputs)
	if (locale === "hi") return hi_wb_page_title_edit(inputs)
	if (locale === "pt-BR") return pt_br2_wb_page_title_edit(inputs)
	if (locale === "ko") return ko_wb_page_title_edit(inputs)
	return fr_wb_page_title_edit(inputs)
});