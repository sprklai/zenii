/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Config_Retry_LabelInputs */

const en_wb_config_retry_label = /** @type {(inputs: Wb_Config_Retry_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Max Retries`)
};

const zh_cn2_wb_config_retry_label = /** @type {(inputs: Wb_Config_Retry_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最大重试次数`)
};

const es_wb_config_retry_label = /** @type {(inputs: Wb_Config_Retry_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reintentos máximos`)
};

const ja_wb_config_retry_label = /** @type {(inputs: Wb_Config_Retry_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最大リトライ回数`)
};

const hi_wb_config_retry_label = /** @type {(inputs: Wb_Config_Retry_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अधिकतम पुनः प्रयास`)
};

const pt_br2_wb_config_retry_label = /** @type {(inputs: Wb_Config_Retry_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Máximo de tentativas`)
};

const ko_wb_config_retry_label = /** @type {(inputs: Wb_Config_Retry_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`최대 재시도 횟수`)
};

const fr_wb_config_retry_label = /** @type {(inputs: Wb_Config_Retry_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tentatives max.`)
};

/**
* | output |
* | --- |
* | "Max Retries" |
*
* @param {Wb_Config_Retry_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_config_retry_label = /** @type {((inputs?: Wb_Config_Retry_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Config_Retry_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_config_retry_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_config_retry_label(inputs)
	if (locale === "es") return es_wb_config_retry_label(inputs)
	if (locale === "ja") return ja_wb_config_retry_label(inputs)
	if (locale === "hi") return hi_wb_config_retry_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_config_retry_label(inputs)
	if (locale === "ko") return ko_wb_config_retry_label(inputs)
	return fr_wb_config_retry_label(inputs)
});