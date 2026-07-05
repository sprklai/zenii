/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Dup_IncludeInputs */

const en_wiki_dup_include = /** @type {(inputs: Wiki_Dup_IncludeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Include`)
};

const zh_cn2_wiki_dup_include = /** @type {(inputs: Wiki_Dup_IncludeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Include`)
};

const es_wiki_dup_include = /** @type {(inputs: Wiki_Dup_IncludeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incluir`)
};

const ja_wiki_dup_include = /** @type {(inputs: Wiki_Dup_IncludeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`含める`)
};

const hi_wiki_dup_include = /** @type {(inputs: Wiki_Dup_IncludeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`शामिल करें`)
};

const pt_br2_wiki_dup_include = /** @type {(inputs: Wiki_Dup_IncludeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Include`)
};

const ko_wiki_dup_include = /** @type {(inputs: Wiki_Dup_IncludeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Include`)
};

const fr_wiki_dup_include = /** @type {(inputs: Wiki_Dup_IncludeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inclure`)
};

/**
* | output |
* | --- |
* | "Include" |
*
* @param {Wiki_Dup_IncludeInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_dup_include = /** @type {((inputs?: Wiki_Dup_IncludeInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Dup_IncludeInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_dup_include(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_dup_include(inputs)
	if (locale === "es") return es_wiki_dup_include(inputs)
	if (locale === "ja") return ja_wiki_dup_include(inputs)
	if (locale === "hi") return hi_wiki_dup_include(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_dup_include(inputs)
	if (locale === "ko") return ko_wiki_dup_include(inputs)
	return fr_wiki_dup_include(inputs)
});