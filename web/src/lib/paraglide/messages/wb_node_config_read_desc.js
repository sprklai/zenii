/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Config_Read_DescInputs */

const en_wb_node_config_read_desc = /** @type {(inputs: Wb_Node_Config_Read_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read config value`)
};

const zh_cn2_wb_node_config_read_desc = /** @type {(inputs: Wb_Node_Config_Read_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`读取配置值`)
};

const es_wb_node_config_read_desc = /** @type {(inputs: Wb_Node_Config_Read_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leer valor de configuración`)
};

const ja_wb_node_config_read_desc = /** @type {(inputs: Wb_Node_Config_Read_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定値を読み取る`)
};

const hi_wb_node_config_read_desc = /** @type {(inputs: Wb_Node_Config_Read_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कॉन्फ़िग मान पढ़ें`)
};

const pt_br2_wb_node_config_read_desc = /** @type {(inputs: Wb_Node_Config_Read_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ler valor de configuração`)
};

const ko_wb_node_config_read_desc = /** @type {(inputs: Wb_Node_Config_Read_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`설정 값 읽기`)
};

const fr_wb_node_config_read_desc = /** @type {(inputs: Wb_Node_Config_Read_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lire une valeur de configuration`)
};

/**
* | output |
* | --- |
* | "Read config value" |
*
* @param {Wb_Node_Config_Read_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_config_read_desc = /** @type {((inputs?: Wb_Node_Config_Read_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Config_Read_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_config_read_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_config_read_desc(inputs)
	if (locale === "es") return es_wb_node_config_read_desc(inputs)
	if (locale === "ja") return ja_wb_node_config_read_desc(inputs)
	if (locale === "hi") return hi_wb_node_config_read_desc(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_config_read_desc(inputs)
	if (locale === "ko") return ko_wb_node_config_read_desc(inputs)
	return fr_wb_node_config_read_desc(inputs)
});