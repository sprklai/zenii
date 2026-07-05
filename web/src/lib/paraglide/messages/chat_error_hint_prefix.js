/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ hint: NonNullable<unknown> }} Chat_Error_Hint_PrefixInputs */

const en_chat_error_hint_prefix = /** @type {(inputs: Chat_Error_Hint_PrefixInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hint: ${i?.hint}`)
};

const zh_cn2_chat_error_hint_prefix = /** @type {(inputs: Chat_Error_Hint_PrefixInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`提示：${i?.hint}`)
};

const es_chat_error_hint_prefix = /** @type {(inputs: Chat_Error_Hint_PrefixInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sugerencia: ${i?.hint}`)
};

const ja_chat_error_hint_prefix = /** @type {(inputs: Chat_Error_Hint_PrefixInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ヒント：${i?.hint}`)
};

const hi_chat_error_hint_prefix = /** @type {(inputs: Chat_Error_Hint_PrefixInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`सुझाव: ${i?.hint}`)
};

const pt_br2_chat_error_hint_prefix = /** @type {(inputs: Chat_Error_Hint_PrefixInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dica: ${i?.hint}`)
};

const ko_chat_error_hint_prefix = /** @type {(inputs: Chat_Error_Hint_PrefixInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`힌트: ${i?.hint}`)
};

const fr_chat_error_hint_prefix = /** @type {(inputs: Chat_Error_Hint_PrefixInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Conseil : ${i?.hint}`)
};

/**
* | output |
* | --- |
* | "Hint: {hint}" |
*
* @param {Chat_Error_Hint_PrefixInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_error_hint_prefix = /** @type {((inputs: Chat_Error_Hint_PrefixInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_Error_Hint_PrefixInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_error_hint_prefix(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_error_hint_prefix(inputs)
	if (locale === "es") return es_chat_error_hint_prefix(inputs)
	if (locale === "ja") return ja_chat_error_hint_prefix(inputs)
	if (locale === "hi") return hi_chat_error_hint_prefix(inputs)
	if (locale === "pt-BR") return pt_br2_chat_error_hint_prefix(inputs)
	if (locale === "ko") return ko_chat_error_hint_prefix(inputs)
	return fr_chat_error_hint_prefix(inputs)
});