/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Name_RequiredInputs */

const en_onboarding_name_required = /** @type {(inputs: Onboarding_Name_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your name is required`)
};

const zh_cn2_onboarding_name_required = /** @type {(inputs: Onboarding_Name_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名字为必填项`)
};

const es_onboarding_name_required = /** @type {(inputs: Onboarding_Name_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu nombre es obligatorio`)
};

const ja_onboarding_name_required = /** @type {(inputs: Onboarding_Name_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前は必須です`)
};

const hi_onboarding_name_required = /** @type {(inputs: Onboarding_Name_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`आपका नाम आवश्यक है`)
};

const pt_br2_onboarding_name_required = /** @type {(inputs: Onboarding_Name_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu nome é obrigatório`)
};

const ko_onboarding_name_required = /** @type {(inputs: Onboarding_Name_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이름은 필수입니다`)
};

const fr_onboarding_name_required = /** @type {(inputs: Onboarding_Name_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre nom est requis`)
};

/**
* | output |
* | --- |
* | "Your name is required" |
*
* @param {Onboarding_Name_RequiredInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_name_required = /** @type {((inputs?: Onboarding_Name_RequiredInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Name_RequiredInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_name_required(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_name_required(inputs)
	if (locale === "es") return es_onboarding_name_required(inputs)
	if (locale === "ja") return ja_onboarding_name_required(inputs)
	if (locale === "hi") return hi_onboarding_name_required(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_name_required(inputs)
	if (locale === "ko") return ko_onboarding_name_required(inputs)
	return fr_onboarding_name_required(inputs)
});