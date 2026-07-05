/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Config_Toast_OpenedInputs */

const en_settings_config_toast_opened = /** @type {(inputs: Settings_Config_Toast_OpenedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Config file opened in editor`)
};

const zh_cn2_settings_config_toast_opened = /** @type {(inputs: Settings_Config_Toast_OpenedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配置文件已在编辑器中打开`)
};

const es_settings_config_toast_opened = /** @type {(inputs: Settings_Config_Toast_OpenedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivo de configuración abierto en el editor`)
};

const ja_settings_config_toast_opened = /** @type {(inputs: Settings_Config_Toast_OpenedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定ファイルをエディタで開きました`)
};

const hi_settings_config_toast_opened = /** @type {(inputs: Settings_Config_Toast_OpenedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कॉन्फ़िग फ़ाइल एडिटर में खुली`)
};

const pt_br2_settings_config_toast_opened = /** @type {(inputs: Settings_Config_Toast_OpenedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivo de configuração aberto no editor`)
};

const ko_settings_config_toast_opened = /** @type {(inputs: Settings_Config_Toast_OpenedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`설정 파일이 편집기에서 열렸습니다`)
};

const fr_settings_config_toast_opened = /** @type {(inputs: Settings_Config_Toast_OpenedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fichier de configuration ouvert dans l'éditeur`)
};

/**
* | output |
* | --- |
* | "Config file opened in editor" |
*
* @param {Settings_Config_Toast_OpenedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_config_toast_opened = /** @type {((inputs?: Settings_Config_Toast_OpenedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Config_Toast_OpenedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_config_toast_opened(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_config_toast_opened(inputs)
	if (locale === "es") return es_settings_config_toast_opened(inputs)
	if (locale === "ja") return ja_settings_config_toast_opened(inputs)
	if (locale === "hi") return hi_settings_config_toast_opened(inputs)
	if (locale === "pt-BR") return pt_br2_settings_config_toast_opened(inputs)
	if (locale === "ko") return ko_settings_config_toast_opened(inputs)
	return fr_settings_config_toast_opened(inputs)
});