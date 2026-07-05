/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Empty_No_PagesInputs */

const en_wiki_empty_no_pages = /** @type {(inputs: Wiki_Empty_No_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No wiki pages yet`)
};

const zh_cn2_wiki_empty_no_pages = /** @type {(inputs: Wiki_Empty_No_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无维基页面`)
};

const es_wiki_empty_no_pages = /** @type {(inputs: Wiki_Empty_No_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay páginas en el wiki`)
};

const ja_wiki_empty_no_pages = /** @type {(inputs: Wiki_Empty_No_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだウィキページがありません`)
};

const hi_wiki_empty_no_pages = /** @type {(inputs: Wiki_Empty_No_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अभी तक कोई विकि पृष्ठ नहीं`)
};

const pt_br2_wiki_empty_no_pages = /** @type {(inputs: Wiki_Empty_No_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há páginas no wiki`)
};

const ko_wiki_empty_no_pages = /** @type {(inputs: Wiki_Empty_No_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`아직 위키 페이지가 없습니다`)
};

const fr_wiki_empty_no_pages = /** @type {(inputs: Wiki_Empty_No_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune page wiki pour l'instant`)
};

/**
* | output |
* | --- |
* | "No wiki pages yet" |
*
* @param {Wiki_Empty_No_PagesInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_empty_no_pages = /** @type {((inputs?: Wiki_Empty_No_PagesInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Empty_No_PagesInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_empty_no_pages(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_empty_no_pages(inputs)
	if (locale === "es") return es_wiki_empty_no_pages(inputs)
	if (locale === "ja") return ja_wiki_empty_no_pages(inputs)
	if (locale === "hi") return hi_wiki_empty_no_pages(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_empty_no_pages(inputs)
	if (locale === "ko") return ko_wiki_empty_no_pages(inputs)
	return fr_wiki_empty_no_pages(inputs)
});