/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Plugins_Official_TitleInputs */

const en_settings_plugins_official_title = /** @type {(inputs: Settings_Plugins_Official_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Official Plugins`)
};

const zh_cn2_settings_plugins_official_title = /** @type {(inputs: Settings_Plugins_Official_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`官方插件`)
};

const es_settings_plugins_official_title = /** @type {(inputs: Settings_Plugins_Official_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plugins oficiales`)
};

const ja_settings_plugins_official_title = /** @type {(inputs: Settings_Plugins_Official_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公式プラグイン`)
};

const hi_settings_plugins_official_title = /** @type {(inputs: Settings_Plugins_Official_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`आधिकारिक प्लगइन`)
};

const pt_br2_settings_plugins_official_title = /** @type {(inputs: Settings_Plugins_Official_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plugins Oficiais`)
};

const ko_settings_plugins_official_title = /** @type {(inputs: Settings_Plugins_Official_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`공식 플러그인`)
};

const fr_settings_plugins_official_title = /** @type {(inputs: Settings_Plugins_Official_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plugins officiels`)
};

/**
* | output |
* | --- |
* | "Official Plugins" |
*
* @param {Settings_Plugins_Official_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_plugins_official_title = /** @type {((inputs?: Settings_Plugins_Official_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Plugins_Official_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_plugins_official_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_plugins_official_title(inputs)
	if (locale === "es") return es_settings_plugins_official_title(inputs)
	if (locale === "ja") return ja_settings_plugins_official_title(inputs)
	if (locale === "hi") return hi_settings_plugins_official_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_plugins_official_title(inputs)
	if (locale === "ko") return ko_settings_plugins_official_title(inputs)
	return fr_settings_plugins_official_title(inputs)
});