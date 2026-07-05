/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Lint_RunningInputs */

const en_wiki_lint_running = /** @type {(inputs: Wiki_Lint_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Running lint...`)
};

const zh_cn2_wiki_lint_running = /** @type {(inputs: Wiki_Lint_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`检查中...`)
};

const es_wiki_lint_running = /** @type {(inputs: Wiki_Lint_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ejecutando lint...`)
};

const ja_wiki_lint_running = /** @type {(inputs: Wiki_Lint_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リントを実行中...`)
};

const hi_wiki_lint_running = /** @type {(inputs: Wiki_Lint_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`लिंट चल रहा है...`)
};

const pt_br2_wiki_lint_running = /** @type {(inputs: Wiki_Lint_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Executando lint...`)
};

const ko_wiki_lint_running = /** @type {(inputs: Wiki_Lint_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`린트 실행 중...`)
};

const fr_wiki_lint_running = /** @type {(inputs: Wiki_Lint_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lint en cours...`)
};

/**
* | output |
* | --- |
* | "Running lint..." |
*
* @param {Wiki_Lint_RunningInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_lint_running = /** @type {((inputs?: Wiki_Lint_RunningInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Lint_RunningInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_lint_running(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_lint_running(inputs)
	if (locale === "es") return es_wiki_lint_running(inputs)
	if (locale === "ja") return ja_wiki_lint_running(inputs)
	if (locale === "hi") return hi_wiki_lint_running(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_lint_running(inputs)
	if (locale === "ko") return ko_wiki_lint_running(inputs)
	return fr_wiki_lint_running(inputs)
});