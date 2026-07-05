/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Timeout_Secs_PlaceholderInputs */

const en_wb_field_timeout_secs_placeholder = /** @type {(inputs: Wb_Field_Timeout_Secs_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Optional timeout in seconds`)
};

const zh_cn2_wb_field_timeout_secs_placeholder = /** @type {(inputs: Wb_Field_Timeout_Secs_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可选超时秒数`)
};

const es_wb_field_timeout_secs_placeholder = /** @type {(inputs: Wb_Field_Timeout_Secs_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tiempo límite opcional en segundos`)
};

const ja_wb_field_timeout_secs_placeholder = /** @type {(inputs: Wb_Field_Timeout_Secs_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オプションのタイムアウト（秒）`)
};

const hi_wb_field_timeout_secs_placeholder = /** @type {(inputs: Wb_Field_Timeout_Secs_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वैकल्पिक टाइमआउट सेकंड में`)
};

const pt_br2_wb_field_timeout_secs_placeholder = /** @type {(inputs: Wb_Field_Timeout_Secs_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tempo limite opcional em segundos`)
};

const ko_wb_field_timeout_secs_placeholder = /** @type {(inputs: Wb_Field_Timeout_Secs_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`선택적 타임아웃（초）`)
};

const fr_wb_field_timeout_secs_placeholder = /** @type {(inputs: Wb_Field_Timeout_Secs_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Délai d'expiration optionnel en secondes`)
};

/**
* | output |
* | --- |
* | "Optional timeout in seconds" |
*
* @param {Wb_Field_Timeout_Secs_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_timeout_secs_placeholder = /** @type {((inputs?: Wb_Field_Timeout_Secs_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Timeout_Secs_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_timeout_secs_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_timeout_secs_placeholder(inputs)
	if (locale === "es") return es_wb_field_timeout_secs_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_timeout_secs_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_timeout_secs_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_timeout_secs_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_timeout_secs_placeholder(inputs)
	return fr_wb_field_timeout_secs_placeholder(inputs)
});