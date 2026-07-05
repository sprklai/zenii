/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Finish_ButtonInputs */

const en_onboarding_finish_button = /** @type {(inputs: Onboarding_Finish_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get Started`)
};

const zh_cn2_onboarding_finish_button = /** @type {(inputs: Onboarding_Finish_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开始使用`)
};

const es_onboarding_finish_button = /** @type {(inputs: Onboarding_Finish_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comenzar`)
};

const ja_onboarding_finish_button = /** @type {(inputs: Onboarding_Finish_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`始める`)
};

const hi_onboarding_finish_button = /** @type {(inputs: Onboarding_Finish_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`शुरू करें`)
};

const pt_br2_onboarding_finish_button = /** @type {(inputs: Onboarding_Finish_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Começar`)
};

const ko_onboarding_finish_button = /** @type {(inputs: Onboarding_Finish_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`시작하기`)
};

const fr_onboarding_finish_button = /** @type {(inputs: Onboarding_Finish_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commencer`)
};

/**
* | output |
* | --- |
* | "Get Started" |
*
* @param {Onboarding_Finish_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_finish_button = /** @type {((inputs?: Onboarding_Finish_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Finish_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_finish_button(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_finish_button(inputs)
	if (locale === "es") return es_onboarding_finish_button(inputs)
	if (locale === "ja") return ja_onboarding_finish_button(inputs)
	if (locale === "hi") return hi_onboarding_finish_button(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_finish_button(inputs)
	if (locale === "ko") return ko_onboarding_finish_button(inputs)
	return fr_onboarding_finish_button(inputs)
});