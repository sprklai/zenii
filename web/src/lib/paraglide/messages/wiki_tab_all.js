/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Tab_AllInputs */

const en_wiki_tab_all = /** @type {(inputs: Wiki_Tab_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All`)
};

const zh_cn2_wiki_tab_all = /** @type {(inputs: Wiki_Tab_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部`)
};

const es_wiki_tab_all = /** @type {(inputs: Wiki_Tab_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo`)
};

const ja_wiki_tab_all = /** @type {(inputs: Wiki_Tab_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて`)
};

const hi_wiki_tab_all = /** @type {(inputs: Wiki_Tab_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सभी`)
};

const pt_br2_wiki_tab_all = /** @type {(inputs: Wiki_Tab_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos`)
};

const ko_wiki_tab_all = /** @type {(inputs: Wiki_Tab_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`전체`)
};

const fr_wiki_tab_all = /** @type {(inputs: Wiki_Tab_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout`)
};

/**
* | output |
* | --- |
* | "All" |
*
* @param {Wiki_Tab_AllInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_tab_all = /** @type {((inputs?: Wiki_Tab_AllInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Tab_AllInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_tab_all(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_tab_all(inputs)
	if (locale === "es") return es_wiki_tab_all(inputs)
	if (locale === "ja") return ja_wiki_tab_all(inputs)
	if (locale === "hi") return hi_wiki_tab_all(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_tab_all(inputs)
	if (locale === "ko") return ko_wiki_tab_all(inputs)
	return fr_wiki_tab_all(inputs)
});