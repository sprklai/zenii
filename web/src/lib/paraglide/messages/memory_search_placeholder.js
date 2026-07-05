/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Memory_Search_PlaceholderInputs */

const en_memory_search_placeholder = /** @type {(inputs: Memory_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search memories...`)
};

const zh_cn2_memory_search_placeholder = /** @type {(inputs: Memory_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索记忆...`)
};

const es_memory_search_placeholder = /** @type {(inputs: Memory_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar memorias...`)
};

const ja_memory_search_placeholder = /** @type {(inputs: Memory_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモリを検索...`)
};

const hi_memory_search_placeholder = /** @type {(inputs: Memory_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मेमोरी खोजें...`)
};

const pt_br2_memory_search_placeholder = /** @type {(inputs: Memory_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisar memórias...`)
};

const ko_memory_search_placeholder = /** @type {(inputs: Memory_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메모리 검색...`)
};

const fr_memory_search_placeholder = /** @type {(inputs: Memory_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher dans les mémoires...`)
};

/**
* | output |
* | --- |
* | "Search memories..." |
*
* @param {Memory_Search_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const memory_search_placeholder = /** @type {((inputs?: Memory_Search_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Memory_Search_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_memory_search_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_memory_search_placeholder(inputs)
	if (locale === "es") return es_memory_search_placeholder(inputs)
	if (locale === "ja") return ja_memory_search_placeholder(inputs)
	if (locale === "hi") return hi_memory_search_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_memory_search_placeholder(inputs)
	if (locale === "ko") return ko_memory_search_placeholder(inputs)
	return fr_memory_search_placeholder(inputs)
});