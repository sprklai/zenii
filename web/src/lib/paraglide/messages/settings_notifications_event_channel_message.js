/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notifications_Event_Channel_MessageInputs */

const en_settings_notifications_event_channel_message = /** @type {(inputs: Settings_Notifications_Event_Channel_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Channel Message`)
};

const zh_cn2_settings_notifications_event_channel_message = /** @type {(inputs: Settings_Notifications_Event_Channel_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`频道消息`)
};

const es_settings_notifications_event_channel_message = /** @type {(inputs: Settings_Notifications_Event_Channel_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mensaje de canal`)
};

const ja_settings_notifications_event_channel_message = /** @type {(inputs: Settings_Notifications_Event_Channel_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャンネルメッセージ`)
};

const hi_settings_notifications_event_channel_message = /** @type {(inputs: Settings_Notifications_Event_Channel_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैनल संदेश`)
};

const pt_br2_settings_notifications_event_channel_message = /** @type {(inputs: Settings_Notifications_Event_Channel_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mensagem de Canal`)
};

const ko_settings_notifications_event_channel_message = /** @type {(inputs: Settings_Notifications_Event_Channel_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채널 메시지`)
};

const fr_settings_notifications_event_channel_message = /** @type {(inputs: Settings_Notifications_Event_Channel_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message de canal`)
};

/**
* | output |
* | --- |
* | "Channel Message" |
*
* @param {Settings_Notifications_Event_Channel_MessageInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_notifications_event_channel_message = /** @type {((inputs?: Settings_Notifications_Event_Channel_MessageInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notifications_Event_Channel_MessageInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_notifications_event_channel_message(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_notifications_event_channel_message(inputs)
	if (locale === "es") return es_settings_notifications_event_channel_message(inputs)
	if (locale === "ja") return ja_settings_notifications_event_channel_message(inputs)
	if (locale === "hi") return hi_settings_notifications_event_channel_message(inputs)
	if (locale === "pt-BR") return pt_br2_settings_notifications_event_channel_message(inputs)
	if (locale === "ko") return ko_settings_notifications_event_channel_message(inputs)
	return fr_settings_notifications_event_channel_message(inputs)
});