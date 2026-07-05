/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Memory_Content_PlaceholderInputs */

const en_memory_content_placeholder = /** @type {(inputs: Memory_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Content`)
};

const zh_cn2_memory_content_placeholder = /** @type {(inputs: Memory_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内容`)
};

const es_memory_content_placeholder = /** @type {(inputs: Memory_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenido`)
};

const ja_memory_content_placeholder = /** @type {(inputs: Memory_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内容`)
};

const hi_memory_content_placeholder = /** @type {(inputs: Memory_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सामग्री`)
};

const pt_br2_memory_content_placeholder = /** @type {(inputs: Memory_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conteúdo`)
};

const ko_memory_content_placeholder = /** @type {(inputs: Memory_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`내용`)
};

const fr_memory_content_placeholder = /** @type {(inputs: Memory_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenu`)
};

/**
* | output |
* | --- |
* | "Content" |
*
* @param {Memory_Content_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const memory_content_placeholder = /** @type {((inputs?: Memory_Content_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Memory_Content_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_memory_content_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_memory_content_placeholder(inputs)
	if (locale === "es") return es_memory_content_placeholder(inputs)
	if (locale === "ja") return ja_memory_content_placeholder(inputs)
	if (locale === "hi") return hi_memory_content_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_memory_content_placeholder(inputs)
	if (locale === "ko") return ko_memory_content_placeholder(inputs)
	return fr_memory_content_placeholder(inputs)
});