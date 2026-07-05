/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Default_Model_PlaceholderInputs */

const en_onboarding_default_model_placeholder = /** @type {(inputs: Onboarding_Default_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select a model`)
};

const zh_cn2_onboarding_default_model_placeholder = /** @type {(inputs: Onboarding_Default_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择模型`)
};

const es_onboarding_default_model_placeholder = /** @type {(inputs: Onboarding_Default_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecciona un modelo`)
};

const ja_onboarding_default_model_placeholder = /** @type {(inputs: Onboarding_Default_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデルを選択`)
};

const hi_onboarding_default_model_placeholder = /** @type {(inputs: Onboarding_Default_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एक मॉडल चुनें`)
};

const pt_br2_onboarding_default_model_placeholder = /** @type {(inputs: Onboarding_Default_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecione um modelo`)
};

const ko_onboarding_default_model_placeholder = /** @type {(inputs: Onboarding_Default_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`모델 선택`)
};

const fr_onboarding_default_model_placeholder = /** @type {(inputs: Onboarding_Default_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sélectionner un modèle`)
};

/**
* | output |
* | --- |
* | "Select a model" |
*
* @param {Onboarding_Default_Model_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_default_model_placeholder = /** @type {((inputs?: Onboarding_Default_Model_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Default_Model_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_default_model_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_default_model_placeholder(inputs)
	if (locale === "es") return es_onboarding_default_model_placeholder(inputs)
	if (locale === "ja") return ja_onboarding_default_model_placeholder(inputs)
	if (locale === "hi") return hi_onboarding_default_model_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_default_model_placeholder(inputs)
	if (locale === "ko") return ko_onboarding_default_model_placeholder(inputs)
	return fr_onboarding_default_model_placeholder(inputs)
});