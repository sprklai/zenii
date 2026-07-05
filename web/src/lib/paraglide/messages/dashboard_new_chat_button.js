/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_New_Chat_ButtonInputs */

const en_dashboard_new_chat_button = /** @type {(inputs: Dashboard_New_Chat_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New Chat`)
};

const zh_cn2_dashboard_new_chat_button = /** @type {(inputs: Dashboard_New_Chat_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建聊天`)
};

const es_dashboard_new_chat_button = /** @type {(inputs: Dashboard_New_Chat_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevo chat`)
};

const ja_dashboard_new_chat_button = /** @type {(inputs: Dashboard_New_Chat_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新規チャット`)
};

const hi_dashboard_new_chat_button = /** @type {(inputs: Dashboard_New_Chat_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`नई चैट`)
};

const pt_br2_dashboard_new_chat_button = /** @type {(inputs: Dashboard_New_Chat_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nova Conversa`)
};

const ko_dashboard_new_chat_button = /** @type {(inputs: Dashboard_New_Chat_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`새 채팅`)
};

const fr_dashboard_new_chat_button = /** @type {(inputs: Dashboard_New_Chat_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelle discussion`)
};

/**
* | output |
* | --- |
* | "New Chat" |
*
* @param {Dashboard_New_Chat_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_new_chat_button = /** @type {((inputs?: Dashboard_New_Chat_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_New_Chat_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_new_chat_button(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_new_chat_button(inputs)
	if (locale === "es") return es_dashboard_new_chat_button(inputs)
	if (locale === "ja") return ja_dashboard_new_chat_button(inputs)
	if (locale === "hi") return hi_dashboard_new_chat_button(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_new_chat_button(inputs)
	if (locale === "ko") return ko_dashboard_new_chat_button(inputs)
	return fr_dashboard_new_chat_button(inputs)
});