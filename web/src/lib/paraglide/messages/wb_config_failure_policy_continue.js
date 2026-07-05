/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Config_Failure_Policy_ContinueInputs */

const en_wb_config_failure_policy_continue = /** @type {(inputs: Wb_Config_Failure_Policy_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue`)
};

const zh_cn2_wb_config_failure_policy_continue = /** @type {(inputs: Wb_Config_Failure_Policy_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`继续`)
};

const es_wb_config_failure_policy_continue = /** @type {(inputs: Wb_Config_Failure_Policy_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuar`)
};

const ja_wb_config_failure_policy_continue = /** @type {(inputs: Wb_Config_Failure_Policy_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`続行`)
};

const hi_wb_config_failure_policy_continue = /** @type {(inputs: Wb_Config_Failure_Policy_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`जारी रखें`)
};

const pt_br2_wb_config_failure_policy_continue = /** @type {(inputs: Wb_Config_Failure_Policy_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuar`)
};

const ko_wb_config_failure_policy_continue = /** @type {(inputs: Wb_Config_Failure_Policy_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`계속`)
};

const fr_wb_config_failure_policy_continue = /** @type {(inputs: Wb_Config_Failure_Policy_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuer`)
};

/**
* | output |
* | --- |
* | "Continue" |
*
* @param {Wb_Config_Failure_Policy_ContinueInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_config_failure_policy_continue = /** @type {((inputs?: Wb_Config_Failure_Policy_ContinueInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Config_Failure_Policy_ContinueInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_config_failure_policy_continue(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_config_failure_policy_continue(inputs)
	if (locale === "es") return es_wb_config_failure_policy_continue(inputs)
	if (locale === "ja") return ja_wb_config_failure_policy_continue(inputs)
	if (locale === "hi") return hi_wb_config_failure_policy_continue(inputs)
	if (locale === "pt-BR") return pt_br2_wb_config_failure_policy_continue(inputs)
	if (locale === "ko") return ko_wb_config_failure_policy_continue(inputs)
	return fr_wb_config_failure_policy_continue(inputs)
});