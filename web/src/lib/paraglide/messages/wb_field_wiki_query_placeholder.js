/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Wiki_Query_PlaceholderInputs */

const en_wb_field_wiki_query_placeholder = /** @type {(inputs: Wb_Field_Wiki_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search keywords...`)
};

const zh_cn2_wb_field_wiki_query_placeholder = /** @type {(inputs: Wb_Field_Wiki_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索关键词...`)
};

const es_wb_field_wiki_query_placeholder = /** @type {(inputs: Wb_Field_Wiki_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Palabras clave...`)
};

const ja_wb_field_wiki_query_placeholder = /** @type {(inputs: Wb_Field_Wiki_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キーワードを入力...`)
};

const hi_wb_field_wiki_query_placeholder = /** @type {(inputs: Wb_Field_Wiki_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कीवर्ड खोजें...`)
};

const pt_br2_wb_field_wiki_query_placeholder = /** @type {(inputs: Wb_Field_Wiki_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Palavras-chave...`)
};

const ko_wb_field_wiki_query_placeholder = /** @type {(inputs: Wb_Field_Wiki_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`키워드 검색...`)
};

const fr_wb_field_wiki_query_placeholder = /** @type {(inputs: Wb_Field_Wiki_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mots-clés...`)
};

/**
* | output |
* | --- |
* | "Search keywords..." |
*
* @param {Wb_Field_Wiki_Query_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_wiki_query_placeholder = /** @type {((inputs?: Wb_Field_Wiki_Query_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Wiki_Query_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_wiki_query_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_wiki_query_placeholder(inputs)
	if (locale === "es") return es_wb_field_wiki_query_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_wiki_query_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_wiki_query_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_wiki_query_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_wiki_query_placeholder(inputs)
	return fr_wb_field_wiki_query_placeholder(inputs)
});