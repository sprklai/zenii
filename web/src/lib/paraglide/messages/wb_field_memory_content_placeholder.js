/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Memory_Content_PlaceholderInputs */

const en_wb_field_memory_content_placeholder = /** @type {(inputs: Wb_Field_Memory_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Information to store in memory`)
};

const zh_cn2_wb_field_memory_content_placeholder = /** @type {(inputs: Wb_Field_Memory_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要存储到记忆的信息`)
};

const es_wb_field_memory_content_placeholder = /** @type {(inputs: Wb_Field_Memory_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Información a guardar en memoria`)
};

const ja_wb_field_memory_content_placeholder = /** @type {(inputs: Wb_Field_Memory_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモリに保存する情報`)
};

const hi_wb_field_memory_content_placeholder = /** @type {(inputs: Wb_Field_Memory_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मेमोरी में संग्रहीत करने के लिए जानकारी`)
};

const pt_br2_wb_field_memory_content_placeholder = /** @type {(inputs: Wb_Field_Memory_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informação a armazenar na memória`)
};

const ko_wb_field_memory_content_placeholder = /** @type {(inputs: Wb_Field_Memory_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메모리에 저장할 정보`)
};

const fr_wb_field_memory_content_placeholder = /** @type {(inputs: Wb_Field_Memory_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Information à stocker en mémoire`)
};

/**
* | output |
* | --- |
* | "Information to store in memory" |
*
* @param {Wb_Field_Memory_Content_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_memory_content_placeholder = /** @type {((inputs?: Wb_Field_Memory_Content_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Memory_Content_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_memory_content_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_memory_content_placeholder(inputs)
	if (locale === "es") return es_wb_field_memory_content_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_memory_content_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_memory_content_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_memory_content_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_memory_content_placeholder(inputs)
	return fr_wb_field_memory_content_placeholder(inputs)
});