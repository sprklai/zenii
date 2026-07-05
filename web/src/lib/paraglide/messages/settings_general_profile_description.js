/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Profile_DescriptionInputs */

const en_settings_general_profile_description = /** @type {(inputs: Settings_General_Profile_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personalize your experience and help the AI give context-aware responses`)
};

const zh_cn2_settings_general_profile_description = /** @type {(inputs: Settings_General_Profile_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`个性化你的体验，帮助 AI 提供情境感知的回复`)
};

const es_settings_general_profile_description = /** @type {(inputs: Settings_General_Profile_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personaliza tu experiencia y ayuda a la IA a dar respuestas contextuales`)
};

const ja_settings_general_profile_description = /** @type {(inputs: Settings_General_Profile_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`体験をパーソナライズし、AI が文脈に応じた回答を提供できるようにします`)
};

const hi_settings_general_profile_description = /** @type {(inputs: Settings_General_Profile_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अपने अनुभव को व्यक्तिगत करें और AI को संदर्भ-जागरूक प्रतिक्रियाएँ देने में मदद करें`)
};

const pt_br2_settings_general_profile_description = /** @type {(inputs: Settings_General_Profile_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personalize sua experiência e ajude a IA a dar respostas contextualizadas`)
};

const ko_settings_general_profile_description = /** @type {(inputs: Settings_General_Profile_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`경험을 개인화하고 AI가 상황 인식 응답을 제공하도록 도우세요`)
};

const fr_settings_general_profile_description = /** @type {(inputs: Settings_General_Profile_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personnalisez votre expérience et aidez l'IA à donner des réponses contextuelles`)
};

/**
* | output |
* | --- |
* | "Personalize your experience and help the AI give context-aware responses" |
*
* @param {Settings_General_Profile_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_profile_description = /** @type {((inputs?: Settings_General_Profile_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Profile_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_profile_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_profile_description(inputs)
	if (locale === "es") return es_settings_general_profile_description(inputs)
	if (locale === "ja") return ja_settings_general_profile_description(inputs)
	if (locale === "hi") return hi_settings_general_profile_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_profile_description(inputs)
	if (locale === "ko") return ko_settings_general_profile_description(inputs)
	return fr_settings_general_profile_description(inputs)
});