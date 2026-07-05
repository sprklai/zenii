/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Search_Query_PlaceholderInputs */

const en_wb_field_search_query_placeholder = /** @type {(inputs: Wb_Field_Search_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search query`)
};

const zh_cn2_wb_field_search_query_placeholder = /** @type {(inputs: Wb_Field_Search_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索查询`)
};

const es_wb_field_search_query_placeholder = /** @type {(inputs: Wb_Field_Search_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consulta de búsqueda`)
};

const ja_wb_field_search_query_placeholder = /** @type {(inputs: Wb_Field_Search_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索クエリ`)
};

const hi_wb_field_search_query_placeholder = /** @type {(inputs: Wb_Field_Search_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`खोज क्वेरी`)
};

const pt_br2_wb_field_search_query_placeholder = /** @type {(inputs: Wb_Field_Search_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consulta de pesquisa`)
};

const ko_wb_field_search_query_placeholder = /** @type {(inputs: Wb_Field_Search_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`검색 쿼리`)
};

const fr_wb_field_search_query_placeholder = /** @type {(inputs: Wb_Field_Search_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requête de recherche`)
};

/**
* | output |
* | --- |
* | "Search query" |
*
* @param {Wb_Field_Search_Query_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_search_query_placeholder = /** @type {((inputs?: Wb_Field_Search_Query_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Search_Query_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_search_query_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_search_query_placeholder(inputs)
	if (locale === "es") return es_wb_field_search_query_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_search_query_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_search_query_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_search_query_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_search_query_placeholder(inputs)
	return fr_wb_field_search_query_placeholder(inputs)
});