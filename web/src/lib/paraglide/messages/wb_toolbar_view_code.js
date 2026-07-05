/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Toolbar_View_CodeInputs */

const en_wb_toolbar_view_code = /** @type {(inputs: Wb_Toolbar_View_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code`)
};

const zh_cn2_wb_toolbar_view_code = /** @type {(inputs: Wb_Toolbar_View_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`代码`)
};

const es_wb_toolbar_view_code = /** @type {(inputs: Wb_Toolbar_View_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código`)
};

const ja_wb_toolbar_view_code = /** @type {(inputs: Wb_Toolbar_View_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コード`)
};

const hi_wb_toolbar_view_code = /** @type {(inputs: Wb_Toolbar_View_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कोड`)
};

const pt_br2_wb_toolbar_view_code = /** @type {(inputs: Wb_Toolbar_View_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código`)
};

const ko_wb_toolbar_view_code = /** @type {(inputs: Wb_Toolbar_View_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`코드`)
};

const fr_wb_toolbar_view_code = /** @type {(inputs: Wb_Toolbar_View_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code`)
};

/**
* | output |
* | --- |
* | "Code" |
*
* @param {Wb_Toolbar_View_CodeInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_toolbar_view_code = /** @type {((inputs?: Wb_Toolbar_View_CodeInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Toolbar_View_CodeInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_toolbar_view_code(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_toolbar_view_code(inputs)
	if (locale === "es") return es_wb_toolbar_view_code(inputs)
	if (locale === "ja") return ja_wb_toolbar_view_code(inputs)
	if (locale === "hi") return hi_wb_toolbar_view_code(inputs)
	if (locale === "pt-BR") return pt_br2_wb_toolbar_view_code(inputs)
	if (locale === "ko") return ko_wb_toolbar_view_code(inputs)
	return fr_wb_toolbar_view_code(inputs)
});