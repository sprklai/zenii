/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Theme_LightInputs */

const en_settings_general_theme_light = /** @type {(inputs: Settings_General_Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Light`)
};

const zh_cn2_settings_general_theme_light = /** @type {(inputs: Settings_General_Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浅色`)
};

const es_settings_general_theme_light = /** @type {(inputs: Settings_General_Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Claro`)
};

const ja_settings_general_theme_light = /** @type {(inputs: Settings_General_Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライト`)
};

const hi_settings_general_theme_light = /** @type {(inputs: Settings_General_Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`लाइट`)
};

const pt_br2_settings_general_theme_light = /** @type {(inputs: Settings_General_Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Claro`)
};

const ko_settings_general_theme_light = /** @type {(inputs: Settings_General_Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`라이트`)
};

const fr_settings_general_theme_light = /** @type {(inputs: Settings_General_Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clair`)
};

/**
* | output |
* | --- |
* | "Light" |
*
* @param {Settings_General_Theme_LightInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_theme_light = /** @type {((inputs?: Settings_General_Theme_LightInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Theme_LightInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_theme_light(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_theme_light(inputs)
	if (locale === "es") return es_settings_general_theme_light(inputs)
	if (locale === "ja") return ja_settings_general_theme_light(inputs)
	if (locale === "hi") return hi_settings_general_theme_light(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_theme_light(inputs)
	if (locale === "ko") return ko_settings_general_theme_light(inputs)
	return fr_settings_general_theme_light(inputs)
});