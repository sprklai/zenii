/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_Empty_TitleInputs */

const en_chat_empty_title = /** @type {(inputs: Chat_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start a conversation`)
};

const zh_cn2_chat_empty_title = /** @type {(inputs: Chat_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开始对话`)
};

const es_chat_empty_title = /** @type {(inputs: Chat_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia una conversación`)
};

const ja_chat_empty_title = /** @type {(inputs: Chat_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`会話を始める`)
};

const hi_chat_empty_title = /** @type {(inputs: Chat_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`बातचीत शुरू करें`)
};

const pt_br2_chat_empty_title = /** @type {(inputs: Chat_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iniciar uma conversa`)
};

const ko_chat_empty_title = /** @type {(inputs: Chat_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`대화 시작`)
};

const fr_chat_empty_title = /** @type {(inputs: Chat_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Démarrer une conversation`)
};

/**
* | output |
* | --- |
* | "Start a conversation" |
*
* @param {Chat_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_empty_title = /** @type {((inputs?: Chat_Empty_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_Empty_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_empty_title(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_empty_title(inputs)
	if (locale === "es") return es_chat_empty_title(inputs)
	if (locale === "ja") return ja_chat_empty_title(inputs)
	if (locale === "hi") return hi_chat_empty_title(inputs)
	if (locale === "pt-BR") return pt_br2_chat_empty_title(inputs)
	if (locale === "ko") return ko_chat_empty_title(inputs)
	return fr_chat_empty_title(inputs)
});