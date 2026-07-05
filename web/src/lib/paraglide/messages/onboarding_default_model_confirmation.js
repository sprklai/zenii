/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ model: NonNullable<unknown> }} Onboarding_Default_Model_ConfirmationInputs */

const en_onboarding_default_model_confirmation = /** @type {(inputs: Onboarding_Default_Model_ConfirmationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Default model set to ${i?.model}`)
};

const zh_cn2_onboarding_default_model_confirmation = /** @type {(inputs: Onboarding_Default_Model_ConfirmationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`默认模型已设置为 ${i?.model}`)
};

const es_onboarding_default_model_confirmation = /** @type {(inputs: Onboarding_Default_Model_ConfirmationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modelo predeterminado establecido a ${i?.model}`)
};

const ja_onboarding_default_model_confirmation = /** @type {(inputs: Onboarding_Default_Model_ConfirmationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`デフォルトモデルを ${i?.model} に設定しました`)
};

const hi_onboarding_default_model_confirmation = /** @type {(inputs: Onboarding_Default_Model_ConfirmationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`डिफ़ॉल्ट मॉडल ${i?.model} पर सेट किया गया`)
};

const pt_br2_onboarding_default_model_confirmation = /** @type {(inputs: Onboarding_Default_Model_ConfirmationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modelo padrão definido como ${i?.model}`)
};

const ko_onboarding_default_model_confirmation = /** @type {(inputs: Onboarding_Default_Model_ConfirmationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`기본 모델이 ${i?.model}로 설정됨`)
};

const fr_onboarding_default_model_confirmation = /** @type {(inputs: Onboarding_Default_Model_ConfirmationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modèle par défaut défini à ${i?.model}`)
};

/**
* | output |
* | --- |
* | "Default model set to {model}" |
*
* @param {Onboarding_Default_Model_ConfirmationInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_default_model_confirmation = /** @type {((inputs: Onboarding_Default_Model_ConfirmationInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Default_Model_ConfirmationInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_default_model_confirmation(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_default_model_confirmation(inputs)
	if (locale === "es") return es_onboarding_default_model_confirmation(inputs)
	if (locale === "ja") return ja_onboarding_default_model_confirmation(inputs)
	if (locale === "hi") return hi_onboarding_default_model_confirmation(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_default_model_confirmation(inputs)
	if (locale === "ko") return ko_onboarding_default_model_confirmation(inputs)
	return fr_onboarding_default_model_confirmation(inputs)
});