/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_Select_Model_PlaceholderInputs */

const en_chat_select_model_placeholder = /** @type {(inputs: Chat_Select_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select model`)
};

const zh_cn2_chat_select_model_placeholder = /** @type {(inputs: Chat_Select_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择模型`)
};

const es_chat_select_model_placeholder = /** @type {(inputs: Chat_Select_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seleccionar modelo`)
};

const ja_chat_select_model_placeholder = /** @type {(inputs: Chat_Select_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデルを選択`)
};

const hi_chat_select_model_placeholder = /** @type {(inputs: Chat_Select_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मॉडल चुनें`)
};

const pt_br2_chat_select_model_placeholder = /** @type {(inputs: Chat_Select_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecionar modelo`)
};

const ko_chat_select_model_placeholder = /** @type {(inputs: Chat_Select_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`모델 선택`)
};

const fr_chat_select_model_placeholder = /** @type {(inputs: Chat_Select_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sélectionner un modèle`)
};

/**
* | output |
* | --- |
* | "Select model" |
*
* @param {Chat_Select_Model_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_select_model_placeholder = /** @type {((inputs?: Chat_Select_Model_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_Select_Model_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_select_model_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_select_model_placeholder(inputs)
	if (locale === "es") return es_chat_select_model_placeholder(inputs)
	if (locale === "ja") return ja_chat_select_model_placeholder(inputs)
	if (locale === "hi") return hi_chat_select_model_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_chat_select_model_placeholder(inputs)
	if (locale === "ko") return ko_chat_select_model_placeholder(inputs)
	return fr_chat_select_model_placeholder(inputs)
});