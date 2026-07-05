/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Config_Failure_Policy_LabelInputs */

const en_wb_config_failure_policy_label = /** @type {(inputs: Wb_Config_Failure_Policy_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`On Failure`)
};

const zh_cn2_wb_config_failure_policy_label = /** @type {(inputs: Wb_Config_Failure_Policy_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失败时`)
};

const es_wb_config_failure_policy_label = /** @type {(inputs: Wb_Config_Failure_Policy_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En caso de fallo`)
};

const ja_wb_config_failure_policy_label = /** @type {(inputs: Wb_Config_Failure_Policy_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失敗時`)
};

const hi_wb_config_failure_policy_label = /** @type {(inputs: Wb_Config_Failure_Policy_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`विफलता पर`)
};

const pt_br2_wb_config_failure_policy_label = /** @type {(inputs: Wb_Config_Failure_Policy_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em caso de falha`)
};

const ko_wb_config_failure_policy_label = /** @type {(inputs: Wb_Config_Failure_Policy_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`실패 시`)
};

const fr_wb_config_failure_policy_label = /** @type {(inputs: Wb_Config_Failure_Policy_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En cas d'échec`)
};

/**
* | output |
* | --- |
* | "On Failure" |
*
* @param {Wb_Config_Failure_Policy_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_config_failure_policy_label = /** @type {((inputs?: Wb_Config_Failure_Policy_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Config_Failure_Policy_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_config_failure_policy_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_config_failure_policy_label(inputs)
	if (locale === "es") return es_wb_config_failure_policy_label(inputs)
	if (locale === "ja") return ja_wb_config_failure_policy_label(inputs)
	if (locale === "hi") return hi_wb_config_failure_policy_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_config_failure_policy_label(inputs)
	if (locale === "ko") return ko_wb_config_failure_policy_label(inputs)
	return fr_wb_config_failure_policy_label(inputs)
});