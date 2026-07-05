/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Name_LabelInputs */

const en_onboarding_name_label = /** @type {(inputs: Onboarding_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your Name`)
};

const zh_cn2_onboarding_name_label = /** @type {(inputs: Onboarding_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的名字`)
};

const es_onboarding_name_label = /** @type {(inputs: Onboarding_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu nombre`)
};

const ja_onboarding_name_label = /** @type {(inputs: Onboarding_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの名前`)
};

const hi_onboarding_name_label = /** @type {(inputs: Onboarding_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`आपका नाम`)
};

const pt_br2_onboarding_name_label = /** @type {(inputs: Onboarding_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu Nome`)
};

const ko_onboarding_name_label = /** @type {(inputs: Onboarding_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이름`)
};

const fr_onboarding_name_label = /** @type {(inputs: Onboarding_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre nom`)
};

/**
* | output |
* | --- |
* | "Your Name" |
*
* @param {Onboarding_Name_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_name_label = /** @type {((inputs?: Onboarding_Name_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Name_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_name_label(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_name_label(inputs)
	if (locale === "es") return es_onboarding_name_label(inputs)
	if (locale === "ja") return ja_onboarding_name_label(inputs)
	if (locale === "hi") return hi_onboarding_name_label(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_name_label(inputs)
	if (locale === "ko") return ko_onboarding_name_label(inputs)
	return fr_onboarding_name_label(inputs)
});