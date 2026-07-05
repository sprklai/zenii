/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Tldr_HeadingInputs */

const en_wiki_tldr_heading = /** @type {(inputs: Wiki_Tldr_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Summary`)
};

const zh_cn2_wiki_tldr_heading = /** @type {(inputs: Wiki_Tldr_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`摘要`)
};

const es_wiki_tldr_heading = /** @type {(inputs: Wiki_Tldr_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resumen`)
};

const ja_wiki_tldr_heading = /** @type {(inputs: Wiki_Tldr_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まとめ`)
};

const hi_wiki_tldr_heading = /** @type {(inputs: Wiki_Tldr_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सारांश`)
};

const pt_br2_wiki_tldr_heading = /** @type {(inputs: Wiki_Tldr_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resumo`)
};

const ko_wiki_tldr_heading = /** @type {(inputs: Wiki_Tldr_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`요약`)
};

const fr_wiki_tldr_heading = /** @type {(inputs: Wiki_Tldr_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Résumé`)
};

/**
* | output |
* | --- |
* | "Summary" |
*
* @param {Wiki_Tldr_HeadingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_tldr_heading = /** @type {((inputs?: Wiki_Tldr_HeadingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Tldr_HeadingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_tldr_heading(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_tldr_heading(inputs)
	if (locale === "es") return es_wiki_tldr_heading(inputs)
	if (locale === "ja") return ja_wiki_tldr_heading(inputs)
	if (locale === "hi") return hi_wiki_tldr_heading(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_tldr_heading(inputs)
	if (locale === "ko") return ko_wiki_tldr_heading(inputs)
	return fr_wiki_tldr_heading(inputs)
});