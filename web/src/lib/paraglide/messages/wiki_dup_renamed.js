/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Wiki_Dup_RenamedInputs */

const en_wiki_dup_renamed = /** @type {(inputs: Wiki_Dup_RenamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Matches "${i?.name}"`)
};

const zh_cn2_wiki_dup_renamed = /** @type {(inputs: Wiki_Dup_RenamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`[EN] Matches "${i?.name}"`)
};

const es_wiki_dup_renamed = /** @type {(inputs: Wiki_Dup_RenamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Coincide con "${i?.name}"`)
};

const ja_wiki_dup_renamed = /** @type {(inputs: Wiki_Dup_RenamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.name}」と一致`)
};

const hi_wiki_dup_renamed = /** @type {(inputs: Wiki_Dup_RenamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.name}" से मेल खाता है`)
};

const pt_br2_wiki_dup_renamed = /** @type {(inputs: Wiki_Dup_RenamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`[EN] Matches "${i?.name}"`)
};

const ko_wiki_dup_renamed = /** @type {(inputs: Wiki_Dup_RenamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`[EN] Matches "${i?.name}"`)
};

const fr_wiki_dup_renamed = /** @type {(inputs: Wiki_Dup_RenamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Correspond à "${i?.name}"`)
};

/**
* | output |
* | --- |
* | "Matches \"{name}\"" |
*
* @param {Wiki_Dup_RenamedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_dup_renamed = /** @type {((inputs: Wiki_Dup_RenamedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Dup_RenamedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_dup_renamed(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_dup_renamed(inputs)
	if (locale === "es") return es_wiki_dup_renamed(inputs)
	if (locale === "ja") return ja_wiki_dup_renamed(inputs)
	if (locale === "hi") return hi_wiki_dup_renamed(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_dup_renamed(inputs)
	if (locale === "ko") return ko_wiki_dup_renamed(inputs)
	return fr_wiki_dup_renamed(inputs)
});