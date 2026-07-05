/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Wiki_Query_DescriptionInputs */

const en_wb_field_wiki_query_description = /** @type {(inputs: Wb_Field_Wiki_Query_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keyword search query (for search action)`)
};

const zh_cn2_wb_field_wiki_query_description = /** @type {(inputs: Wb_Field_Wiki_Query_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关键词搜索查询（用于搜索操作）`)
};

const es_wb_field_wiki_query_description = /** @type {(inputs: Wb_Field_Wiki_Query_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consulta de búsqueda por palabras clave (para acción de búsqueda)`)
};

const ja_wb_field_wiki_query_description = /** @type {(inputs: Wb_Field_Wiki_Query_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キーワード検索クエリ（検索アクション用）`)
};

const hi_wb_field_wiki_query_description = /** @type {(inputs: Wb_Field_Wiki_Query_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कीवर्ड खोज क्वेरी (खोज क्रिया के लिए)`)
};

const pt_br2_wb_field_wiki_query_description = /** @type {(inputs: Wb_Field_Wiki_Query_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consulta de pesquisa por palavras-chave (para ação de pesquisa)`)
};

const ko_wb_field_wiki_query_description = /** @type {(inputs: Wb_Field_Wiki_Query_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`키워드 검색 쿼리 (검색 작업용)`)
};

const fr_wb_field_wiki_query_description = /** @type {(inputs: Wb_Field_Wiki_Query_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requête de recherche par mots-clés (pour l'action de recherche)`)
};

/**
* | output |
* | --- |
* | "Keyword search query (for search action)" |
*
* @param {Wb_Field_Wiki_Query_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_wiki_query_description = /** @type {((inputs?: Wb_Field_Wiki_Query_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Wiki_Query_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_wiki_query_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_wiki_query_description(inputs)
	if (locale === "es") return es_wb_field_wiki_query_description(inputs)
	if (locale === "ja") return ja_wb_field_wiki_query_description(inputs)
	if (locale === "hi") return hi_wb_field_wiki_query_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_wiki_query_description(inputs)
	if (locale === "ko") return ko_wb_field_wiki_query_description(inputs)
	return fr_wb_field_wiki_query_description(inputs)
});