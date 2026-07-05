/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Memory_Update_ErrorInputs */

const en_memory_update_error = /** @type {(inputs: Memory_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to update memory`)
};

const zh_cn2_memory_update_error = /** @type {(inputs: Memory_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新记忆失败`)
};

const es_memory_update_error = /** @type {(inputs: Memory_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error al actualizar memoria`)
};

const ja_memory_update_error = /** @type {(inputs: Memory_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモリの更新に失敗しました`)
};

const hi_memory_update_error = /** @type {(inputs: Memory_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मेमोरी अपडेट करने में विफल`)
};

const pt_br2_memory_update_error = /** @type {(inputs: Memory_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha ao atualizar memória`)
};

const ko_memory_update_error = /** @type {(inputs: Memory_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메모리 업데이트 실패`)
};

const fr_memory_update_error = /** @type {(inputs: Memory_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de la mise à jour de la mémoire`)
};

/**
* | output |
* | --- |
* | "Failed to update memory" |
*
* @param {Memory_Update_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const memory_update_error = /** @type {((inputs?: Memory_Update_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Memory_Update_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_memory_update_error(inputs)
	if (locale === "zh-CN") return zh_cn2_memory_update_error(inputs)
	if (locale === "es") return es_memory_update_error(inputs)
	if (locale === "ja") return ja_memory_update_error(inputs)
	if (locale === "hi") return hi_memory_update_error(inputs)
	if (locale === "pt-BR") return pt_br2_memory_update_error(inputs)
	if (locale === "ko") return ko_memory_update_error(inputs)
	return fr_memory_update_error(inputs)
});