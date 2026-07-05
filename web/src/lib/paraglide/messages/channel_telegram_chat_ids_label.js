/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Channel_Telegram_Chat_Ids_LabelInputs */

const en_channel_telegram_chat_ids_label = /** @type {(inputs: Channel_Telegram_Chat_Ids_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allowed Chat IDs`)
};

const zh_cn2_channel_telegram_chat_ids_label = /** @type {(inputs: Channel_Telegram_Chat_Ids_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`允许的聊天ID`)
};

const es_channel_telegram_chat_ids_label = /** @type {(inputs: Channel_Telegram_Chat_Ids_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IDs de chat permitidos`)
};

const ja_channel_telegram_chat_ids_label = /** @type {(inputs: Channel_Telegram_Chat_Ids_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`許可チャットID`)
};

const hi_channel_telegram_chat_ids_label = /** @type {(inputs: Channel_Telegram_Chat_Ids_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अनुमत चैट ID`)
};

const pt_br2_channel_telegram_chat_ids_label = /** @type {(inputs: Channel_Telegram_Chat_Ids_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IDs de chat permitidos`)
};

const ko_channel_telegram_chat_ids_label = /** @type {(inputs: Channel_Telegram_Chat_Ids_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`허용된 채팅 ID`)
};

const fr_channel_telegram_chat_ids_label = /** @type {(inputs: Channel_Telegram_Chat_Ids_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID de chats autorisés`)
};

/**
* | output |
* | --- |
* | "Allowed Chat IDs" |
*
* @param {Channel_Telegram_Chat_Ids_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const channel_telegram_chat_ids_label = /** @type {((inputs?: Channel_Telegram_Chat_Ids_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Channel_Telegram_Chat_Ids_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_channel_telegram_chat_ids_label(inputs)
	if (locale === "zh-CN") return zh_cn2_channel_telegram_chat_ids_label(inputs)
	if (locale === "es") return es_channel_telegram_chat_ids_label(inputs)
	if (locale === "ja") return ja_channel_telegram_chat_ids_label(inputs)
	if (locale === "hi") return hi_channel_telegram_chat_ids_label(inputs)
	if (locale === "pt-BR") return pt_br2_channel_telegram_chat_ids_label(inputs)
	if (locale === "ko") return ko_channel_telegram_chat_ids_label(inputs)
	return fr_channel_telegram_chat_ids_label(inputs)
});