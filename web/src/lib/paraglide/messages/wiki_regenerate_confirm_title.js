/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Regenerate_Confirm_TitleInputs */

const en_wiki_regenerate_confirm_title = /** @type {(inputs: Wiki_Regenerate_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regenerate all wiki pages?`)
};

const zh_cn2_wiki_regenerate_confirm_title = /** @type {(inputs: Wiki_Regenerate_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新生成所有维基页面？`)
};

const es_wiki_regenerate_confirm_title = /** @type {(inputs: Wiki_Regenerate_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Regenerar todas las páginas wiki?`)
};

const ja_wiki_regenerate_confirm_title = /** @type {(inputs: Wiki_Regenerate_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのウィキページを再生成しますか？`)
};

const hi_wiki_regenerate_confirm_title = /** @type {(inputs: Wiki_Regenerate_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सभी विकि पृष्ठ पुनर्जनित करें?`)
};

const pt_br2_wiki_regenerate_confirm_title = /** @type {(inputs: Wiki_Regenerate_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regenerar todas as páginas wiki?`)
};

const ko_wiki_regenerate_confirm_title = /** @type {(inputs: Wiki_Regenerate_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`모든 위키 페이지를 재생성하시겠습니까?`)
};

const fr_wiki_regenerate_confirm_title = /** @type {(inputs: Wiki_Regenerate_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Régénérer toutes les pages wiki ?`)
};

/**
* | output |
* | --- |
* | "Regenerate all wiki pages?" |
*
* @param {Wiki_Regenerate_Confirm_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_regenerate_confirm_title = /** @type {((inputs?: Wiki_Regenerate_Confirm_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Regenerate_Confirm_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_regenerate_confirm_title(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_regenerate_confirm_title(inputs)
	if (locale === "es") return es_wiki_regenerate_confirm_title(inputs)
	if (locale === "ja") return ja_wiki_regenerate_confirm_title(inputs)
	if (locale === "hi") return hi_wiki_regenerate_confirm_title(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_regenerate_confirm_title(inputs)
	if (locale === "ko") return ko_wiki_regenerate_confirm_title(inputs)
	return fr_wiki_regenerate_confirm_title(inputs)
});