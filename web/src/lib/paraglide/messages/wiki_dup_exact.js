/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Dup_ExactInputs */

const en_wiki_dup_exact = /** @type {(inputs: Wiki_Dup_ExactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unchanged duplicate`)
};

const zh_cn2_wiki_dup_exact = /** @type {(inputs: Wiki_Dup_ExactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Unchanged duplicate`)
};

const es_wiki_dup_exact = /** @type {(inputs: Wiki_Dup_ExactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplicado sin cambios`)
};

const ja_wiki_dup_exact = /** @type {(inputs: Wiki_Dup_ExactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更なしの重複`)
};

const hi_wiki_dup_exact = /** @type {(inputs: Wiki_Dup_ExactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अपरिवर्तित डुप्लीकेट`)
};

const pt_br2_wiki_dup_exact = /** @type {(inputs: Wiki_Dup_ExactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Unchanged duplicate`)
};

const ko_wiki_dup_exact = /** @type {(inputs: Wiki_Dup_ExactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Unchanged duplicate`)
};

const fr_wiki_dup_exact = /** @type {(inputs: Wiki_Dup_ExactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doublon identique`)
};

/**
* | output |
* | --- |
* | "Unchanged duplicate" |
*
* @param {Wiki_Dup_ExactInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_dup_exact = /** @type {((inputs?: Wiki_Dup_ExactInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Dup_ExactInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_dup_exact(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_dup_exact(inputs)
	if (locale === "es") return es_wiki_dup_exact(inputs)
	if (locale === "ja") return ja_wiki_dup_exact(inputs)
	if (locale === "hi") return hi_wiki_dup_exact(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_dup_exact(inputs)
	if (locale === "ko") return ko_wiki_dup_exact(inputs)
	return fr_wiki_dup_exact(inputs)
});