/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Memory_Store_DescInputs */

const en_wb_node_memory_store_desc = /** @type {(inputs: Wb_Node_Memory_Store_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save to memory`)
};

const zh_cn2_wb_node_memory_store_desc = /** @type {(inputs: Wb_Node_Memory_Store_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存到记忆`)
};

const es_wb_node_memory_store_desc = /** @type {(inputs: Wb_Node_Memory_Store_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar en memoria`)
};

const ja_wb_node_memory_store_desc = /** @type {(inputs: Wb_Node_Memory_Store_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモリに保存`)
};

const hi_wb_node_memory_store_desc = /** @type {(inputs: Wb_Node_Memory_Store_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मेमोरी में सहेजें`)
};

const pt_br2_wb_node_memory_store_desc = /** @type {(inputs: Wb_Node_Memory_Store_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar na memória`)
};

const ko_wb_node_memory_store_desc = /** @type {(inputs: Wb_Node_Memory_Store_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메모리에 저장`)
};

const fr_wb_node_memory_store_desc = /** @type {(inputs: Wb_Node_Memory_Store_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer en mémoire`)
};

/**
* | output |
* | --- |
* | "Save to memory" |
*
* @param {Wb_Node_Memory_Store_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_memory_store_desc = /** @type {((inputs?: Wb_Node_Memory_Store_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Memory_Store_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_memory_store_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_memory_store_desc(inputs)
	if (locale === "es") return es_wb_node_memory_store_desc(inputs)
	if (locale === "ja") return ja_wb_node_memory_store_desc(inputs)
	if (locale === "hi") return hi_wb_node_memory_store_desc(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_memory_store_desc(inputs)
	if (locale === "ko") return ko_wb_node_memory_store_desc(inputs)
	return fr_wb_node_memory_store_desc(inputs)
});