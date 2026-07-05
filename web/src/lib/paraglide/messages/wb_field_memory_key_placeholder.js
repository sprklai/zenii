/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Memory_Key_PlaceholderInputs */

const en_wb_field_memory_key_placeholder = /** @type {(inputs: Wb_Field_Memory_Key_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unique key for this memory entry`)
};

const zh_cn2_wb_field_memory_key_placeholder = /** @type {(inputs: Wb_Field_Memory_Key_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此记忆条目的唯一键`)
};

const es_wb_field_memory_key_placeholder = /** @type {(inputs: Wb_Field_Memory_Key_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clave única para esta entrada de memoria`)
};

const ja_wb_field_memory_key_placeholder = /** @type {(inputs: Wb_Field_Memory_Key_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このメモリエントリの一意のキー`)
};

const hi_wb_field_memory_key_placeholder = /** @type {(inputs: Wb_Field_Memory_Key_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`इस मेमोरी प्रविष्टि के लिए अद्वितीय कुंजी`)
};

const pt_br2_wb_field_memory_key_placeholder = /** @type {(inputs: Wb_Field_Memory_Key_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chave única para esta entrada de memória`)
};

const ko_wb_field_memory_key_placeholder = /** @type {(inputs: Wb_Field_Memory_Key_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이 메모리 항목의 고유 키`)
};

const fr_wb_field_memory_key_placeholder = /** @type {(inputs: Wb_Field_Memory_Key_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clé unique pour cette entrée mémoire`)
};

/**
* | output |
* | --- |
* | "Unique key for this memory entry" |
*
* @param {Wb_Field_Memory_Key_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_memory_key_placeholder = /** @type {((inputs?: Wb_Field_Memory_Key_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Memory_Key_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_memory_key_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_memory_key_placeholder(inputs)
	if (locale === "es") return es_wb_field_memory_key_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_memory_key_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_memory_key_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_memory_key_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_memory_key_placeholder(inputs)
	return fr_wb_field_memory_key_placeholder(inputs)
});