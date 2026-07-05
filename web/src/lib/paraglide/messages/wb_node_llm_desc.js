/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Llm_DescInputs */

const en_wb_node_llm_desc = /** @type {(inputs: Wb_Node_Llm_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send prompt to LLM`)
};

const zh_cn2_wb_node_llm_desc = /** @type {(inputs: Wb_Node_Llm_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`向 LLM 发送提示`)
};

const es_wb_node_llm_desc = /** @type {(inputs: Wb_Node_Llm_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar prompt al LLM`)
};

const ja_wb_node_llm_desc = /** @type {(inputs: Wb_Node_Llm_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`LLM にプロンプトを送信`)
};

const hi_wb_node_llm_desc = /** @type {(inputs: Wb_Node_Llm_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`LLM को प्रॉम्प्ट भेजें`)
};

const pt_br2_wb_node_llm_desc = /** @type {(inputs: Wb_Node_Llm_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar prompt ao LLM`)
};

const ko_wb_node_llm_desc = /** @type {(inputs: Wb_Node_Llm_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`LLM에 프롬프트 전송`)
};

const fr_wb_node_llm_desc = /** @type {(inputs: Wb_Node_Llm_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyer une invite au LLM`)
};

/**
* | output |
* | --- |
* | "Send prompt to LLM" |
*
* @param {Wb_Node_Llm_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_llm_desc = /** @type {((inputs?: Wb_Node_Llm_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Llm_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_llm_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_llm_desc(inputs)
	if (locale === "es") return es_wb_node_llm_desc(inputs)
	if (locale === "ja") return ja_wb_node_llm_desc(inputs)
	if (locale === "hi") return hi_wb_node_llm_desc(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_llm_desc(inputs)
	if (locale === "ko") return ko_wb_node_llm_desc(inputs)
	return fr_wb_node_llm_desc(inputs)
});