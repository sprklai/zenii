/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Wiki_ComparisonsInputs */

const en_dashboard_wiki_comparisons = /** @type {(inputs: Dashboard_Wiki_ComparisonsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparisons`)
};

const zh_cn2_dashboard_wiki_comparisons = /** @type {(inputs: Dashboard_Wiki_ComparisonsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Comparisons`)
};

const es_dashboard_wiki_comparisons = /** @type {(inputs: Dashboard_Wiki_ComparisonsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Comparisons`)
};

const ja_dashboard_wiki_comparisons = /** @type {(inputs: Dashboard_Wiki_ComparisonsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Comparisons`)
};

const hi_dashboard_wiki_comparisons = /** @type {(inputs: Dashboard_Wiki_ComparisonsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`तुलनाएं`)
};

const pt_br2_dashboard_wiki_comparisons = /** @type {(inputs: Dashboard_Wiki_ComparisonsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Comparisons`)
};

const ko_dashboard_wiki_comparisons = /** @type {(inputs: Dashboard_Wiki_ComparisonsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Comparisons`)
};

const fr_dashboard_wiki_comparisons = /** @type {(inputs: Dashboard_Wiki_ComparisonsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Comparisons`)
};

/**
* | output |
* | --- |
* | "Comparisons" |
*
* @param {Dashboard_Wiki_ComparisonsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_wiki_comparisons = /** @type {((inputs?: Dashboard_Wiki_ComparisonsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Wiki_ComparisonsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_wiki_comparisons(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_wiki_comparisons(inputs)
	if (locale === "es") return es_dashboard_wiki_comparisons(inputs)
	if (locale === "ja") return ja_dashboard_wiki_comparisons(inputs)
	if (locale === "hi") return hi_dashboard_wiki_comparisons(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_wiki_comparisons(inputs)
	if (locale === "ko") return ko_dashboard_wiki_comparisons(inputs)
	return fr_dashboard_wiki_comparisons(inputs)
});