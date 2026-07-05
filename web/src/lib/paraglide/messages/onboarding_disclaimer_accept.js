/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Disclaimer_AcceptInputs */

const en_onboarding_disclaimer_accept = /** @type {(inputs: Onboarding_Disclaimer_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I understand and accept`)
};

const zh_cn2_onboarding_disclaimer_accept = /** @type {(inputs: Onboarding_Disclaimer_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我已理解并接受`)
};

const es_onboarding_disclaimer_accept = /** @type {(inputs: Onboarding_Disclaimer_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entiendo y acepto`)
};

const ja_onboarding_disclaimer_accept = /** @type {(inputs: Onboarding_Disclaimer_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`理解して同意します`)
};

const hi_onboarding_disclaimer_accept = /** @type {(inputs: Onboarding_Disclaimer_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मैं समझता/समझती हूँ और स्वीकार करता/करती हूँ`)
};

const pt_br2_onboarding_disclaimer_accept = /** @type {(inputs: Onboarding_Disclaimer_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eu entendo e aceito`)
};

const ko_onboarding_disclaimer_accept = /** @type {(inputs: Onboarding_Disclaimer_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이해하고 수락합니다`)
};

const fr_onboarding_disclaimer_accept = /** @type {(inputs: Onboarding_Disclaimer_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je comprends et j'accepte`)
};

/**
* | output |
* | --- |
* | "I understand and accept" |
*
* @param {Onboarding_Disclaimer_AcceptInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_disclaimer_accept = /** @type {((inputs?: Onboarding_Disclaimer_AcceptInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Disclaimer_AcceptInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_disclaimer_accept(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_disclaimer_accept(inputs)
	if (locale === "es") return es_onboarding_disclaimer_accept(inputs)
	if (locale === "ja") return ja_onboarding_disclaimer_accept(inputs)
	if (locale === "hi") return hi_onboarding_disclaimer_accept(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_disclaimer_accept(inputs)
	if (locale === "ko") return ko_onboarding_disclaimer_accept(inputs)
	return fr_onboarding_disclaimer_accept(inputs)
});