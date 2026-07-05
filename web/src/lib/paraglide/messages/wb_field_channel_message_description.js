/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Channel_Message_DescriptionInputs */

const en_wb_field_channel_message_description = /** @type {(inputs: Wb_Field_Channel_Message_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The message content to send`)
};

const zh_cn2_wb_field_channel_message_description = /** @type {(inputs: Wb_Field_Channel_Message_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要发送的消息内容`)
};

const es_wb_field_channel_message_description = /** @type {(inputs: Wb_Field_Channel_Message_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El contenido del mensaje a enviar`)
};

const ja_wb_field_channel_message_description = /** @type {(inputs: Wb_Field_Channel_Message_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`送信するメッセージの内容`)
};

const hi_wb_field_channel_message_description = /** @type {(inputs: Wb_Field_Channel_Message_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`भेजी जाने वाली संदेश सामग्री`)
};

const pt_br2_wb_field_channel_message_description = /** @type {(inputs: Wb_Field_Channel_Message_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O conteúdo da mensagem a enviar`)
};

const ko_wb_field_channel_message_description = /** @type {(inputs: Wb_Field_Channel_Message_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`전송할 메시지 내용`)
};

const fr_wb_field_channel_message_description = /** @type {(inputs: Wb_Field_Channel_Message_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le contenu du message à envoyer`)
};

/**
* | output |
* | --- |
* | "The message content to send" |
*
* @param {Wb_Field_Channel_Message_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_channel_message_description = /** @type {((inputs?: Wb_Field_Channel_Message_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Channel_Message_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_channel_message_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_channel_message_description(inputs)
	if (locale === "es") return es_wb_field_channel_message_description(inputs)
	if (locale === "ja") return ja_wb_field_channel_message_description(inputs)
	if (locale === "hi") return hi_wb_field_channel_message_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_channel_message_description(inputs)
	if (locale === "ko") return ko_wb_field_channel_message_description(inputs)
	return fr_wb_field_channel_message_description(inputs)
});