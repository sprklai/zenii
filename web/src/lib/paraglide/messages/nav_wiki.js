/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Nav_WikiInputs */

const en_nav_wiki = /** @type {(inputs: Nav_WikiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Knowledge Wiki`)
};

const zh_cn2_nav_wiki = /** @type {(inputs: Nav_WikiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`知识维基`)
};

const es_nav_wiki = /** @type {(inputs: Nav_WikiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki de Conocimiento`)
};

const ja_nav_wiki = /** @type {(inputs: Nav_WikiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ナレッジウィキ`)
};

const hi_nav_wiki = /** @type {(inputs: Nav_WikiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ज्ञान विकि`)
};

const pt_br2_nav_wiki = /** @type {(inputs: Nav_WikiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki de Conhecimento`)
};

const ko_nav_wiki = /** @type {(inputs: Nav_WikiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`지식 위키`)
};

const fr_nav_wiki = /** @type {(inputs: Nav_WikiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki de connaissances`)
};

/**
* | output |
* | --- |
* | "Knowledge Wiki" |
*
* @param {Nav_WikiInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const nav_wiki = /** @type {((inputs?: Nav_WikiInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_WikiInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_nav_wiki(inputs)
	if (locale === "zh-CN") return zh_cn2_nav_wiki(inputs)
	if (locale === "es") return es_nav_wiki(inputs)
	if (locale === "ja") return ja_nav_wiki(inputs)
	if (locale === "hi") return hi_nav_wiki(inputs)
	if (locale === "pt-BR") return pt_br2_nav_wiki(inputs)
	if (locale === "ko") return ko_nav_wiki(inputs)
	return fr_nav_wiki(inputs)
});