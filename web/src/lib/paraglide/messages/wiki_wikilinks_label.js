/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Wikilinks_LabelInputs */

const en_wiki_wikilinks_label = /** @type {(inputs: Wiki_Wikilinks_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Related Pages`)
};

const zh_cn2_wiki_wikilinks_label = /** @type {(inputs: Wiki_Wikilinks_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`相关页面`)
};

const es_wiki_wikilinks_label = /** @type {(inputs: Wiki_Wikilinks_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Páginas relacionadas`)
};

const ja_wiki_wikilinks_label = /** @type {(inputs: Wiki_Wikilinks_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`関連ページ`)
};

const hi_wiki_wikilinks_label = /** @type {(inputs: Wiki_Wikilinks_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`संबंधित पृष्ठ`)
};

const pt_br2_wiki_wikilinks_label = /** @type {(inputs: Wiki_Wikilinks_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Páginas relacionadas`)
};

const ko_wiki_wikilinks_label = /** @type {(inputs: Wiki_Wikilinks_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`관련 페이지`)
};

const fr_wiki_wikilinks_label = /** @type {(inputs: Wiki_Wikilinks_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pages connexes`)
};

/**
* | output |
* | --- |
* | "Related Pages" |
*
* @param {Wiki_Wikilinks_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_wikilinks_label = /** @type {((inputs?: Wiki_Wikilinks_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Wikilinks_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_wikilinks_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_wikilinks_label(inputs)
	if (locale === "es") return es_wiki_wikilinks_label(inputs)
	if (locale === "ja") return ja_wiki_wikilinks_label(inputs)
	if (locale === "hi") return hi_wiki_wikilinks_label(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_wikilinks_label(inputs)
	if (locale === "ko") return ko_wiki_wikilinks_label(inputs)
	return fr_wiki_wikilinks_label(inputs)
});