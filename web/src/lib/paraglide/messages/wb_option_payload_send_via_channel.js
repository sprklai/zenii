/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Payload_Send_Via_ChannelInputs */

const en_wb_option_payload_send_via_channel = /** @type {(inputs: Wb_Option_Payload_Send_Via_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send via Channel`)
};

const zh_cn2_wb_option_payload_send_via_channel = /** @type {(inputs: Wb_Option_Payload_Send_Via_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通过频道发送`)
};

const es_wb_option_payload_send_via_channel = /** @type {(inputs: Wb_Option_Payload_Send_Via_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar por canal`)
};

const ja_wb_option_payload_send_via_channel = /** @type {(inputs: Wb_Option_Payload_Send_Via_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャンネル経由で送信`)
};

const hi_wb_option_payload_send_via_channel = /** @type {(inputs: Wb_Option_Payload_Send_Via_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैनल द्वारा भेजें`)
};

const pt_br2_wb_option_payload_send_via_channel = /** @type {(inputs: Wb_Option_Payload_Send_Via_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar pelo Canal`)
};

const ko_wb_option_payload_send_via_channel = /** @type {(inputs: Wb_Option_Payload_Send_Via_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채널로 전송`)
};

const fr_wb_option_payload_send_via_channel = /** @type {(inputs: Wb_Option_Payload_Send_Via_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyer via canal`)
};

/**
* | output |
* | --- |
* | "Send via Channel" |
*
* @param {Wb_Option_Payload_Send_Via_ChannelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_payload_send_via_channel = /** @type {((inputs?: Wb_Option_Payload_Send_Via_ChannelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Payload_Send_Via_ChannelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_payload_send_via_channel(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_payload_send_via_channel(inputs)
	if (locale === "es") return es_wb_option_payload_send_via_channel(inputs)
	if (locale === "ja") return ja_wb_option_payload_send_via_channel(inputs)
	if (locale === "hi") return hi_wb_option_payload_send_via_channel(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_payload_send_via_channel(inputs)
	if (locale === "ko") return ko_wb_option_payload_send_via_channel(inputs)
	return fr_wb_option_payload_send_via_channel(inputs)
});