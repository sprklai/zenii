/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Profile_DescriptionInputs */

const en_onboarding_profile_description = /** @type {(inputs: Onboarding_Profile_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tell Zenii a bit about yourself so it can give you personalized, context-aware responses.`)
};

const zh_cn2_onboarding_profile_description = /** @type {(inputs: Onboarding_Profile_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`告诉 Zenii 一些关于你自己的信息，以便它为你提供个性化的、情境感知的回复。`)
};

const es_onboarding_profile_description = /** @type {(inputs: Onboarding_Profile_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuéntale a Zenii un poco sobre ti para que pueda darte respuestas personalizadas y contextuales.`)
};

const ja_onboarding_profile_description = /** @type {(inputs: Onboarding_Profile_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii にあなたのことを少し教えてください。パーソナライズされた文脈に応じた回答を提供できるようになります。`)
};

const hi_onboarding_profile_description = /** @type {(inputs: Onboarding_Profile_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii को अपने बारे में कुछ बताएँ ताकि यह आपको व्यक्तिगत, संदर्भ-जागरूक प्रतिक्रियाएँ दे सके।`)
};

const pt_br2_onboarding_profile_description = /** @type {(inputs: Onboarding_Profile_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conte um pouco sobre você ao Zenii para que ele possa dar respostas personalizadas e contextualizadas.`)
};

const ko_onboarding_profile_description = /** @type {(inputs: Onboarding_Profile_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii에게 자신에 대해 조금 알려주시면 개인화된 상황 인식 응답을 받을 수 있습니다.`)
};

const fr_onboarding_profile_description = /** @type {(inputs: Onboarding_Profile_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Présentez-vous à Zenii pour obtenir des réponses personnalisées et contextuelles.`)
};

/**
* | output |
* | --- |
* | "Tell Zenii a bit about yourself so it can give you personalized, context-aware responses." |
*
* @param {Onboarding_Profile_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_profile_description = /** @type {((inputs?: Onboarding_Profile_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Profile_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_profile_description(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_profile_description(inputs)
	if (locale === "es") return es_onboarding_profile_description(inputs)
	if (locale === "ja") return ja_onboarding_profile_description(inputs)
	if (locale === "hi") return hi_onboarding_profile_description(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_profile_description(inputs)
	if (locale === "ko") return ko_onboarding_profile_description(inputs)
	return fr_onboarding_profile_description(inputs)
});