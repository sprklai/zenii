/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Session_Delete_Confirm_TitleInputs */

const en_session_delete_confirm_title = /** @type {(inputs: Session_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete chat?`)
};

const zh_cn2_session_delete_confirm_title = /** @type {(inputs: Session_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除聊天？`)
};

const es_session_delete_confirm_title = /** @type {(inputs: Session_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Eliminar chat?`)
};

const ja_session_delete_confirm_title = /** @type {(inputs: Session_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャットを削除しますか？`)
};

const hi_session_delete_confirm_title = /** @type {(inputs: Session_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैट हटाएँ?`)
};

const pt_br2_session_delete_confirm_title = /** @type {(inputs: Session_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir conversa?`)
};

const ko_session_delete_confirm_title = /** @type {(inputs: Session_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채팅을 삭제할까요?`)
};

const fr_session_delete_confirm_title = /** @type {(inputs: Session_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer la discussion ?`)
};

/**
* | output |
* | --- |
* | "Delete chat?" |
*
* @param {Session_Delete_Confirm_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const session_delete_confirm_title = /** @type {((inputs?: Session_Delete_Confirm_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Session_Delete_Confirm_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_session_delete_confirm_title(inputs)
	if (locale === "zh-CN") return zh_cn2_session_delete_confirm_title(inputs)
	if (locale === "es") return es_session_delete_confirm_title(inputs)
	if (locale === "ja") return ja_session_delete_confirm_title(inputs)
	if (locale === "hi") return hi_session_delete_confirm_title(inputs)
	if (locale === "pt-BR") return pt_br2_session_delete_confirm_title(inputs)
	if (locale === "ko") return ko_session_delete_confirm_title(inputs)
	return fr_session_delete_confirm_title(inputs)
});