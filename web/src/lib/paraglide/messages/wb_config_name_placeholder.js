/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Config_Name_PlaceholderInputs */

const en_wb_config_name_placeholder = /** @type {(inputs: Wb_Config_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unique step name`)
};

const zh_cn2_wb_config_name_placeholder = /** @type {(inputs: Wb_Config_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`唯一步骤名称`)
};

const es_wb_config_name_placeholder = /** @type {(inputs: Wb_Config_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre único del paso`)
};

const ja_wb_config_name_placeholder = /** @type {(inputs: Wb_Config_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一意のステップ名`)
};

const hi_wb_config_name_placeholder = /** @type {(inputs: Wb_Config_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अद्वितीय चरण नाम`)
};

const pt_br2_wb_config_name_placeholder = /** @type {(inputs: Wb_Config_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome único do passo`)
};

const ko_wb_config_name_placeholder = /** @type {(inputs: Wb_Config_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`고유한 단계 이름`)
};

const fr_wb_config_name_placeholder = /** @type {(inputs: Wb_Config_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom d'étape unique`)
};

/**
* | output |
* | --- |
* | "Unique step name" |
*
* @param {Wb_Config_Name_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_config_name_placeholder = /** @type {((inputs?: Wb_Config_Name_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Config_Name_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_config_name_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_config_name_placeholder(inputs)
	if (locale === "es") return es_wb_config_name_placeholder(inputs)
	if (locale === "ja") return ja_wb_config_name_placeholder(inputs)
	if (locale === "hi") return hi_wb_config_name_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_config_name_placeholder(inputs)
	if (locale === "ko") return ko_wb_config_name_placeholder(inputs)
	return fr_wb_config_name_placeholder(inputs)
});