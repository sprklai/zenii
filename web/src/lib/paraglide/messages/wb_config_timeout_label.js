/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Config_Timeout_LabelInputs */

const en_wb_config_timeout_label = /** @type {(inputs: Wb_Config_Timeout_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Timeout (seconds)`)
};

const zh_cn2_wb_config_timeout_label = /** @type {(inputs: Wb_Config_Timeout_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`超时（秒）`)
};

const es_wb_config_timeout_label = /** @type {(inputs: Wb_Config_Timeout_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tiempo límite (segundos)`)
};

const ja_wb_config_timeout_label = /** @type {(inputs: Wb_Config_Timeout_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タイムアウト（秒）`)
};

const hi_wb_config_timeout_label = /** @type {(inputs: Wb_Config_Timeout_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`टाइमआउट (सेकंड)`)
};

const pt_br2_wb_config_timeout_label = /** @type {(inputs: Wb_Config_Timeout_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tempo limite (segundos)`)
};

const ko_wb_config_timeout_label = /** @type {(inputs: Wb_Config_Timeout_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`타임아웃（초）`)
};

const fr_wb_config_timeout_label = /** @type {(inputs: Wb_Config_Timeout_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Délai d'expiration (secondes)`)
};

/**
* | output |
* | --- |
* | "Timeout (seconds)" |
*
* @param {Wb_Config_Timeout_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_config_timeout_label = /** @type {((inputs?: Wb_Config_Timeout_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Config_Timeout_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_config_timeout_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_config_timeout_label(inputs)
	if (locale === "es") return es_wb_config_timeout_label(inputs)
	if (locale === "ja") return ja_wb_config_timeout_label(inputs)
	if (locale === "hi") return hi_wb_config_timeout_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_config_timeout_label(inputs)
	if (locale === "ko") return ko_wb_config_timeout_label(inputs)
	return fr_wb_config_timeout_label(inputs)
});