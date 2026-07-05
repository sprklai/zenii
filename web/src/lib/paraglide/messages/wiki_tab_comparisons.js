/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Tab_ComparisonsInputs */

const en_wiki_tab_comparisons = /** @type {(inputs: Wiki_Tab_ComparisonsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparisons`)
};

const zh_cn2_wiki_tab_comparisons = /** @type {(inputs: Wiki_Tab_ComparisonsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`比较`)
};

const es_wiki_tab_comparisons = /** @type {(inputs: Wiki_Tab_ComparisonsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparaciones`)
};

const ja_wiki_tab_comparisons = /** @type {(inputs: Wiki_Tab_ComparisonsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`比較`)
};

const hi_wiki_tab_comparisons = /** @type {(inputs: Wiki_Tab_ComparisonsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`तुलनाएँ`)
};

const pt_br2_wiki_tab_comparisons = /** @type {(inputs: Wiki_Tab_ComparisonsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparações`)
};

const ko_wiki_tab_comparisons = /** @type {(inputs: Wiki_Tab_ComparisonsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`비교`)
};

const fr_wiki_tab_comparisons = /** @type {(inputs: Wiki_Tab_ComparisonsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparaisons`)
};

/**
* | output |
* | --- |
* | "Comparisons" |
*
* @param {Wiki_Tab_ComparisonsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_tab_comparisons = /** @type {((inputs?: Wiki_Tab_ComparisonsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Tab_ComparisonsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_tab_comparisons(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_tab_comparisons(inputs)
	if (locale === "es") return es_wiki_tab_comparisons(inputs)
	if (locale === "ja") return ja_wiki_tab_comparisons(inputs)
	if (locale === "hi") return hi_wiki_tab_comparisons(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_tab_comparisons(inputs)
	if (locale === "ko") return ko_wiki_tab_comparisons(inputs)
	return fr_wiki_tab_comparisons(inputs)
});