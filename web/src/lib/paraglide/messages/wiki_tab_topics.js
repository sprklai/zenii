/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Tab_TopicsInputs */

const en_wiki_tab_topics = /** @type {(inputs: Wiki_Tab_TopicsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Topics`)
};

const zh_cn2_wiki_tab_topics = /** @type {(inputs: Wiki_Tab_TopicsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`主题`)
};

const es_wiki_tab_topics = /** @type {(inputs: Wiki_Tab_TopicsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temas`)
};

const ja_wiki_tab_topics = /** @type {(inputs: Wiki_Tab_TopicsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`トピック`)
};

const hi_wiki_tab_topics = /** @type {(inputs: Wiki_Tab_TopicsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`विषय`)
};

const pt_br2_wiki_tab_topics = /** @type {(inputs: Wiki_Tab_TopicsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tópicos`)
};

const ko_wiki_tab_topics = /** @type {(inputs: Wiki_Tab_TopicsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`주제`)
};

const fr_wiki_tab_topics = /** @type {(inputs: Wiki_Tab_TopicsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sujets`)
};

/**
* | output |
* | --- |
* | "Topics" |
*
* @param {Wiki_Tab_TopicsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_tab_topics = /** @type {((inputs?: Wiki_Tab_TopicsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Tab_TopicsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_tab_topics(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_tab_topics(inputs)
	if (locale === "es") return es_wiki_tab_topics(inputs)
	if (locale === "ja") return ja_wiki_tab_topics(inputs)
	if (locale === "hi") return hi_wiki_tab_topics(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_tab_topics(inputs)
	if (locale === "ko") return ko_wiki_tab_topics(inputs)
	return fr_wiki_tab_topics(inputs)
});