/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Plugins_Detail_InstalledInputs */

const en_settings_plugins_detail_installed = /** @type {(inputs: Settings_Plugins_Detail_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installed:`)
};

const zh_cn2_settings_plugins_detail_installed = /** @type {(inputs: Settings_Plugins_Detail_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已安装：`)
};

const es_settings_plugins_detail_installed = /** @type {(inputs: Settings_Plugins_Detail_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalado:`)
};

const ja_settings_plugins_detail_installed = /** @type {(inputs: Settings_Plugins_Detail_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`インストール日：`)
};

const hi_settings_plugins_detail_installed = /** @type {(inputs: Settings_Plugins_Detail_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`इंस्टॉल्ड:`)
};

const pt_br2_settings_plugins_detail_installed = /** @type {(inputs: Settings_Plugins_Detail_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalado:`)
};

const ko_settings_plugins_detail_installed = /** @type {(inputs: Settings_Plugins_Detail_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`설치됨:`)
};

const fr_settings_plugins_detail_installed = /** @type {(inputs: Settings_Plugins_Detail_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installé :`)
};

/**
* | output |
* | --- |
* | "Installed:" |
*
* @param {Settings_Plugins_Detail_InstalledInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_plugins_detail_installed = /** @type {((inputs?: Settings_Plugins_Detail_InstalledInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Plugins_Detail_InstalledInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_plugins_detail_installed(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_plugins_detail_installed(inputs)
	if (locale === "es") return es_settings_plugins_detail_installed(inputs)
	if (locale === "ja") return ja_settings_plugins_detail_installed(inputs)
	if (locale === "hi") return hi_settings_plugins_detail_installed(inputs)
	if (locale === "pt-BR") return pt_br2_settings_plugins_detail_installed(inputs)
	if (locale === "ko") return ko_settings_plugins_detail_installed(inputs)
	return fr_settings_plugins_detail_installed(inputs)
});