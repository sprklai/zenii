/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Seconds_PlaceholderInputs */

const en_wb_field_seconds_placeholder = /** @type {(inputs: Wb_Field_Seconds_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duration in seconds`)
};

const zh_cn2_wb_field_seconds_placeholder = /** @type {(inputs: Wb_Field_Seconds_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`持续时间（秒）`)
};

const es_wb_field_seconds_placeholder = /** @type {(inputs: Wb_Field_Seconds_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duración en segundos`)
};

const ja_wb_field_seconds_placeholder = /** @type {(inputs: Wb_Field_Seconds_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`秒単位の時間`)
};

const hi_wb_field_seconds_placeholder = /** @type {(inputs: Wb_Field_Seconds_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सेकंड में अवधि`)
};

const pt_br2_wb_field_seconds_placeholder = /** @type {(inputs: Wb_Field_Seconds_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duração em segundos`)
};

const ko_wb_field_seconds_placeholder = /** @type {(inputs: Wb_Field_Seconds_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`초 단위 시간`)
};

const fr_wb_field_seconds_placeholder = /** @type {(inputs: Wb_Field_Seconds_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Durée en secondes`)
};

/**
* | output |
* | --- |
* | "Duration in seconds" |
*
* @param {Wb_Field_Seconds_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_seconds_placeholder = /** @type {((inputs?: Wb_Field_Seconds_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Seconds_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_seconds_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_seconds_placeholder(inputs)
	if (locale === "es") return es_wb_field_seconds_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_seconds_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_seconds_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_seconds_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_seconds_placeholder(inputs)
	return fr_wb_field_seconds_placeholder(inputs)
});