/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Prev_Step_AriaInputs */

const en_onboarding_prev_step_aria = /** @type {(inputs: Onboarding_Prev_Step_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Previous step`)
};

const zh_cn2_onboarding_prev_step_aria = /** @type {(inputs: Onboarding_Prev_Step_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上一步`)
};

const es_onboarding_prev_step_aria = /** @type {(inputs: Onboarding_Prev_Step_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paso anterior`)
};

const ja_onboarding_prev_step_aria = /** @type {(inputs: Onboarding_Prev_Step_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前のステップ`)
};

const hi_onboarding_prev_step_aria = /** @type {(inputs: Onboarding_Prev_Step_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पिछला चरण`)
};

const pt_br2_onboarding_prev_step_aria = /** @type {(inputs: Onboarding_Prev_Step_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etapa anterior`)
};

const ko_onboarding_prev_step_aria = /** @type {(inputs: Onboarding_Prev_Step_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이전 단계`)
};

const fr_onboarding_prev_step_aria = /** @type {(inputs: Onboarding_Prev_Step_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Étape précédente`)
};

/**
* | output |
* | --- |
* | "Previous step" |
*
* @param {Onboarding_Prev_Step_AriaInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_prev_step_aria = /** @type {((inputs?: Onboarding_Prev_Step_AriaInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Prev_Step_AriaInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_prev_step_aria(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_prev_step_aria(inputs)
	if (locale === "es") return es_onboarding_prev_step_aria(inputs)
	if (locale === "ja") return ja_onboarding_prev_step_aria(inputs)
	if (locale === "hi") return hi_onboarding_prev_step_aria(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_prev_step_aria(inputs)
	if (locale === "ko") return ko_onboarding_prev_step_aria(inputs)
	return fr_onboarding_prev_step_aria(inputs)
});