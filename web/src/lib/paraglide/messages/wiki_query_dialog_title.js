/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Query_Dialog_TitleInputs */

const en_wiki_query_dialog_title = /** @type {(inputs: Wiki_Query_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Query Wiki`)
};

const zh_cn2_wiki_query_dialog_title = /** @type {(inputs: Wiki_Query_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查询维基`)
};

const es_wiki_query_dialog_title = /** @type {(inputs: Wiki_Query_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consultar wiki`)
};

const ja_wiki_query_dialog_title = /** @type {(inputs: Wiki_Query_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ウィキに質問`)
};

const hi_wiki_query_dialog_title = /** @type {(inputs: Wiki_Query_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`विकि प्रश्न`)
};

const pt_br2_wiki_query_dialog_title = /** @type {(inputs: Wiki_Query_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consultar wiki`)
};

const ko_wiki_query_dialog_title = /** @type {(inputs: Wiki_Query_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`위키 쿼리`)
};

const fr_wiki_query_dialog_title = /** @type {(inputs: Wiki_Query_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interroger le wiki`)
};

/**
* | output |
* | --- |
* | "Query Wiki" |
*
* @param {Wiki_Query_Dialog_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_query_dialog_title = /** @type {((inputs?: Wiki_Query_Dialog_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Query_Dialog_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_query_dialog_title(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_query_dialog_title(inputs)
	if (locale === "es") return es_wiki_query_dialog_title(inputs)
	if (locale === "ja") return ja_wiki_query_dialog_title(inputs)
	if (locale === "hi") return hi_wiki_query_dialog_title(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_query_dialog_title(inputs)
	if (locale === "ko") return ko_wiki_query_dialog_title(inputs)
	return fr_wiki_query_dialog_title(inputs)
});