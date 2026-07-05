/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Process_LabelInputs */

const en_wb_node_process_label = /** @type {(inputs: Wb_Node_Process_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Process`)
};

const zh_cn2_wb_node_process_label = /** @type {(inputs: Wb_Node_Process_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`进程`)
};

const es_wb_node_process_label = /** @type {(inputs: Wb_Node_Process_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Proceso`)
};

const ja_wb_node_process_label = /** @type {(inputs: Wb_Node_Process_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロセス`)
};

const hi_wb_node_process_label = /** @type {(inputs: Wb_Node_Process_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रक्रिया`)
};

const pt_br2_wb_node_process_label = /** @type {(inputs: Wb_Node_Process_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Processo`)
};

const ko_wb_node_process_label = /** @type {(inputs: Wb_Node_Process_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`프로세스`)
};

const fr_wb_node_process_label = /** @type {(inputs: Wb_Node_Process_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Processus`)
};

/**
* | output |
* | --- |
* | "Process" |
*
* @param {Wb_Node_Process_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_process_label = /** @type {((inputs?: Wb_Node_Process_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Process_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_process_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_process_label(inputs)
	if (locale === "es") return es_wb_node_process_label(inputs)
	if (locale === "ja") return ja_wb_node_process_label(inputs)
	if (locale === "hi") return hi_wb_node_process_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_process_label(inputs)
	if (locale === "ko") return ko_wb_node_process_label(inputs)
	return fr_wb_node_process_label(inputs)
});