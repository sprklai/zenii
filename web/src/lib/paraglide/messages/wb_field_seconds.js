/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_SecondsInputs */

const en_wb_field_seconds = /** @type {(inputs: Wb_Field_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seconds`)
};

const zh_cn2_wb_field_seconds = /** @type {(inputs: Wb_Field_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`秒`)
};

const es_wb_field_seconds = /** @type {(inputs: Wb_Field_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segundos`)
};

const ja_wb_field_seconds = /** @type {(inputs: Wb_Field_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`秒`)
};

const hi_wb_field_seconds = /** @type {(inputs: Wb_Field_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सेकंड`)
};

const pt_br2_wb_field_seconds = /** @type {(inputs: Wb_Field_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segundos`)
};

const ko_wb_field_seconds = /** @type {(inputs: Wb_Field_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`초`)
};

const fr_wb_field_seconds = /** @type {(inputs: Wb_Field_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Secondes`)
};

/**
* | output |
* | --- |
* | "Seconds" |
*
* @param {Wb_Field_SecondsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_seconds = /** @type {((inputs?: Wb_Field_SecondsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_SecondsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_seconds(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_seconds(inputs)
	if (locale === "es") return es_wb_field_seconds(inputs)
	if (locale === "ja") return ja_wb_field_seconds(inputs)
	if (locale === "hi") return hi_wb_field_seconds(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_seconds(inputs)
	if (locale === "ko") return ko_wb_field_seconds(inputs)
	return fr_wb_field_seconds(inputs)
});