/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Memory_Recall_DescriptionInputs */

const en_wb_node_memory_recall_description = /** @type {(inputs: Wb_Node_Memory_Recall_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search and retrieve entries from agent memory`)
};

const zh_cn2_wb_node_memory_recall_description = /** @type {(inputs: Wb_Node_Memory_Recall_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从智能体记忆中搜索并检索条目`)
};

const es_wb_node_memory_recall_description = /** @type {(inputs: Wb_Node_Memory_Recall_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar y recuperar entradas de la memoria del agente`)
};

const ja_wb_node_memory_recall_description = /** @type {(inputs: Wb_Node_Memory_Recall_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エージェントメモリからエントリを検索して取得します`)
};

const hi_wb_node_memory_recall_description = /** @type {(inputs: Wb_Node_Memory_Recall_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एजेंट मेमोरी से प्रविष्टियाँ खोजें और पुनः प्राप्त करें`)
};

const pt_br2_wb_node_memory_recall_description = /** @type {(inputs: Wb_Node_Memory_Recall_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisar e recuperar entradas da memória do agente`)
};

const ko_wb_node_memory_recall_description = /** @type {(inputs: Wb_Node_Memory_Recall_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`에이전트 메모리에서 항목을 검색하고 가져옵니다`)
};

const fr_wb_node_memory_recall_description = /** @type {(inputs: Wb_Node_Memory_Recall_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher et récupérer des entrées de la mémoire de l'agent`)
};

/**
* | output |
* | --- |
* | "Search and retrieve entries from agent memory" |
*
* @param {Wb_Node_Memory_Recall_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_memory_recall_description = /** @type {((inputs?: Wb_Node_Memory_Recall_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Memory_Recall_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_memory_recall_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_memory_recall_description(inputs)
	if (locale === "es") return es_wb_node_memory_recall_description(inputs)
	if (locale === "ja") return ja_wb_node_memory_recall_description(inputs)
	if (locale === "hi") return hi_wb_node_memory_recall_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_memory_recall_description(inputs)
	if (locale === "ko") return ko_wb_node_memory_recall_description(inputs)
	return fr_wb_node_memory_recall_description(inputs)
});