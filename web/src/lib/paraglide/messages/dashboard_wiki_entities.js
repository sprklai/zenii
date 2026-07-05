/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Wiki_EntitiesInputs */

const en_dashboard_wiki_entities = /** @type {(inputs: Dashboard_Wiki_EntitiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entities`)
};

const zh_cn2_dashboard_wiki_entities = /** @type {(inputs: Dashboard_Wiki_EntitiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Entities`)
};

const es_dashboard_wiki_entities = /** @type {(inputs: Dashboard_Wiki_EntitiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Entities`)
};

const ja_dashboard_wiki_entities = /** @type {(inputs: Dashboard_Wiki_EntitiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Entities`)
};

const hi_dashboard_wiki_entities = /** @type {(inputs: Dashboard_Wiki_EntitiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`इकाइयां`)
};

const pt_br2_dashboard_wiki_entities = /** @type {(inputs: Dashboard_Wiki_EntitiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Entities`)
};

const ko_dashboard_wiki_entities = /** @type {(inputs: Dashboard_Wiki_EntitiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Entities`)
};

const fr_dashboard_wiki_entities = /** @type {(inputs: Dashboard_Wiki_EntitiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Entities`)
};

/**
* | output |
* | --- |
* | "Entities" |
*
* @param {Dashboard_Wiki_EntitiesInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_wiki_entities = /** @type {((inputs?: Dashboard_Wiki_EntitiesInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Wiki_EntitiesInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_wiki_entities(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_wiki_entities(inputs)
	if (locale === "es") return es_dashboard_wiki_entities(inputs)
	if (locale === "ja") return ja_dashboard_wiki_entities(inputs)
	if (locale === "hi") return hi_dashboard_wiki_entities(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_wiki_entities(inputs)
	if (locale === "ko") return ko_dashboard_wiki_entities(inputs)
	return fr_dashboard_wiki_entities(inputs)
});