/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Query_Citations_HeadingInputs */

const en_wiki_query_citations_heading = /** @type {(inputs: Wiki_Query_Citations_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sources`)
};

const zh_cn2_wiki_query_citations_heading = /** @type {(inputs: Wiki_Query_Citations_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`来源`)
};

const es_wiki_query_citations_heading = /** @type {(inputs: Wiki_Query_Citations_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fuentes`)
};

const ja_wiki_query_citations_heading = /** @type {(inputs: Wiki_Query_Citations_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`出典`)
};

const hi_wiki_query_citations_heading = /** @type {(inputs: Wiki_Query_Citations_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`स्रोत`)
};

const pt_br2_wiki_query_citations_heading = /** @type {(inputs: Wiki_Query_Citations_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fontes`)
};

const ko_wiki_query_citations_heading = /** @type {(inputs: Wiki_Query_Citations_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`출처`)
};

const fr_wiki_query_citations_heading = /** @type {(inputs: Wiki_Query_Citations_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sources`)
};

/**
* | output |
* | --- |
* | "Sources" |
*
* @param {Wiki_Query_Citations_HeadingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_query_citations_heading = /** @type {((inputs?: Wiki_Query_Citations_HeadingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Query_Citations_HeadingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_query_citations_heading(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_query_citations_heading(inputs)
	if (locale === "es") return es_wiki_query_citations_heading(inputs)
	if (locale === "ja") return ja_wiki_query_citations_heading(inputs)
	if (locale === "hi") return hi_wiki_query_citations_heading(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_query_citations_heading(inputs)
	if (locale === "ko") return ko_wiki_query_citations_heading(inputs)
	return fr_wiki_query_citations_heading(inputs)
});