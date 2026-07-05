/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_OriginalInputs */

const en_wb_field_original = /** @type {(inputs: Wb_Field_OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Original Text`)
};

const zh_cn2_wb_field_original = /** @type {(inputs: Wb_Field_OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原始文本`)
};

const es_wb_field_original = /** @type {(inputs: Wb_Field_OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texto original`)
};

const ja_wb_field_original = /** @type {(inputs: Wb_Field_OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`元のテキスト`)
};

const hi_wb_field_original = /** @type {(inputs: Wb_Field_OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मूल टेक्स्ट`)
};

const pt_br2_wb_field_original = /** @type {(inputs: Wb_Field_OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texto Original`)
};

const ko_wb_field_original = /** @type {(inputs: Wb_Field_OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`원본 텍스트`)
};

const fr_wb_field_original = /** @type {(inputs: Wb_Field_OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texte original`)
};

/**
* | output |
* | --- |
* | "Original Text" |
*
* @param {Wb_Field_OriginalInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_original = /** @type {((inputs?: Wb_Field_OriginalInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_OriginalInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_original(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_original(inputs)
	if (locale === "es") return es_wb_field_original(inputs)
	if (locale === "ja") return ja_wb_field_original(inputs)
	if (locale === "hi") return hi_wb_field_original(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_original(inputs)
	if (locale === "ko") return ko_wb_field_original(inputs)
	return fr_wb_field_original(inputs)
});