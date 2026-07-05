/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_NewInputs */

const en_chat_new = /** @type {(inputs: Chat_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New Chat`)
};

const zh_cn2_chat_new = /** @type {(inputs: Chat_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建聊天`)
};

const es_chat_new = /** @type {(inputs: Chat_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevo chat`)
};

const ja_chat_new = /** @type {(inputs: Chat_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新規チャット`)
};

const hi_chat_new = /** @type {(inputs: Chat_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`नई चैट`)
};

const pt_br2_chat_new = /** @type {(inputs: Chat_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nova Conversa`)
};

const ko_chat_new = /** @type {(inputs: Chat_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`새 채팅`)
};

const fr_chat_new = /** @type {(inputs: Chat_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelle discussion`)
};

/**
* | output |
* | --- |
* | "New Chat" |
*
* @param {Chat_NewInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_new = /** @type {((inputs?: Chat_NewInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_NewInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_new(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_new(inputs)
	if (locale === "es") return es_chat_new(inputs)
	if (locale === "ja") return ja_chat_new(inputs)
	if (locale === "hi") return hi_chat_new(inputs)
	if (locale === "pt-BR") return pt_br2_chat_new(inputs)
	if (locale === "ko") return ko_chat_new(inputs)
	return fr_chat_new(inputs)
});