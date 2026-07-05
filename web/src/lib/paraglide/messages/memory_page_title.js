/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Memory_Page_TitleInputs */

const en_memory_page_title = /** @type {(inputs: Memory_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Memory`)
};

const zh_cn2_memory_page_title = /** @type {(inputs: Memory_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`记忆`)
};

const es_memory_page_title = /** @type {(inputs: Memory_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Memoria`)
};

const ja_memory_page_title = /** @type {(inputs: Memory_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモリ`)
};

const hi_memory_page_title = /** @type {(inputs: Memory_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मेमोरी`)
};

const pt_br2_memory_page_title = /** @type {(inputs: Memory_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Memória`)
};

const ko_memory_page_title = /** @type {(inputs: Memory_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메모리`)
};

const fr_memory_page_title = /** @type {(inputs: Memory_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mémoire`)
};

/**
* | output |
* | --- |
* | "Memory" |
*
* @param {Memory_Page_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const memory_page_title = /** @type {((inputs?: Memory_Page_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Memory_Page_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_memory_page_title(inputs)
	if (locale === "zh-CN") return zh_cn2_memory_page_title(inputs)
	if (locale === "es") return es_memory_page_title(inputs)
	if (locale === "ja") return ja_memory_page_title(inputs)
	if (locale === "hi") return hi_memory_page_title(inputs)
	if (locale === "pt-BR") return pt_br2_memory_page_title(inputs)
	if (locale === "ko") return ko_memory_page_title(inputs)
	return fr_memory_page_title(inputs)
});