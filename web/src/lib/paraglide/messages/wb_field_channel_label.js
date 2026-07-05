/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Channel_LabelInputs */

const en_wb_field_channel_label = /** @type {(inputs: Wb_Field_Channel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Channel`)
};

const zh_cn2_wb_field_channel_label = /** @type {(inputs: Wb_Field_Channel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`频道`)
};

const es_wb_field_channel_label = /** @type {(inputs: Wb_Field_Channel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canal`)
};

const ja_wb_field_channel_label = /** @type {(inputs: Wb_Field_Channel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャンネル`)
};

const hi_wb_field_channel_label = /** @type {(inputs: Wb_Field_Channel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैनल`)
};

const pt_br2_wb_field_channel_label = /** @type {(inputs: Wb_Field_Channel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canal`)
};

const ko_wb_field_channel_label = /** @type {(inputs: Wb_Field_Channel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채널`)
};

const fr_wb_field_channel_label = /** @type {(inputs: Wb_Field_Channel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canal`)
};

/**
* | output |
* | --- |
* | "Channel" |
*
* @param {Wb_Field_Channel_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_channel_label = /** @type {((inputs?: Wb_Field_Channel_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Channel_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_channel_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_channel_label(inputs)
	if (locale === "es") return es_wb_field_channel_label(inputs)
	if (locale === "ja") return ja_wb_field_channel_label(inputs)
	if (locale === "hi") return hi_wb_field_channel_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_channel_label(inputs)
	if (locale === "ko") return ko_wb_field_channel_label(inputs)
	return fr_wb_field_channel_label(inputs)
});