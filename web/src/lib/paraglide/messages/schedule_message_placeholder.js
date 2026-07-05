/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Message_PlaceholderInputs */

const en_schedule_message_placeholder = /** @type {(inputs: Schedule_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notification message`)
};

const zh_cn2_schedule_message_placeholder = /** @type {(inputs: Schedule_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知消息`)
};

const es_schedule_message_placeholder = /** @type {(inputs: Schedule_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mensaje de notificación`)
};

const ja_schedule_message_placeholder = /** @type {(inputs: Schedule_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知メッセージ`)
};

const hi_schedule_message_placeholder = /** @type {(inputs: Schedule_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सूचना संदेश`)
};

const pt_br2_schedule_message_placeholder = /** @type {(inputs: Schedule_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mensagem de notificação`)
};

const ko_schedule_message_placeholder = /** @type {(inputs: Schedule_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`알림 메시지`)
};

const fr_schedule_message_placeholder = /** @type {(inputs: Schedule_Message_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message de notification`)
};

/**
* | output |
* | --- |
* | "Notification message" |
*
* @param {Schedule_Message_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_message_placeholder = /** @type {((inputs?: Schedule_Message_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Message_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_message_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_message_placeholder(inputs)
	if (locale === "es") return es_schedule_message_placeholder(inputs)
	if (locale === "ja") return ja_schedule_message_placeholder(inputs)
	if (locale === "hi") return hi_schedule_message_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_message_placeholder(inputs)
	if (locale === "ko") return ko_schedule_message_placeholder(inputs)
	return fr_schedule_message_placeholder(inputs)
});