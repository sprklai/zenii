/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Max_Preamble_Tokens_LabelInputs */

const en_settings_general_max_preamble_tokens_label = /** @type {(inputs: Settings_General_Max_Preamble_Tokens_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Max Preamble Tokens`)
};

const zh_cn2_settings_general_max_preamble_tokens_label = /** @type {(inputs: Settings_General_Max_Preamble_Tokens_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最大前言令牌数`)
};

const es_settings_general_max_preamble_tokens_label = /** @type {(inputs: Settings_General_Max_Preamble_Tokens_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Máximo de tokens del preámbulo`)
};

const ja_settings_general_max_preamble_tokens_label = /** @type {(inputs: Settings_General_Max_Preamble_Tokens_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最大前文トークン数`)
};

const hi_settings_general_max_preamble_tokens_label = /** @type {(inputs: Settings_General_Max_Preamble_Tokens_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अधिकतम प्रस्तावना टोकन`)
};

const pt_br2_settings_general_max_preamble_tokens_label = /** @type {(inputs: Settings_General_Max_Preamble_Tokens_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Máximo de Tokens do Preâmbulo`)
};

const ko_settings_general_max_preamble_tokens_label = /** @type {(inputs: Settings_General_Max_Preamble_Tokens_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`최대 서문 토큰`)
};

const fr_settings_general_max_preamble_tokens_label = /** @type {(inputs: Settings_General_Max_Preamble_Tokens_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jetons de préambule maximum`)
};

/**
* | output |
* | --- |
* | "Max Preamble Tokens" |
*
* @param {Settings_General_Max_Preamble_Tokens_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_max_preamble_tokens_label = /** @type {((inputs?: Settings_General_Max_Preamble_Tokens_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Max_Preamble_Tokens_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_max_preamble_tokens_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_max_preamble_tokens_label(inputs)
	if (locale === "es") return es_settings_general_max_preamble_tokens_label(inputs)
	if (locale === "ja") return ja_settings_general_max_preamble_tokens_label(inputs)
	if (locale === "hi") return hi_settings_general_max_preamble_tokens_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_max_preamble_tokens_label(inputs)
	if (locale === "ko") return ko_settings_general_max_preamble_tokens_label(inputs)
	return fr_settings_general_max_preamble_tokens_label(inputs)
});