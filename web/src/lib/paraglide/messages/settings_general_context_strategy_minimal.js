/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Context_Strategy_MinimalInputs */

const en_settings_general_context_strategy_minimal = /** @type {(inputs: Settings_General_Context_Strategy_MinimalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minimal`)
};

const zh_cn2_settings_general_context_strategy_minimal = /** @type {(inputs: Settings_General_Context_Strategy_MinimalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`精简`)
};

const es_settings_general_context_strategy_minimal = /** @type {(inputs: Settings_General_Context_Strategy_MinimalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mínima`)
};

const ja_settings_general_context_strategy_minimal = /** @type {(inputs: Settings_General_Context_Strategy_MinimalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最小`)
};

const hi_settings_general_context_strategy_minimal = /** @type {(inputs: Settings_General_Context_Strategy_MinimalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`न्यूनतम`)
};

const pt_br2_settings_general_context_strategy_minimal = /** @type {(inputs: Settings_General_Context_Strategy_MinimalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mínima`)
};

const ko_settings_general_context_strategy_minimal = /** @type {(inputs: Settings_General_Context_Strategy_MinimalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`최소`)
};

const fr_settings_general_context_strategy_minimal = /** @type {(inputs: Settings_General_Context_Strategy_MinimalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minimale`)
};

/**
* | output |
* | --- |
* | "Minimal" |
*
* @param {Settings_General_Context_Strategy_MinimalInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_context_strategy_minimal = /** @type {((inputs?: Settings_General_Context_Strategy_MinimalInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Context_Strategy_MinimalInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_context_strategy_minimal(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_context_strategy_minimal(inputs)
	if (locale === "es") return es_settings_general_context_strategy_minimal(inputs)
	if (locale === "ja") return ja_settings_general_context_strategy_minimal(inputs)
	if (locale === "hi") return hi_settings_general_context_strategy_minimal(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_context_strategy_minimal(inputs)
	if (locale === "ko") return ko_settings_general_context_strategy_minimal(inputs)
	return fr_settings_general_context_strategy_minimal(inputs)
});