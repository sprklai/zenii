/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Lint_Fix_LabelInputs */

const en_wiki_lint_fix_label = /** @type {(inputs: Wiki_Lint_Fix_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fix`)
};

const zh_cn2_wiki_lint_fix_label = /** @type {(inputs: Wiki_Lint_Fix_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修复`)
};

const es_wiki_lint_fix_label = /** @type {(inputs: Wiki_Lint_Fix_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corregir`)
};

const ja_wiki_lint_fix_label = /** @type {(inputs: Wiki_Lint_Fix_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修正`)
};

const hi_wiki_lint_fix_label = /** @type {(inputs: Wiki_Lint_Fix_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ठीक करें`)
};

const pt_br2_wiki_lint_fix_label = /** @type {(inputs: Wiki_Lint_Fix_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrigir`)
};

const ko_wiki_lint_fix_label = /** @type {(inputs: Wiki_Lint_Fix_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`수정`)
};

const fr_wiki_lint_fix_label = /** @type {(inputs: Wiki_Lint_Fix_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corriger`)
};

/**
* | output |
* | --- |
* | "Fix" |
*
* @param {Wiki_Lint_Fix_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_lint_fix_label = /** @type {((inputs?: Wiki_Lint_Fix_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Lint_Fix_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_lint_fix_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_lint_fix_label(inputs)
	if (locale === "es") return es_wiki_lint_fix_label(inputs)
	if (locale === "ja") return ja_wiki_lint_fix_label(inputs)
	if (locale === "hi") return hi_wiki_lint_fix_label(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_lint_fix_label(inputs)
	if (locale === "ko") return ko_wiki_lint_fix_label(inputs)
	return fr_wiki_lint_fix_label(inputs)
});