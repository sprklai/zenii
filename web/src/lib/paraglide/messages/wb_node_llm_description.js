/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Llm_DescriptionInputs */

const en_wb_node_llm_description = /** @type {(inputs: Wb_Node_Llm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send a prompt to a language model and capture the response`)
};

const zh_cn2_wb_node_llm_description = /** @type {(inputs: Wb_Node_Llm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`向语言模型发送提示并捕获响应`)
};

const es_wb_node_llm_description = /** @type {(inputs: Wb_Node_Llm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar un prompt a un modelo de lenguaje y capturar la respuesta`)
};

const ja_wb_node_llm_description = /** @type {(inputs: Wb_Node_Llm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`言語モデルにプロンプトを送信して応答を取得します`)
};

const hi_wb_node_llm_description = /** @type {(inputs: Wb_Node_Llm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`भाषा मॉडल को प्रॉम्प्ट भेजें और प्रतिक्रिया कैप्चर करें`)
};

const pt_br2_wb_node_llm_description = /** @type {(inputs: Wb_Node_Llm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar um prompt a um modelo de linguagem e capturar a resposta`)
};

const ko_wb_node_llm_description = /** @type {(inputs: Wb_Node_Llm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`언어 모델에 프롬프트를 전송하고 응답을 캡처합니다`)
};

const fr_wb_node_llm_description = /** @type {(inputs: Wb_Node_Llm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyer une invite à un modèle de langage et capturer la réponse`)
};

/**
* | output |
* | --- |
* | "Send a prompt to a language model and capture the response" |
*
* @param {Wb_Node_Llm_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_llm_description = /** @type {((inputs?: Wb_Node_Llm_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Llm_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_llm_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_llm_description(inputs)
	if (locale === "es") return es_wb_node_llm_description(inputs)
	if (locale === "ja") return ja_wb_node_llm_description(inputs)
	if (locale === "hi") return hi_wb_node_llm_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_llm_description(inputs)
	if (locale === "ko") return ko_wb_node_llm_description(inputs)
	return fr_wb_node_llm_description(inputs)
});