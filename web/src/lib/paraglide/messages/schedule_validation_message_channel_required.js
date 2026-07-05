/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Validation_Message_Channel_RequiredInputs */

const en_schedule_validation_message_channel_required = /** @type {(inputs: Schedule_Validation_Message_Channel_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message is required for send via channel`)
};

const zh_cn2_schedule_validation_message_channel_required = /** @type {(inputs: Schedule_Validation_Message_Channel_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通过频道发送时消息为必填项`)
};

const es_schedule_validation_message_channel_required = /** @type {(inputs: Schedule_Validation_Message_Channel_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El mensaje es obligatorio para enviar por canal`)
};

const ja_schedule_validation_message_channel_required = /** @type {(inputs: Schedule_Validation_Message_Channel_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャンネル経由送信にはメッセージが必要です`)
};

const hi_schedule_validation_message_channel_required = /** @type {(inputs: Schedule_Validation_Message_Channel_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैनल द्वारा भेजने के लिए संदेश आवश्यक है`)
};

const pt_br2_schedule_validation_message_channel_required = /** @type {(inputs: Schedule_Validation_Message_Channel_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mensagem é obrigatória para envio via canal`)
};

const ko_schedule_validation_message_channel_required = /** @type {(inputs: Schedule_Validation_Message_Channel_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채널로 전송하려면 메시지가 필요합니다`)
};

const fr_schedule_validation_message_channel_required = /** @type {(inputs: Schedule_Validation_Message_Channel_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le message est requis pour l'envoi via un canal`)
};

/**
* | output |
* | --- |
* | "Message is required for send via channel" |
*
* @param {Schedule_Validation_Message_Channel_RequiredInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_validation_message_channel_required = /** @type {((inputs?: Schedule_Validation_Message_Channel_RequiredInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Validation_Message_Channel_RequiredInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_validation_message_channel_required(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_validation_message_channel_required(inputs)
	if (locale === "es") return es_schedule_validation_message_channel_required(inputs)
	if (locale === "ja") return ja_schedule_validation_message_channel_required(inputs)
	if (locale === "hi") return hi_schedule_validation_message_channel_required(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_validation_message_channel_required(inputs)
	if (locale === "ko") return ko_schedule_validation_message_channel_required(inputs)
	return fr_schedule_validation_message_channel_required(inputs)
});