/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Query_AskInputs */

const en_wiki_query_ask = /** @type {(inputs: Wiki_Query_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask`)
};

const zh_cn2_wiki_query_ask = /** @type {(inputs: Wiki_Query_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提问`)
};

const es_wiki_query_ask = /** @type {(inputs: Wiki_Query_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preguntar`)
};

const ja_wiki_query_ask = /** @type {(inputs: Wiki_Query_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`質問する`)
};

const hi_wiki_query_ask = /** @type {(inputs: Wiki_Query_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पूछें`)
};

const pt_br2_wiki_query_ask = /** @type {(inputs: Wiki_Query_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perguntar`)
};

const ko_wiki_query_ask = /** @type {(inputs: Wiki_Query_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`질문`)
};

const fr_wiki_query_ask = /** @type {(inputs: Wiki_Query_AskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demander`)
};

/**
* | output |
* | --- |
* | "Ask" |
*
* @param {Wiki_Query_AskInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_query_ask = /** @type {((inputs?: Wiki_Query_AskInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Query_AskInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_query_ask(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_query_ask(inputs)
	if (locale === "es") return es_wiki_query_ask(inputs)
	if (locale === "ja") return ja_wiki_query_ask(inputs)
	if (locale === "hi") return hi_wiki_query_ask(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_query_ask(inputs)
	if (locale === "ko") return ko_wiki_query_ask(inputs)
	return fr_wiki_query_ask(inputs)
});