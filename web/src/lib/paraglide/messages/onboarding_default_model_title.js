/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Default_Model_TitleInputs */

const en_onboarding_default_model_title = /** @type {(inputs: Onboarding_Default_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose Your Default Model`)
};

const zh_cn2_onboarding_default_model_title = /** @type {(inputs: Onboarding_Default_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择默认模型`)
};

const es_onboarding_default_model_title = /** @type {(inputs: Onboarding_Default_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige tu modelo predeterminado`)
};

const ja_onboarding_default_model_title = /** @type {(inputs: Onboarding_Default_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`デフォルトモデルを選択`)
};

const hi_onboarding_default_model_title = /** @type {(inputs: Onboarding_Default_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अपना डिफ़ॉल्ट मॉडल चुनें`)
};

const pt_br2_onboarding_default_model_title = /** @type {(inputs: Onboarding_Default_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha seu Modelo Padrão`)
};

const ko_onboarding_default_model_title = /** @type {(inputs: Onboarding_Default_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`기본 모델 선택`)
};

const fr_onboarding_default_model_title = /** @type {(inputs: Onboarding_Default_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez votre modèle par défaut`)
};

/**
* | output |
* | --- |
* | "Choose Your Default Model" |
*
* @param {Onboarding_Default_Model_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_default_model_title = /** @type {((inputs?: Onboarding_Default_Model_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Default_Model_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_default_model_title(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_default_model_title(inputs)
	if (locale === "es") return es_onboarding_default_model_title(inputs)
	if (locale === "ja") return ja_onboarding_default_model_title(inputs)
	if (locale === "hi") return hi_onboarding_default_model_title(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_default_model_title(inputs)
	if (locale === "ko") return ko_onboarding_default_model_title(inputs)
	return fr_onboarding_default_model_title(inputs)
});