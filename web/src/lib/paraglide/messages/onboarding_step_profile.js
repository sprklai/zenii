/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Step_ProfileInputs */

const en_onboarding_step_profile = /** @type {(inputs: Onboarding_Step_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your Profile`)
};

const zh_cn2_onboarding_step_profile = /** @type {(inputs: Onboarding_Step_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的资料`)
};

const es_onboarding_step_profile = /** @type {(inputs: Onboarding_Step_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu perfil`)
};

const ja_onboarding_step_profile = /** @type {(inputs: Onboarding_Step_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロフィール`)
};

const hi_onboarding_step_profile = /** @type {(inputs: Onboarding_Step_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`आपकी प्रोफ़ाइल`)
};

const pt_br2_onboarding_step_profile = /** @type {(inputs: Onboarding_Step_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu Perfil`)
};

const ko_onboarding_step_profile = /** @type {(inputs: Onboarding_Step_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`프로필`)
};

const fr_onboarding_step_profile = /** @type {(inputs: Onboarding_Step_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre profil`)
};

/**
* | output |
* | --- |
* | "Your Profile" |
*
* @param {Onboarding_Step_ProfileInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_step_profile = /** @type {((inputs?: Onboarding_Step_ProfileInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Step_ProfileInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_step_profile(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_step_profile(inputs)
	if (locale === "es") return es_onboarding_step_profile(inputs)
	if (locale === "ja") return ja_onboarding_step_profile(inputs)
	if (locale === "hi") return hi_onboarding_step_profile(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_step_profile(inputs)
	if (locale === "ko") return ko_onboarding_step_profile(inputs)
	return fr_onboarding_step_profile(inputs)
});