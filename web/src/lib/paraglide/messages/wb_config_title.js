/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Config_TitleInputs */

const en_wb_config_title = /** @type {(inputs: Wb_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuration`)
};

const zh_cn2_wb_config_title = /** @type {(inputs: Wb_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配置`)
};

const es_wb_config_title = /** @type {(inputs: Wb_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuración`)
};

const ja_wb_config_title = /** @type {(inputs: Wb_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定`)
};

const hi_wb_config_title = /** @type {(inputs: Wb_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कॉन्फ़िगरेशन`)
};

const pt_br2_wb_config_title = /** @type {(inputs: Wb_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuração`)
};

const ko_wb_config_title = /** @type {(inputs: Wb_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`구성`)
};

const fr_wb_config_title = /** @type {(inputs: Wb_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuration`)
};

/**
* | output |
* | --- |
* | "Configuration" |
*
* @param {Wb_Config_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_config_title = /** @type {((inputs?: Wb_Config_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Config_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_config_title(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_config_title(inputs)
	if (locale === "es") return es_wb_config_title(inputs)
	if (locale === "ja") return ja_wb_config_title(inputs)
	if (locale === "hi") return hi_wb_config_title(inputs)
	if (locale === "pt-BR") return pt_br2_wb_config_title(inputs)
	if (locale === "ko") return ko_wb_config_title(inputs)
	return fr_wb_config_title(inputs)
});