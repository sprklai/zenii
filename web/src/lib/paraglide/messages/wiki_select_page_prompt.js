/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Select_Page_PromptInputs */

const en_wiki_select_page_prompt = /** @type {(inputs: Wiki_Select_Page_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select a page to read`)
};

const zh_cn2_wiki_select_page_prompt = /** @type {(inputs: Wiki_Select_Page_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择要阅读的页面`)
};

const es_wiki_select_page_prompt = /** @type {(inputs: Wiki_Select_Page_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecciona una página para leer`)
};

const ja_wiki_select_page_prompt = /** @type {(inputs: Wiki_Select_Page_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`読むページを選択してください`)
};

const hi_wiki_select_page_prompt = /** @type {(inputs: Wiki_Select_Page_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पढ़ने के लिए एक पृष्ठ चुनें`)
};

const pt_br2_wiki_select_page_prompt = /** @type {(inputs: Wiki_Select_Page_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecione uma página para ler`)
};

const ko_wiki_select_page_prompt = /** @type {(inputs: Wiki_Select_Page_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`읽을 페이지를 선택하세요`)
};

const fr_wiki_select_page_prompt = /** @type {(inputs: Wiki_Select_Page_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sélectionnez une page à lire`)
};

/**
* | output |
* | --- |
* | "Select a page to read" |
*
* @param {Wiki_Select_Page_PromptInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_select_page_prompt = /** @type {((inputs?: Wiki_Select_Page_PromptInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Select_Page_PromptInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_select_page_prompt(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_select_page_prompt(inputs)
	if (locale === "es") return es_wiki_select_page_prompt(inputs)
	if (locale === "ja") return ja_wiki_select_page_prompt(inputs)
	if (locale === "hi") return hi_wiki_select_page_prompt(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_select_page_prompt(inputs)
	if (locale === "ko") return ko_wiki_select_page_prompt(inputs)
	return fr_wiki_select_page_prompt(inputs)
});