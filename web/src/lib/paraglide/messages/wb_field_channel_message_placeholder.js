/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Channel_Message_PlaceholderInputs */

const en_wb_field_channel_message_placeholder = /** @type {(inputs: Wb_Field_Channel_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message body`)
};

const zh_cn2_wb_field_channel_message_placeholder = /** @type {(inputs: Wb_Field_Channel_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`消息正文`)
};

const es_wb_field_channel_message_placeholder = /** @type {(inputs: Wb_Field_Channel_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuerpo del mensaje`)
};

const ja_wb_field_channel_message_placeholder = /** @type {(inputs: Wb_Field_Channel_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メッセージ本文`)
};

const hi_wb_field_channel_message_placeholder = /** @type {(inputs: Wb_Field_Channel_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`संदेश मुख्य भाग`)
};

const pt_br2_wb_field_channel_message_placeholder = /** @type {(inputs: Wb_Field_Channel_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corpo da mensagem`)
};

const ko_wb_field_channel_message_placeholder = /** @type {(inputs: Wb_Field_Channel_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메시지 본문`)
};

const fr_wb_field_channel_message_placeholder = /** @type {(inputs: Wb_Field_Channel_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corps du message`)
};

/**
* | output |
* | --- |
* | "Message body" |
*
* @param {Wb_Field_Channel_Message_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_channel_message_placeholder = /** @type {((inputs?: Wb_Field_Channel_Message_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Channel_Message_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_channel_message_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_channel_message_placeholder(inputs)
	if (locale === "es") return es_wb_field_channel_message_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_channel_message_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_channel_message_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_channel_message_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_channel_message_placeholder(inputs)
	return fr_wb_field_channel_message_placeholder(inputs)
});