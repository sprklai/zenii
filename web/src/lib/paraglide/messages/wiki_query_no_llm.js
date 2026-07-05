/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Query_No_LlmInputs */

const en_wiki_query_no_llm = /** @type {(inputs: Wiki_Query_No_LlmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No AI provider configured`)
};

const zh_cn2_wiki_query_no_llm = /** @type {(inputs: Wiki_Query_No_LlmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未配置 AI 提供商`)
};

const es_wiki_query_no_llm = /** @type {(inputs: Wiki_Query_No_LlmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay proveedor de IA configurado`)
};

const ja_wiki_query_no_llm = /** @type {(inputs: Wiki_Query_No_LlmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AIプロバイダーが設定されていません`)
};

const hi_wiki_query_no_llm = /** @type {(inputs: Wiki_Query_No_LlmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कोई AI प्रदाता कॉन्फ़िगर नहीं है`)
};

const pt_br2_wiki_query_no_llm = /** @type {(inputs: Wiki_Query_No_LlmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum provedor de IA configurado`)
};

const ko_wiki_query_no_llm = /** @type {(inputs: Wiki_Query_No_LlmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI 공급자가 구성되지 않았습니다`)
};

const fr_wiki_query_no_llm = /** @type {(inputs: Wiki_Query_No_LlmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun fournisseur d'IA configuré`)
};

/**
* | output |
* | --- |
* | "No AI provider configured" |
*
* @param {Wiki_Query_No_LlmInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_query_no_llm = /** @type {((inputs?: Wiki_Query_No_LlmInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Query_No_LlmInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_query_no_llm(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_query_no_llm(inputs)
	if (locale === "es") return es_wiki_query_no_llm(inputs)
	if (locale === "ja") return ja_wiki_query_no_llm(inputs)
	if (locale === "hi") return hi_wiki_query_no_llm(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_query_no_llm(inputs)
	if (locale === "ko") return ko_wiki_query_no_llm(inputs)
	return fr_wiki_query_no_llm(inputs)
});