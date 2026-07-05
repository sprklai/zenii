/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Timezone_LabelInputs */

const en_onboarding_timezone_label = /** @type {(inputs: Onboarding_Timezone_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Timezone`)
};

const zh_cn2_onboarding_timezone_label = /** @type {(inputs: Onboarding_Timezone_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`时区`)
};

const es_onboarding_timezone_label = /** @type {(inputs: Onboarding_Timezone_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zona horaria`)
};

const ja_onboarding_timezone_label = /** @type {(inputs: Onboarding_Timezone_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タイムゾーン`)
};

const hi_onboarding_timezone_label = /** @type {(inputs: Onboarding_Timezone_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`टाइमज़ोन`)
};

const pt_br2_onboarding_timezone_label = /** @type {(inputs: Onboarding_Timezone_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fuso horário`)
};

const ko_onboarding_timezone_label = /** @type {(inputs: Onboarding_Timezone_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`시간대`)
};

const fr_onboarding_timezone_label = /** @type {(inputs: Onboarding_Timezone_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fuseau horaire`)
};

/**
* | output |
* | --- |
* | "Timezone" |
*
* @param {Onboarding_Timezone_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_timezone_label = /** @type {((inputs?: Onboarding_Timezone_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Timezone_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_timezone_label(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_timezone_label(inputs)
	if (locale === "es") return es_onboarding_timezone_label(inputs)
	if (locale === "ja") return ja_onboarding_timezone_label(inputs)
	if (locale === "hi") return hi_onboarding_timezone_label(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_timezone_label(inputs)
	if (locale === "ko") return ko_onboarding_timezone_label(inputs)
	return fr_onboarding_timezone_label(inputs)
});