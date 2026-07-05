/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Tab_QueriesInputs */

const en_wiki_tab_queries = /** @type {(inputs: Wiki_Tab_QueriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Queries`)
};

const zh_cn2_wiki_tab_queries = /** @type {(inputs: Wiki_Tab_QueriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查询`)
};

const es_wiki_tab_queries = /** @type {(inputs: Wiki_Tab_QueriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consultas`)
};

const ja_wiki_tab_queries = /** @type {(inputs: Wiki_Tab_QueriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クエリ`)
};

const hi_wiki_tab_queries = /** @type {(inputs: Wiki_Tab_QueriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रश्न`)
};

const pt_br2_wiki_tab_queries = /** @type {(inputs: Wiki_Tab_QueriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consultas`)
};

const ko_wiki_tab_queries = /** @type {(inputs: Wiki_Tab_QueriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`쿼리`)
};

const fr_wiki_tab_queries = /** @type {(inputs: Wiki_Tab_QueriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requêtes`)
};

/**
* | output |
* | --- |
* | "Queries" |
*
* @param {Wiki_Tab_QueriesInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_tab_queries = /** @type {((inputs?: Wiki_Tab_QueriesInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Tab_QueriesInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_tab_queries(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_tab_queries(inputs)
	if (locale === "es") return es_wiki_tab_queries(inputs)
	if (locale === "ja") return ja_wiki_tab_queries(inputs)
	if (locale === "hi") return hi_wiki_tab_queries(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_tab_queries(inputs)
	if (locale === "ko") return ko_wiki_tab_queries(inputs)
	return fr_wiki_tab_queries(inputs)
});