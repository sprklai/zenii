/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Channel_Message_PlaceholderInputs */

const en_schedule_channel_message_placeholder = /** @type {(inputs: Schedule_Channel_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message to send`)
};

const zh_cn2_schedule_channel_message_placeholder = /** @type {(inputs: Schedule_Channel_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要发送的消息`)
};

const es_schedule_channel_message_placeholder = /** @type {(inputs: Schedule_Channel_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mensaje a enviar`)
};

const ja_schedule_channel_message_placeholder = /** @type {(inputs: Schedule_Channel_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`送信するメッセージ`)
};

const hi_schedule_channel_message_placeholder = /** @type {(inputs: Schedule_Channel_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`भेजने का संदेश`)
};

const pt_br2_schedule_channel_message_placeholder = /** @type {(inputs: Schedule_Channel_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mensagem para enviar`)
};

const ko_schedule_channel_message_placeholder = /** @type {(inputs: Schedule_Channel_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`보낼 메시지`)
};

const fr_schedule_channel_message_placeholder = /** @type {(inputs: Schedule_Channel_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message à envoyer`)
};

/**
* | output |
* | --- |
* | "Message to send" |
*
* @param {Schedule_Channel_Message_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_channel_message_placeholder = /** @type {((inputs?: Schedule_Channel_Message_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Channel_Message_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_channel_message_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_channel_message_placeholder(inputs)
	if (locale === "es") return es_schedule_channel_message_placeholder(inputs)
	if (locale === "ja") return ja_schedule_channel_message_placeholder(inputs)
	if (locale === "hi") return hi_schedule_channel_message_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_channel_message_placeholder(inputs)
	if (locale === "ko") return ko_schedule_channel_message_placeholder(inputs)
	return fr_schedule_channel_message_placeholder(inputs)
});