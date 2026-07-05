/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Config_TitleInputs */

const en_settings_config_title = /** @type {(inputs: Settings_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuration File`)
};

const zh_cn2_settings_config_title = /** @type {(inputs: Settings_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配置文件`)
};

const es_settings_config_title = /** @type {(inputs: Settings_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivo de configuración`)
};

const ja_settings_config_title = /** @type {(inputs: Settings_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定ファイル`)
};

const hi_settings_config_title = /** @type {(inputs: Settings_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कॉन्फ़िगरेशन फ़ाइल`)
};

const pt_br2_settings_config_title = /** @type {(inputs: Settings_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivo de Configuração`)
};

const ko_settings_config_title = /** @type {(inputs: Settings_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`설정 파일`)
};

const fr_settings_config_title = /** @type {(inputs: Settings_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fichier de configuration`)
};

/**
* | output |
* | --- |
* | "Configuration File" |
*
* @param {Settings_Config_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_config_title = /** @type {((inputs?: Settings_Config_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Config_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_config_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_config_title(inputs)
	if (locale === "es") return es_settings_config_title(inputs)
	if (locale === "ja") return ja_settings_config_title(inputs)
	if (locale === "hi") return hi_settings_config_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_config_title(inputs)
	if (locale === "ko") return ko_settings_config_title(inputs)
	return fr_settings_config_title(inputs)
});