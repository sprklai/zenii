/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Plugins_Install_TitleInputs */

const en_settings_plugins_install_title = /** @type {(inputs: Settings_Plugins_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install Plugin`)
};

const zh_cn2_settings_plugins_install_title = /** @type {(inputs: Settings_Plugins_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装插件`)
};

const es_settings_plugins_install_title = /** @type {(inputs: Settings_Plugins_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalar plugin`)
};

const ja_settings_plugins_install_title = /** @type {(inputs: Settings_Plugins_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プラグインをインストール`)
};

const hi_settings_plugins_install_title = /** @type {(inputs: Settings_Plugins_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्लगइन इंस्टॉल करें`)
};

const pt_br2_settings_plugins_install_title = /** @type {(inputs: Settings_Plugins_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalar Plugin`)
};

const ko_settings_plugins_install_title = /** @type {(inputs: Settings_Plugins_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`플러그인 설치`)
};

const fr_settings_plugins_install_title = /** @type {(inputs: Settings_Plugins_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installer un plugin`)
};

/**
* | output |
* | --- |
* | "Install Plugin" |
*
* @param {Settings_Plugins_Install_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_plugins_install_title = /** @type {((inputs?: Settings_Plugins_Install_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Plugins_Install_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_plugins_install_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_plugins_install_title(inputs)
	if (locale === "es") return es_settings_plugins_install_title(inputs)
	if (locale === "ja") return ja_settings_plugins_install_title(inputs)
	if (locale === "hi") return hi_settings_plugins_install_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_plugins_install_title(inputs)
	if (locale === "ko") return ko_settings_plugins_install_title(inputs)
	return fr_settings_plugins_install_title(inputs)
});