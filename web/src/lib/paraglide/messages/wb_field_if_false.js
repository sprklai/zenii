/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_If_FalseInputs */

const en_wb_field_if_false = /** @type {(inputs: Wb_Field_If_FalseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If False`)
};

const zh_cn2_wb_field_if_false = /** @type {(inputs: Wb_Field_If_FalseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如果为假`)
};

const es_wb_field_if_false = /** @type {(inputs: Wb_Field_If_FalseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si falso`)
};

const ja_wb_field_if_false = /** @type {(inputs: Wb_Field_If_FalseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`偽の場合`)
};

const hi_wb_field_if_false = /** @type {(inputs: Wb_Field_If_FalseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`यदि असत्य`)
};

const pt_br2_wb_field_if_false = /** @type {(inputs: Wb_Field_If_FalseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se falso`)
};

const ko_wb_field_if_false = /** @type {(inputs: Wb_Field_If_FalseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`거짓인 경우`)
};

const fr_wb_field_if_false = /** @type {(inputs: Wb_Field_If_FalseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si faux`)
};

/**
* | output |
* | --- |
* | "If False" |
*
* @param {Wb_Field_If_FalseInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_if_false = /** @type {((inputs?: Wb_Field_If_FalseInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_If_FalseInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_if_false(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_if_false(inputs)
	if (locale === "es") return es_wb_field_if_false(inputs)
	if (locale === "ja") return ja_wb_field_if_false(inputs)
	if (locale === "hi") return hi_wb_field_if_false(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_if_false(inputs)
	if (locale === "ko") return ko_wb_field_if_false(inputs)
	return fr_wb_field_if_false(inputs)
});