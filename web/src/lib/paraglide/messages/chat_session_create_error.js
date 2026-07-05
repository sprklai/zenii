/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_Session_Create_ErrorInputs */

const en_chat_session_create_error = /** @type {(inputs: Chat_Session_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to create chat session`)
};

const zh_cn2_chat_session_create_error = /** @type {(inputs: Chat_Session_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建聊天会话失败`)
};

const es_chat_session_create_error = /** @type {(inputs: Chat_Session_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error al crear sesión de chat`)
};

const ja_chat_session_create_error = /** @type {(inputs: Chat_Session_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャットセッションの作成に失敗しました`)
};

const hi_chat_session_create_error = /** @type {(inputs: Chat_Session_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैट सत्र बनाने में विफल`)
};

const pt_br2_chat_session_create_error = /** @type {(inputs: Chat_Session_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha ao criar sessão de chat`)
};

const ko_chat_session_create_error = /** @type {(inputs: Chat_Session_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채팅 세션 생성 실패`)
};

const fr_chat_session_create_error = /** @type {(inputs: Chat_Session_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de la création de la session de discussion`)
};

/**
* | output |
* | --- |
* | "Failed to create chat session" |
*
* @param {Chat_Session_Create_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_session_create_error = /** @type {((inputs?: Chat_Session_Create_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_Session_Create_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_session_create_error(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_session_create_error(inputs)
	if (locale === "es") return es_chat_session_create_error(inputs)
	if (locale === "ja") return ja_chat_session_create_error(inputs)
	if (locale === "hi") return hi_chat_session_create_error(inputs)
	if (locale === "pt-BR") return pt_br2_chat_session_create_error(inputs)
	if (locale === "ko") return ko_chat_session_create_error(inputs)
	return fr_chat_session_create_error(inputs)
});