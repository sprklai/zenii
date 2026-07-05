/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Appearance_TitleInputs */

const en_settings_general_appearance_title = /** @type {(inputs: Settings_General_Appearance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appearance`)
};

const zh_cn2_settings_general_appearance_title = /** @type {(inputs: Settings_General_Appearance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`外观`)
};

const es_settings_general_appearance_title = /** @type {(inputs: Settings_General_Appearance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apariencia`)
};

const ja_settings_general_appearance_title = /** @type {(inputs: Settings_General_Appearance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`外観`)
};

const hi_settings_general_appearance_title = /** @type {(inputs: Settings_General_Appearance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`दिखावट`)
};

const pt_br2_settings_general_appearance_title = /** @type {(inputs: Settings_General_Appearance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aparência`)
};

const ko_settings_general_appearance_title = /** @type {(inputs: Settings_General_Appearance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`외관`)
};

const fr_settings_general_appearance_title = /** @type {(inputs: Settings_General_Appearance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apparence`)
};

/**
* | output |
* | --- |
* | "Appearance" |
*
* @param {Settings_General_Appearance_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_appearance_title = /** @type {((inputs?: Settings_General_Appearance_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Appearance_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_appearance_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_appearance_title(inputs)
	if (locale === "es") return es_settings_general_appearance_title(inputs)
	if (locale === "ja") return ja_settings_general_appearance_title(inputs)
	if (locale === "hi") return hi_settings_general_appearance_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_appearance_title(inputs)
	if (locale === "ko") return ko_settings_general_appearance_title(inputs)
	return fr_settings_general_appearance_title(inputs)
});