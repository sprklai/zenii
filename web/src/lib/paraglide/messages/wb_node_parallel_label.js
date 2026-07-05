/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Parallel_LabelInputs */

const en_wb_node_parallel_label = /** @type {(inputs: Wb_Node_Parallel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parallel`)
};

const zh_cn2_wb_node_parallel_label = /** @type {(inputs: Wb_Node_Parallel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`并行`)
};

const es_wb_node_parallel_label = /** @type {(inputs: Wb_Node_Parallel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paralelo`)
};

const ja_wb_node_parallel_label = /** @type {(inputs: Wb_Node_Parallel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`並列`)
};

const hi_wb_node_parallel_label = /** @type {(inputs: Wb_Node_Parallel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`समानांतर`)
};

const pt_br2_wb_node_parallel_label = /** @type {(inputs: Wb_Node_Parallel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paralelo`)
};

const ko_wb_node_parallel_label = /** @type {(inputs: Wb_Node_Parallel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`병렬`)
};

const fr_wb_node_parallel_label = /** @type {(inputs: Wb_Node_Parallel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parallèle`)
};

/**
* | output |
* | --- |
* | "Parallel" |
*
* @param {Wb_Node_Parallel_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_parallel_label = /** @type {((inputs?: Wb_Node_Parallel_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Parallel_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_parallel_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_parallel_label(inputs)
	if (locale === "es") return es_wb_node_parallel_label(inputs)
	if (locale === "ja") return ja_wb_node_parallel_label(inputs)
	if (locale === "hi") return hi_wb_node_parallel_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_parallel_label(inputs)
	if (locale === "ko") return ko_wb_node_parallel_label(inputs)
	return fr_wb_node_parallel_label(inputs)
});