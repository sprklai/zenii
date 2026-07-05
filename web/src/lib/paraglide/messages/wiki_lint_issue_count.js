/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, suffix: NonNullable<unknown> }} Wiki_Lint_Issue_CountInputs */

const en_wiki_lint_issue_count = /** @type {(inputs: Wiki_Lint_Issue_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} issue${i?.suffix} found`)
};

const zh_cn2_wiki_lint_issue_count = /** @type {(inputs: Wiki_Lint_Issue_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`发现 ${i?.count} 个问题`)
};

const es_wiki_lint_issue_count = /** @type {(inputs: Wiki_Lint_Issue_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} problema${i?.suffix} encontrado`)
};

const ja_wiki_lint_issue_count = /** @type {(inputs: Wiki_Lint_Issue_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count}件の問題が見つかりました`)
};

const hi_wiki_lint_issue_count = /** @type {(inputs: Wiki_Lint_Issue_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} समस्या${i?.suffix} मिली`)
};

const pt_br2_wiki_lint_issue_count = /** @type {(inputs: Wiki_Lint_Issue_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} problema${i?.suffix} encontrado`)
};

const ko_wiki_lint_issue_count = /** @type {(inputs: Wiki_Lint_Issue_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count}개의 문제가 발견되었습니다`)
};

const fr_wiki_lint_issue_count = /** @type {(inputs: Wiki_Lint_Issue_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} problème${i?.suffix} trouvé`)
};

/**
* | output |
* | --- |
* | "{count} issue{suffix} found" |
*
* @param {Wiki_Lint_Issue_CountInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_lint_issue_count = /** @type {((inputs: Wiki_Lint_Issue_CountInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Lint_Issue_CountInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_lint_issue_count(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_lint_issue_count(inputs)
	if (locale === "es") return es_wiki_lint_issue_count(inputs)
	if (locale === "ja") return ja_wiki_lint_issue_count(inputs)
	if (locale === "hi") return hi_wiki_lint_issue_count(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_lint_issue_count(inputs)
	if (locale === "ko") return ko_wiki_lint_issue_count(inputs)
	return fr_wiki_lint_issue_count(inputs)
});