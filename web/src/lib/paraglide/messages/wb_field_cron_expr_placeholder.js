/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Cron_Expr_PlaceholderInputs */

const en_wb_field_cron_expr_placeholder = /** @type {(inputs: Wb_Field_Cron_Expr_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. 0 9 * * 1-5`)
};

const zh_cn2_wb_field_cron_expr_placeholder = /** @type {(inputs: Wb_Field_Cron_Expr_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. 0 9 * * 1-5`)
};

const es_wb_field_cron_expr_placeholder = /** @type {(inputs: Wb_Field_Cron_Expr_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. 0 9 * * 1-5`)
};

const ja_wb_field_cron_expr_placeholder = /** @type {(inputs: Wb_Field_Cron_Expr_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. 0 9 * * 1-5`)
};

const hi_wb_field_cron_expr_placeholder = /** @type {(inputs: Wb_Field_Cron_Expr_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. 0 9 * * 1-5`)
};

const pt_br2_wb_field_cron_expr_placeholder = /** @type {(inputs: Wb_Field_Cron_Expr_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. 0 9 * * 1-5`)
};

const ko_wb_field_cron_expr_placeholder = /** @type {(inputs: Wb_Field_Cron_Expr_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. 0 9 * * 1-5`)
};

const fr_wb_field_cron_expr_placeholder = /** @type {(inputs: Wb_Field_Cron_Expr_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. 0 9 * * 1-5`)
};

/**
* | output |
* | --- |
* | "e.g. 0 9 * * 1-5" |
*
* @param {Wb_Field_Cron_Expr_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_cron_expr_placeholder = /** @type {((inputs?: Wb_Field_Cron_Expr_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Cron_Expr_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_cron_expr_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_cron_expr_placeholder(inputs)
	if (locale === "es") return es_wb_field_cron_expr_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_cron_expr_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_cron_expr_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_cron_expr_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_cron_expr_placeholder(inputs)
	return fr_wb_field_cron_expr_placeholder(inputs)
});