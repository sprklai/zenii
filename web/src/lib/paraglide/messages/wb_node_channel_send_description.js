/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Channel_Send_DescriptionInputs */

const en_wb_node_channel_send_description = /** @type {(inputs: Wb_Node_Channel_Send_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send a message to a configured messaging channel`)
};

const zh_cn2_wb_node_channel_send_description = /** @type {(inputs: Wb_Node_Channel_Send_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`向已配置的消息频道发送消息`)
};

const es_wb_node_channel_send_description = /** @type {(inputs: Wb_Node_Channel_Send_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar un mensaje a un canal de mensajería configurado`)
};

const ja_wb_node_channel_send_description = /** @type {(inputs: Wb_Node_Channel_Send_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定済みのメッセージングチャンネルにメッセージを送信します`)
};

const hi_wb_node_channel_send_description = /** @type {(inputs: Wb_Node_Channel_Send_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कॉन्फ़िगर किए गए मैसेजिंग चैनल पर संदेश भेजें`)
};

const pt_br2_wb_node_channel_send_description = /** @type {(inputs: Wb_Node_Channel_Send_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar uma mensagem para um canal de mensagens configurado`)
};

const ko_wb_node_channel_send_description = /** @type {(inputs: Wb_Node_Channel_Send_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`구성된 메시징 채널에 메시지를 전송합니다`)
};

const fr_wb_node_channel_send_description = /** @type {(inputs: Wb_Node_Channel_Send_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyer un message vers un canal de messagerie configuré`)
};

/**
* | output |
* | --- |
* | "Send a message to a configured messaging channel" |
*
* @param {Wb_Node_Channel_Send_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_channel_send_description = /** @type {((inputs?: Wb_Node_Channel_Send_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Channel_Send_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_channel_send_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_channel_send_description(inputs)
	if (locale === "es") return es_wb_node_channel_send_description(inputs)
	if (locale === "ja") return ja_wb_node_channel_send_description(inputs)
	if (locale === "hi") return hi_wb_node_channel_send_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_channel_send_description(inputs)
	if (locale === "ko") return ko_wb_node_channel_send_description(inputs)
	return fr_wb_node_channel_send_description(inputs)
});