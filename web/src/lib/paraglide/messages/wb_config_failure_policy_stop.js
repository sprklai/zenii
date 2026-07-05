/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Config_Failure_Policy_StopInputs */

const en_wb_config_failure_policy_stop = /** @type {(inputs: Wb_Config_Failure_Policy_StopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stop`)
};

const zh_cn2_wb_config_failure_policy_stop = /** @type {(inputs: Wb_Config_Failure_Policy_StopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`停止`)
};

const es_wb_config_failure_policy_stop = /** @type {(inputs: Wb_Config_Failure_Policy_StopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detener`)
};

const ja_wb_config_failure_policy_stop = /** @type {(inputs: Wb_Config_Failure_Policy_StopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`停止`)
};

const hi_wb_config_failure_policy_stop = /** @type {(inputs: Wb_Config_Failure_Policy_StopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`रोकें`)
};

const pt_br2_wb_config_failure_policy_stop = /** @type {(inputs: Wb_Config_Failure_Policy_StopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parar`)
};

const ko_wb_config_failure_policy_stop = /** @type {(inputs: Wb_Config_Failure_Policy_StopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`중지`)
};

const fr_wb_config_failure_policy_stop = /** @type {(inputs: Wb_Config_Failure_Policy_StopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arrêter`)
};

/**
* | output |
* | --- |
* | "Stop" |
*
* @param {Wb_Config_Failure_Policy_StopInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_config_failure_policy_stop = /** @type {((inputs?: Wb_Config_Failure_Policy_StopInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Config_Failure_Policy_StopInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_config_failure_policy_stop(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_config_failure_policy_stop(inputs)
	if (locale === "es") return es_wb_config_failure_policy_stop(inputs)
	if (locale === "ja") return ja_wb_config_failure_policy_stop(inputs)
	if (locale === "hi") return hi_wb_config_failure_policy_stop(inputs)
	if (locale === "pt-BR") return pt_br2_wb_config_failure_policy_stop(inputs)
	if (locale === "ko") return ko_wb_config_failure_policy_stop(inputs)
	return fr_wb_config_failure_policy_stop(inputs)
});