/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Wiki_TopicsInputs */

const en_dashboard_wiki_topics = /** @type {(inputs: Dashboard_Wiki_TopicsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Topics`)
};

const zh_cn2_dashboard_wiki_topics = /** @type {(inputs: Dashboard_Wiki_TopicsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Topics`)
};

const es_dashboard_wiki_topics = /** @type {(inputs: Dashboard_Wiki_TopicsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Topics`)
};

const ja_dashboard_wiki_topics = /** @type {(inputs: Dashboard_Wiki_TopicsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Topics`)
};

const hi_dashboard_wiki_topics = /** @type {(inputs: Dashboard_Wiki_TopicsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`विषय`)
};

const pt_br2_dashboard_wiki_topics = /** @type {(inputs: Dashboard_Wiki_TopicsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Topics`)
};

const ko_dashboard_wiki_topics = /** @type {(inputs: Dashboard_Wiki_TopicsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Topics`)
};

const fr_dashboard_wiki_topics = /** @type {(inputs: Dashboard_Wiki_TopicsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Topics`)
};

/**
* | output |
* | --- |
* | "Topics" |
*
* @param {Dashboard_Wiki_TopicsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_wiki_topics = /** @type {((inputs?: Dashboard_Wiki_TopicsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Wiki_TopicsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_wiki_topics(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_wiki_topics(inputs)
	if (locale === "es") return es_dashboard_wiki_topics(inputs)
	if (locale === "ja") return ja_dashboard_wiki_topics(inputs)
	if (locale === "hi") return hi_dashboard_wiki_topics(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_wiki_topics(inputs)
	if (locale === "ko") return ko_dashboard_wiki_topics(inputs)
	return fr_dashboard_wiki_topics(inputs)
});