/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Lint_ErrorInputs */

const en_wiki_lint_error = /** @type {(inputs: Wiki_Lint_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lint failed`)
};

const zh_cn2_wiki_lint_error = /** @type {(inputs: Wiki_Lint_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`检查失败`)
};

const es_wiki_lint_error = /** @type {(inputs: Wiki_Lint_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error en lint`)
};

const ja_wiki_lint_error = /** @type {(inputs: Wiki_Lint_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リントに失敗しました`)
};

const hi_wiki_lint_error = /** @type {(inputs: Wiki_Lint_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`लिंट विफल`)
};

const pt_br2_wiki_lint_error = /** @type {(inputs: Wiki_Lint_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha no lint`)
};

const ko_wiki_lint_error = /** @type {(inputs: Wiki_Lint_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`린트 실패`)
};

const fr_wiki_lint_error = /** @type {(inputs: Wiki_Lint_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec du lint`)
};

/**
* | output |
* | --- |
* | "Lint failed" |
*
* @param {Wiki_Lint_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_lint_error = /** @type {((inputs?: Wiki_Lint_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Lint_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_lint_error(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_lint_error(inputs)
	if (locale === "es") return es_wiki_lint_error(inputs)
	if (locale === "ja") return ja_wiki_lint_error(inputs)
	if (locale === "hi") return hi_wiki_lint_error(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_lint_error(inputs)
	if (locale === "ko") return ko_wiki_lint_error(inputs)
	return fr_wiki_lint_error(inputs)
});