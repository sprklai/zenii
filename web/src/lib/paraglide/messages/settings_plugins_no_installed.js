/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Plugins_No_InstalledInputs */

const en_settings_plugins_no_installed = /** @type {(inputs: Settings_Plugins_No_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No plugins installed.`)
};

const zh_cn2_settings_plugins_no_installed = /** @type {(inputs: Settings_Plugins_No_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未安装任何插件。`)
};

const es_settings_plugins_no_installed = /** @type {(inputs: Settings_Plugins_No_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay plugins instalados.`)
};

const ja_settings_plugins_no_installed = /** @type {(inputs: Settings_Plugins_No_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プラグインがインストールされていません。`)
};

const hi_settings_plugins_no_installed = /** @type {(inputs: Settings_Plugins_No_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कोई प्लगइन इंस्टॉल नहीं।`)
};

const pt_br2_settings_plugins_no_installed = /** @type {(inputs: Settings_Plugins_No_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum plugin instalado.`)
};

const ko_settings_plugins_no_installed = /** @type {(inputs: Settings_Plugins_No_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`설치된 플러그인이 없습니다.`)
};

const fr_settings_plugins_no_installed = /** @type {(inputs: Settings_Plugins_No_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun plugin installé.`)
};

/**
* | output |
* | --- |
* | "No plugins installed." |
*
* @param {Settings_Plugins_No_InstalledInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_plugins_no_installed = /** @type {((inputs?: Settings_Plugins_No_InstalledInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Plugins_No_InstalledInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_plugins_no_installed(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_plugins_no_installed(inputs)
	if (locale === "es") return es_settings_plugins_no_installed(inputs)
	if (locale === "ja") return ja_settings_plugins_no_installed(inputs)
	if (locale === "hi") return hi_settings_plugins_no_installed(inputs)
	if (locale === "pt-BR") return pt_br2_settings_plugins_no_installed(inputs)
	if (locale === "ko") return ko_settings_plugins_no_installed(inputs)
	return fr_settings_plugins_no_installed(inputs)
});