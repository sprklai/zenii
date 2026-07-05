/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Channel_DescriptionInputs */

const en_wb_field_channel_description = /** @type {(inputs: Wb_Field_Channel_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name of the messaging channel to send to`)
};

const zh_cn2_wb_field_channel_description = /** @type {(inputs: Wb_Field_Channel_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要发送消息的消息频道名称`)
};

const es_wb_field_channel_description = /** @type {(inputs: Wb_Field_Channel_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre del canal de mensajería al que enviar`)
};

const ja_wb_field_channel_description = /** @type {(inputs: Wb_Field_Channel_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`送信先のメッセージングチャンネル名`)
};

const hi_wb_field_channel_description = /** @type {(inputs: Wb_Field_Channel_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`भेजने के लिए मैसेजिंग चैनल का नाम`)
};

const pt_br2_wb_field_channel_description = /** @type {(inputs: Wb_Field_Channel_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome do canal de mensagens para onde enviar`)
};

const ko_wb_field_channel_description = /** @type {(inputs: Wb_Field_Channel_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`전송할 메시징 채널 이름`)
};

const fr_wb_field_channel_description = /** @type {(inputs: Wb_Field_Channel_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom du canal de messagerie auquel envoyer`)
};

/**
* | output |
* | --- |
* | "Name of the messaging channel to send to" |
*
* @param {Wb_Field_Channel_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_channel_description = /** @type {((inputs?: Wb_Field_Channel_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Channel_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_channel_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_channel_description(inputs)
	if (locale === "es") return es_wb_field_channel_description(inputs)
	if (locale === "ja") return ja_wb_field_channel_description(inputs)
	if (locale === "hi") return hi_wb_field_channel_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_channel_description(inputs)
	if (locale === "ko") return ko_wb_field_channel_description(inputs)
	return fr_wb_field_channel_description(inputs)
});