/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Memory_Store_DescriptionInputs */

const en_wb_node_memory_store_description = /** @type {(inputs: Wb_Node_Memory_Store_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save a piece of information to agent memory`)
};

const zh_cn2_wb_node_memory_store_description = /** @type {(inputs: Wb_Node_Memory_Store_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`将信息保存到智能体记忆`)
};

const es_wb_node_memory_store_description = /** @type {(inputs: Wb_Node_Memory_Store_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar una pieza de información en la memoria del agente`)
};

const ja_wb_node_memory_store_description = /** @type {(inputs: Wb_Node_Memory_Store_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エージェントメモリに情報を保存します`)
};

const hi_wb_node_memory_store_description = /** @type {(inputs: Wb_Node_Memory_Store_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एजेंट मेमोरी में जानकारी सहेजें`)
};

const pt_br2_wb_node_memory_store_description = /** @type {(inputs: Wb_Node_Memory_Store_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar uma informação na memória do agente`)
};

const ko_wb_node_memory_store_description = /** @type {(inputs: Wb_Node_Memory_Store_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`에이전트 메모리에 정보를 저장합니다`)
};

const fr_wb_node_memory_store_description = /** @type {(inputs: Wb_Node_Memory_Store_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer une information dans la mémoire de l'agent`)
};

/**
* | output |
* | --- |
* | "Save a piece of information to agent memory" |
*
* @param {Wb_Node_Memory_Store_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_memory_store_description = /** @type {((inputs?: Wb_Node_Memory_Store_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Memory_Store_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_memory_store_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_memory_store_description(inputs)
	if (locale === "es") return es_wb_node_memory_store_description(inputs)
	if (locale === "ja") return ja_wb_node_memory_store_description(inputs)
	if (locale === "hi") return hi_wb_node_memory_store_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_memory_store_description(inputs)
	if (locale === "ko") return ko_wb_node_memory_store_description(inputs)
	return fr_wb_node_memory_store_description(inputs)
});