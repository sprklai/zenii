/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Context_Strategy_DescriptionInputs */

const en_settings_general_context_strategy_description = /** @type {(inputs: Settings_General_Context_Strategy_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controls how much conversation history and memory is injected`)
};

const zh_cn2_settings_general_context_strategy_description = /** @type {(inputs: Settings_General_Context_Strategy_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`控制注入多少对话历史和记忆`)
};

const es_settings_general_context_strategy_description = /** @type {(inputs: Settings_General_Context_Strategy_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controla cuánto historial de conversación y memoria se inyecta`)
};

const ja_settings_general_context_strategy_description = /** @type {(inputs: Settings_General_Context_Strategy_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`会話履歴とメモリの注入量を制御`)
};

const hi_settings_general_context_strategy_description = /** @type {(inputs: Settings_General_Context_Strategy_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`नियंत्रित करता है कि कितना वार्तालाप इतिहास और मेमोरी इंजेक्ट किया जाए`)
};

const pt_br2_settings_general_context_strategy_description = /** @type {(inputs: Settings_General_Context_Strategy_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controla quanto do histórico de conversas e memória é injetado`)
};

const ko_settings_general_context_strategy_description = /** @type {(inputs: Settings_General_Context_Strategy_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`대화 이력과 메모리의 주입량을 제어합니다`)
};

const fr_settings_general_context_strategy_description = /** @type {(inputs: Settings_General_Context_Strategy_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contrôle la quantité d'historique de conversation et de mémoire injectée`)
};

/**
* | output |
* | --- |
* | "Controls how much conversation history and memory is injected" |
*
* @param {Settings_General_Context_Strategy_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_context_strategy_description = /** @type {((inputs?: Settings_General_Context_Strategy_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Context_Strategy_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_context_strategy_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_context_strategy_description(inputs)
	if (locale === "es") return es_settings_general_context_strategy_description(inputs)
	if (locale === "ja") return ja_settings_general_context_strategy_description(inputs)
	if (locale === "hi") return hi_settings_general_context_strategy_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_context_strategy_description(inputs)
	if (locale === "ko") return ko_settings_general_context_strategy_description(inputs)
	return fr_settings_general_context_strategy_description(inputs)
});