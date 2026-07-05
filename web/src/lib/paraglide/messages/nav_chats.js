/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Nav_ChatsInputs */

const en_nav_chats = /** @type {(inputs: Nav_ChatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chats`)
};

const zh_cn2_nav_chats = /** @type {(inputs: Nav_ChatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`聊天`)
};

const es_nav_chats = /** @type {(inputs: Nav_ChatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chats`)
};

const ja_nav_chats = /** @type {(inputs: Nav_ChatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャット`)
};

const hi_nav_chats = /** @type {(inputs: Nav_ChatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैट`)
};

const pt_br2_nav_chats = /** @type {(inputs: Nav_ChatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chats`)
};

const ko_nav_chats = /** @type {(inputs: Nav_ChatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채팅`)
};

const fr_nav_chats = /** @type {(inputs: Nav_ChatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chats`)
};

/**
* | output |
* | --- |
* | "Chats" |
*
* @param {Nav_ChatsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const nav_chats = /** @type {((inputs?: Nav_ChatsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_ChatsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_nav_chats(inputs)
	if (locale === "zh-CN") return zh_cn2_nav_chats(inputs)
	if (locale === "es") return es_nav_chats(inputs)
	if (locale === "ja") return ja_nav_chats(inputs)
	if (locale === "hi") return hi_nav_chats(inputs)
	if (locale === "pt-BR") return pt_br2_nav_chats(inputs)
	if (locale === "ko") return ko_nav_chats(inputs)
	return fr_nav_chats(inputs)
});