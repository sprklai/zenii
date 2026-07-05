/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ channel: NonNullable<unknown>, sender: NonNullable<unknown> }} Chat_Processing_ChannelInputs */

const en_chat_processing_channel = /** @type {(inputs: Chat_Processing_ChannelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Processing ${i?.channel} message from ${i?.sender}...`)
};

const zh_cn2_chat_processing_channel = /** @type {(inputs: Chat_Processing_ChannelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`正在处理来自 ${i?.sender} 的 ${i?.channel} 消息...`)
};

const es_chat_processing_channel = /** @type {(inputs: Chat_Processing_ChannelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Procesando mensaje de ${i?.channel} de ${i?.sender}...`)
};

const ja_chat_processing_channel = /** @type {(inputs: Chat_Processing_ChannelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.sender} からの ${i?.channel} メッセージを処理中...`)
};

const hi_chat_processing_channel = /** @type {(inputs: Chat_Processing_ChannelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.channel} से ${i?.sender} का संदेश प्रोसेस हो रहा है...`)
};

const pt_br2_chat_processing_channel = /** @type {(inputs: Chat_Processing_ChannelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Processando mensagem de ${i?.channel} de ${i?.sender}...`)
};

const ko_chat_processing_channel = /** @type {(inputs: Chat_Processing_ChannelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.channel}에서 ${i?.sender}의 메시지 처리 중...`)
};

const fr_chat_processing_channel = /** @type {(inputs: Chat_Processing_ChannelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Traitement du message ${i?.channel} de ${i?.sender}...`)
};

/**
* | output |
* | --- |
* | "Processing {channel} message from {sender}..." |
*
* @param {Chat_Processing_ChannelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_processing_channel = /** @type {((inputs: Chat_Processing_ChannelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_Processing_ChannelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_processing_channel(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_processing_channel(inputs)
	if (locale === "es") return es_chat_processing_channel(inputs)
	if (locale === "ja") return ja_chat_processing_channel(inputs)
	if (locale === "hi") return hi_chat_processing_channel(inputs)
	if (locale === "pt-BR") return pt_br2_chat_processing_channel(inputs)
	if (locale === "ko") return ko_chat_processing_channel(inputs)
	return fr_chat_processing_channel(inputs)
});