/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Nav_MemoryInputs */

const en_nav_memory = /** @type {(inputs: Nav_MemoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Memory`)
};

const zh_cn2_nav_memory = /** @type {(inputs: Nav_MemoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`记忆`)
};

const es_nav_memory = /** @type {(inputs: Nav_MemoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Memoria`)
};

const ja_nav_memory = /** @type {(inputs: Nav_MemoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモリ`)
};

const hi_nav_memory = /** @type {(inputs: Nav_MemoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मेमोरी`)
};

const pt_br2_nav_memory = /** @type {(inputs: Nav_MemoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Memória`)
};

const ko_nav_memory = /** @type {(inputs: Nav_MemoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메모리`)
};

const fr_nav_memory = /** @type {(inputs: Nav_MemoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mémoire`)
};

/**
* | output |
* | --- |
* | "Memory" |
*
* @param {Nav_MemoryInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const nav_memory = /** @type {((inputs?: Nav_MemoryInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_MemoryInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_nav_memory(inputs)
	if (locale === "zh-CN") return zh_cn2_nav_memory(inputs)
	if (locale === "es") return es_nav_memory(inputs)
	if (locale === "ja") return ja_nav_memory(inputs)
	if (locale === "hi") return hi_nav_memory(inputs)
	if (locale === "pt-BR") return pt_br2_nav_memory(inputs)
	if (locale === "ko") return ko_nav_memory(inputs)
	return fr_nav_memory(inputs)
});