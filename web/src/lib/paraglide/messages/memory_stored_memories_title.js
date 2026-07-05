/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Memory_Stored_Memories_TitleInputs */

const en_memory_stored_memories_title = /** @type {(inputs: Memory_Stored_Memories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stored Memories`)
};

const zh_cn2_memory_stored_memories_title = /** @type {(inputs: Memory_Stored_Memories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已存储的记忆`)
};

const es_memory_stored_memories_title = /** @type {(inputs: Memory_Stored_Memories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Memorias almacenadas`)
};

const ja_memory_stored_memories_title = /** @type {(inputs: Memory_Stored_Memories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存済みメモリ`)
};

const hi_memory_stored_memories_title = /** @type {(inputs: Memory_Stored_Memories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सहेजी गई मेमोरी`)
};

const pt_br2_memory_stored_memories_title = /** @type {(inputs: Memory_Stored_Memories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Memórias Armazenadas`)
};

const ko_memory_stored_memories_title = /** @type {(inputs: Memory_Stored_Memories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`저장된 메모리`)
};

const fr_memory_stored_memories_title = /** @type {(inputs: Memory_Stored_Memories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mémoires enregistrées`)
};

/**
* | output |
* | --- |
* | "Stored Memories" |
*
* @param {Memory_Stored_Memories_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const memory_stored_memories_title = /** @type {((inputs?: Memory_Stored_Memories_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Memory_Stored_Memories_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_memory_stored_memories_title(inputs)
	if (locale === "zh-CN") return zh_cn2_memory_stored_memories_title(inputs)
	if (locale === "es") return es_memory_stored_memories_title(inputs)
	if (locale === "ja") return ja_memory_stored_memories_title(inputs)
	if (locale === "hi") return hi_memory_stored_memories_title(inputs)
	if (locale === "pt-BR") return pt_br2_memory_stored_memories_title(inputs)
	if (locale === "ko") return ko_memory_stored_memories_title(inputs)
	return fr_memory_stored_memories_title(inputs)
});