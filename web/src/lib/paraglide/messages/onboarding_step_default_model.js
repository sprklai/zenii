/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Step_Default_ModelInputs */

const en_onboarding_step_default_model = /** @type {(inputs: Onboarding_Step_Default_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Default Model`)
};

const zh_cn2_onboarding_step_default_model = /** @type {(inputs: Onboarding_Step_Default_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`默认模型`)
};

const es_onboarding_step_default_model = /** @type {(inputs: Onboarding_Step_Default_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modelo predeterminado`)
};

const ja_onboarding_step_default_model = /** @type {(inputs: Onboarding_Step_Default_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`デフォルトモデル`)
};

const hi_onboarding_step_default_model = /** @type {(inputs: Onboarding_Step_Default_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`डिफ़ॉल्ट मॉडल`)
};

const pt_br2_onboarding_step_default_model = /** @type {(inputs: Onboarding_Step_Default_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modelo Padrão`)
};

const ko_onboarding_step_default_model = /** @type {(inputs: Onboarding_Step_Default_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`기본 모델`)
};

const fr_onboarding_step_default_model = /** @type {(inputs: Onboarding_Step_Default_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modèle par défaut`)
};

/**
* | output |
* | --- |
* | "Default Model" |
*
* @param {Onboarding_Step_Default_ModelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_step_default_model = /** @type {((inputs?: Onboarding_Step_Default_ModelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Step_Default_ModelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_step_default_model(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_step_default_model(inputs)
	if (locale === "es") return es_onboarding_step_default_model(inputs)
	if (locale === "ja") return ja_onboarding_step_default_model(inputs)
	if (locale === "hi") return hi_onboarding_step_default_model(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_step_default_model(inputs)
	if (locale === "ko") return ko_onboarding_step_default_model(inputs)
	return fr_onboarding_step_default_model(inputs)
});