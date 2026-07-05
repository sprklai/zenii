/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Memory_Delete_Confirm_TitleInputs */

const en_memory_delete_confirm_title = /** @type {(inputs: Memory_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete memory?`)
};

const zh_cn2_memory_delete_confirm_title = /** @type {(inputs: Memory_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除记忆？`)
};

const es_memory_delete_confirm_title = /** @type {(inputs: Memory_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Eliminar memoria?`)
};

const ja_memory_delete_confirm_title = /** @type {(inputs: Memory_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモリを削除しますか？`)
};

const hi_memory_delete_confirm_title = /** @type {(inputs: Memory_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मेमोरी हटाएँ?`)
};

const pt_br2_memory_delete_confirm_title = /** @type {(inputs: Memory_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir memória?`)
};

const ko_memory_delete_confirm_title = /** @type {(inputs: Memory_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메모리를 삭제할까요?`)
};

const fr_memory_delete_confirm_title = /** @type {(inputs: Memory_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer la mémoire ?`)
};

/**
* | output |
* | --- |
* | "Delete memory?" |
*
* @param {Memory_Delete_Confirm_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const memory_delete_confirm_title = /** @type {((inputs?: Memory_Delete_Confirm_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Memory_Delete_Confirm_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_memory_delete_confirm_title(inputs)
	if (locale === "zh-CN") return zh_cn2_memory_delete_confirm_title(inputs)
	if (locale === "es") return es_memory_delete_confirm_title(inputs)
	if (locale === "ja") return ja_memory_delete_confirm_title(inputs)
	if (locale === "hi") return hi_memory_delete_confirm_title(inputs)
	if (locale === "pt-BR") return pt_br2_memory_delete_confirm_title(inputs)
	if (locale === "ko") return ko_memory_delete_confirm_title(inputs)
	return fr_memory_delete_confirm_title(inputs)
});