/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Card_Wiki_TitleInputs */

const en_dashboard_card_wiki_title = /** @type {(inputs: Dashboard_Card_Wiki_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Knowledge Wiki`)
};

const zh_cn2_dashboard_card_wiki_title = /** @type {(inputs: Dashboard_Card_Wiki_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`知识维基`)
};

const es_dashboard_card_wiki_title = /** @type {(inputs: Dashboard_Card_Wiki_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki de Conocimiento`)
};

const ja_dashboard_card_wiki_title = /** @type {(inputs: Dashboard_Card_Wiki_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ナレッジウィキ`)
};

const hi_dashboard_card_wiki_title = /** @type {(inputs: Dashboard_Card_Wiki_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ज्ञान विकि`)
};

const pt_br2_dashboard_card_wiki_title = /** @type {(inputs: Dashboard_Card_Wiki_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki de Conhecimento`)
};

const ko_dashboard_card_wiki_title = /** @type {(inputs: Dashboard_Card_Wiki_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`지식 위키`)
};

const fr_dashboard_card_wiki_title = /** @type {(inputs: Dashboard_Card_Wiki_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki de connaissances`)
};

/**
* | output |
* | --- |
* | "Knowledge Wiki" |
*
* @param {Dashboard_Card_Wiki_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_card_wiki_title = /** @type {((inputs?: Dashboard_Card_Wiki_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Card_Wiki_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_card_wiki_title(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_card_wiki_title(inputs)
	if (locale === "es") return es_dashboard_card_wiki_title(inputs)
	if (locale === "ja") return ja_dashboard_card_wiki_title(inputs)
	if (locale === "hi") return hi_dashboard_card_wiki_title(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_card_wiki_title(inputs)
	if (locale === "ko") return ko_dashboard_card_wiki_title(inputs)
	return fr_dashboard_card_wiki_title(inputs)
});