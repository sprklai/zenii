/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Query_PlaceholderInputs */

const en_wiki_query_placeholder = /** @type {(inputs: Wiki_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask a question about your wiki...`)
};

const zh_cn2_wiki_query_placeholder = /** @type {(inputs: Wiki_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`询问关于您的维基的问题...`)
};

const es_wiki_query_placeholder = /** @type {(inputs: Wiki_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haz una pregunta sobre tu wiki...`)
};

const ja_wiki_query_placeholder = /** @type {(inputs: Wiki_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ウィキについて質問してください...`)
};

const hi_wiki_query_placeholder = /** @type {(inputs: Wiki_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अपने विकि के बारे में कोई प्रश्न पूछें...`)
};

const pt_br2_wiki_query_placeholder = /** @type {(inputs: Wiki_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faça uma pergunta sobre seu wiki...`)
};

const ko_wiki_query_placeholder = /** @type {(inputs: Wiki_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`위키에 대해 질문하세요...`)
};

const fr_wiki_query_placeholder = /** @type {(inputs: Wiki_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posez une question sur votre wiki...`)
};

/**
* | output |
* | --- |
* | "Ask a question about your wiki..." |
*
* @param {Wiki_Query_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_query_placeholder = /** @type {((inputs?: Wiki_Query_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Query_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_query_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_query_placeholder(inputs)
	if (locale === "es") return es_wiki_query_placeholder(inputs)
	if (locale === "ja") return ja_wiki_query_placeholder(inputs)
	if (locale === "hi") return hi_wiki_query_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_query_placeholder(inputs)
	if (locale === "ko") return ko_wiki_query_placeholder(inputs)
	return fr_wiki_query_placeholder(inputs)
});