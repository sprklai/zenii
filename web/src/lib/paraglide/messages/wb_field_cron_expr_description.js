/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Cron_Expr_DescriptionInputs */

const en_wb_field_cron_expr_description = /** @type {(inputs: Wb_Field_Cron_Expr_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standard cron expression (5 or 6 fields)`)
};

const zh_cn2_wb_field_cron_expr_description = /** @type {(inputs: Wb_Field_Cron_Expr_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标准 Cron 表达式（5 或 6 个字段）`)
};

const es_wb_field_cron_expr_description = /** @type {(inputs: Wb_Field_Cron_Expr_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expresión Cron estándar (5 o 6 campos)`)
};

const ja_wb_field_cron_expr_description = /** @type {(inputs: Wb_Field_Cron_Expr_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`標準の Cron 式（5 または 6 フィールド）`)
};

const hi_wb_field_cron_expr_description = /** @type {(inputs: Wb_Field_Cron_Expr_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मानक Cron एक्सप्रेशन (5 या 6 फ़ील्ड)`)
};

const pt_br2_wb_field_cron_expr_description = /** @type {(inputs: Wb_Field_Cron_Expr_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expressão Cron padrão (5 ou 6 campos)`)
};

const ko_wb_field_cron_expr_description = /** @type {(inputs: Wb_Field_Cron_Expr_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`표준 Cron 식（5 또는 6 필드）`)
};

const fr_wb_field_cron_expr_description = /** @type {(inputs: Wb_Field_Cron_Expr_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expression Cron standard (5 ou 6 champs)`)
};

/**
* | output |
* | --- |
* | "Standard cron expression (5 or 6 fields)" |
*
* @param {Wb_Field_Cron_Expr_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_cron_expr_description = /** @type {((inputs?: Wb_Field_Cron_Expr_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Cron_Expr_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_cron_expr_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_cron_expr_description(inputs)
	if (locale === "es") return es_wb_field_cron_expr_description(inputs)
	if (locale === "ja") return ja_wb_field_cron_expr_description(inputs)
	if (locale === "hi") return hi_wb_field_cron_expr_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_cron_expr_description(inputs)
	if (locale === "ko") return ko_wb_field_cron_expr_description(inputs)
	return fr_wb_field_cron_expr_description(inputs)
});