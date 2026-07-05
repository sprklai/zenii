/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Profile_TitleInputs */

const en_onboarding_profile_title = /** @type {(inputs: Onboarding_Profile_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your Profile`)
};

const zh_cn2_onboarding_profile_title = /** @type {(inputs: Onboarding_Profile_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的个人资料`)
};

const es_onboarding_profile_title = /** @type {(inputs: Onboarding_Profile_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu perfil`)
};

const ja_onboarding_profile_title = /** @type {(inputs: Onboarding_Profile_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのプロフィール`)
};

const hi_onboarding_profile_title = /** @type {(inputs: Onboarding_Profile_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`आपकी प्रोफ़ाइल`)
};

const pt_br2_onboarding_profile_title = /** @type {(inputs: Onboarding_Profile_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu Perfil`)
};

const ko_onboarding_profile_title = /** @type {(inputs: Onboarding_Profile_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`프로필`)
};

const fr_onboarding_profile_title = /** @type {(inputs: Onboarding_Profile_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre profil`)
};

/**
* | output |
* | --- |
* | "Your Profile" |
*
* @param {Onboarding_Profile_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_profile_title = /** @type {((inputs?: Onboarding_Profile_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Profile_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_profile_title(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_profile_title(inputs)
	if (locale === "es") return es_onboarding_profile_title(inputs)
	if (locale === "ja") return ja_onboarding_profile_title(inputs)
	if (locale === "hi") return hi_onboarding_profile_title(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_profile_title(inputs)
	if (locale === "ko") return ko_onboarding_profile_title(inputs)
	return fr_onboarding_profile_title(inputs)
});