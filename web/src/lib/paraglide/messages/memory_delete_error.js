/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Memory_Delete_ErrorInputs */

const en_memory_delete_error = /** @type {(inputs: Memory_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to delete memory`)
};

const zh_cn2_memory_delete_error = /** @type {(inputs: Memory_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除记忆失败`)
};

const es_memory_delete_error = /** @type {(inputs: Memory_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error al eliminar memoria`)
};

const ja_memory_delete_error = /** @type {(inputs: Memory_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモリの削除に失敗しました`)
};

const hi_memory_delete_error = /** @type {(inputs: Memory_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मेमोरी हटाने में विफल`)
};

const pt_br2_memory_delete_error = /** @type {(inputs: Memory_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha ao excluir memória`)
};

const ko_memory_delete_error = /** @type {(inputs: Memory_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메모리 삭제 실패`)
};

const fr_memory_delete_error = /** @type {(inputs: Memory_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de la suppression de la mémoire`)
};

/**
* | output |
* | --- |
* | "Failed to delete memory" |
*
* @param {Memory_Delete_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const memory_delete_error = /** @type {((inputs?: Memory_Delete_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Memory_Delete_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_memory_delete_error(inputs)
	if (locale === "zh-CN") return zh_cn2_memory_delete_error(inputs)
	if (locale === "es") return es_memory_delete_error(inputs)
	if (locale === "ja") return ja_memory_delete_error(inputs)
	if (locale === "hi") return hi_memory_delete_error(inputs)
	if (locale === "pt-BR") return pt_br2_memory_delete_error(inputs)
	if (locale === "ko") return ko_memory_delete_error(inputs)
	return fr_memory_delete_error(inputs)
});