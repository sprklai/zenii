/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Provider_TitleInputs */

const en_onboarding_provider_title = /** @type {(inputs: Onboarding_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set up an AI Provider`)
};

const zh_cn2_onboarding_provider_title = /** @type {(inputs: Onboarding_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`设置 AI 提供商`)
};

const es_onboarding_provider_title = /** @type {(inputs: Onboarding_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configura un proveedor de IA`)
};

const ja_onboarding_provider_title = /** @type {(inputs: Onboarding_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI プロバイダーを設定`)
};

const hi_onboarding_provider_title = /** @type {(inputs: Onboarding_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI प्रदाता सेट करें`)
};

const pt_br2_onboarding_provider_title = /** @type {(inputs: Onboarding_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurar um Provedor de IA`)
};

const ko_onboarding_provider_title = /** @type {(inputs: Onboarding_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI 공급자 설정`)
};

const fr_onboarding_provider_title = /** @type {(inputs: Onboarding_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurer un fournisseur d'IA`)
};

/**
* | output |
* | --- |
* | "Set up an AI Provider" |
*
* @param {Onboarding_Provider_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_provider_title = /** @type {((inputs?: Onboarding_Provider_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Provider_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_provider_title(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_provider_title(inputs)
	if (locale === "es") return es_onboarding_provider_title(inputs)
	if (locale === "ja") return ja_onboarding_provider_title(inputs)
	if (locale === "hi") return hi_onboarding_provider_title(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_provider_title(inputs)
	if (locale === "ko") return ko_onboarding_provider_title(inputs)
	return fr_onboarding_provider_title(inputs)
});