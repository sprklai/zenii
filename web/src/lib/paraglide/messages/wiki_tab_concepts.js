/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Tab_ConceptsInputs */

const en_wiki_tab_concepts = /** @type {(inputs: Wiki_Tab_ConceptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concepts`)
};

const zh_cn2_wiki_tab_concepts = /** @type {(inputs: Wiki_Tab_ConceptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`概念`)
};

const es_wiki_tab_concepts = /** @type {(inputs: Wiki_Tab_ConceptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conceptos`)
};

const ja_wiki_tab_concepts = /** @type {(inputs: Wiki_Tab_ConceptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`概念`)
};

const hi_wiki_tab_concepts = /** @type {(inputs: Wiki_Tab_ConceptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अवधारणाएं`)
};

const pt_br2_wiki_tab_concepts = /** @type {(inputs: Wiki_Tab_ConceptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conceitos`)
};

const ko_wiki_tab_concepts = /** @type {(inputs: Wiki_Tab_ConceptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`개념`)
};

const fr_wiki_tab_concepts = /** @type {(inputs: Wiki_Tab_ConceptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concepts`)
};

/**
* | output |
* | --- |
* | "Concepts" |
*
* @param {Wiki_Tab_ConceptsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_tab_concepts = /** @type {((inputs?: Wiki_Tab_ConceptsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Tab_ConceptsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_tab_concepts(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_tab_concepts(inputs)
	if (locale === "es") return es_wiki_tab_concepts(inputs)
	if (locale === "ja") return ja_wiki_tab_concepts(inputs)
	if (locale === "hi") return hi_wiki_tab_concepts(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_tab_concepts(inputs)
	if (locale === "ko") return ko_wiki_tab_concepts(inputs)
	return fr_wiki_tab_concepts(inputs)
});