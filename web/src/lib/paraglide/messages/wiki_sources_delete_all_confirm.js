/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Wiki_Sources_Delete_All_ConfirmInputs */

const en_wiki_sources_delete_all_confirm = /** @type {(inputs: Wiki_Sources_Delete_All_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete all ${i?.count} source files? This will also delete all wiki pages derived from these sources. This cannot be undone.`)
};

const zh_cn2_wiki_sources_delete_all_confirm = /** @type {(inputs: Wiki_Sources_Delete_All_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete all ${i?.count} source files? This cannot be undone. Wiki pages are not affected.`)
};

const es_wiki_sources_delete_all_confirm = /** @type {(inputs: Wiki_Sources_Delete_All_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete all ${i?.count} source files? This cannot be undone. Wiki pages are not affected.`)
};

const ja_wiki_sources_delete_all_confirm = /** @type {(inputs: Wiki_Sources_Delete_All_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete all ${i?.count} source files? This cannot be undone. Wiki pages are not affected.`)
};

const hi_wiki_sources_delete_all_confirm = /** @type {(inputs: Wiki_Sources_Delete_All_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete all ${i?.count} source files? This cannot be undone. Wiki pages are not affected.`)
};

const pt_br2_wiki_sources_delete_all_confirm = /** @type {(inputs: Wiki_Sources_Delete_All_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete all ${i?.count} source files? This cannot be undone. Wiki pages are not affected.`)
};

const ko_wiki_sources_delete_all_confirm = /** @type {(inputs: Wiki_Sources_Delete_All_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete all ${i?.count} source files? This cannot be undone. Wiki pages are not affected.`)
};

const fr_wiki_sources_delete_all_confirm = /** @type {(inputs: Wiki_Sources_Delete_All_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete all ${i?.count} source files? This cannot be undone. Wiki pages are not affected.`)
};

/**
* | output |
* | --- |
* | "Delete all {count} source files? This will also delete all wiki pages derived from these sources. This cannot be undone." |
*
* @param {Wiki_Sources_Delete_All_ConfirmInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_sources_delete_all_confirm = /** @type {((inputs: Wiki_Sources_Delete_All_ConfirmInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Sources_Delete_All_ConfirmInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_sources_delete_all_confirm(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_sources_delete_all_confirm(inputs)
	if (locale === "es") return es_wiki_sources_delete_all_confirm(inputs)
	if (locale === "ja") return ja_wiki_sources_delete_all_confirm(inputs)
	if (locale === "hi") return hi_wiki_sources_delete_all_confirm(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_sources_delete_all_confirm(inputs)
	if (locale === "ko") return ko_wiki_sources_delete_all_confirm(inputs)
	return fr_wiki_sources_delete_all_confirm(inputs)
});