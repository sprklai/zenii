/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Context_Strategy_BalancedInputs */

const en_settings_general_context_strategy_balanced = /** @type {(inputs: Settings_General_Context_Strategy_BalancedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Balanced`)
};

const zh_cn2_settings_general_context_strategy_balanced = /** @type {(inputs: Settings_General_Context_Strategy_BalancedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`均衡`)
};

const es_settings_general_context_strategy_balanced = /** @type {(inputs: Settings_General_Context_Strategy_BalancedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Equilibrada`)
};

const ja_settings_general_context_strategy_balanced = /** @type {(inputs: Settings_General_Context_Strategy_BalancedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バランス`)
};

const hi_settings_general_context_strategy_balanced = /** @type {(inputs: Settings_General_Context_Strategy_BalancedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`संतुलित`)
};

const pt_br2_settings_general_context_strategy_balanced = /** @type {(inputs: Settings_General_Context_Strategy_BalancedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Equilibrada`)
};

const ko_settings_general_context_strategy_balanced = /** @type {(inputs: Settings_General_Context_Strategy_BalancedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`균형`)
};

const fr_settings_general_context_strategy_balanced = /** @type {(inputs: Settings_General_Context_Strategy_BalancedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Équilibrée`)
};

/**
* | output |
* | --- |
* | "Balanced" |
*
* @param {Settings_General_Context_Strategy_BalancedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_context_strategy_balanced = /** @type {((inputs?: Settings_General_Context_Strategy_BalancedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Context_Strategy_BalancedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_context_strategy_balanced(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_context_strategy_balanced(inputs)
	if (locale === "es") return es_settings_general_context_strategy_balanced(inputs)
	if (locale === "ja") return ja_settings_general_context_strategy_balanced(inputs)
	if (locale === "hi") return hi_settings_general_context_strategy_balanced(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_context_strategy_balanced(inputs)
	if (locale === "ko") return ko_settings_general_context_strategy_balanced(inputs)
	return fr_settings_general_context_strategy_balanced(inputs)
});