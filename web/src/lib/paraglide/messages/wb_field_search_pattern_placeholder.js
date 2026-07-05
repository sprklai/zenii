/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Search_Pattern_PlaceholderInputs */

const en_wb_field_search_pattern_placeholder = /** @type {(inputs: Wb_Field_Search_Pattern_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Glob or regex pattern`)
};

const zh_cn2_wb_field_search_pattern_placeholder = /** @type {(inputs: Wb_Field_Search_Pattern_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`glob 或 regex 模式`)
};

const es_wb_field_search_pattern_placeholder = /** @type {(inputs: Wb_Field_Search_Pattern_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patrón glob o regex`)
};

const ja_wb_field_search_pattern_placeholder = /** @type {(inputs: Wb_Field_Search_Pattern_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`glob または regex パターン`)
};

const hi_wb_field_search_pattern_placeholder = /** @type {(inputs: Wb_Field_Search_Pattern_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`glob या regex पैटर्न`)
};

const pt_br2_wb_field_search_pattern_placeholder = /** @type {(inputs: Wb_Field_Search_Pattern_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Padrão glob ou regex`)
};

const ko_wb_field_search_pattern_placeholder = /** @type {(inputs: Wb_Field_Search_Pattern_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`glob 또는 regex 패턴`)
};

const fr_wb_field_search_pattern_placeholder = /** @type {(inputs: Wb_Field_Search_Pattern_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motif glob ou regex`)
};

/**
* | output |
* | --- |
* | "Glob or regex pattern" |
*
* @param {Wb_Field_Search_Pattern_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_search_pattern_placeholder = /** @type {((inputs?: Wb_Field_Search_Pattern_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Search_Pattern_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_search_pattern_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_search_pattern_placeholder(inputs)
	if (locale === "es") return es_wb_field_search_pattern_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_search_pattern_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_search_pattern_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_search_pattern_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_search_pattern_placeholder(inputs)
	return fr_wb_field_search_pattern_placeholder(inputs)
});