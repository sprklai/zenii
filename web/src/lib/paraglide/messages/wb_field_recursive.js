/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_RecursiveInputs */

const en_wb_field_recursive = /** @type {(inputs: Wb_Field_RecursiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recursive`)
};

const zh_cn2_wb_field_recursive = /** @type {(inputs: Wb_Field_RecursiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`递归`)
};

const es_wb_field_recursive = /** @type {(inputs: Wb_Field_RecursiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recursivo`)
};

const ja_wb_field_recursive = /** @type {(inputs: Wb_Field_RecursiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再帰的`)
};

const hi_wb_field_recursive = /** @type {(inputs: Wb_Field_RecursiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पुनरावर्ती`)
};

const pt_br2_wb_field_recursive = /** @type {(inputs: Wb_Field_RecursiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recursivo`)
};

const ko_wb_field_recursive = /** @type {(inputs: Wb_Field_RecursiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`재귀적`)
};

const fr_wb_field_recursive = /** @type {(inputs: Wb_Field_RecursiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Récursif`)
};

/**
* | output |
* | --- |
* | "Recursive" |
*
* @param {Wb_Field_RecursiveInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_recursive = /** @type {((inputs?: Wb_Field_RecursiveInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_RecursiveInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_recursive(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_recursive(inputs)
	if (locale === "es") return es_wb_field_recursive(inputs)
	if (locale === "ja") return ja_wb_field_recursive(inputs)
	if (locale === "hi") return hi_wb_field_recursive(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_recursive(inputs)
	if (locale === "ko") return ko_wb_field_recursive(inputs)
	return fr_wb_field_recursive(inputs)
});