/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Memory_Key_PlaceholderInputs */

const en_memory_key_placeholder = /** @type {(inputs: Memory_Key_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Key`)
};

const zh_cn2_memory_key_placeholder = /** @type {(inputs: Memory_Key_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`键`)
};

const es_memory_key_placeholder = /** @type {(inputs: Memory_Key_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clave`)
};

const ja_memory_key_placeholder = /** @type {(inputs: Memory_Key_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キー`)
};

const hi_memory_key_placeholder = /** @type {(inputs: Memory_Key_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कुंजी`)
};

const pt_br2_memory_key_placeholder = /** @type {(inputs: Memory_Key_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chave`)
};

const ko_memory_key_placeholder = /** @type {(inputs: Memory_Key_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`키`)
};

const fr_memory_key_placeholder = /** @type {(inputs: Memory_Key_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clé`)
};

/**
* | output |
* | --- |
* | "Key" |
*
* @param {Memory_Key_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const memory_key_placeholder = /** @type {((inputs?: Memory_Key_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Memory_Key_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_memory_key_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_memory_key_placeholder(inputs)
	if (locale === "es") return es_memory_key_placeholder(inputs)
	if (locale === "ja") return ja_memory_key_placeholder(inputs)
	if (locale === "hi") return hi_memory_key_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_memory_key_placeholder(inputs)
	if (locale === "ko") return ko_memory_key_placeholder(inputs)
	return fr_memory_key_placeholder(inputs)
});