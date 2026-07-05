/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Search_PlaceholderInputs */

const en_wiki_search_placeholder = /** @type {(inputs: Wiki_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search wiki...`)
};

const zh_cn2_wiki_search_placeholder = /** @type {(inputs: Wiki_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索维基...`)
};

const es_wiki_search_placeholder = /** @type {(inputs: Wiki_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar en wiki...`)
};

const ja_wiki_search_placeholder = /** @type {(inputs: Wiki_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ウィキを検索...`)
};

const hi_wiki_search_placeholder = /** @type {(inputs: Wiki_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`विकि खोजें...`)
};

const pt_br2_wiki_search_placeholder = /** @type {(inputs: Wiki_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisar no wiki...`)
};

const ko_wiki_search_placeholder = /** @type {(inputs: Wiki_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`위키 검색...`)
};

const fr_wiki_search_placeholder = /** @type {(inputs: Wiki_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher dans le wiki...`)
};

/**
* | output |
* | --- |
* | "Search wiki..." |
*
* @param {Wiki_Search_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_search_placeholder = /** @type {((inputs?: Wiki_Search_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Search_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_search_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_search_placeholder(inputs)
	if (locale === "es") return es_wiki_search_placeholder(inputs)
	if (locale === "ja") return ja_wiki_search_placeholder(inputs)
	if (locale === "hi") return hi_wiki_search_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_search_placeholder(inputs)
	if (locale === "ko") return ko_wiki_search_placeholder(inputs)
	return fr_wiki_search_placeholder(inputs)
});