/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Memory_Add_ErrorInputs */

const en_memory_add_error = /** @type {(inputs: Memory_Add_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to add memory`)
};

const zh_cn2_memory_add_error = /** @type {(inputs: Memory_Add_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加记忆失败`)
};

const es_memory_add_error = /** @type {(inputs: Memory_Add_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error al añadir memoria`)
};

const ja_memory_add_error = /** @type {(inputs: Memory_Add_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモリの追加に失敗しました`)
};

const hi_memory_add_error = /** @type {(inputs: Memory_Add_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मेमोरी जोड़ने में विफल`)
};

const pt_br2_memory_add_error = /** @type {(inputs: Memory_Add_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha ao adicionar memória`)
};

const ko_memory_add_error = /** @type {(inputs: Memory_Add_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메모리 추가 실패`)
};

const fr_memory_add_error = /** @type {(inputs: Memory_Add_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de l'ajout de la mémoire`)
};

/**
* | output |
* | --- |
* | "Failed to add memory" |
*
* @param {Memory_Add_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const memory_add_error = /** @type {((inputs?: Memory_Add_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Memory_Add_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_memory_add_error(inputs)
	if (locale === "zh-CN") return zh_cn2_memory_add_error(inputs)
	if (locale === "es") return es_memory_add_error(inputs)
	if (locale === "ja") return ja_memory_add_error(inputs)
	if (locale === "hi") return hi_memory_add_error(inputs)
	if (locale === "pt-BR") return pt_br2_memory_add_error(inputs)
	if (locale === "ko") return ko_memory_add_error(inputs)
	return fr_memory_add_error(inputs)
});