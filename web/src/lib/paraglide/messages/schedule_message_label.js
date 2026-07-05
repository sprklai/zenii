/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Message_LabelInputs */

const en_schedule_message_label = /** @type {(inputs: Schedule_Message_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message`)
};

const zh_cn2_schedule_message_label = /** @type {(inputs: Schedule_Message_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`消息`)
};

const es_schedule_message_label = /** @type {(inputs: Schedule_Message_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mensaje`)
};

const ja_schedule_message_label = /** @type {(inputs: Schedule_Message_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メッセージ`)
};

const hi_schedule_message_label = /** @type {(inputs: Schedule_Message_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`संदेश`)
};

const pt_br2_schedule_message_label = /** @type {(inputs: Schedule_Message_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mensagem`)
};

const ko_schedule_message_label = /** @type {(inputs: Schedule_Message_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메시지`)
};

const fr_schedule_message_label = /** @type {(inputs: Schedule_Message_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message`)
};

/**
* | output |
* | --- |
* | "Message" |
*
* @param {Schedule_Message_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_message_label = /** @type {((inputs?: Schedule_Message_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Message_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_message_label(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_message_label(inputs)
	if (locale === "es") return es_schedule_message_label(inputs)
	if (locale === "ja") return ja_schedule_message_label(inputs)
	if (locale === "hi") return hi_schedule_message_label(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_message_label(inputs)
	if (locale === "ko") return ko_schedule_message_label(inputs)
	return fr_schedule_message_label(inputs)
});