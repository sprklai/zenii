/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_Retry_TooltipInputs */

const en_chat_retry_tooltip = /** @type {(inputs: Chat_Retry_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retry`)
};

const zh_cn2_chat_retry_tooltip = /** @type {(inputs: Chat_Retry_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重试`)
};

const es_chat_retry_tooltip = /** @type {(inputs: Chat_Retry_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reintentar`)
};

const ja_chat_retry_tooltip = /** @type {(inputs: Chat_Retry_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再試行`)
};

const hi_chat_retry_tooltip = /** @type {(inputs: Chat_Retry_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पुनः प्रयास करें`)
};

const pt_br2_chat_retry_tooltip = /** @type {(inputs: Chat_Retry_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tentar novamente`)
};

const ko_chat_retry_tooltip = /** @type {(inputs: Chat_Retry_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`재시도`)
};

const fr_chat_retry_tooltip = /** @type {(inputs: Chat_Retry_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réessayer`)
};

/**
* | output |
* | --- |
* | "Retry" |
*
* @param {Chat_Retry_TooltipInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_retry_tooltip = /** @type {((inputs?: Chat_Retry_TooltipInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_Retry_TooltipInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_retry_tooltip(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_retry_tooltip(inputs)
	if (locale === "es") return es_chat_retry_tooltip(inputs)
	if (locale === "ja") return ja_chat_retry_tooltip(inputs)
	if (locale === "hi") return hi_chat_retry_tooltip(inputs)
	if (locale === "pt-BR") return pt_br2_chat_retry_tooltip(inputs)
	if (locale === "ko") return ko_chat_retry_tooltip(inputs)
	return fr_chat_retry_tooltip(inputs)
});