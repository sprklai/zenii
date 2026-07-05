/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Original_LabelInputs */

const en_wb_field_original_label = /** @type {(inputs: Wb_Field_Original_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Original Text`)
};

const zh_cn2_wb_field_original_label = /** @type {(inputs: Wb_Field_Original_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原始文本`)
};

const es_wb_field_original_label = /** @type {(inputs: Wb_Field_Original_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texto original`)
};

const ja_wb_field_original_label = /** @type {(inputs: Wb_Field_Original_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`元のテキスト`)
};

const hi_wb_field_original_label = /** @type {(inputs: Wb_Field_Original_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मूल टेक्स्ट`)
};

const pt_br2_wb_field_original_label = /** @type {(inputs: Wb_Field_Original_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texto Original`)
};

const ko_wb_field_original_label = /** @type {(inputs: Wb_Field_Original_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`원본 텍스트`)
};

const fr_wb_field_original_label = /** @type {(inputs: Wb_Field_Original_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texte original`)
};

/**
* | output |
* | --- |
* | "Original Text" |
*
* @param {Wb_Field_Original_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_original_label = /** @type {((inputs?: Wb_Field_Original_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Original_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_original_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_original_label(inputs)
	if (locale === "es") return es_wb_field_original_label(inputs)
	if (locale === "ja") return ja_wb_field_original_label(inputs)
	if (locale === "hi") return hi_wb_field_original_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_original_label(inputs)
	if (locale === "ko") return ko_wb_field_original_label(inputs)
	return fr_wb_field_original_label(inputs)
});