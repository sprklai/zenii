/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_Empty_DescriptionInputs */

const en_chat_empty_description = /** @type {(inputs: Chat_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send a message to begin chatting with Zenii`)
};

const zh_cn2_chat_empty_description = /** @type {(inputs: Chat_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发送消息以开始与 Zenii 聊天`)
};

const es_chat_empty_description = /** @type {(inputs: Chat_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envía un mensaje para comenzar a chatear con Zenii`)
};

const ja_chat_empty_description = /** @type {(inputs: Chat_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メッセージを送信して Zenii とのチャットを始めましょう`)
};

const hi_chat_empty_description = /** @type {(inputs: Chat_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii के साथ चैट शुरू करने के लिए एक संदेश भेजें`)
};

const pt_br2_chat_empty_description = /** @type {(inputs: Chat_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envie uma mensagem para começar a conversar com o Zenii`)
};

const ko_chat_empty_description = /** @type {(inputs: Chat_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii와 대화를 시작하려면 메시지를 보내세요`)
};

const fr_chat_empty_description = /** @type {(inputs: Chat_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyez un message pour commencer à discuter avec Zenii`)
};

/**
* | output |
* | --- |
* | "Send a message to begin chatting with Zenii" |
*
* @param {Chat_Empty_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_empty_description = /** @type {((inputs?: Chat_Empty_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_Empty_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_empty_description(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_empty_description(inputs)
	if (locale === "es") return es_chat_empty_description(inputs)
	if (locale === "ja") return ja_chat_empty_description(inputs)
	if (locale === "hi") return hi_chat_empty_description(inputs)
	if (locale === "pt-BR") return pt_br2_chat_empty_description(inputs)
	if (locale === "ko") return ko_chat_empty_description(inputs)
	return fr_chat_empty_description(inputs)
});