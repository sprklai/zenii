/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_DescriptionInputs */

const en_onboarding_description = /** @type {(inputs: Onboarding_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Let's get you set up so you can start chatting.`)
};

const zh_cn2_onboarding_description = /** @type {(inputs: Onboarding_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`让我们完成设置，以便你可以开始聊天。`)
};

const es_onboarding_description = /** @type {(inputs: Onboarding_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vamos a configurarte para que puedas empezar a chatear.`)
};

const ja_onboarding_description = /** @type {(inputs: Onboarding_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャットを始められるようにセットアップしましょう。`)
};

const hi_onboarding_description = /** @type {(inputs: Onboarding_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चलिए आपको सेट अप करते हैं ताकि आप चैटिंग शुरू कर सकें।`)
};

const pt_br2_onboarding_description = /** @type {(inputs: Onboarding_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vamos configurar tudo para que você possa começar a conversar.`)
};

const ko_onboarding_description = /** @type {(inputs: Onboarding_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채팅을 시작할 수 있도록 설정해 드리겠습니다.`)
};

const fr_onboarding_description = /** @type {(inputs: Onboarding_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurons votre compte pour que vous puissiez commencer à discuter.`)
};

/**
* | output |
* | --- |
* | "Let's get you set up so you can start chatting." |
*
* @param {Onboarding_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_description = /** @type {((inputs?: Onboarding_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_description(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_description(inputs)
	if (locale === "es") return es_onboarding_description(inputs)
	if (locale === "ja") return ja_onboarding_description(inputs)
	if (locale === "hi") return hi_onboarding_description(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_description(inputs)
	if (locale === "ko") return ko_onboarding_description(inputs)
	return fr_onboarding_description(inputs)
});