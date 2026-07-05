/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Channel_Send_DescInputs */

const en_wb_node_channel_send_desc = /** @type {(inputs: Wb_Node_Channel_Send_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send message to channel`)
};

const zh_cn2_wb_node_channel_send_desc = /** @type {(inputs: Wb_Node_Channel_Send_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`向频道发送消息`)
};

const es_wb_node_channel_send_desc = /** @type {(inputs: Wb_Node_Channel_Send_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar mensaje a canal`)
};

const ja_wb_node_channel_send_desc = /** @type {(inputs: Wb_Node_Channel_Send_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャンネルにメッセージを送信`)
};

const hi_wb_node_channel_send_desc = /** @type {(inputs: Wb_Node_Channel_Send_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैनल पर संदेश भेजें`)
};

const pt_br2_wb_node_channel_send_desc = /** @type {(inputs: Wb_Node_Channel_Send_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar mensagem para canal`)
};

const ko_wb_node_channel_send_desc = /** @type {(inputs: Wb_Node_Channel_Send_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채널에 메시지 전송`)
};

const fr_wb_node_channel_send_desc = /** @type {(inputs: Wb_Node_Channel_Send_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyer un message sur un canal`)
};

/**
* | output |
* | --- |
* | "Send message to channel" |
*
* @param {Wb_Node_Channel_Send_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_channel_send_desc = /** @type {((inputs?: Wb_Node_Channel_Send_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Channel_Send_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_channel_send_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_channel_send_desc(inputs)
	if (locale === "es") return es_wb_node_channel_send_desc(inputs)
	if (locale === "ja") return ja_wb_node_channel_send_desc(inputs)
	if (locale === "hi") return hi_wb_node_channel_send_desc(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_channel_send_desc(inputs)
	if (locale === "ko") return ko_wb_node_channel_send_desc(inputs)
	return fr_wb_node_channel_send_desc(inputs)
});