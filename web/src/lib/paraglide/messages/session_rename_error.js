/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Session_Rename_ErrorInputs */

const en_session_rename_error = /** @type {(inputs: Session_Rename_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to rename chat session`)
};

const zh_cn2_session_rename_error = /** @type {(inputs: Session_Rename_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重命名聊天会话失败`)
};

const es_session_rename_error = /** @type {(inputs: Session_Rename_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error al renombrar sesión de chat`)
};

const ja_session_rename_error = /** @type {(inputs: Session_Rename_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャットセッションの名前変更に失敗しました`)
};

const hi_session_rename_error = /** @type {(inputs: Session_Rename_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैट सत्र का नाम बदलने में विफल`)
};

const pt_br2_session_rename_error = /** @type {(inputs: Session_Rename_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha ao renomear sessão de chat`)
};

const ko_session_rename_error = /** @type {(inputs: Session_Rename_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채팅 세션 이름 변경 실패`)
};

const fr_session_rename_error = /** @type {(inputs: Session_Rename_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec du renommage de la session de discussion`)
};

/**
* | output |
* | --- |
* | "Failed to rename chat session" |
*
* @param {Session_Rename_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const session_rename_error = /** @type {((inputs?: Session_Rename_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Session_Rename_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_session_rename_error(inputs)
	if (locale === "zh-CN") return zh_cn2_session_rename_error(inputs)
	if (locale === "es") return es_session_rename_error(inputs)
	if (locale === "ja") return ja_session_rename_error(inputs)
	if (locale === "hi") return hi_session_rename_error(inputs)
	if (locale === "pt-BR") return pt_br2_session_rename_error(inputs)
	if (locale === "ko") return ko_session_rename_error(inputs)
	return fr_session_rename_error(inputs)
});