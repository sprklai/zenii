/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Config_Read_DescriptionInputs */

const en_wb_node_config_read_description = /** @type {(inputs: Wb_Node_Config_Read_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read a configuration value`)
};

const zh_cn2_wb_node_config_read_description = /** @type {(inputs: Wb_Node_Config_Read_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`读取配置值`)
};

const es_wb_node_config_read_description = /** @type {(inputs: Wb_Node_Config_Read_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leer un valor de configuración`)
};

const ja_wb_node_config_read_description = /** @type {(inputs: Wb_Node_Config_Read_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定値を読み取ります`)
};

const hi_wb_node_config_read_description = /** @type {(inputs: Wb_Node_Config_Read_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एक कॉन्फ़िगरेशन मान पढ़ें`)
};

const pt_br2_wb_node_config_read_description = /** @type {(inputs: Wb_Node_Config_Read_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ler um valor de configuração`)
};

const ko_wb_node_config_read_description = /** @type {(inputs: Wb_Node_Config_Read_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`설정 값을 읽습니다`)
};

const fr_wb_node_config_read_description = /** @type {(inputs: Wb_Node_Config_Read_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lire une valeur de configuration`)
};

/**
* | output |
* | --- |
* | "Read a configuration value" |
*
* @param {Wb_Node_Config_Read_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_config_read_description = /** @type {((inputs?: Wb_Node_Config_Read_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Config_Read_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_config_read_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_config_read_description(inputs)
	if (locale === "es") return es_wb_node_config_read_description(inputs)
	if (locale === "ja") return ja_wb_node_config_read_description(inputs)
	if (locale === "hi") return hi_wb_node_config_read_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_config_read_description(inputs)
	if (locale === "ko") return ko_wb_node_config_read_description(inputs)
	return fr_wb_node_config_read_description(inputs)
});