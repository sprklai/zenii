/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_System_Info_DescriptionInputs */

const en_wb_node_system_info_description = /** @type {(inputs: Wb_Node_System_Info_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retrieve system information (CPU, memory, disk, etc.)`)
};

const zh_cn2_wb_node_system_info_description = /** @type {(inputs: Wb_Node_System_Info_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`获取系统信息（CPU、内存、磁盘等）`)
};

const es_wb_node_system_info_description = /** @type {(inputs: Wb_Node_System_Info_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recuperar información del sistema (CPU, memoria, disco, etc.)`)
};

const ja_wb_node_system_info_description = /** @type {(inputs: Wb_Node_System_Info_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`システム情報（CPU、メモリ、ディスクなど）を取得します`)
};

const hi_wb_node_system_info_description = /** @type {(inputs: Wb_Node_System_Info_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सिस्टम जानकारी प्राप्त करें (CPU, मेमोरी, डिस्क आदि)`)
};

const pt_br2_wb_node_system_info_description = /** @type {(inputs: Wb_Node_System_Info_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recuperar informações do sistema (CPU, memória, disco, etc.)`)
};

const ko_wb_node_system_info_description = /** @type {(inputs: Wb_Node_System_Info_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`시스템 정보（CPU, 메모리, 디스크 등）를 가져옵니다`)
};

const fr_wb_node_system_info_description = /** @type {(inputs: Wb_Node_System_Info_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Récupérer des informations système (CPU, mémoire, disque, etc.)`)
};

/**
* | output |
* | --- |
* | "Retrieve system information (CPU, memory, disk, etc.)" |
*
* @param {Wb_Node_System_Info_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_system_info_description = /** @type {((inputs?: Wb_Node_System_Info_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_System_Info_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_system_info_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_system_info_description(inputs)
	if (locale === "es") return es_wb_node_system_info_description(inputs)
	if (locale === "ja") return ja_wb_node_system_info_description(inputs)
	if (locale === "hi") return hi_wb_node_system_info_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_system_info_description(inputs)
	if (locale === "ko") return ko_wb_node_system_info_description(inputs)
	return fr_wb_node_system_info_description(inputs)
});