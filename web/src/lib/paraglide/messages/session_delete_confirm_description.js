/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Session_Delete_Confirm_DescriptionInputs */

const en_session_delete_confirm_description = /** @type {(inputs: Session_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This will permanently delete this chat and all its messages.`)
};

const zh_cn2_session_delete_confirm_description = /** @type {(inputs: Session_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这将永久删除此聊天及其所有消息。`)
};

const es_session_delete_confirm_description = /** @type {(inputs: Session_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esto eliminará permanentemente este chat y todos sus mensajes.`)
};

const ja_session_delete_confirm_description = /** @type {(inputs: Session_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このチャットとすべてのメッセージが完全に削除されます。`)
};

const hi_session_delete_confirm_description = /** @type {(inputs: Session_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`यह इस चैट और उसके सभी संदेशों को स्थायी रूप से हटा देगा।`)
};

const pt_br2_session_delete_confirm_description = /** @type {(inputs: Session_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isso excluirá permanentemente esta conversa e todas as suas mensagens.`)
};

const ko_session_delete_confirm_description = /** @type {(inputs: Session_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이 채팅과 모든 메시지가 영구적으로 삭제됩니다.`)
};

const fr_session_delete_confirm_description = /** @type {(inputs: Session_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ceci supprimera définitivement cette discussion et tous ses messages.`)
};

/**
* | output |
* | --- |
* | "This will permanently delete this chat and all its messages." |
*
* @param {Session_Delete_Confirm_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const session_delete_confirm_description = /** @type {((inputs?: Session_Delete_Confirm_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Session_Delete_Confirm_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_session_delete_confirm_description(inputs)
	if (locale === "zh-CN") return zh_cn2_session_delete_confirm_description(inputs)
	if (locale === "es") return es_session_delete_confirm_description(inputs)
	if (locale === "ja") return ja_session_delete_confirm_description(inputs)
	if (locale === "hi") return hi_session_delete_confirm_description(inputs)
	if (locale === "pt-BR") return pt_br2_session_delete_confirm_description(inputs)
	if (locale === "ko") return ko_session_delete_confirm_description(inputs)
	return fr_session_delete_confirm_description(inputs)
});