/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Config_Read_LabelInputs */

const en_wb_node_config_read_label = /** @type {(inputs: Wb_Node_Config_Read_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Config Read`)
};

const zh_cn2_wb_node_config_read_label = /** @type {(inputs: Wb_Node_Config_Read_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`读取配置`)
};

const es_wb_node_config_read_label = /** @type {(inputs: Wb_Node_Config_Read_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leer configuración`)
};

const ja_wb_node_config_read_label = /** @type {(inputs: Wb_Node_Config_Read_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Config 読み取り`)
};

const hi_wb_node_config_read_label = /** @type {(inputs: Wb_Node_Config_Read_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कॉन्फ़िग पढ़ें`)
};

const pt_br2_wb_node_config_read_label = /** @type {(inputs: Wb_Node_Config_Read_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ler Configuração`)
};

const ko_wb_node_config_read_label = /** @type {(inputs: Wb_Node_Config_Read_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Config 읽기`)
};

const fr_wb_node_config_read_label = /** @type {(inputs: Wb_Node_Config_Read_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lecture de config`)
};

/**
* | output |
* | --- |
* | "Config Read" |
*
* @param {Wb_Node_Config_Read_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_config_read_label = /** @type {((inputs?: Wb_Node_Config_Read_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Config_Read_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_config_read_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_config_read_label(inputs)
	if (locale === "es") return es_wb_node_config_read_label(inputs)
	if (locale === "ja") return ja_wb_node_config_read_label(inputs)
	if (locale === "hi") return hi_wb_node_config_read_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_config_read_label(inputs)
	if (locale === "ko") return ko_wb_node_config_read_label(inputs)
	return fr_wb_node_config_read_label(inputs)
});