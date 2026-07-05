/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Pattern_LabelInputs */

const en_wb_field_pattern_label = /** @type {(inputs: Wb_Field_Pattern_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pattern`)
};

const zh_cn2_wb_field_pattern_label = /** @type {(inputs: Wb_Field_Pattern_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模式`)
};

const es_wb_field_pattern_label = /** @type {(inputs: Wb_Field_Pattern_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patrón`)
};

const ja_wb_field_pattern_label = /** @type {(inputs: Wb_Field_Pattern_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パターン`)
};

const hi_wb_field_pattern_label = /** @type {(inputs: Wb_Field_Pattern_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पैटर्न`)
};

const pt_br2_wb_field_pattern_label = /** @type {(inputs: Wb_Field_Pattern_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Padrão`)
};

const ko_wb_field_pattern_label = /** @type {(inputs: Wb_Field_Pattern_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`패턴`)
};

const fr_wb_field_pattern_label = /** @type {(inputs: Wb_Field_Pattern_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motif`)
};

/**
* | output |
* | --- |
* | "Pattern" |
*
* @param {Wb_Field_Pattern_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_pattern_label = /** @type {((inputs?: Wb_Field_Pattern_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Pattern_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_pattern_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_pattern_label(inputs)
	if (locale === "es") return es_wb_field_pattern_label(inputs)
	if (locale === "ja") return ja_wb_field_pattern_label(inputs)
	if (locale === "hi") return hi_wb_field_pattern_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_pattern_label(inputs)
	if (locale === "ko") return ko_wb_field_pattern_label(inputs)
	return fr_wb_field_pattern_label(inputs)
});