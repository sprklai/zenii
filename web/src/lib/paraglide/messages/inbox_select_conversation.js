/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Inbox_Select_ConversationInputs */

const en_inbox_select_conversation = /** @type {(inputs: Inbox_Select_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select a conversation to view messages`)
};

const zh_cn2_inbox_select_conversation = /** @type {(inputs: Inbox_Select_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择一个对话以查看消息`)
};

const es_inbox_select_conversation = /** @type {(inputs: Inbox_Select_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecciona una conversación para ver los mensajes`)
};

const ja_inbox_select_conversation = /** @type {(inputs: Inbox_Select_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`会話を選択してメッセージを表示`)
};

const hi_inbox_select_conversation = /** @type {(inputs: Inbox_Select_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`संदेश देखने के लिए वार्तालाप चुनें`)
};

const pt_br2_inbox_select_conversation = /** @type {(inputs: Inbox_Select_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecione uma conversa para ver as mensagens`)
};

const ko_inbox_select_conversation = /** @type {(inputs: Inbox_Select_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`대화를 선택하여 메시지를 확인하세요`)
};

const fr_inbox_select_conversation = /** @type {(inputs: Inbox_Select_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sélectionnez une conversation pour voir les messages`)
};

/**
* | output |
* | --- |
* | "Select a conversation to view messages" |
*
* @param {Inbox_Select_ConversationInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const inbox_select_conversation = /** @type {((inputs?: Inbox_Select_ConversationInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Inbox_Select_ConversationInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_inbox_select_conversation(inputs)
	if (locale === "zh-CN") return zh_cn2_inbox_select_conversation(inputs)
	if (locale === "es") return es_inbox_select_conversation(inputs)
	if (locale === "ja") return ja_inbox_select_conversation(inputs)
	if (locale === "hi") return hi_inbox_select_conversation(inputs)
	if (locale === "pt-BR") return pt_br2_inbox_select_conversation(inputs)
	if (locale === "ko") return ko_inbox_select_conversation(inputs)
	return fr_inbox_select_conversation(inputs)
});