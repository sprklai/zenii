/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Session_Delete_ErrorInputs */

const en_session_delete_error = /** @type {(inputs: Session_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to delete chat session`)
};

const zh_cn2_session_delete_error = /** @type {(inputs: Session_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除聊天会话失败`)
};

const es_session_delete_error = /** @type {(inputs: Session_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error al eliminar sesión de chat`)
};

const ja_session_delete_error = /** @type {(inputs: Session_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャットセッションの削除に失敗しました`)
};

const hi_session_delete_error = /** @type {(inputs: Session_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैट सत्र हटाने में विफल`)
};

const pt_br2_session_delete_error = /** @type {(inputs: Session_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha ao excluir sessão de chat`)
};

const ko_session_delete_error = /** @type {(inputs: Session_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채팅 세션 삭제 실패`)
};

const fr_session_delete_error = /** @type {(inputs: Session_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de la suppression de la session de discussion`)
};

/**
* | output |
* | --- |
* | "Failed to delete chat session" |
*
* @param {Session_Delete_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const session_delete_error = /** @type {((inputs?: Session_Delete_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Session_Delete_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_session_delete_error(inputs)
	if (locale === "zh-CN") return zh_cn2_session_delete_error(inputs)
	if (locale === "es") return es_session_delete_error(inputs)
	if (locale === "ja") return ja_session_delete_error(inputs)
	if (locale === "hi") return hi_session_delete_error(inputs)
	if (locale === "pt-BR") return pt_br2_session_delete_error(inputs)
	if (locale === "ko") return ko_session_delete_error(inputs)
	return fr_session_delete_error(inputs)
});