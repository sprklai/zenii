/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Lint_No_IssuesInputs */

const en_wiki_lint_no_issues = /** @type {(inputs: Wiki_Lint_No_IssuesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No issues found`)
};

const zh_cn2_wiki_lint_no_issues = /** @type {(inputs: Wiki_Lint_No_IssuesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未发现问题`)
};

const es_wiki_lint_no_issues = /** @type {(inputs: Wiki_Lint_No_IssuesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se encontraron problemas`)
};

const ja_wiki_lint_no_issues = /** @type {(inputs: Wiki_Lint_No_IssuesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`問題は見つかりませんでした`)
};

const hi_wiki_lint_no_issues = /** @type {(inputs: Wiki_Lint_No_IssuesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कोई समस्या नहीं मिली`)
};

const pt_br2_wiki_lint_no_issues = /** @type {(inputs: Wiki_Lint_No_IssuesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum problema encontrado`)
};

const ko_wiki_lint_no_issues = /** @type {(inputs: Wiki_Lint_No_IssuesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`문제가 발견되지 않았습니다`)
};

const fr_wiki_lint_no_issues = /** @type {(inputs: Wiki_Lint_No_IssuesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun problème trouvé`)
};

/**
* | output |
* | --- |
* | "No issues found" |
*
* @param {Wiki_Lint_No_IssuesInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_lint_no_issues = /** @type {((inputs?: Wiki_Lint_No_IssuesInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Lint_No_IssuesInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_lint_no_issues(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_lint_no_issues(inputs)
	if (locale === "es") return es_wiki_lint_no_issues(inputs)
	if (locale === "ja") return ja_wiki_lint_no_issues(inputs)
	if (locale === "hi") return hi_wiki_lint_no_issues(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_lint_no_issues(inputs)
	if (locale === "ko") return ko_wiki_lint_no_issues(inputs)
	return fr_wiki_lint_no_issues(inputs)
});