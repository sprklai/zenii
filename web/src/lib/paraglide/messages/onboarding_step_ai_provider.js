/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Step_Ai_ProviderInputs */

const en_onboarding_step_ai_provider = /** @type {(inputs: Onboarding_Step_Ai_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI Provider`)
};

const zh_cn2_onboarding_step_ai_provider = /** @type {(inputs: Onboarding_Step_Ai_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI 提供商`)
};

const es_onboarding_step_ai_provider = /** @type {(inputs: Onboarding_Step_Ai_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Proveedor de IA`)
};

const ja_onboarding_step_ai_provider = /** @type {(inputs: Onboarding_Step_Ai_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI プロバイダー`)
};

const hi_onboarding_step_ai_provider = /** @type {(inputs: Onboarding_Step_Ai_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI प्रदाता`)
};

const pt_br2_onboarding_step_ai_provider = /** @type {(inputs: Onboarding_Step_Ai_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Provedor de IA`)
};

const ko_onboarding_step_ai_provider = /** @type {(inputs: Onboarding_Step_Ai_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI 공급자`)
};

const fr_onboarding_step_ai_provider = /** @type {(inputs: Onboarding_Step_Ai_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fournisseur d'IA`)
};

/**
* | output |
* | --- |
* | "AI Provider" |
*
* @param {Onboarding_Step_Ai_ProviderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_step_ai_provider = /** @type {((inputs?: Onboarding_Step_Ai_ProviderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Step_Ai_ProviderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_step_ai_provider(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_step_ai_provider(inputs)
	if (locale === "es") return es_onboarding_step_ai_provider(inputs)
	if (locale === "ja") return ja_onboarding_step_ai_provider(inputs)
	if (locale === "hi") return hi_onboarding_step_ai_provider(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_step_ai_provider(inputs)
	if (locale === "ko") return ko_onboarding_step_ai_provider(inputs)
	return fr_onboarding_step_ai_provider(inputs)
});