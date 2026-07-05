/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Memory_Add_Dialog_TitleInputs */

const en_memory_add_dialog_title = /** @type {(inputs: Memory_Add_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add Memory`)
};

const zh_cn2_memory_add_dialog_title = /** @type {(inputs: Memory_Add_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加记忆`)
};

const es_memory_add_dialog_title = /** @type {(inputs: Memory_Add_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir memoria`)
};

const ja_memory_add_dialog_title = /** @type {(inputs: Memory_Add_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモリを追加`)
};

const hi_memory_add_dialog_title = /** @type {(inputs: Memory_Add_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मेमोरी जोड़ें`)
};

const pt_br2_memory_add_dialog_title = /** @type {(inputs: Memory_Add_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar Memória`)
};

const ko_memory_add_dialog_title = /** @type {(inputs: Memory_Add_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메모리 추가`)
};

const fr_memory_add_dialog_title = /** @type {(inputs: Memory_Add_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter une mémoire`)
};

/**
* | output |
* | --- |
* | "Add Memory" |
*
* @param {Memory_Add_Dialog_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const memory_add_dialog_title = /** @type {((inputs?: Memory_Add_Dialog_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Memory_Add_Dialog_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_memory_add_dialog_title(inputs)
	if (locale === "zh-CN") return zh_cn2_memory_add_dialog_title(inputs)
	if (locale === "es") return es_memory_add_dialog_title(inputs)
	if (locale === "ja") return ja_memory_add_dialog_title(inputs)
	if (locale === "hi") return hi_memory_add_dialog_title(inputs)
	if (locale === "pt-BR") return pt_br2_memory_add_dialog_title(inputs)
	if (locale === "ko") return ko_memory_add_dialog_title(inputs)
	return fr_memory_add_dialog_title(inputs)
});