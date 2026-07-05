/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_SavingInputs */

const en_onboarding_saving = /** @type {(inputs: Onboarding_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saving...`)
};

const zh_cn2_onboarding_saving = /** @type {(inputs: Onboarding_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存中...`)
};

const es_onboarding_saving = /** @type {(inputs: Onboarding_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardando...`)
};

const ja_onboarding_saving = /** @type {(inputs: Onboarding_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存中...`)
};

const hi_onboarding_saving = /** @type {(inputs: Onboarding_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सहेजा जा रहा है...`)
};

const pt_br2_onboarding_saving = /** @type {(inputs: Onboarding_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvando...`)
};

const ko_onboarding_saving = /** @type {(inputs: Onboarding_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`저장 중...`)
};

const fr_onboarding_saving = /** @type {(inputs: Onboarding_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrement...`)
};

/**
* | output |
* | --- |
* | "Saving..." |
*
* @param {Onboarding_SavingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_saving = /** @type {((inputs?: Onboarding_SavingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_SavingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_saving(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_saving(inputs)
	if (locale === "es") return es_onboarding_saving(inputs)
	if (locale === "ja") return ja_onboarding_saving(inputs)
	if (locale === "hi") return hi_onboarding_saving(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_saving(inputs)
	if (locale === "ko") return ko_onboarding_saving(inputs)
	return fr_onboarding_saving(inputs)
});