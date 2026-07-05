/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Dup_SkipInputs */

const en_wiki_dup_skip = /** @type {(inputs: Wiki_Dup_SkipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skip`)
};

const zh_cn2_wiki_dup_skip = /** @type {(inputs: Wiki_Dup_SkipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Skip`)
};

const es_wiki_dup_skip = /** @type {(inputs: Wiki_Dup_SkipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omitir`)
};

const ja_wiki_dup_skip = /** @type {(inputs: Wiki_Dup_SkipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スキップ`)
};

const hi_wiki_dup_skip = /** @type {(inputs: Wiki_Dup_SkipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`छोड़ें`)
};

const pt_br2_wiki_dup_skip = /** @type {(inputs: Wiki_Dup_SkipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Skip`)
};

const ko_wiki_dup_skip = /** @type {(inputs: Wiki_Dup_SkipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Skip`)
};

const fr_wiki_dup_skip = /** @type {(inputs: Wiki_Dup_SkipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ignorer`)
};

/**
* | output |
* | --- |
* | "Skip" |
*
* @param {Wiki_Dup_SkipInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_dup_skip = /** @type {((inputs?: Wiki_Dup_SkipInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Dup_SkipInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_dup_skip(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_dup_skip(inputs)
	if (locale === "es") return es_wiki_dup_skip(inputs)
	if (locale === "ja") return ja_wiki_dup_skip(inputs)
	if (locale === "hi") return hi_wiki_dup_skip(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_dup_skip(inputs)
	if (locale === "ko") return ko_wiki_dup_skip(inputs)
	return fr_wiki_dup_skip(inputs)
});