/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Memory_Recall_DescInputs */

const en_wb_node_memory_recall_desc = /** @type {(inputs: Wb_Node_Memory_Recall_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search memory`)
};

const zh_cn2_wb_node_memory_recall_desc = /** @type {(inputs: Wb_Node_Memory_Recall_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索记忆`)
};

const es_wb_node_memory_recall_desc = /** @type {(inputs: Wb_Node_Memory_Recall_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar en memoria`)
};

const ja_wb_node_memory_recall_desc = /** @type {(inputs: Wb_Node_Memory_Recall_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモリを検索`)
};

const hi_wb_node_memory_recall_desc = /** @type {(inputs: Wb_Node_Memory_Recall_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मेमोरी खोजें`)
};

const pt_br2_wb_node_memory_recall_desc = /** @type {(inputs: Wb_Node_Memory_Recall_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisar na memória`)
};

const ko_wb_node_memory_recall_desc = /** @type {(inputs: Wb_Node_Memory_Recall_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메모리 검색`)
};

const fr_wb_node_memory_recall_desc = /** @type {(inputs: Wb_Node_Memory_Recall_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher en mémoire`)
};

/**
* | output |
* | --- |
* | "Search memory" |
*
* @param {Wb_Node_Memory_Recall_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_memory_recall_desc = /** @type {((inputs?: Wb_Node_Memory_Recall_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Memory_Recall_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_memory_recall_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_memory_recall_desc(inputs)
	if (locale === "es") return es_wb_node_memory_recall_desc(inputs)
	if (locale === "ja") return ja_wb_node_memory_recall_desc(inputs)
	if (locale === "hi") return hi_wb_node_memory_recall_desc(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_memory_recall_desc(inputs)
	if (locale === "ko") return ko_wb_node_memory_recall_desc(inputs)
	return fr_wb_node_memory_recall_desc(inputs)
});