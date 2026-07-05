/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Wiki_No_PagesInputs */

const en_dashboard_wiki_no_pages = /** @type {(inputs: Dashboard_Wiki_No_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No wiki pages yet`)
};

const zh_cn2_dashboard_wiki_no_pages = /** @type {(inputs: Dashboard_Wiki_No_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无维基页面`)
};

const es_dashboard_wiki_no_pages = /** @type {(inputs: Dashboard_Wiki_No_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay páginas en el wiki`)
};

const ja_dashboard_wiki_no_pages = /** @type {(inputs: Dashboard_Wiki_No_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだウィキページがありません`)
};

const hi_dashboard_wiki_no_pages = /** @type {(inputs: Dashboard_Wiki_No_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अभी तक कोई विकि पृष्ठ नहीं`)
};

const pt_br2_dashboard_wiki_no_pages = /** @type {(inputs: Dashboard_Wiki_No_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há páginas no wiki`)
};

const ko_dashboard_wiki_no_pages = /** @type {(inputs: Dashboard_Wiki_No_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`아직 위키 페이지가 없습니다`)
};

const fr_dashboard_wiki_no_pages = /** @type {(inputs: Dashboard_Wiki_No_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune page wiki pour l'instant`)
};

/**
* | output |
* | --- |
* | "No wiki pages yet" |
*
* @param {Dashboard_Wiki_No_PagesInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_wiki_no_pages = /** @type {((inputs?: Dashboard_Wiki_No_PagesInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Wiki_No_PagesInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_wiki_no_pages(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_wiki_no_pages(inputs)
	if (locale === "es") return es_dashboard_wiki_no_pages(inputs)
	if (locale === "ja") return ja_dashboard_wiki_no_pages(inputs)
	if (locale === "hi") return hi_dashboard_wiki_no_pages(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_wiki_no_pages(inputs)
	if (locale === "ko") return ko_dashboard_wiki_no_pages(inputs)
	return fr_dashboard_wiki_no_pages(inputs)
});