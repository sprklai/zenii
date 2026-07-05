/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Query_ButtonInputs */

const en_wiki_query_button = /** @type {(inputs: Wiki_Query_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Query`)
};

const zh_cn2_wiki_query_button = /** @type {(inputs: Wiki_Query_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查询`)
};

const es_wiki_query_button = /** @type {(inputs: Wiki_Query_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consultar`)
};

const ja_wiki_query_button = /** @type {(inputs: Wiki_Query_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クエリ`)
};

const hi_wiki_query_button = /** @type {(inputs: Wiki_Query_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रश्न करें`)
};

const pt_br2_wiki_query_button = /** @type {(inputs: Wiki_Query_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consultar`)
};

const ko_wiki_query_button = /** @type {(inputs: Wiki_Query_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`쿼리`)
};

const fr_wiki_query_button = /** @type {(inputs: Wiki_Query_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requête`)
};

/**
* | output |
* | --- |
* | "Query" |
*
* @param {Wiki_Query_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_query_button = /** @type {((inputs?: Wiki_Query_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Query_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_query_button(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_query_button(inputs)
	if (locale === "es") return es_wiki_query_button(inputs)
	if (locale === "ja") return ja_wiki_query_button(inputs)
	if (locale === "hi") return hi_wiki_query_button(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_query_button(inputs)
	if (locale === "ko") return ko_wiki_query_button(inputs)
	return fr_wiki_query_button(inputs)
});