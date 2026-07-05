/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Plugins_Browse_ButtonInputs */

const en_settings_plugins_browse_button = /** @type {(inputs: Settings_Plugins_Browse_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Browse Official Plugins`)
};

const zh_cn2_settings_plugins_browse_button = /** @type {(inputs: Settings_Plugins_Browse_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浏览官方插件`)
};

const es_settings_plugins_browse_button = /** @type {(inputs: Settings_Plugins_Browse_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar plugins oficiales`)
};

const ja_settings_plugins_browse_button = /** @type {(inputs: Settings_Plugins_Browse_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公式プラグインを閲覧`)
};

const hi_settings_plugins_browse_button = /** @type {(inputs: Settings_Plugins_Browse_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`आधिकारिक प्लगइन ब्राउज़ करें`)
};

const pt_br2_settings_plugins_browse_button = /** @type {(inputs: Settings_Plugins_Browse_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar Plugins Oficiais`)
};

const ko_settings_plugins_browse_button = /** @type {(inputs: Settings_Plugins_Browse_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`공식 플러그인 둘러보기`)
};

const fr_settings_plugins_browse_button = /** @type {(inputs: Settings_Plugins_Browse_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parcourir les plugins officiels`)
};

/**
* | output |
* | --- |
* | "Browse Official Plugins" |
*
* @param {Settings_Plugins_Browse_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_plugins_browse_button = /** @type {((inputs?: Settings_Plugins_Browse_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Plugins_Browse_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_plugins_browse_button(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_plugins_browse_button(inputs)
	if (locale === "es") return es_settings_plugins_browse_button(inputs)
	if (locale === "ja") return ja_settings_plugins_browse_button(inputs)
	if (locale === "hi") return hi_settings_plugins_browse_button(inputs)
	if (locale === "pt-BR") return pt_br2_settings_plugins_browse_button(inputs)
	if (locale === "ko") return ko_settings_plugins_browse_button(inputs)
	return fr_settings_plugins_browse_button(inputs)
});