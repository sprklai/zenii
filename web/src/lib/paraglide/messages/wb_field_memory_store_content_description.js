/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Memory_Store_Content_DescriptionInputs */

const en_wb_field_memory_store_content_description = /** @type {(inputs: Wb_Field_Memory_Store_Content_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The content to save to agent memory`)
};

const zh_cn2_wb_field_memory_store_content_description = /** @type {(inputs: Wb_Field_Memory_Store_Content_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要保存到智能体记忆的内容`)
};

const es_wb_field_memory_store_content_description = /** @type {(inputs: Wb_Field_Memory_Store_Content_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El contenido a guardar en la memoria del agente`)
};

const ja_wb_field_memory_store_content_description = /** @type {(inputs: Wb_Field_Memory_Store_Content_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エージェントメモリに保存するコンテンツ`)
};

const hi_wb_field_memory_store_content_description = /** @type {(inputs: Wb_Field_Memory_Store_Content_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एजेंट मेमोरी में सहेजी जाने वाली सामग्री`)
};

const pt_br2_wb_field_memory_store_content_description = /** @type {(inputs: Wb_Field_Memory_Store_Content_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O conteúdo a ser salvo na memória do agente`)
};

const ko_wb_field_memory_store_content_description = /** @type {(inputs: Wb_Field_Memory_Store_Content_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`에이전트 메모리에 저장할 내용`)
};

const fr_wb_field_memory_store_content_description = /** @type {(inputs: Wb_Field_Memory_Store_Content_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le contenu à enregistrer dans la mémoire de l'agent`)
};

/**
* | output |
* | --- |
* | "The content to save to agent memory" |
*
* @param {Wb_Field_Memory_Store_Content_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_memory_store_content_description = /** @type {((inputs?: Wb_Field_Memory_Store_Content_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Memory_Store_Content_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_memory_store_content_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_memory_store_content_description(inputs)
	if (locale === "es") return es_wb_field_memory_store_content_description(inputs)
	if (locale === "ja") return ja_wb_field_memory_store_content_description(inputs)
	if (locale === "hi") return hi_wb_field_memory_store_content_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_memory_store_content_description(inputs)
	if (locale === "ko") return ko_wb_field_memory_store_content_description(inputs)
	return fr_wb_field_memory_store_content_description(inputs)
});