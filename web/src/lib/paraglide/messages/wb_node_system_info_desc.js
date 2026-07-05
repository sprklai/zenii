/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_System_Info_DescInputs */

const en_wb_node_system_info_desc = /** @type {(inputs: Wb_Node_System_Info_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get system information`)
};

const zh_cn2_wb_node_system_info_desc = /** @type {(inputs: Wb_Node_System_Info_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`获取系统信息`)
};

const es_wb_node_system_info_desc = /** @type {(inputs: Wb_Node_System_Info_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obtener información del sistema`)
};

const ja_wb_node_system_info_desc = /** @type {(inputs: Wb_Node_System_Info_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`システム情報を取得`)
};

const hi_wb_node_system_info_desc = /** @type {(inputs: Wb_Node_System_Info_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सिस्टम जानकारी प्राप्त करें`)
};

const pt_br2_wb_node_system_info_desc = /** @type {(inputs: Wb_Node_System_Info_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obter informações do sistema`)
};

const ko_wb_node_system_info_desc = /** @type {(inputs: Wb_Node_System_Info_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`시스템 정보 가져오기`)
};

const fr_wb_node_system_info_desc = /** @type {(inputs: Wb_Node_System_Info_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obtenir des informations système`)
};

/**
* | output |
* | --- |
* | "Get system information" |
*
* @param {Wb_Node_System_Info_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_system_info_desc = /** @type {((inputs?: Wb_Node_System_Info_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_System_Info_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_system_info_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_system_info_desc(inputs)
	if (locale === "es") return es_wb_node_system_info_desc(inputs)
	if (locale === "ja") return ja_wb_node_system_info_desc(inputs)
	if (locale === "hi") return hi_wb_node_system_info_desc(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_system_info_desc(inputs)
	if (locale === "ko") return ko_wb_node_system_info_desc(inputs)
	return fr_wb_node_system_info_desc(inputs)
});