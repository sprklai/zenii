/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Inbox_Conversation_Fallback_TitleInputs */

const en_inbox_conversation_fallback_title = /** @type {(inputs: Inbox_Conversation_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversation`)
};

const zh_cn2_inbox_conversation_fallback_title = /** @type {(inputs: Inbox_Conversation_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对话`)
};

const es_inbox_conversation_fallback_title = /** @type {(inputs: Inbox_Conversation_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversación`)
};

const ja_inbox_conversation_fallback_title = /** @type {(inputs: Inbox_Conversation_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`会話`)
};

const hi_inbox_conversation_fallback_title = /** @type {(inputs: Inbox_Conversation_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`बातचीत`)
};

const pt_br2_inbox_conversation_fallback_title = /** @type {(inputs: Inbox_Conversation_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversa`)
};

const ko_inbox_conversation_fallback_title = /** @type {(inputs: Inbox_Conversation_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`대화`)
};

const fr_inbox_conversation_fallback_title = /** @type {(inputs: Inbox_Conversation_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversation`)
};

/**
* | output |
* | --- |
* | "Conversation" |
*
* @param {Inbox_Conversation_Fallback_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const inbox_conversation_fallback_title = /** @type {((inputs?: Inbox_Conversation_Fallback_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Inbox_Conversation_Fallback_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_inbox_conversation_fallback_title(inputs)
	if (locale === "zh-CN") return zh_cn2_inbox_conversation_fallback_title(inputs)
	if (locale === "es") return es_inbox_conversation_fallback_title(inputs)
	if (locale === "ja") return ja_inbox_conversation_fallback_title(inputs)
	if (locale === "hi") return hi_inbox_conversation_fallback_title(inputs)
	if (locale === "pt-BR") return pt_br2_inbox_conversation_fallback_title(inputs)
	if (locale === "ko") return ko_inbox_conversation_fallback_title(inputs)
	return fr_inbox_conversation_fallback_title(inputs)
});