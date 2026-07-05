/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Process_DescInputs */

const en_wb_node_process_desc = /** @type {(inputs: Wb_Node_Process_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Process management`)
};

const zh_cn2_wb_node_process_desc = /** @type {(inputs: Wb_Node_Process_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`进程管理`)
};

const es_wb_node_process_desc = /** @type {(inputs: Wb_Node_Process_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gestión de procesos`)
};

const ja_wb_node_process_desc = /** @type {(inputs: Wb_Node_Process_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロセス管理`)
};

const hi_wb_node_process_desc = /** @type {(inputs: Wb_Node_Process_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रक्रिया प्रबंधन`)
};

const pt_br2_wb_node_process_desc = /** @type {(inputs: Wb_Node_Process_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerenciamento de processos`)
};

const ko_wb_node_process_desc = /** @type {(inputs: Wb_Node_Process_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`프로세스 관리`)
};

const fr_wb_node_process_desc = /** @type {(inputs: Wb_Node_Process_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gestion des processus`)
};

/**
* | output |
* | --- |
* | "Process management" |
*
* @param {Wb_Node_Process_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_process_desc = /** @type {((inputs?: Wb_Node_Process_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Process_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_process_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_process_desc(inputs)
	if (locale === "es") return es_wb_node_process_desc(inputs)
	if (locale === "ja") return ja_wb_node_process_desc(inputs)
	if (locale === "hi") return hi_wb_node_process_desc(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_process_desc(inputs)
	if (locale === "ko") return ko_wb_node_process_desc(inputs)
	return fr_wb_node_process_desc(inputs)
});