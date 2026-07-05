/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Theme_DarkInputs */

const en_settings_general_theme_dark = /** @type {(inputs: Settings_General_Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dark`)
};

const zh_cn2_settings_general_theme_dark = /** @type {(inputs: Settings_General_Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`深色`)
};

const es_settings_general_theme_dark = /** @type {(inputs: Settings_General_Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oscuro`)
};

const ja_settings_general_theme_dark = /** @type {(inputs: Settings_General_Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダーク`)
};

const hi_settings_general_theme_dark = /** @type {(inputs: Settings_General_Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`डार्क`)
};

const pt_br2_settings_general_theme_dark = /** @type {(inputs: Settings_General_Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escuro`)
};

const ko_settings_general_theme_dark = /** @type {(inputs: Settings_General_Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`다크`)
};

const fr_settings_general_theme_dark = /** @type {(inputs: Settings_General_Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sombre`)
};

/**
* | output |
* | --- |
* | "Dark" |
*
* @param {Settings_General_Theme_DarkInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_theme_dark = /** @type {((inputs?: Settings_General_Theme_DarkInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Theme_DarkInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_theme_dark(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_theme_dark(inputs)
	if (locale === "es") return es_settings_general_theme_dark(inputs)
	if (locale === "ja") return ja_settings_general_theme_dark(inputs)
	if (locale === "hi") return hi_settings_general_theme_dark(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_theme_dark(inputs)
	if (locale === "ko") return ko_settings_general_theme_dark(inputs)
	return fr_settings_general_theme_dark(inputs)
});