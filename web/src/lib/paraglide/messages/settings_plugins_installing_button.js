/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Plugins_Installing_ButtonInputs */

const en_settings_plugins_installing_button = /** @type {(inputs: Settings_Plugins_Installing_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installing...`)
};

const zh_cn2_settings_plugins_installing_button = /** @type {(inputs: Settings_Plugins_Installing_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装中...`)
};

const es_settings_plugins_installing_button = /** @type {(inputs: Settings_Plugins_Installing_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalando...`)
};

const ja_settings_plugins_installing_button = /** @type {(inputs: Settings_Plugins_Installing_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`インストール中...`)
};

const hi_settings_plugins_installing_button = /** @type {(inputs: Settings_Plugins_Installing_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`इंस्टॉल हो रहा है...`)
};

const pt_br2_settings_plugins_installing_button = /** @type {(inputs: Settings_Plugins_Installing_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalando...`)
};

const ko_settings_plugins_installing_button = /** @type {(inputs: Settings_Plugins_Installing_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`설치 중...`)
};

const fr_settings_plugins_installing_button = /** @type {(inputs: Settings_Plugins_Installing_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installation...`)
};

/**
* | output |
* | --- |
* | "Installing..." |
*
* @param {Settings_Plugins_Installing_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_plugins_installing_button = /** @type {((inputs?: Settings_Plugins_Installing_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Plugins_Installing_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_plugins_installing_button(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_plugins_installing_button(inputs)
	if (locale === "es") return es_settings_plugins_installing_button(inputs)
	if (locale === "ja") return ja_settings_plugins_installing_button(inputs)
	if (locale === "hi") return hi_settings_plugins_installing_button(inputs)
	if (locale === "pt-BR") return pt_br2_settings_plugins_installing_button(inputs)
	if (locale === "ko") return ko_settings_plugins_installing_button(inputs)
	return fr_settings_plugins_installing_button(inputs)
});