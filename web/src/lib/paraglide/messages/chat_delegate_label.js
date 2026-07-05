/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_Delegate_LabelInputs */

const en_chat_delegate_label = /** @type {(inputs: Chat_Delegate_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delegate`)
};

const zh_cn2_chat_delegate_label = /** @type {(inputs: Chat_Delegate_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`委派`)
};

const es_chat_delegate_label = /** @type {(inputs: Chat_Delegate_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delegar`)
};

const ja_chat_delegate_label = /** @type {(inputs: Chat_Delegate_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`委任`)
};

const hi_chat_delegate_label = /** @type {(inputs: Chat_Delegate_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`डेलिगेट`)
};

const pt_br2_chat_delegate_label = /** @type {(inputs: Chat_Delegate_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delegar`)
};

const ko_chat_delegate_label = /** @type {(inputs: Chat_Delegate_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`위임`)
};

const fr_chat_delegate_label = /** @type {(inputs: Chat_Delegate_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déléguer`)
};

/**
* | output |
* | --- |
* | "Delegate" |
*
* @param {Chat_Delegate_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_delegate_label = /** @type {((inputs?: Chat_Delegate_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_Delegate_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_delegate_label(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_delegate_label(inputs)
	if (locale === "es") return es_chat_delegate_label(inputs)
	if (locale === "ja") return ja_chat_delegate_label(inputs)
	if (locale === "hi") return hi_chat_delegate_label(inputs)
	if (locale === "pt-BR") return pt_br2_chat_delegate_label(inputs)
	if (locale === "ko") return ko_chat_delegate_label(inputs)
	return fr_chat_delegate_label(inputs)
});