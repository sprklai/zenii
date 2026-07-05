/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Context_Injection_EnabledInputs */

const en_wb_option_context_injection_enabled = /** @type {(inputs: Wb_Option_Context_Injection_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Context Injection`)
};

const zh_cn2_wb_option_context_injection_enabled = /** @type {(inputs: Wb_Option_Context_Injection_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上下文注入`)
};

const es_wb_option_context_injection_enabled = /** @type {(inputs: Wb_Option_Context_Injection_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inyección de contexto`)
};

const ja_wb_option_context_injection_enabled = /** @type {(inputs: Wb_Option_Context_Injection_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コンテキスト注入`)
};

const hi_wb_option_context_injection_enabled = /** @type {(inputs: Wb_Option_Context_Injection_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`संदर्भ इंजेक्शन`)
};

const pt_br2_wb_option_context_injection_enabled = /** @type {(inputs: Wb_Option_Context_Injection_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Injeção de Contexto`)
};

const ko_wb_option_context_injection_enabled = /** @type {(inputs: Wb_Option_Context_Injection_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`컨텍스트 주입`)
};

const fr_wb_option_context_injection_enabled = /** @type {(inputs: Wb_Option_Context_Injection_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Injection de contexte`)
};

/**
* | output |
* | --- |
* | "Context Injection" |
*
* @param {Wb_Option_Context_Injection_EnabledInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_context_injection_enabled = /** @type {((inputs?: Wb_Option_Context_Injection_EnabledInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Context_Injection_EnabledInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_context_injection_enabled(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_context_injection_enabled(inputs)
	if (locale === "es") return es_wb_option_context_injection_enabled(inputs)
	if (locale === "ja") return ja_wb_option_context_injection_enabled(inputs)
	if (locale === "hi") return hi_wb_option_context_injection_enabled(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_context_injection_enabled(inputs)
	if (locale === "ko") return ko_wb_option_context_injection_enabled(inputs)
	return fr_wb_option_context_injection_enabled(inputs)
});