/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Memory_Category_ConversationInputs */

const en_wb_option_memory_category_conversation = /** @type {(inputs: Wb_Option_Memory_Category_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversation`)
};

const zh_cn2_wb_option_memory_category_conversation = /** @type {(inputs: Wb_Option_Memory_Category_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对话`)
};

const es_wb_option_memory_category_conversation = /** @type {(inputs: Wb_Option_Memory_Category_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversación`)
};

const ja_wb_option_memory_category_conversation = /** @type {(inputs: Wb_Option_Memory_Category_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`会話`)
};

const hi_wb_option_memory_category_conversation = /** @type {(inputs: Wb_Option_Memory_Category_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`बातचीत`)
};

const pt_br2_wb_option_memory_category_conversation = /** @type {(inputs: Wb_Option_Memory_Category_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversa`)
};

const ko_wb_option_memory_category_conversation = /** @type {(inputs: Wb_Option_Memory_Category_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`대화`)
};

const fr_wb_option_memory_category_conversation = /** @type {(inputs: Wb_Option_Memory_Category_ConversationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conversation`)
};

/**
* | output |
* | --- |
* | "Conversation" |
*
* @param {Wb_Option_Memory_Category_ConversationInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_memory_category_conversation = /** @type {((inputs?: Wb_Option_Memory_Category_ConversationInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Memory_Category_ConversationInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_memory_category_conversation(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_memory_category_conversation(inputs)
	if (locale === "es") return es_wb_option_memory_category_conversation(inputs)
	if (locale === "ja") return ja_wb_option_memory_category_conversation(inputs)
	if (locale === "hi") return hi_wb_option_memory_category_conversation(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_memory_category_conversation(inputs)
	if (locale === "ko") return ko_wb_option_memory_category_conversation(inputs)
	return fr_wb_option_memory_category_conversation(inputs)
});