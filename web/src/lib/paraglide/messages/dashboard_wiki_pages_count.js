/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, suffix: NonNullable<unknown> }} Dashboard_Wiki_Pages_CountInputs */

const en_dashboard_wiki_pages_count = /** @type {(inputs: Dashboard_Wiki_Pages_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} page${i?.suffix}`)
};

const zh_cn2_dashboard_wiki_pages_count = /** @type {(inputs: Dashboard_Wiki_Pages_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 页${i?.suffix}`)
};

const es_dashboard_wiki_pages_count = /** @type {(inputs: Dashboard_Wiki_Pages_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} página${i?.suffix}`)
};

const ja_dashboard_wiki_pages_count = /** @type {(inputs: Dashboard_Wiki_Pages_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} ページ${i?.suffix}`)
};

const hi_dashboard_wiki_pages_count = /** @type {(inputs: Dashboard_Wiki_Pages_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} पृष्ठ${i?.suffix}`)
};

const pt_br2_dashboard_wiki_pages_count = /** @type {(inputs: Dashboard_Wiki_Pages_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} página${i?.suffix}`)
};

const ko_dashboard_wiki_pages_count = /** @type {(inputs: Dashboard_Wiki_Pages_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count}개 페이지${i?.suffix}`)
};

const fr_dashboard_wiki_pages_count = /** @type {(inputs: Dashboard_Wiki_Pages_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} page${i?.suffix}`)
};

/**
* | output |
* | --- |
* | "{count} page{suffix}" |
*
* @param {Dashboard_Wiki_Pages_CountInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_wiki_pages_count = /** @type {((inputs: Dashboard_Wiki_Pages_CountInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Wiki_Pages_CountInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_wiki_pages_count(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_wiki_pages_count(inputs)
	if (locale === "es") return es_dashboard_wiki_pages_count(inputs)
	if (locale === "ja") return ja_dashboard_wiki_pages_count(inputs)
	if (locale === "hi") return hi_dashboard_wiki_pages_count(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_wiki_pages_count(inputs)
	if (locale === "ko") return ko_dashboard_wiki_pages_count(inputs)
	return fr_dashboard_wiki_pages_count(inputs)
});