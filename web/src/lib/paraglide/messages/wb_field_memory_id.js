/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Memory_IdInputs */

const en_wb_field_memory_id = /** @type {(inputs: Wb_Field_Memory_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Memory ID`)
};

const zh_cn2_wb_field_memory_id = /** @type {(inputs: Wb_Field_Memory_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`记忆 ID`)
};

const es_wb_field_memory_id = /** @type {(inputs: Wb_Field_Memory_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID de memoria`)
};

const ja_wb_field_memory_id = /** @type {(inputs: Wb_Field_Memory_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモリ ID`)
};

const hi_wb_field_memory_id = /** @type {(inputs: Wb_Field_Memory_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मेमोरी ID`)
};

const pt_br2_wb_field_memory_id = /** @type {(inputs: Wb_Field_Memory_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID de Memória`)
};

const ko_wb_field_memory_id = /** @type {(inputs: Wb_Field_Memory_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메모리 ID`)
};

const fr_wb_field_memory_id = /** @type {(inputs: Wb_Field_Memory_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID de mémoire`)
};

/**
* | output |
* | --- |
* | "Memory ID" |
*
* @param {Wb_Field_Memory_IdInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_memory_id = /** @type {((inputs?: Wb_Field_Memory_IdInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Memory_IdInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_memory_id(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_memory_id(inputs)
	if (locale === "es") return es_wb_field_memory_id(inputs)
	if (locale === "ja") return ja_wb_field_memory_id(inputs)
	if (locale === "hi") return hi_wb_field_memory_id(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_memory_id(inputs)
	if (locale === "ko") return ko_wb_field_memory_id(inputs)
	return fr_wb_field_memory_id(inputs)
});