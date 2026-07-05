/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Next_Step_AriaInputs */

const en_onboarding_next_step_aria = /** @type {(inputs: Onboarding_Next_Step_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next step`)
};

const zh_cn2_onboarding_next_step_aria = /** @type {(inputs: Onboarding_Next_Step_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下一步`)
};

const es_onboarding_next_step_aria = /** @type {(inputs: Onboarding_Next_Step_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siguiente paso`)
};

const ja_onboarding_next_step_aria = /** @type {(inputs: Onboarding_Next_Step_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次のステップ`)
};

const hi_onboarding_next_step_aria = /** @type {(inputs: Onboarding_Next_Step_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अगला चरण`)
};

const pt_br2_onboarding_next_step_aria = /** @type {(inputs: Onboarding_Next_Step_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Próxima etapa`)
};

const ko_onboarding_next_step_aria = /** @type {(inputs: Onboarding_Next_Step_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`다음 단계`)
};

const fr_onboarding_next_step_aria = /** @type {(inputs: Onboarding_Next_Step_AriaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Étape suivante`)
};

/**
* | output |
* | --- |
* | "Next step" |
*
* @param {Onboarding_Next_Step_AriaInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_next_step_aria = /** @type {((inputs?: Onboarding_Next_Step_AriaInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Next_Step_AriaInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_next_step_aria(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_next_step_aria(inputs)
	if (locale === "es") return es_onboarding_next_step_aria(inputs)
	if (locale === "ja") return ja_onboarding_next_step_aria(inputs)
	if (locale === "hi") return hi_onboarding_next_step_aria(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_next_step_aria(inputs)
	if (locale === "ko") return ko_onboarding_next_step_aria(inputs)
	return fr_onboarding_next_step_aria(inputs)
});