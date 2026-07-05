/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Config_Failure_Policy_FallbackInputs */

const en_wb_config_failure_policy_fallback = /** @type {(inputs: Wb_Config_Failure_Policy_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fallback`)
};

const zh_cn2_wb_config_failure_policy_fallback = /** @type {(inputs: Wb_Config_Failure_Policy_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回退`)
};

const es_wb_config_failure_policy_fallback = /** @type {(inputs: Wb_Config_Failure_Policy_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reserva`)
};

const ja_wb_config_failure_policy_fallback = /** @type {(inputs: Wb_Config_Failure_Policy_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォールバック`)
};

const hi_wb_config_failure_policy_fallback = /** @type {(inputs: Wb_Config_Failure_Policy_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`फ़ॉलबैक`)
};

const pt_br2_wb_config_failure_policy_fallback = /** @type {(inputs: Wb_Config_Failure_Policy_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alternativo`)
};

const ko_wb_config_failure_policy_fallback = /** @type {(inputs: Wb_Config_Failure_Policy_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`대체`)
};

const fr_wb_config_failure_policy_fallback = /** @type {(inputs: Wb_Config_Failure_Policy_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Secours`)
};

/**
* | output |
* | --- |
* | "Fallback" |
*
* @param {Wb_Config_Failure_Policy_FallbackInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_config_failure_policy_fallback = /** @type {((inputs?: Wb_Config_Failure_Policy_FallbackInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Config_Failure_Policy_FallbackInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_config_failure_policy_fallback(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_config_failure_policy_fallback(inputs)
	if (locale === "es") return es_wb_config_failure_policy_fallback(inputs)
	if (locale === "ja") return ja_wb_config_failure_policy_fallback(inputs)
	if (locale === "hi") return hi_wb_config_failure_policy_fallback(inputs)
	if (locale === "pt-BR") return pt_br2_wb_config_failure_policy_fallback(inputs)
	if (locale === "ko") return ko_wb_config_failure_policy_fallback(inputs)
	return fr_wb_config_failure_policy_fallback(inputs)
});