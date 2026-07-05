/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Memory_Forget_LabelInputs */

const en_wb_node_memory_forget_label = /** @type {(inputs: Wb_Node_Memory_Forget_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Memory Forget`)
};

const zh_cn2_wb_node_memory_forget_label = /** @type {(inputs: Wb_Node_Memory_Forget_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除记忆`)
};

const es_wb_node_memory_forget_label = /** @type {(inputs: Wb_Node_Memory_Forget_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Olvidar de memoria`)
};

const ja_wb_node_memory_forget_label = /** @type {(inputs: Wb_Node_Memory_Forget_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモリ削除`)
};

const hi_wb_node_memory_forget_label = /** @type {(inputs: Wb_Node_Memory_Forget_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मेमोरी भूलें`)
};

const pt_br2_wb_node_memory_forget_label = /** @type {(inputs: Wb_Node_Memory_Forget_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esquecer da Memória`)
};

const ko_wb_node_memory_forget_label = /** @type {(inputs: Wb_Node_Memory_Forget_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메모리 삭제`)
};

const fr_wb_node_memory_forget_label = /** @type {(inputs: Wb_Node_Memory_Forget_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suppression mémoire`)
};

/**
* | output |
* | --- |
* | "Memory Forget" |
*
* @param {Wb_Node_Memory_Forget_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_memory_forget_label = /** @type {((inputs?: Wb_Node_Memory_Forget_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Memory_Forget_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_memory_forget_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_memory_forget_label(inputs)
	if (locale === "es") return es_wb_node_memory_forget_label(inputs)
	if (locale === "ja") return ja_wb_node_memory_forget_label(inputs)
	if (locale === "hi") return hi_wb_node_memory_forget_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_memory_forget_label(inputs)
	if (locale === "ko") return ko_wb_node_memory_forget_label(inputs)
	return fr_wb_node_memory_forget_label(inputs)
});