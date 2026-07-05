/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_Copy_TooltipInputs */

const en_chat_copy_tooltip = /** @type {(inputs: Chat_Copy_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy`)
};

const zh_cn2_chat_copy_tooltip = /** @type {(inputs: Chat_Copy_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制`)
};

const es_chat_copy_tooltip = /** @type {(inputs: Chat_Copy_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar`)
};

const ja_chat_copy_tooltip = /** @type {(inputs: Chat_Copy_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コピー`)
};

const hi_chat_copy_tooltip = /** @type {(inputs: Chat_Copy_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कॉपी करें`)
};

const pt_br2_chat_copy_tooltip = /** @type {(inputs: Chat_Copy_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar`)
};

const ko_chat_copy_tooltip = /** @type {(inputs: Chat_Copy_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`복사`)
};

const fr_chat_copy_tooltip = /** @type {(inputs: Chat_Copy_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copier`)
};

/**
* | output |
* | --- |
* | "Copy" |
*
* @param {Chat_Copy_TooltipInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_copy_tooltip = /** @type {((inputs?: Chat_Copy_TooltipInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_Copy_TooltipInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_copy_tooltip(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_copy_tooltip(inputs)
	if (locale === "es") return es_chat_copy_tooltip(inputs)
	if (locale === "ja") return ja_chat_copy_tooltip(inputs)
	if (locale === "hi") return hi_chat_copy_tooltip(inputs)
	if (locale === "pt-BR") return pt_br2_chat_copy_tooltip(inputs)
	if (locale === "ko") return ko_chat_copy_tooltip(inputs)
	return fr_chat_copy_tooltip(inputs)
});