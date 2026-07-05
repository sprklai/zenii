/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_Edit_TooltipInputs */

const en_chat_edit_tooltip = /** @type {(inputs: Chat_Edit_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit`)
};

const zh_cn2_chat_edit_tooltip = /** @type {(inputs: Chat_Edit_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑`)
};

const es_chat_edit_tooltip = /** @type {(inputs: Chat_Edit_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar`)
};

const ja_chat_edit_tooltip = /** @type {(inputs: Chat_Edit_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`編集`)
};

const hi_chat_edit_tooltip = /** @type {(inputs: Chat_Edit_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`संपादित करें`)
};

const pt_br2_chat_edit_tooltip = /** @type {(inputs: Chat_Edit_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar`)
};

const ko_chat_edit_tooltip = /** @type {(inputs: Chat_Edit_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`편집`)
};

const fr_chat_edit_tooltip = /** @type {(inputs: Chat_Edit_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier`)
};

/**
* | output |
* | --- |
* | "Edit" |
*
* @param {Chat_Edit_TooltipInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_edit_tooltip = /** @type {((inputs?: Chat_Edit_TooltipInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_Edit_TooltipInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_edit_tooltip(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_edit_tooltip(inputs)
	if (locale === "es") return es_chat_edit_tooltip(inputs)
	if (locale === "ja") return ja_chat_edit_tooltip(inputs)
	if (locale === "hi") return hi_chat_edit_tooltip(inputs)
	if (locale === "pt-BR") return pt_br2_chat_edit_tooltip(inputs)
	if (locale === "ko") return ko_chat_edit_tooltip(inputs)
	return fr_chat_edit_tooltip(inputs)
});