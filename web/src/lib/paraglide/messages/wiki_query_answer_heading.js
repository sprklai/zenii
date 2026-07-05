/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Query_Answer_HeadingInputs */

const en_wiki_query_answer_heading = /** @type {(inputs: Wiki_Query_Answer_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Answer`)
};

const zh_cn2_wiki_query_answer_heading = /** @type {(inputs: Wiki_Query_Answer_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`答案`)
};

const es_wiki_query_answer_heading = /** @type {(inputs: Wiki_Query_Answer_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Respuesta`)
};

const ja_wiki_query_answer_heading = /** @type {(inputs: Wiki_Query_Answer_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回答`)
};

const hi_wiki_query_answer_heading = /** @type {(inputs: Wiki_Query_Answer_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`उत्तर`)
};

const pt_br2_wiki_query_answer_heading = /** @type {(inputs: Wiki_Query_Answer_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resposta`)
};

const ko_wiki_query_answer_heading = /** @type {(inputs: Wiki_Query_Answer_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`답변`)
};

const fr_wiki_query_answer_heading = /** @type {(inputs: Wiki_Query_Answer_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réponse`)
};

/**
* | output |
* | --- |
* | "Answer" |
*
* @param {Wiki_Query_Answer_HeadingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_query_answer_heading = /** @type {((inputs?: Wiki_Query_Answer_HeadingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Query_Answer_HeadingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_query_answer_heading(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_query_answer_heading(inputs)
	if (locale === "es") return es_wiki_query_answer_heading(inputs)
	if (locale === "ja") return ja_wiki_query_answer_heading(inputs)
	if (locale === "hi") return hi_wiki_query_answer_heading(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_query_answer_heading(inputs)
	if (locale === "ko") return ko_wiki_query_answer_heading(inputs)
	return fr_wiki_query_answer_heading(inputs)
});