/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_PlaceholderInputs */

const en_chat_placeholder = /** @type {(inputs: Chat_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send a message...`)
};

const zh_cn2_chat_placeholder = /** @type {(inputs: Chat_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发送消息...`)
};

const es_chat_placeholder = /** @type {(inputs: Chat_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envía un mensaje...`)
};

const ja_chat_placeholder = /** @type {(inputs: Chat_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メッセージを送信...`)
};

const hi_chat_placeholder = /** @type {(inputs: Chat_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एक संदेश भेजें...`)
};

const pt_br2_chat_placeholder = /** @type {(inputs: Chat_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envie uma mensagem...`)
};

const ko_chat_placeholder = /** @type {(inputs: Chat_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메시지를 입력하세요...`)
};

const fr_chat_placeholder = /** @type {(inputs: Chat_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyer un message...`)
};

/**
* | output |
* | --- |
* | "Send a message..." |
*
* @param {Chat_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_placeholder = /** @type {((inputs?: Chat_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_placeholder(inputs)
	if (locale === "es") return es_chat_placeholder(inputs)
	if (locale === "ja") return ja_chat_placeholder(inputs)
	if (locale === "hi") return hi_chat_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_chat_placeholder(inputs)
	if (locale === "ko") return ko_chat_placeholder(inputs)
	return fr_chat_placeholder(inputs)
});