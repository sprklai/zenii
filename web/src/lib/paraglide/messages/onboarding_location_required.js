/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Location_RequiredInputs */

const en_onboarding_location_required = /** @type {(inputs: Onboarding_Location_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your location is required`)
};

const zh_cn2_onboarding_location_required = /** @type {(inputs: Onboarding_Location_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`位置为必填项`)
};

const es_onboarding_location_required = /** @type {(inputs: Onboarding_Location_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu ubicación es obligatoria`)
};

const ja_onboarding_location_required = /** @type {(inputs: Onboarding_Location_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所在地は必須です`)
};

const hi_onboarding_location_required = /** @type {(inputs: Onboarding_Location_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`आपका स्थान आवश्यक है`)
};

const pt_br2_onboarding_location_required = /** @type {(inputs: Onboarding_Location_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua localização é obrigatória`)
};

const ko_onboarding_location_required = /** @type {(inputs: Onboarding_Location_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`위치는 필수입니다`)
};

const fr_onboarding_location_required = /** @type {(inputs: Onboarding_Location_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre localisation est requise`)
};

/**
* | output |
* | --- |
* | "Your location is required" |
*
* @param {Onboarding_Location_RequiredInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_location_required = /** @type {((inputs?: Onboarding_Location_RequiredInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Location_RequiredInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_location_required(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_location_required(inputs)
	if (locale === "es") return es_onboarding_location_required(inputs)
	if (locale === "ja") return ja_onboarding_location_required(inputs)
	if (locale === "hi") return hi_onboarding_location_required(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_location_required(inputs)
	if (locale === "ko") return ko_onboarding_location_required(inputs)
	return fr_onboarding_location_required(inputs)
});