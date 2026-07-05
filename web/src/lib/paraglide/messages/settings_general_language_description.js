/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Language_DescriptionInputs */

const en_settings_general_language_description = /** @type {(inputs: Settings_General_Language_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose your preferred display language`)
};

const zh_cn2_settings_general_language_description = /** @type {(inputs: Settings_General_Language_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择您的显示语言`)
};

const es_settings_general_language_description = /** @type {(inputs: Settings_General_Language_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige tu idioma de visualización`)
};

const ja_settings_general_language_description = /** @type {(inputs: Settings_General_Language_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示言語を選択`)
};

const hi_settings_general_language_description = /** @type {(inputs: Settings_General_Language_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अपनी प्रदर्शन भाषा चुनें`)
};

const pt_br2_settings_general_language_description = /** @type {(inputs: Settings_General_Language_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha seu idioma de exibição`)
};

const ko_settings_general_language_description = /** @type {(inputs: Settings_General_Language_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`표시 언어를 선택하세요`)
};

const fr_settings_general_language_description = /** @type {(inputs: Settings_General_Language_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez votre langue d'affichage`)
};

/**
* | output |
* | --- |
* | "Choose your preferred display language" |
*
* @param {Settings_General_Language_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_language_description = /** @type {((inputs?: Settings_General_Language_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Language_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_language_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_language_description(inputs)
	if (locale === "es") return es_settings_general_language_description(inputs)
	if (locale === "ja") return ja_settings_general_language_description(inputs)
	if (locale === "hi") return hi_settings_general_language_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_language_description(inputs)
	if (locale === "ko") return ko_settings_general_language_description(inputs)
	return fr_settings_general_language_description(inputs)
});