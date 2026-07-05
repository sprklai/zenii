/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Inbox_No_MessagesInputs */

const en_inbox_no_messages = /** @type {(inputs: Inbox_No_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No messages in this conversation`)
};

const zh_cn2_inbox_no_messages = /** @type {(inputs: Inbox_No_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此对话暂无消息`)
};

const es_inbox_no_messages = /** @type {(inputs: Inbox_No_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay mensajes en esta conversación`)
};

const ja_inbox_no_messages = /** @type {(inputs: Inbox_No_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この会話にメッセージはありません`)
};

const hi_inbox_no_messages = /** @type {(inputs: Inbox_No_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`इस वार्तालाप में कोई संदेश नहीं`)
};

const pt_br2_inbox_no_messages = /** @type {(inputs: Inbox_No_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma mensagem nesta conversa`)
};

const ko_inbox_no_messages = /** @type {(inputs: Inbox_No_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이 대화에 메시지가 없습니다`)
};

const fr_inbox_no_messages = /** @type {(inputs: Inbox_No_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun message dans cette conversation`)
};

/**
* | output |
* | --- |
* | "No messages in this conversation" |
*
* @param {Inbox_No_MessagesInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const inbox_no_messages = /** @type {((inputs?: Inbox_No_MessagesInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Inbox_No_MessagesInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_inbox_no_messages(inputs)
	if (locale === "zh-CN") return zh_cn2_inbox_no_messages(inputs)
	if (locale === "es") return es_inbox_no_messages(inputs)
	if (locale === "ja") return ja_inbox_no_messages(inputs)
	if (locale === "hi") return hi_inbox_no_messages(inputs)
	if (locale === "pt-BR") return pt_br2_inbox_no_messages(inputs)
	if (locale === "ko") return ko_inbox_no_messages(inputs)
	return fr_inbox_no_messages(inputs)
});