/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Location_LabelInputs */

const en_onboarding_location_label = /** @type {(inputs: Onboarding_Location_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Location`)
};

const zh_cn2_onboarding_location_label = /** @type {(inputs: Onboarding_Location_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`位置`)
};

const es_onboarding_location_label = /** @type {(inputs: Onboarding_Location_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ubicación`)
};

const ja_onboarding_location_label = /** @type {(inputs: Onboarding_Location_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所在地`)
};

const hi_onboarding_location_label = /** @type {(inputs: Onboarding_Location_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`स्थान`)
};

const pt_br2_onboarding_location_label = /** @type {(inputs: Onboarding_Location_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Localização`)
};

const ko_onboarding_location_label = /** @type {(inputs: Onboarding_Location_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`위치`)
};

const fr_onboarding_location_label = /** @type {(inputs: Onboarding_Location_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Localisation`)
};

/**
* | output |
* | --- |
* | "Location" |
*
* @param {Onboarding_Location_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_location_label = /** @type {((inputs?: Onboarding_Location_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Location_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_location_label(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_location_label(inputs)
	if (locale === "es") return es_onboarding_location_label(inputs)
	if (locale === "ja") return ja_onboarding_location_label(inputs)
	if (locale === "hi") return hi_onboarding_location_label(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_location_label(inputs)
	if (locale === "ko") return ko_onboarding_location_label(inputs)
	return fr_onboarding_location_label(inputs)
});