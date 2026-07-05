/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Select_Page_HintInputs */

const en_wiki_select_page_hint = /** @type {(inputs: Wiki_Select_Page_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose from the list on the left`)
};

const zh_cn2_wiki_select_page_hint = /** @type {(inputs: Wiki_Select_Page_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从左侧列表中选择`)
};

const es_wiki_select_page_hint = /** @type {(inputs: Wiki_Select_Page_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige de la lista de la izquierda`)
};

const ja_wiki_select_page_hint = /** @type {(inputs: Wiki_Select_Page_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`左のリストから選択してください`)
};

const hi_wiki_select_page_hint = /** @type {(inputs: Wiki_Select_Page_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`बाईं ओर की सूची से चुनें`)
};

const pt_br2_wiki_select_page_hint = /** @type {(inputs: Wiki_Select_Page_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha na lista à esquerda`)
};

const ko_wiki_select_page_hint = /** @type {(inputs: Wiki_Select_Page_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`왼쪽 목록에서 선택하세요`)
};

const fr_wiki_select_page_hint = /** @type {(inputs: Wiki_Select_Page_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez dans la liste à gauche`)
};

/**
* | output |
* | --- |
* | "Choose from the list on the left" |
*
* @param {Wiki_Select_Page_HintInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_select_page_hint = /** @type {((inputs?: Wiki_Select_Page_HintInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Select_Page_HintInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_select_page_hint(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_select_page_hint(inputs)
	if (locale === "es") return es_wiki_select_page_hint(inputs)
	if (locale === "ja") return ja_wiki_select_page_hint(inputs)
	if (locale === "hi") return hi_wiki_select_page_hint(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_select_page_hint(inputs)
	if (locale === "ko") return ko_wiki_select_page_hint(inputs)
	return fr_wiki_select_page_hint(inputs)
});