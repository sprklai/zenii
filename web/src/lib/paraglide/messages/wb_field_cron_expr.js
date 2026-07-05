/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Cron_ExprInputs */

const en_wb_field_cron_expr = /** @type {(inputs: Wb_Field_Cron_ExprInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron Expression`)
};

const zh_cn2_wb_field_cron_expr = /** @type {(inputs: Wb_Field_Cron_ExprInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron 表达式`)
};

const es_wb_field_cron_expr = /** @type {(inputs: Wb_Field_Cron_ExprInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expresión Cron`)
};

const ja_wb_field_cron_expr = /** @type {(inputs: Wb_Field_Cron_ExprInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron 式`)
};

const hi_wb_field_cron_expr = /** @type {(inputs: Wb_Field_Cron_ExprInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron एक्सप्रेशन`)
};

const pt_br2_wb_field_cron_expr = /** @type {(inputs: Wb_Field_Cron_ExprInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expressão Cron`)
};

const ko_wb_field_cron_expr = /** @type {(inputs: Wb_Field_Cron_ExprInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron 식`)
};

const fr_wb_field_cron_expr = /** @type {(inputs: Wb_Field_Cron_ExprInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expression Cron`)
};

/**
* | output |
* | --- |
* | "Cron Expression" |
*
* @param {Wb_Field_Cron_ExprInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_cron_expr = /** @type {((inputs?: Wb_Field_Cron_ExprInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Cron_ExprInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_cron_expr(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_cron_expr(inputs)
	if (locale === "es") return es_wb_field_cron_expr(inputs)
	if (locale === "ja") return ja_wb_field_cron_expr(inputs)
	if (locale === "hi") return hi_wb_field_cron_expr(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_cron_expr(inputs)
	if (locale === "ko") return ko_wb_field_cron_expr(inputs)
	return fr_wb_field_cron_expr(inputs)
});