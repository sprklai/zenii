/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Action_CpuInputs */

const en_wb_option_action_cpu = /** @type {(inputs: Wb_Option_Action_CpuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CPU`)
};

const zh_cn2_wb_option_action_cpu = /** @type {(inputs: Wb_Option_Action_CpuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CPU`)
};

const es_wb_option_action_cpu = /** @type {(inputs: Wb_Option_Action_CpuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CPU`)
};

const ja_wb_option_action_cpu = /** @type {(inputs: Wb_Option_Action_CpuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CPU`)
};

const hi_wb_option_action_cpu = /** @type {(inputs: Wb_Option_Action_CpuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CPU`)
};

const pt_br2_wb_option_action_cpu = /** @type {(inputs: Wb_Option_Action_CpuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CPU`)
};

const ko_wb_option_action_cpu = /** @type {(inputs: Wb_Option_Action_CpuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CPU`)
};

const fr_wb_option_action_cpu = /** @type {(inputs: Wb_Option_Action_CpuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CPU`)
};

/**
* | output |
* | --- |
* | "CPU" |
*
* @param {Wb_Option_Action_CpuInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_action_cpu = /** @type {((inputs?: Wb_Option_Action_CpuInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Action_CpuInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_action_cpu(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_action_cpu(inputs)
	if (locale === "es") return es_wb_option_action_cpu(inputs)
	if (locale === "ja") return ja_wb_option_action_cpu(inputs)
	if (locale === "hi") return hi_wb_option_action_cpu(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_action_cpu(inputs)
	if (locale === "ko") return ko_wb_option_action_cpu(inputs)
	return fr_wb_option_action_cpu(inputs)
});