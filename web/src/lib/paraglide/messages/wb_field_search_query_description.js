/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Search_Query_DescriptionInputs */

const en_wb_field_search_query_description = /** @type {(inputs: Wb_Field_Search_Query_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The search query string`)
};

const zh_cn2_wb_field_search_query_description = /** @type {(inputs: Wb_Field_Search_Query_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索查询字符串`)
};

const es_wb_field_search_query_description = /** @type {(inputs: Wb_Field_Search_Query_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La cadena de consulta de búsqueda`)
};

const ja_wb_field_search_query_description = /** @type {(inputs: Wb_Field_Search_Query_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索クエリ文字列`)
};

const hi_wb_field_search_query_description = /** @type {(inputs: Wb_Field_Search_Query_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`खोज क्वेरी स्ट्रिंग`)
};

const pt_br2_wb_field_search_query_description = /** @type {(inputs: Wb_Field_Search_Query_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A string de consulta de pesquisa`)
};

const ko_wb_field_search_query_description = /** @type {(inputs: Wb_Field_Search_Query_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`검색 쿼리 문자열`)
};

const fr_wb_field_search_query_description = /** @type {(inputs: Wb_Field_Search_Query_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La chaîne de requête de recherche`)
};

/**
* | output |
* | --- |
* | "The search query string" |
*
* @param {Wb_Field_Search_Query_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_search_query_description = /** @type {((inputs?: Wb_Field_Search_Query_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Search_Query_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_search_query_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_search_query_description(inputs)
	if (locale === "es") return es_wb_field_search_query_description(inputs)
	if (locale === "ja") return ja_wb_field_search_query_description(inputs)
	if (locale === "hi") return hi_wb_field_search_query_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_search_query_description(inputs)
	if (locale === "ko") return ko_wb_field_search_query_description(inputs)
	return fr_wb_field_search_query_description(inputs)
});