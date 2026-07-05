/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Session_Chats_LabelInputs */

const en_session_chats_label = /** @type {(inputs: Session_Chats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chats`)
};

const zh_cn2_session_chats_label = /** @type {(inputs: Session_Chats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`聊天`)
};

const es_session_chats_label = /** @type {(inputs: Session_Chats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chats`)
};

const ja_session_chats_label = /** @type {(inputs: Session_Chats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャット`)
};

const hi_session_chats_label = /** @type {(inputs: Session_Chats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैट`)
};

const pt_br2_session_chats_label = /** @type {(inputs: Session_Chats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chats`)
};

const ko_session_chats_label = /** @type {(inputs: Session_Chats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채팅`)
};

const fr_session_chats_label = /** @type {(inputs: Session_Chats_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chats`)
};

/**
* | output |
* | --- |
* | "Chats" |
*
* @param {Session_Chats_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const session_chats_label = /** @type {((inputs?: Session_Chats_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Session_Chats_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_session_chats_label(inputs)
	if (locale === "zh-CN") return zh_cn2_session_chats_label(inputs)
	if (locale === "es") return es_session_chats_label(inputs)
	if (locale === "ja") return ja_session_chats_label(inputs)
	if (locale === "hi") return hi_session_chats_label(inputs)
	if (locale === "pt-BR") return pt_br2_session_chats_label(inputs)
	if (locale === "ko") return ko_session_chats_label(inputs)
	return fr_session_chats_label(inputs)
});