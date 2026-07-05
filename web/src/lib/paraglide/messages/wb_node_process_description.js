/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Process_DescriptionInputs */

const en_wb_node_process_description = /** @type {(inputs: Wb_Node_Process_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`List, find, or kill running processes`)
};

const zh_cn2_wb_node_process_description = /** @type {(inputs: Wb_Node_Process_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`列出、查找或终止正在运行的进程`)
};

const es_wb_node_process_description = /** @type {(inputs: Wb_Node_Process_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listar, buscar o terminar procesos en ejecución`)
};

const ja_wb_node_process_description = /** @type {(inputs: Wb_Node_Process_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実行中のプロセスを一覧表示、検索、または終了します`)
};

const hi_wb_node_process_description = /** @type {(inputs: Wb_Node_Process_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चल रही प्रक्रियाओं को सूचीबद्ध करें, खोजें या बंद करें`)
};

const pt_br2_wb_node_process_description = /** @type {(inputs: Wb_Node_Process_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listar, encontrar ou encerrar processos em execução`)
};

const ko_wb_node_process_description = /** @type {(inputs: Wb_Node_Process_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`실행 중인 프로세스를 나열, 검색 또는 종료합니다`)
};

const fr_wb_node_process_description = /** @type {(inputs: Wb_Node_Process_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lister, rechercher ou terminer des processus en cours`)
};

/**
* | output |
* | --- |
* | "List, find, or kill running processes" |
*
* @param {Wb_Node_Process_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_process_description = /** @type {((inputs?: Wb_Node_Process_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Process_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_process_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_process_description(inputs)
	if (locale === "es") return es_wb_node_process_description(inputs)
	if (locale === "ja") return ja_wb_node_process_description(inputs)
	if (locale === "hi") return hi_wb_node_process_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_process_description(inputs)
	if (locale === "ko") return ko_wb_node_process_description(inputs)
	return fr_wb_node_process_description(inputs)
});