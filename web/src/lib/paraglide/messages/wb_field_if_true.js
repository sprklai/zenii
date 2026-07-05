/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_If_TrueInputs */

const en_wb_field_if_true = /** @type {(inputs: Wb_Field_If_TrueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If True`)
};

const zh_cn2_wb_field_if_true = /** @type {(inputs: Wb_Field_If_TrueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如果为真`)
};

const es_wb_field_if_true = /** @type {(inputs: Wb_Field_If_TrueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si verdadero`)
};

const ja_wb_field_if_true = /** @type {(inputs: Wb_Field_If_TrueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`真の場合`)
};

const hi_wb_field_if_true = /** @type {(inputs: Wb_Field_If_TrueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`यदि सत्य`)
};

const pt_br2_wb_field_if_true = /** @type {(inputs: Wb_Field_If_TrueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se verdadeiro`)
};

const ko_wb_field_if_true = /** @type {(inputs: Wb_Field_If_TrueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`참인 경우`)
};

const fr_wb_field_if_true = /** @type {(inputs: Wb_Field_If_TrueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si vrai`)
};

/**
* | output |
* | --- |
* | "If True" |
*
* @param {Wb_Field_If_TrueInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_if_true = /** @type {((inputs?: Wb_Field_If_TrueInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_If_TrueInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_if_true(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_if_true(inputs)
	if (locale === "es") return es_wb_field_if_true(inputs)
	if (locale === "ja") return ja_wb_field_if_true(inputs)
	if (locale === "hi") return hi_wb_field_if_true(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_if_true(inputs)
	if (locale === "ko") return ko_wb_field_if_true(inputs)
	return fr_wb_field_if_true(inputs)
});