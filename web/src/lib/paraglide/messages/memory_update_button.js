/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Memory_Update_ButtonInputs */

const en_memory_update_button = /** @type {(inputs: Memory_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update`)
};

const zh_cn2_memory_update_button = /** @type {(inputs: Memory_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新`)
};

const es_memory_update_button = /** @type {(inputs: Memory_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizar`)
};

const ja_memory_update_button = /** @type {(inputs: Memory_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新`)
};

const hi_memory_update_button = /** @type {(inputs: Memory_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अपडेट करें`)
};

const pt_br2_memory_update_button = /** @type {(inputs: Memory_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizar`)
};

const ko_memory_update_button = /** @type {(inputs: Memory_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`업데이트`)
};

const fr_memory_update_button = /** @type {(inputs: Memory_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mettre à jour`)
};

/**
* | output |
* | --- |
* | "Update" |
*
* @param {Memory_Update_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const memory_update_button = /** @type {((inputs?: Memory_Update_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Memory_Update_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_memory_update_button(inputs)
	if (locale === "zh-CN") return zh_cn2_memory_update_button(inputs)
	if (locale === "es") return es_memory_update_button(inputs)
	if (locale === "ja") return ja_memory_update_button(inputs)
	if (locale === "hi") return hi_memory_update_button(inputs)
	if (locale === "pt-BR") return pt_br2_memory_update_button(inputs)
	if (locale === "ko") return ko_memory_update_button(inputs)
	return fr_memory_update_button(inputs)
});