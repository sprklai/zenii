/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Search_Pattern_DescriptionInputs */

const en_wb_field_search_pattern_description = /** @type {(inputs: Wb_Field_Search_Pattern_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File search pattern (supports glob and regex)`)
};

const zh_cn2_wb_field_search_pattern_description = /** @type {(inputs: Wb_Field_Search_Pattern_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件搜索模式（支持 glob 和 regex）`)
};

const es_wb_field_search_pattern_description = /** @type {(inputs: Wb_Field_Search_Pattern_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patrón de búsqueda de archivos (admite glob y regex)`)
};

const ja_wb_field_search_pattern_description = /** @type {(inputs: Wb_Field_Search_Pattern_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイル検索パターン（glob と regex に対応）`)
};

const hi_wb_field_search_pattern_description = /** @type {(inputs: Wb_Field_Search_Pattern_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`फ़ाइल खोज पैटर्न (glob और regex समर्थित)`)
};

const pt_br2_wb_field_search_pattern_description = /** @type {(inputs: Wb_Field_Search_Pattern_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Padrão de pesquisa de arquivos (suporta glob e regex)`)
};

const ko_wb_field_search_pattern_description = /** @type {(inputs: Wb_Field_Search_Pattern_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`파일 검색 패턴（glob 및 regex 지원）`)
};

const fr_wb_field_search_pattern_description = /** @type {(inputs: Wb_Field_Search_Pattern_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motif de recherche de fichiers (supporte glob et regex)`)
};

/**
* | output |
* | --- |
* | "File search pattern (supports glob and regex)" |
*
* @param {Wb_Field_Search_Pattern_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_search_pattern_description = /** @type {((inputs?: Wb_Field_Search_Pattern_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Search_Pattern_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_search_pattern_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_search_pattern_description(inputs)
	if (locale === "es") return es_wb_field_search_pattern_description(inputs)
	if (locale === "ja") return ja_wb_field_search_pattern_description(inputs)
	if (locale === "hi") return hi_wb_field_search_pattern_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_search_pattern_description(inputs)
	if (locale === "ko") return ko_wb_field_search_pattern_description(inputs)
	return fr_wb_field_search_pattern_description(inputs)
});