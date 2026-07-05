/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Context_Strategy_FullInputs */

const en_settings_general_context_strategy_full = /** @type {(inputs: Settings_General_Context_Strategy_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Full`)
};

const zh_cn2_settings_general_context_strategy_full = /** @type {(inputs: Settings_General_Context_Strategy_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完整`)
};

const es_settings_general_context_strategy_full = /** @type {(inputs: Settings_General_Context_Strategy_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completa`)
};

const ja_settings_general_context_strategy_full = /** @type {(inputs: Settings_General_Context_Strategy_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フル`)
};

const hi_settings_general_context_strategy_full = /** @type {(inputs: Settings_General_Context_Strategy_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पूर्ण`)
};

const pt_br2_settings_general_context_strategy_full = /** @type {(inputs: Settings_General_Context_Strategy_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completa`)
};

const ko_settings_general_context_strategy_full = /** @type {(inputs: Settings_General_Context_Strategy_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`전체`)
};

const fr_settings_general_context_strategy_full = /** @type {(inputs: Settings_General_Context_Strategy_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Complète`)
};

/**
* | output |
* | --- |
* | "Full" |
*
* @param {Settings_General_Context_Strategy_FullInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_context_strategy_full = /** @type {((inputs?: Settings_General_Context_Strategy_FullInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Context_Strategy_FullInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_context_strategy_full(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_context_strategy_full(inputs)
	if (locale === "es") return es_settings_general_context_strategy_full(inputs)
	if (locale === "ja") return ja_settings_general_context_strategy_full(inputs)
	if (locale === "hi") return hi_settings_general_context_strategy_full(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_context_strategy_full(inputs)
	if (locale === "ko") return ko_settings_general_context_strategy_full(inputs)
	return fr_settings_general_context_strategy_full(inputs)
});