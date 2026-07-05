/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Lint_ButtonInputs */

const en_wiki_lint_button = /** @type {(inputs: Wiki_Lint_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lint`)
};

const zh_cn2_wiki_lint_button = /** @type {(inputs: Wiki_Lint_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`检查`)
};

const es_wiki_lint_button = /** @type {(inputs: Wiki_Lint_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificar`)
};

const ja_wiki_lint_button = /** @type {(inputs: Wiki_Lint_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検証`)
};

const hi_wiki_lint_button = /** @type {(inputs: Wiki_Lint_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`जांच`)
};

const pt_br2_wiki_lint_button = /** @type {(inputs: Wiki_Lint_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificar`)
};

const ko_wiki_lint_button = /** @type {(inputs: Wiki_Lint_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`검사`)
};

const fr_wiki_lint_button = /** @type {(inputs: Wiki_Lint_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifier`)
};

/**
* | output |
* | --- |
* | "Lint" |
*
* @param {Wiki_Lint_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_lint_button = /** @type {((inputs?: Wiki_Lint_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Lint_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_lint_button(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_lint_button(inputs)
	if (locale === "es") return es_wiki_lint_button(inputs)
	if (locale === "ja") return ja_wiki_lint_button(inputs)
	if (locale === "hi") return hi_wiki_lint_button(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_lint_button(inputs)
	if (locale === "ko") return ko_wiki_lint_button(inputs)
	return fr_wiki_lint_button(inputs)
});