/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Language_TitleInputs */

const en_settings_general_language_title = /** @type {(inputs: Settings_General_Language_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Language`)
};

const zh_cn2_settings_general_language_title = /** @type {(inputs: Settings_General_Language_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`语言`)
};

const es_settings_general_language_title = /** @type {(inputs: Settings_General_Language_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma`)
};

const ja_settings_general_language_title = /** @type {(inputs: Settings_General_Language_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`言語`)
};

const hi_settings_general_language_title = /** @type {(inputs: Settings_General_Language_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`भाषा`)
};

const pt_br2_settings_general_language_title = /** @type {(inputs: Settings_General_Language_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma`)
};

const ko_settings_general_language_title = /** @type {(inputs: Settings_General_Language_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`언어`)
};

const fr_settings_general_language_title = /** @type {(inputs: Settings_General_Language_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Langue`)
};

/**
* | output |
* | --- |
* | "Language" |
*
* @param {Settings_General_Language_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_language_title = /** @type {((inputs?: Settings_General_Language_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Language_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_language_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_language_title(inputs)
	if (locale === "es") return es_settings_general_language_title(inputs)
	if (locale === "ja") return ja_settings_general_language_title(inputs)
	if (locale === "hi") return hi_settings_general_language_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_language_title(inputs)
	if (locale === "ko") return ko_settings_general_language_title(inputs)
	return fr_settings_general_language_title(inputs)
});