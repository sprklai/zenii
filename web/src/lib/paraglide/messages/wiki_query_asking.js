/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Query_AskingInputs */

const en_wiki_query_asking = /** @type {(inputs: Wiki_Query_AskingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asking...`)
};

const zh_cn2_wiki_query_asking = /** @type {(inputs: Wiki_Query_AskingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查询中...`)
};

const es_wiki_query_asking = /** @type {(inputs: Wiki_Query_AskingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preguntando...`)
};

const ja_wiki_query_asking = /** @type {(inputs: Wiki_Query_AskingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`質問中...`)
};

const hi_wiki_query_asking = /** @type {(inputs: Wiki_Query_AskingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पूछा जा रहा है...`)
};

const pt_br2_wiki_query_asking = /** @type {(inputs: Wiki_Query_AskingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perguntando...`)
};

const ko_wiki_query_asking = /** @type {(inputs: Wiki_Query_AskingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`질문 중...`)
};

const fr_wiki_query_asking = /** @type {(inputs: Wiki_Query_AskingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En cours...`)
};

/**
* | output |
* | --- |
* | "Asking..." |
*
* @param {Wiki_Query_AskingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_query_asking = /** @type {((inputs?: Wiki_Query_AskingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Query_AskingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_query_asking(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_query_asking(inputs)
	if (locale === "es") return es_wiki_query_asking(inputs)
	if (locale === "ja") return ja_wiki_query_asking(inputs)
	if (locale === "hi") return hi_wiki_query_asking(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_query_asking(inputs)
	if (locale === "ko") return ko_wiki_query_asking(inputs)
	return fr_wiki_query_asking(inputs)
});