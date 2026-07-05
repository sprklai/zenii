/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Inbox_Message_CountInputs */

const en_inbox_message_count = /** @type {(inputs: Inbox_Message_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} messages`)
};

const zh_cn2_inbox_message_count = /** @type {(inputs: Inbox_Message_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 条消息`)
};

const es_inbox_message_count = /** @type {(inputs: Inbox_Message_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} mensajes`)
};

const ja_inbox_message_count = /** @type {(inputs: Inbox_Message_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 件のメッセージ`)
};

const hi_inbox_message_count = /** @type {(inputs: Inbox_Message_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} संदेश`)
};

const pt_br2_inbox_message_count = /** @type {(inputs: Inbox_Message_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} mensagens`)
};

const ko_inbox_message_count = /** @type {(inputs: Inbox_Message_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count}개 메시지`)
};

const fr_inbox_message_count = /** @type {(inputs: Inbox_Message_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} messages`)
};

/**
* | output |
* | --- |
* | "{count} messages" |
*
* @param {Inbox_Message_CountInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const inbox_message_count = /** @type {((inputs: Inbox_Message_CountInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Inbox_Message_CountInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_inbox_message_count(inputs)
	if (locale === "zh-CN") return zh_cn2_inbox_message_count(inputs)
	if (locale === "es") return es_inbox_message_count(inputs)
	if (locale === "ja") return ja_inbox_message_count(inputs)
	if (locale === "hi") return hi_inbox_message_count(inputs)
	if (locale === "pt-BR") return pt_br2_inbox_message_count(inputs)
	if (locale === "ko") return ko_inbox_message_count(inputs)
	return fr_inbox_message_count(inputs)
});