/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Tab_PluginsInputs */

const en_settings_tab_plugins = /** @type {(inputs: Settings_Tab_PluginsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plugins`)
};

const zh_cn2_settings_tab_plugins = /** @type {(inputs: Settings_Tab_PluginsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`插件`)
};

const es_settings_tab_plugins = /** @type {(inputs: Settings_Tab_PluginsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plugins`)
};

const ja_settings_tab_plugins = /** @type {(inputs: Settings_Tab_PluginsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プラグイン`)
};

const hi_settings_tab_plugins = /** @type {(inputs: Settings_Tab_PluginsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्लगइन`)
};

const pt_br2_settings_tab_plugins = /** @type {(inputs: Settings_Tab_PluginsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plugins`)
};

const ko_settings_tab_plugins = /** @type {(inputs: Settings_Tab_PluginsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`플러그인`)
};

const fr_settings_tab_plugins = /** @type {(inputs: Settings_Tab_PluginsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plugins`)
};

/**
* | output |
* | --- |
* | "Plugins" |
*
* @param {Settings_Tab_PluginsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_tab_plugins = /** @type {((inputs?: Settings_Tab_PluginsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Tab_PluginsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_tab_plugins(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_tab_plugins(inputs)
	if (locale === "es") return es_settings_tab_plugins(inputs)
	if (locale === "ja") return ja_settings_tab_plugins(inputs)
	if (locale === "hi") return hi_settings_tab_plugins(inputs)
	if (locale === "pt-BR") return pt_br2_settings_tab_plugins(inputs)
	if (locale === "ko") return ko_settings_tab_plugins(inputs)
	return fr_settings_tab_plugins(inputs)
});