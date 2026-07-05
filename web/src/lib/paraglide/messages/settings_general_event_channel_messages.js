/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Event_Channel_MessagesInputs */

const en_settings_general_event_channel_messages = /** @type {(inputs: Settings_General_Event_Channel_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Channel Messages`)
};

const zh_cn2_settings_general_event_channel_messages = /** @type {(inputs: Settings_General_Event_Channel_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`频道消息`)
};

const es_settings_general_event_channel_messages = /** @type {(inputs: Settings_General_Event_Channel_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mensajes de canal`)
};

const ja_settings_general_event_channel_messages = /** @type {(inputs: Settings_General_Event_Channel_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャンネルメッセージ`)
};

const hi_settings_general_event_channel_messages = /** @type {(inputs: Settings_General_Event_Channel_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैनल संदेश`)
};

const pt_br2_settings_general_event_channel_messages = /** @type {(inputs: Settings_General_Event_Channel_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mensagens de Canal`)
};

const ko_settings_general_event_channel_messages = /** @type {(inputs: Settings_General_Event_Channel_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채널 메시지`)
};

const fr_settings_general_event_channel_messages = /** @type {(inputs: Settings_General_Event_Channel_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Messages de canal`)
};

/**
* | output |
* | --- |
* | "Channel Messages" |
*
* @param {Settings_General_Event_Channel_MessagesInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_event_channel_messages = /** @type {((inputs?: Settings_General_Event_Channel_MessagesInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Event_Channel_MessagesInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_event_channel_messages(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_event_channel_messages(inputs)
	if (locale === "es") return es_settings_general_event_channel_messages(inputs)
	if (locale === "ja") return ja_settings_general_event_channel_messages(inputs)
	if (locale === "hi") return hi_settings_general_event_channel_messages(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_event_channel_messages(inputs)
	if (locale === "ko") return ko_settings_general_event_channel_messages(inputs)
	return fr_settings_general_event_channel_messages(inputs)
});