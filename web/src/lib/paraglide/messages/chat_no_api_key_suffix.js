/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_No_Api_Key_SuffixInputs */

const en_chat_no_api_key_suffix = /** @type {(inputs: Chat_No_Api_Key_SuffixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`to start chatting.`)
};

const zh_cn2_chat_no_api_key_suffix = /** @type {(inputs: Chat_No_Api_Key_SuffixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`以开始聊天。`)
};

const es_chat_no_api_key_suffix = /** @type {(inputs: Chat_No_Api_Key_SuffixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`para comenzar a chatear.`)
};

const ja_chat_no_api_key_suffix = /** @type {(inputs: Chat_No_Api_Key_SuffixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`してチャットを開始してください。`)
};

const hi_chat_no_api_key_suffix = /** @type {(inputs: Chat_No_Api_Key_SuffixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैट शुरू करने के लिए।`)
};

const pt_br2_chat_no_api_key_suffix = /** @type {(inputs: Chat_No_Api_Key_SuffixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`para começar a conversar.`)
};

const ko_chat_no_api_key_suffix = /** @type {(inputs: Chat_No_Api_Key_SuffixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채팅을 시작하세요.`)
};

const fr_chat_no_api_key_suffix = /** @type {(inputs: Chat_No_Api_Key_SuffixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`pour commencer à discuter.`)
};

/**
* | output |
* | --- |
* | "to start chatting." |
*
* @param {Chat_No_Api_Key_SuffixInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_no_api_key_suffix = /** @type {((inputs?: Chat_No_Api_Key_SuffixInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_No_Api_Key_SuffixInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_no_api_key_suffix(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_no_api_key_suffix(inputs)
	if (locale === "es") return es_chat_no_api_key_suffix(inputs)
	if (locale === "ja") return ja_chat_no_api_key_suffix(inputs)
	if (locale === "hi") return hi_chat_no_api_key_suffix(inputs)
	if (locale === "pt-BR") return pt_br2_chat_no_api_key_suffix(inputs)
	if (locale === "ko") return ko_chat_no_api_key_suffix(inputs)
	return fr_chat_no_api_key_suffix(inputs)
});