/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_ChannelInputs */

const en_wb_field_channel = /** @type {(inputs: Wb_Field_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Channel`)
};

const zh_cn2_wb_field_channel = /** @type {(inputs: Wb_Field_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`频道`)
};

const es_wb_field_channel = /** @type {(inputs: Wb_Field_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canal`)
};

const ja_wb_field_channel = /** @type {(inputs: Wb_Field_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャンネル`)
};

const hi_wb_field_channel = /** @type {(inputs: Wb_Field_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैनल`)
};

const pt_br2_wb_field_channel = /** @type {(inputs: Wb_Field_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canal`)
};

const ko_wb_field_channel = /** @type {(inputs: Wb_Field_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채널`)
};

const fr_wb_field_channel = /** @type {(inputs: Wb_Field_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canal`)
};

/**
* | output |
* | --- |
* | "Channel" |
*
* @param {Wb_Field_ChannelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_channel = /** @type {((inputs?: Wb_Field_ChannelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_ChannelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_channel(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_channel(inputs)
	if (locale === "es") return es_wb_field_channel(inputs)
	if (locale === "ja") return ja_wb_field_channel(inputs)
	if (locale === "hi") return hi_wb_field_channel(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_channel(inputs)
	if (locale === "ko") return ko_wb_field_channel(inputs)
	return fr_wb_field_channel(inputs)
});