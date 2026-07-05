/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_TitleInputs */

const en_onboarding_title = /** @type {(inputs: Onboarding_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Welcome to Zenii`)
};

const zh_cn2_onboarding_title = /** @type {(inputs: Onboarding_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`欢迎使用 Zenii`)
};

const es_onboarding_title = /** @type {(inputs: Onboarding_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bienvenido a Zenii`)
};

const ja_onboarding_title = /** @type {(inputs: Onboarding_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii へようこそ`)
};

const hi_onboarding_title = /** @type {(inputs: Onboarding_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii में आपका स्वागत है`)
};

const pt_br2_onboarding_title = /** @type {(inputs: Onboarding_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bem-vindo ao Zenii`)
};

const ko_onboarding_title = /** @type {(inputs: Onboarding_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii에 오신 것을 환영합니다`)
};

const fr_onboarding_title = /** @type {(inputs: Onboarding_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bienvenue sur Zenii`)
};

/**
* | output |
* | --- |
* | "Welcome to Zenii" |
*
* @param {Onboarding_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_title = /** @type {((inputs?: Onboarding_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_title(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_title(inputs)
	if (locale === "es") return es_onboarding_title(inputs)
	if (locale === "ja") return ja_onboarding_title(inputs)
	if (locale === "hi") return hi_onboarding_title(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_title(inputs)
	if (locale === "ko") return ko_onboarding_title(inputs)
	return fr_onboarding_title(inputs)
});