/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Config_Retry_Delay_LabelInputs */

const en_wb_config_retry_delay_label = /** @type {(inputs: Wb_Config_Retry_Delay_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retry Delay (ms)`)
};

const zh_cn2_wb_config_retry_delay_label = /** @type {(inputs: Wb_Config_Retry_Delay_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重试延迟（ms）`)
};

const es_wb_config_retry_delay_label = /** @type {(inputs: Wb_Config_Retry_Delay_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retardo de reintento (ms)`)
};

const ja_wb_config_retry_delay_label = /** @type {(inputs: Wb_Config_Retry_Delay_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リトライ遅延（ミリ秒）`)
};

const hi_wb_config_retry_delay_label = /** @type {(inputs: Wb_Config_Retry_Delay_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पुनः प्रयास विलंब (ms)`)
};

const pt_br2_wb_config_retry_delay_label = /** @type {(inputs: Wb_Config_Retry_Delay_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atraso entre tentativas (ms)`)
};

const ko_wb_config_retry_delay_label = /** @type {(inputs: Wb_Config_Retry_Delay_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`재시도 지연（밀리초）`)
};

const fr_wb_config_retry_delay_label = /** @type {(inputs: Wb_Config_Retry_Delay_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Délai de nouvelle tentative (ms)`)
};

/**
* | output |
* | --- |
* | "Retry Delay (ms)" |
*
* @param {Wb_Config_Retry_Delay_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_config_retry_delay_label = /** @type {((inputs?: Wb_Config_Retry_Delay_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Config_Retry_Delay_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_config_retry_delay_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_config_retry_delay_label(inputs)
	if (locale === "es") return es_wb_config_retry_delay_label(inputs)
	if (locale === "ja") return ja_wb_config_retry_delay_label(inputs)
	if (locale === "hi") return hi_wb_config_retry_delay_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_config_retry_delay_label(inputs)
	if (locale === "ko") return ko_wb_config_retry_delay_label(inputs)
	return fr_wb_config_retry_delay_label(inputs)
});