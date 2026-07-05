/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Memory_Add_ButtonInputs */

const en_memory_add_button = /** @type {(inputs: Memory_Add_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add`)
};

const zh_cn2_memory_add_button = /** @type {(inputs: Memory_Add_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加`)
};

const es_memory_add_button = /** @type {(inputs: Memory_Add_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir`)
};

const ja_memory_add_button = /** @type {(inputs: Memory_Add_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`追加`)
};

const hi_memory_add_button = /** @type {(inputs: Memory_Add_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`जोड़ें`)
};

const pt_br2_memory_add_button = /** @type {(inputs: Memory_Add_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar`)
};

const ko_memory_add_button = /** @type {(inputs: Memory_Add_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`추가`)
};

const fr_memory_add_button = /** @type {(inputs: Memory_Add_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter`)
};

/**
* | output |
* | --- |
* | "Add" |
*
* @param {Memory_Add_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const memory_add_button = /** @type {((inputs?: Memory_Add_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Memory_Add_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_memory_add_button(inputs)
	if (locale === "zh-CN") return zh_cn2_memory_add_button(inputs)
	if (locale === "es") return es_memory_add_button(inputs)
	if (locale === "ja") return ja_memory_add_button(inputs)
	if (locale === "hi") return hi_memory_add_button(inputs)
	if (locale === "pt-BR") return pt_br2_memory_add_button(inputs)
	if (locale === "ko") return ko_memory_add_button(inputs)
	return fr_memory_add_button(inputs)
});