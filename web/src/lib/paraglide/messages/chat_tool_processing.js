/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_Tool_ProcessingInputs */

const en_chat_tool_processing = /** @type {(inputs: Chat_Tool_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Processing...`)
};

const zh_cn2_chat_tool_processing = /** @type {(inputs: Chat_Tool_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`处理中...`)
};

const es_chat_tool_processing = /** @type {(inputs: Chat_Tool_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Procesando...`)
};

const ja_chat_tool_processing = /** @type {(inputs: Chat_Tool_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`処理中...`)
};

const hi_chat_tool_processing = /** @type {(inputs: Chat_Tool_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रोसेस हो रहा है...`)
};

const pt_br2_chat_tool_processing = /** @type {(inputs: Chat_Tool_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Processando...`)
};

const ko_chat_tool_processing = /** @type {(inputs: Chat_Tool_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`처리 중...`)
};

const fr_chat_tool_processing = /** @type {(inputs: Chat_Tool_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traitement...`)
};

/**
* | output |
* | --- |
* | "Processing..." |
*
* @param {Chat_Tool_ProcessingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_tool_processing = /** @type {((inputs?: Chat_Tool_ProcessingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_Tool_ProcessingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_tool_processing(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_tool_processing(inputs)
	if (locale === "es") return es_chat_tool_processing(inputs)
	if (locale === "ja") return ja_chat_tool_processing(inputs)
	if (locale === "hi") return hi_chat_tool_processing(inputs)
	if (locale === "pt-BR") return pt_br2_chat_tool_processing(inputs)
	if (locale === "ko") return ko_chat_tool_processing(inputs)
	return fr_chat_tool_processing(inputs)
});