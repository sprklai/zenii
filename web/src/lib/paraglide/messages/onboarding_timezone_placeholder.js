/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Timezone_PlaceholderInputs */

const en_onboarding_timezone_placeholder = /** @type {(inputs: Onboarding_Timezone_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g., America/Toronto`)
};

const zh_cn2_onboarding_timezone_placeholder = /** @type {(inputs: Onboarding_Timezone_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例如：Asia/Shanghai`)
};

const es_onboarding_timezone_placeholder = /** @type {(inputs: Onboarding_Timezone_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p. ej., America/Mexico_City`)
};

const ja_onboarding_timezone_placeholder = /** @type {(inputs: Onboarding_Timezone_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例：Asia/Tokyo`)
};

const hi_onboarding_timezone_placeholder = /** @type {(inputs: Onboarding_Timezone_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`जैसे, Asia/Kolkata`)
};

const pt_br2_onboarding_timezone_placeholder = /** @type {(inputs: Onboarding_Timezone_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ex.: America/Sao_Paulo`)
};

const ko_onboarding_timezone_placeholder = /** @type {(inputs: Onboarding_Timezone_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`예: Asia/Seoul`)
};

const fr_onboarding_timezone_placeholder = /** @type {(inputs: Onboarding_Timezone_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p. ex., Europe/Paris`)
};

/**
* | output |
* | --- |
* | "e.g., America/Toronto" |
*
* @param {Onboarding_Timezone_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_timezone_placeholder = /** @type {((inputs?: Onboarding_Timezone_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Timezone_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_timezone_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_timezone_placeholder(inputs)
	if (locale === "es") return es_onboarding_timezone_placeholder(inputs)
	if (locale === "ja") return ja_onboarding_timezone_placeholder(inputs)
	if (locale === "hi") return hi_onboarding_timezone_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_timezone_placeholder(inputs)
	if (locale === "ko") return ko_onboarding_timezone_placeholder(inputs)
	return fr_onboarding_timezone_placeholder(inputs)
});