/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Wiki_SourcesInputs */

const en_dashboard_wiki_sources = /** @type {(inputs: Dashboard_Wiki_SourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Docs`)
};

const zh_cn2_dashboard_wiki_sources = /** @type {(inputs: Dashboard_Wiki_SourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Docs`)
};

const es_dashboard_wiki_sources = /** @type {(inputs: Dashboard_Wiki_SourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Docs`)
};

const ja_dashboard_wiki_sources = /** @type {(inputs: Dashboard_Wiki_SourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Docs`)
};

const hi_dashboard_wiki_sources = /** @type {(inputs: Dashboard_Wiki_SourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`दस्तावेज़`)
};

const pt_br2_dashboard_wiki_sources = /** @type {(inputs: Dashboard_Wiki_SourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Docs`)
};

const ko_dashboard_wiki_sources = /** @type {(inputs: Dashboard_Wiki_SourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Docs`)
};

const fr_dashboard_wiki_sources = /** @type {(inputs: Dashboard_Wiki_SourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Docs`)
};

/**
* | output |
* | --- |
* | "Docs" |
*
* @param {Dashboard_Wiki_SourcesInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_wiki_sources = /** @type {((inputs?: Dashboard_Wiki_SourcesInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Wiki_SourcesInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_wiki_sources(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_wiki_sources(inputs)
	if (locale === "es") return es_dashboard_wiki_sources(inputs)
	if (locale === "ja") return ja_dashboard_wiki_sources(inputs)
	if (locale === "hi") return hi_dashboard_wiki_sources(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_wiki_sources(inputs)
	if (locale === "ko") return ko_dashboard_wiki_sources(inputs)
	return fr_dashboard_wiki_sources(inputs)
});