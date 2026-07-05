/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ query: NonNullable<unknown> }} Wiki_Empty_No_ResultsInputs */

const en_wiki_empty_no_results = /** @type {(inputs: Wiki_Empty_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No pages matching "${i?.query}"`)
};

const zh_cn2_wiki_empty_no_results = /** @type {(inputs: Wiki_Empty_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`没有匹配 "${i?.query}" 的页面`)
};

const es_wiki_empty_no_results = /** @type {(inputs: Wiki_Empty_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No hay páginas que coincidan con "${i?.query}"`)
};

const ja_wiki_empty_no_results = /** @type {(inputs: Wiki_Empty_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.query}"に一致するページがありません`)
};

const hi_wiki_empty_no_results = /** @type {(inputs: Wiki_Empty_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.query}" से मेल खाते पृष्ठ नहीं`)
};

const pt_br2_wiki_empty_no_results = /** @type {(inputs: Wiki_Empty_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nenhuma página correspondendo a "${i?.query}"`)
};

const ko_wiki_empty_no_results = /** @type {(inputs: Wiki_Empty_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.query}"와 일치하는 페이지가 없습니다`)
};

const fr_wiki_empty_no_results = /** @type {(inputs: Wiki_Empty_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aucune page correspondant à "${i?.query}"`)
};

/**
* | output |
* | --- |
* | "No pages matching \"{query}\"" |
*
* @param {Wiki_Empty_No_ResultsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_empty_no_results = /** @type {((inputs: Wiki_Empty_No_ResultsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Empty_No_ResultsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_empty_no_results(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_empty_no_results(inputs)
	if (locale === "es") return es_wiki_empty_no_results(inputs)
	if (locale === "ja") return ja_wiki_empty_no_results(inputs)
	if (locale === "hi") return hi_wiki_empty_no_results(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_empty_no_results(inputs)
	if (locale === "ko") return ko_wiki_empty_no_results(inputs)
	return fr_wiki_empty_no_results(inputs)
});