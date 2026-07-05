/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Context_Injection_LabelInputs */

const en_settings_general_context_injection_label = /** @type {(inputs: Settings_General_Context_Injection_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Context Injection`)
};

const zh_cn2_settings_general_context_injection_label = /** @type {(inputs: Settings_General_Context_Injection_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上下文注入`)
};

const es_settings_general_context_injection_label = /** @type {(inputs: Settings_General_Context_Injection_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inyección de contexto`)
};

const ja_settings_general_context_injection_label = /** @type {(inputs: Settings_General_Context_Injection_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コンテキスト注入`)
};

const hi_settings_general_context_injection_label = /** @type {(inputs: Settings_General_Context_Injection_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`संदर्भ इंजेक्शन`)
};

const pt_br2_settings_general_context_injection_label = /** @type {(inputs: Settings_General_Context_Injection_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Injeção de Contexto`)
};

const ko_settings_general_context_injection_label = /** @type {(inputs: Settings_General_Context_Injection_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`컨텍스트 주입`)
};

const fr_settings_general_context_injection_label = /** @type {(inputs: Settings_General_Context_Injection_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Injection de contexte`)
};

/**
* | output |
* | --- |
* | "Context Injection" |
*
* @param {Settings_General_Context_Injection_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_context_injection_label = /** @type {((inputs?: Settings_General_Context_Injection_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Context_Injection_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_context_injection_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_context_injection_label(inputs)
	if (locale === "es") return es_settings_general_context_injection_label(inputs)
	if (locale === "ja") return ja_settings_general_context_injection_label(inputs)
	if (locale === "hi") return hi_settings_general_context_injection_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_context_injection_label(inputs)
	if (locale === "ko") return ko_settings_general_context_injection_label(inputs)
	return fr_settings_general_context_injection_label(inputs)
});