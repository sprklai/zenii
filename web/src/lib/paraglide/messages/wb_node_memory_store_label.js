/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Memory_Store_LabelInputs */

const en_wb_node_memory_store_label = /** @type {(inputs: Wb_Node_Memory_Store_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Memory Store`)
};

const zh_cn2_wb_node_memory_store_label = /** @type {(inputs: Wb_Node_Memory_Store_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`记忆存储`)
};

const es_wb_node_memory_store_label = /** @type {(inputs: Wb_Node_Memory_Store_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar en memoria`)
};

const ja_wb_node_memory_store_label = /** @type {(inputs: Wb_Node_Memory_Store_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモリ保存`)
};

const hi_wb_node_memory_store_label = /** @type {(inputs: Wb_Node_Memory_Store_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मेमोरी स्टोर`)
};

const pt_br2_wb_node_memory_store_label = /** @type {(inputs: Wb_Node_Memory_Store_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Armazenar na Memória`)
};

const ko_wb_node_memory_store_label = /** @type {(inputs: Wb_Node_Memory_Store_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메모리 저장`)
};

const fr_wb_node_memory_store_label = /** @type {(inputs: Wb_Node_Memory_Store_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stockage en mémoire`)
};

/**
* | output |
* | --- |
* | "Memory Store" |
*
* @param {Wb_Node_Memory_Store_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_memory_store_label = /** @type {((inputs?: Wb_Node_Memory_Store_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Memory_Store_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_memory_store_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_memory_store_label(inputs)
	if (locale === "es") return es_wb_node_memory_store_label(inputs)
	if (locale === "ja") return ja_wb_node_memory_store_label(inputs)
	if (locale === "hi") return hi_wb_node_memory_store_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_memory_store_label(inputs)
	if (locale === "ko") return ko_wb_node_memory_store_label(inputs)
	return fr_wb_node_memory_store_label(inputs)
});