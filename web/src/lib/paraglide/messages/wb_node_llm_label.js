/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Llm_LabelInputs */

const en_wb_node_llm_label = /** @type {(inputs: Wb_Node_Llm_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`LLM Prompt`)
};

const zh_cn2_wb_node_llm_label = /** @type {(inputs: Wb_Node_Llm_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`LLM 提示`)
};

const es_wb_node_llm_label = /** @type {(inputs: Wb_Node_Llm_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt LLM`)
};

const ja_wb_node_llm_label = /** @type {(inputs: Wb_Node_Llm_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`LLM プロンプト`)
};

const hi_wb_node_llm_label = /** @type {(inputs: Wb_Node_Llm_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`LLM प्रॉम्प्ट`)
};

const pt_br2_wb_node_llm_label = /** @type {(inputs: Wb_Node_Llm_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt LLM`)
};

const ko_wb_node_llm_label = /** @type {(inputs: Wb_Node_Llm_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`LLM 프롬프트`)
};

const fr_wb_node_llm_label = /** @type {(inputs: Wb_Node_Llm_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invite LLM`)
};

/**
* | output |
* | --- |
* | "LLM Prompt" |
*
* @param {Wb_Node_Llm_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_llm_label = /** @type {((inputs?: Wb_Node_Llm_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Llm_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_llm_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_llm_label(inputs)
	if (locale === "es") return es_wb_node_llm_label(inputs)
	if (locale === "ja") return ja_wb_node_llm_label(inputs)
	if (locale === "hi") return hi_wb_node_llm_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_llm_label(inputs)
	if (locale === "ko") return ko_wb_node_llm_label(inputs)
	return fr_wb_node_llm_label(inputs)
});