/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Dup_UpdatedInputs */

const en_wiki_dup_updated = /** @type {(inputs: Wiki_Dup_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Already ingested`)
};

const zh_cn2_wiki_dup_updated = /** @type {(inputs: Wiki_Dup_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Already ingested`)
};

const es_wiki_dup_updated = /** @type {(inputs: Wiki_Dup_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya ingerido`)
};

const ja_wiki_dup_updated = /** @type {(inputs: Wiki_Dup_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取り込み済み`)
};

const hi_wiki_dup_updated = /** @type {(inputs: Wiki_Dup_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पहले से इनजेस्ट हुआ`)
};

const pt_br2_wiki_dup_updated = /** @type {(inputs: Wiki_Dup_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Already ingested`)
};

const ko_wiki_dup_updated = /** @type {(inputs: Wiki_Dup_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Already ingested`)
};

const fr_wiki_dup_updated = /** @type {(inputs: Wiki_Dup_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déjà ingéré`)
};

/**
* | output |
* | --- |
* | "Already ingested" |
*
* @param {Wiki_Dup_UpdatedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_dup_updated = /** @type {((inputs?: Wiki_Dup_UpdatedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Dup_UpdatedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_dup_updated(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_dup_updated(inputs)
	if (locale === "es") return es_wiki_dup_updated(inputs)
	if (locale === "ja") return ja_wiki_dup_updated(inputs)
	if (locale === "hi") return hi_wiki_dup_updated(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_dup_updated(inputs)
	if (locale === "ko") return ko_wiki_dup_updated(inputs)
	return fr_wiki_dup_updated(inputs)
});