/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Plugins_Install_PlaceholderInputs */

const en_settings_plugins_install_placeholder = /** @type {(inputs: Settings_Plugins_Install_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Git URL or local path`)
};

const zh_cn2_settings_plugins_install_placeholder = /** @type {(inputs: Settings_Plugins_Install_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Git URL 或本地路径`)
};

const es_settings_plugins_install_placeholder = /** @type {(inputs: Settings_Plugins_Install_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL de Git o ruta local`)
};

const ja_settings_plugins_install_placeholder = /** @type {(inputs: Settings_Plugins_Install_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Git URL またはローカルパス`)
};

const hi_settings_plugins_install_placeholder = /** @type {(inputs: Settings_Plugins_Install_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Git URL या लोकल पथ`)
};

const pt_br2_settings_plugins_install_placeholder = /** @type {(inputs: Settings_Plugins_Install_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL Git ou caminho local`)
};

const ko_settings_plugins_install_placeholder = /** @type {(inputs: Settings_Plugins_Install_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Git URL 또는 로컬 경로`)
};

const fr_settings_plugins_install_placeholder = /** @type {(inputs: Settings_Plugins_Install_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL Git ou chemin local`)
};

/**
* | output |
* | --- |
* | "Git URL or local path" |
*
* @param {Settings_Plugins_Install_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_plugins_install_placeholder = /** @type {((inputs?: Settings_Plugins_Install_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Plugins_Install_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_plugins_install_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_plugins_install_placeholder(inputs)
	if (locale === "es") return es_settings_plugins_install_placeholder(inputs)
	if (locale === "ja") return ja_settings_plugins_install_placeholder(inputs)
	if (locale === "hi") return hi_settings_plugins_install_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_settings_plugins_install_placeholder(inputs)
	if (locale === "ko") return ko_settings_plugins_install_placeholder(inputs)
	return fr_settings_plugins_install_placeholder(inputs)
});