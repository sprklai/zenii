/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Sources_ButtonInputs */

const en_wiki_sources_button = /** @type {(inputs: Wiki_Sources_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sources`)
};

const zh_cn2_wiki_sources_button = /** @type {(inputs: Wiki_Sources_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`来源`)
};

const es_wiki_sources_button = /** @type {(inputs: Wiki_Sources_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fuentes`)
};

const ja_wiki_sources_button = /** @type {(inputs: Wiki_Sources_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ソース`)
};

const hi_wiki_sources_button = /** @type {(inputs: Wiki_Sources_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`स्रोत`)
};

const pt_br2_wiki_sources_button = /** @type {(inputs: Wiki_Sources_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fontes`)
};

const ko_wiki_sources_button = /** @type {(inputs: Wiki_Sources_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`소스`)
};

const fr_wiki_sources_button = /** @type {(inputs: Wiki_Sources_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sources`)
};

/**
* | output |
* | --- |
* | "Sources" |
*
* @param {Wiki_Sources_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_sources_button = /** @type {((inputs?: Wiki_Sources_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Sources_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_sources_button(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_sources_button(inputs)
	if (locale === "es") return es_wiki_sources_button(inputs)
	if (locale === "ja") return ja_wiki_sources_button(inputs)
	if (locale === "hi") return hi_wiki_sources_button(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_sources_button(inputs)
	if (locale === "ko") return ko_wiki_sources_button(inputs)
	return fr_wiki_sources_button(inputs)
});