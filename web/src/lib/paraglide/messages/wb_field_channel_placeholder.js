/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Channel_PlaceholderInputs */

const en_wb_field_channel_placeholder = /** @type {(inputs: Wb_Field_Channel_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Channel name (e.g. telegram)`)
};

const zh_cn2_wb_field_channel_placeholder = /** @type {(inputs: Wb_Field_Channel_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`频道名称（如 telegram）`)
};

const es_wb_field_channel_placeholder = /** @type {(inputs: Wb_Field_Channel_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre del canal (p. ej. telegram)`)
};

const ja_wb_field_channel_placeholder = /** @type {(inputs: Wb_Field_Channel_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャンネル名（例: telegram）`)
};

const hi_wb_field_channel_placeholder = /** @type {(inputs: Wb_Field_Channel_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैनल नाम (जैसे telegram)`)
};

const pt_br2_wb_field_channel_placeholder = /** @type {(inputs: Wb_Field_Channel_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome do canal (ex. telegram)`)
};

const ko_wb_field_channel_placeholder = /** @type {(inputs: Wb_Field_Channel_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채널 이름（예: telegram）`)
};

const fr_wb_field_channel_placeholder = /** @type {(inputs: Wb_Field_Channel_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom du canal (e.g. telegram)`)
};

/**
* | output |
* | --- |
* | "Channel name (e.g. telegram)" |
*
* @param {Wb_Field_Channel_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_channel_placeholder = /** @type {((inputs?: Wb_Field_Channel_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Channel_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_channel_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_channel_placeholder(inputs)
	if (locale === "es") return es_wb_field_channel_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_channel_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_channel_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_channel_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_channel_placeholder(inputs)
	return fr_wb_field_channel_placeholder(inputs)
});