/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_LimitInputs */

const en_wb_field_limit = /** @type {(inputs: Wb_Field_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limit`)
};

const zh_cn2_wb_field_limit = /** @type {(inputs: Wb_Field_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`限制`)
};

const es_wb_field_limit = /** @type {(inputs: Wb_Field_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Límite`)
};

const ja_wb_field_limit = /** @type {(inputs: Wb_Field_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上限`)
};

const hi_wb_field_limit = /** @type {(inputs: Wb_Field_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सीमा`)
};

const pt_br2_wb_field_limit = /** @type {(inputs: Wb_Field_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limite`)
};

const ko_wb_field_limit = /** @type {(inputs: Wb_Field_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`제한`)
};

const fr_wb_field_limit = /** @type {(inputs: Wb_Field_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limite`)
};

/**
* | output |
* | --- |
* | "Limit" |
*
* @param {Wb_Field_LimitInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_limit = /** @type {((inputs?: Wb_Field_LimitInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_LimitInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_limit(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_limit(inputs)
	if (locale === "es") return es_wb_field_limit(inputs)
	if (locale === "ja") return ja_wb_field_limit(inputs)
	if (locale === "hi") return hi_wb_field_limit(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_limit(inputs)
	if (locale === "ko") return ko_wb_field_limit(inputs)
	return fr_wb_field_limit(inputs)
});