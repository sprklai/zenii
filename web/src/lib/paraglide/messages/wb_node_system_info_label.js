/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_System_Info_LabelInputs */

const en_wb_node_system_info_label = /** @type {(inputs: Wb_Node_System_Info_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System Info`)
};

const zh_cn2_wb_node_system_info_label = /** @type {(inputs: Wb_Node_System_Info_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`系统信息`)
};

const es_wb_node_system_info_label = /** @type {(inputs: Wb_Node_System_Info_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Información del sistema`)
};

const ja_wb_node_system_info_label = /** @type {(inputs: Wb_Node_System_Info_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`システム情報`)
};

const hi_wb_node_system_info_label = /** @type {(inputs: Wb_Node_System_Info_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सिस्टम जानकारी`)
};

const pt_br2_wb_node_system_info_label = /** @type {(inputs: Wb_Node_System_Info_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informações do Sistema`)
};

const ko_wb_node_system_info_label = /** @type {(inputs: Wb_Node_System_Info_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`시스템 정보`)
};

const fr_wb_node_system_info_label = /** @type {(inputs: Wb_Node_System_Info_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Infos système`)
};

/**
* | output |
* | --- |
* | "System Info" |
*
* @param {Wb_Node_System_Info_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_system_info_label = /** @type {((inputs?: Wb_Node_System_Info_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_System_Info_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_system_info_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_system_info_label(inputs)
	if (locale === "es") return es_wb_node_system_info_label(inputs)
	if (locale === "ja") return ja_wb_node_system_info_label(inputs)
	if (locale === "hi") return hi_wb_node_system_info_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_system_info_label(inputs)
	if (locale === "ko") return ko_wb_node_system_info_label(inputs)
	return fr_wb_node_system_info_label(inputs)
});