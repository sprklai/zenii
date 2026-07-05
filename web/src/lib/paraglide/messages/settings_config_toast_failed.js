/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Config_Toast_FailedInputs */

const en_settings_config_toast_failed = /** @type {(inputs: Settings_Config_Toast_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to open config file`)
};

const zh_cn2_settings_config_toast_failed = /** @type {(inputs: Settings_Config_Toast_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开配置文件失败`)
};

const es_settings_config_toast_failed = /** @type {(inputs: Settings_Config_Toast_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error al abrir el archivo de configuración`)
};

const ja_settings_config_toast_failed = /** @type {(inputs: Settings_Config_Toast_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定ファイルを開けませんでした`)
};

const hi_settings_config_toast_failed = /** @type {(inputs: Settings_Config_Toast_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कॉन्फ़िग फ़ाइल खोलने में विफल`)
};

const pt_br2_settings_config_toast_failed = /** @type {(inputs: Settings_Config_Toast_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha ao abrir arquivo de configuração`)
};

const ko_settings_config_toast_failed = /** @type {(inputs: Settings_Config_Toast_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`설정 파일 열기 실패`)
};

const fr_settings_config_toast_failed = /** @type {(inputs: Settings_Config_Toast_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de l'ouverture du fichier de configuration`)
};

/**
* | output |
* | --- |
* | "Failed to open config file" |
*
* @param {Settings_Config_Toast_FailedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_config_toast_failed = /** @type {((inputs?: Settings_Config_Toast_FailedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Config_Toast_FailedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_config_toast_failed(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_config_toast_failed(inputs)
	if (locale === "es") return es_settings_config_toast_failed(inputs)
	if (locale === "ja") return ja_settings_config_toast_failed(inputs)
	if (locale === "hi") return hi_settings_config_toast_failed(inputs)
	if (locale === "pt-BR") return pt_br2_settings_config_toast_failed(inputs)
	if (locale === "ko") return ko_settings_config_toast_failed(inputs)
	return fr_settings_config_toast_failed(inputs)
});