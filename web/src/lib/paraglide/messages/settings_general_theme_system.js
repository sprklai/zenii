/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Theme_SystemInputs */

const en_settings_general_theme_system = /** @type {(inputs: Settings_General_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System`)
};

const zh_cn2_settings_general_theme_system = /** @type {(inputs: Settings_General_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`跟随系统`)
};

const es_settings_general_theme_system = /** @type {(inputs: Settings_General_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sistema`)
};

const ja_settings_general_theme_system = /** @type {(inputs: Settings_General_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`システム`)
};

const hi_settings_general_theme_system = /** @type {(inputs: Settings_General_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सिस्टम`)
};

const pt_br2_settings_general_theme_system = /** @type {(inputs: Settings_General_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sistema`)
};

const ko_settings_general_theme_system = /** @type {(inputs: Settings_General_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`시스템`)
};

const fr_settings_general_theme_system = /** @type {(inputs: Settings_General_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Système`)
};

/**
* | output |
* | --- |
* | "System" |
*
* @param {Settings_General_Theme_SystemInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_theme_system = /** @type {((inputs?: Settings_General_Theme_SystemInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Theme_SystemInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_theme_system(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_theme_system(inputs)
	if (locale === "es") return es_settings_general_theme_system(inputs)
	if (locale === "ja") return ja_settings_general_theme_system(inputs)
	if (locale === "hi") return hi_settings_general_theme_system(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_theme_system(inputs)
	if (locale === "ko") return ko_settings_general_theme_system(inputs)
	return fr_settings_general_theme_system(inputs)
});