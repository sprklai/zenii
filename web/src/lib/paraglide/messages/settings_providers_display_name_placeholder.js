/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Display_Name_PlaceholderInputs */

const en_settings_providers_display_name_placeholder = /** @type {(inputs: Settings_Providers_Display_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`My Gateway`)
};

const zh_cn2_settings_providers_display_name_placeholder = /** @type {(inputs: Settings_Providers_Display_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我的网关`)
};

const es_settings_providers_display_name_placeholder = /** @type {(inputs: Settings_Providers_Display_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mi puerta de enlace`)
};

const ja_settings_providers_display_name_placeholder = /** @type {(inputs: Settings_Providers_Display_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マイゲートウェイ`)
};

const hi_settings_providers_display_name_placeholder = /** @type {(inputs: Settings_Providers_Display_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मेरा गेटवे`)
};

const pt_br2_settings_providers_display_name_placeholder = /** @type {(inputs: Settings_Providers_Display_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meu gateway`)
};

const ko_settings_providers_display_name_placeholder = /** @type {(inputs: Settings_Providers_Display_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`내 게이트웨이`)
};

const fr_settings_providers_display_name_placeholder = /** @type {(inputs: Settings_Providers_Display_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ma passerelle`)
};

/**
* | output |
* | --- |
* | "My Gateway" |
*
* @param {Settings_Providers_Display_Name_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_display_name_placeholder = /** @type {((inputs?: Settings_Providers_Display_Name_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Display_Name_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_display_name_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_display_name_placeholder(inputs)
	if (locale === "es") return es_settings_providers_display_name_placeholder(inputs)
	if (locale === "ja") return ja_settings_providers_display_name_placeholder(inputs)
	if (locale === "hi") return hi_settings_providers_display_name_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_display_name_placeholder(inputs)
	if (locale === "ko") return ko_settings_providers_display_name_placeholder(inputs)
	return fr_settings_providers_display_name_placeholder(inputs)
});