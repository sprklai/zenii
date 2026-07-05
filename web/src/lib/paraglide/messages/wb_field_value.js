/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_ValueInputs */

const en_wb_field_value = /** @type {(inputs: Wb_Field_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Value`)
};

const zh_cn2_wb_field_value = /** @type {(inputs: Wb_Field_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`值`)
};

const es_wb_field_value = /** @type {(inputs: Wb_Field_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valor`)
};

const ja_wb_field_value = /** @type {(inputs: Wb_Field_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`値`)
};

const hi_wb_field_value = /** @type {(inputs: Wb_Field_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मान`)
};

const pt_br2_wb_field_value = /** @type {(inputs: Wb_Field_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valor`)
};

const ko_wb_field_value = /** @type {(inputs: Wb_Field_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`값`)
};

const fr_wb_field_value = /** @type {(inputs: Wb_Field_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valeur`)
};

/**
* | output |
* | --- |
* | "Value" |
*
* @param {Wb_Field_ValueInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_value = /** @type {((inputs?: Wb_Field_ValueInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_ValueInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_value(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_value(inputs)
	if (locale === "es") return es_wb_field_value(inputs)
	if (locale === "ja") return ja_wb_field_value(inputs)
	if (locale === "hi") return hi_wb_field_value(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_value(inputs)
	if (locale === "ko") return ko_wb_field_value(inputs)
	return fr_wb_field_value(inputs)
});