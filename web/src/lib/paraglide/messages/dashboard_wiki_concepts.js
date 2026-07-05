/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Wiki_ConceptsInputs */

const en_dashboard_wiki_concepts = /** @type {(inputs: Dashboard_Wiki_ConceptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concepts`)
};

const zh_cn2_dashboard_wiki_concepts = /** @type {(inputs: Dashboard_Wiki_ConceptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Concepts`)
};

const es_dashboard_wiki_concepts = /** @type {(inputs: Dashboard_Wiki_ConceptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Concepts`)
};

const ja_dashboard_wiki_concepts = /** @type {(inputs: Dashboard_Wiki_ConceptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Concepts`)
};

const hi_dashboard_wiki_concepts = /** @type {(inputs: Dashboard_Wiki_ConceptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अवधारणाएं`)
};

const pt_br2_dashboard_wiki_concepts = /** @type {(inputs: Dashboard_Wiki_ConceptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Concepts`)
};

const ko_dashboard_wiki_concepts = /** @type {(inputs: Dashboard_Wiki_ConceptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Concepts`)
};

const fr_dashboard_wiki_concepts = /** @type {(inputs: Dashboard_Wiki_ConceptsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Concepts`)
};

/**
* | output |
* | --- |
* | "Concepts" |
*
* @param {Dashboard_Wiki_ConceptsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_wiki_concepts = /** @type {((inputs?: Dashboard_Wiki_ConceptsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Wiki_ConceptsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_wiki_concepts(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_wiki_concepts(inputs)
	if (locale === "es") return es_dashboard_wiki_concepts(inputs)
	if (locale === "ja") return ja_dashboard_wiki_concepts(inputs)
	if (locale === "hi") return hi_dashboard_wiki_concepts(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_wiki_concepts(inputs)
	if (locale === "ko") return ko_dashboard_wiki_concepts(inputs)
	return fr_dashboard_wiki_concepts(inputs)
});