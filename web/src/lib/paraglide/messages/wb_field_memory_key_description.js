/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Memory_Key_DescriptionInputs */

const en_wb_field_memory_key_description = /** @type {(inputs: Wb_Field_Memory_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unique identifier for the memory entry`)
};

const zh_cn2_wb_field_memory_key_description = /** @type {(inputs: Wb_Field_Memory_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`记忆条目的唯一标识符`)
};

const es_wb_field_memory_key_description = /** @type {(inputs: Wb_Field_Memory_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identificador único de la entrada de memoria`)
};

const ja_wb_field_memory_key_description = /** @type {(inputs: Wb_Field_Memory_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモリエントリの一意の識別子`)
};

const hi_wb_field_memory_key_description = /** @type {(inputs: Wb_Field_Memory_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मेमोरी प्रविष्टि का अद्वितीय पहचानकर्ता`)
};

const pt_br2_wb_field_memory_key_description = /** @type {(inputs: Wb_Field_Memory_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identificador único da entrada de memória`)
};

const ko_wb_field_memory_key_description = /** @type {(inputs: Wb_Field_Memory_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메모리 항목의 고유 식별자`)
};

const fr_wb_field_memory_key_description = /** @type {(inputs: Wb_Field_Memory_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identifiant unique de l'entrée mémoire`)
};

/**
* | output |
* | --- |
* | "Unique identifier for the memory entry" |
*
* @param {Wb_Field_Memory_Key_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_memory_key_description = /** @type {((inputs?: Wb_Field_Memory_Key_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Memory_Key_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_memory_key_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_memory_key_description(inputs)
	if (locale === "es") return es_wb_field_memory_key_description(inputs)
	if (locale === "ja") return ja_wb_field_memory_key_description(inputs)
	if (locale === "hi") return hi_wb_field_memory_key_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_memory_key_description(inputs)
	if (locale === "ko") return ko_wb_field_memory_key_description(inputs)
	return fr_wb_field_memory_key_description(inputs)
});