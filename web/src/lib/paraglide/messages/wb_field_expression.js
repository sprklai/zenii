/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_ExpressionInputs */

const en_wb_field_expression = /** @type {(inputs: Wb_Field_ExpressionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expression`)
};

const zh_cn2_wb_field_expression = /** @type {(inputs: Wb_Field_ExpressionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表达式`)
};

const es_wb_field_expression = /** @type {(inputs: Wb_Field_ExpressionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expresión`)
};

const ja_wb_field_expression = /** @type {(inputs: Wb_Field_ExpressionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`式`)
};

const hi_wb_field_expression = /** @type {(inputs: Wb_Field_ExpressionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`व्यंजक`)
};

const pt_br2_wb_field_expression = /** @type {(inputs: Wb_Field_ExpressionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expressão`)
};

const ko_wb_field_expression = /** @type {(inputs: Wb_Field_ExpressionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`표현식`)
};

const fr_wb_field_expression = /** @type {(inputs: Wb_Field_ExpressionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expression`)
};

/**
* | output |
* | --- |
* | "Expression" |
*
* @param {Wb_Field_ExpressionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_expression = /** @type {((inputs?: Wb_Field_ExpressionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_ExpressionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_expression(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_expression(inputs)
	if (locale === "es") return es_wb_field_expression(inputs)
	if (locale === "ja") return ja_wb_field_expression(inputs)
	if (locale === "hi") return hi_wb_field_expression(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_expression(inputs)
	if (locale === "ko") return ko_wb_field_expression(inputs)
	return fr_wb_field_expression(inputs)
});