/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_No_ChatsInputs */

const en_dashboard_no_chats = /** @type {(inputs: Dashboard_No_ChatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No chats yet`)
};

const zh_cn2_dashboard_no_chats = /** @type {(inputs: Dashboard_No_ChatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无聊天`)
};

const es_dashboard_no_chats = /** @type {(inputs: Dashboard_No_ChatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay chats`)
};

const ja_dashboard_no_chats = /** @type {(inputs: Dashboard_No_ChatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャットはまだありません`)
};

const hi_dashboard_no_chats = /** @type {(inputs: Dashboard_No_ChatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अभी तक कोई चैट नहीं`)
};

const pt_br2_dashboard_no_chats = /** @type {(inputs: Dashboard_No_ChatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma conversa ainda`)
};

const ko_dashboard_no_chats = /** @type {(inputs: Dashboard_No_ChatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`아직 채팅 없음`)
};

const fr_dashboard_no_chats = /** @type {(inputs: Dashboard_No_ChatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune discussion`)
};

/**
* | output |
* | --- |
* | "No chats yet" |
*
* @param {Dashboard_No_ChatsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_no_chats = /** @type {((inputs?: Dashboard_No_ChatsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_No_ChatsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_no_chats(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_no_chats(inputs)
	if (locale === "es") return es_dashboard_no_chats(inputs)
	if (locale === "ja") return ja_dashboard_no_chats(inputs)
	if (locale === "hi") return hi_dashboard_no_chats(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_no_chats(inputs)
	if (locale === "ko") return ko_dashboard_no_chats(inputs)
	return fr_dashboard_no_chats(inputs)
});