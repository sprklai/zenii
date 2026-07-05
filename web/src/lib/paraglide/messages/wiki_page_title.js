/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Page_TitleInputs */

const en_wiki_page_title = /** @type {(inputs: Wiki_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personalized Knowledge Wiki`)
};

const zh_cn2_wiki_page_title = /** @type {(inputs: Wiki_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`个性化知识维基`)
};

const es_wiki_page_title = /** @type {(inputs: Wiki_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki de Conocimiento Personalizado`)
};

const ja_wiki_page_title = /** @type {(inputs: Wiki_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パーソナライズされたナレッジウィキ`)
};

const hi_wiki_page_title = /** @type {(inputs: Wiki_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`व्यक्तिगत ज्ञान विकि`)
};

const pt_br2_wiki_page_title = /** @type {(inputs: Wiki_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki de Conhecimento Personalizado`)
};

const ko_wiki_page_title = /** @type {(inputs: Wiki_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`개인화된 지식 위키`)
};

const fr_wiki_page_title = /** @type {(inputs: Wiki_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki de connaissances personnalisé`)
};

/**
* | output |
* | --- |
* | "Personalized Knowledge Wiki" |
*
* @param {Wiki_Page_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_page_title = /** @type {((inputs?: Wiki_Page_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Page_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_page_title(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_page_title(inputs)
	if (locale === "es") return es_wiki_page_title(inputs)
	if (locale === "ja") return ja_wiki_page_title(inputs)
	if (locale === "hi") return hi_wiki_page_title(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_page_title(inputs)
	if (locale === "ko") return ko_wiki_page_title(inputs)
	return fr_wiki_page_title(inputs)
});