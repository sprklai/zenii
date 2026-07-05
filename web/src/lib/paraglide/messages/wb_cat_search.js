/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Cat_SearchInputs */

const en_wb_cat_search = /** @type {(inputs: Wb_Cat_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search`)
};

const zh_cn2_wb_cat_search = /** @type {(inputs: Wb_Cat_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索`)
};

const es_wb_cat_search = /** @type {(inputs: Wb_Cat_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Búsqueda`)
};

const ja_wb_cat_search = /** @type {(inputs: Wb_Cat_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索`)
};

const hi_wb_cat_search = /** @type {(inputs: Wb_Cat_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`खोज`)
};

const pt_br2_wb_cat_search = /** @type {(inputs: Wb_Cat_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisa`)
};

const ko_wb_cat_search = /** @type {(inputs: Wb_Cat_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`검색`)
};

const fr_wb_cat_search = /** @type {(inputs: Wb_Cat_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recherche`)
};

/**
* | output |
* | --- |
* | "Search" |
*
* @param {Wb_Cat_SearchInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_cat_search = /** @type {((inputs?: Wb_Cat_SearchInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Cat_SearchInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_cat_search(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_cat_search(inputs)
	if (locale === "es") return es_wb_cat_search(inputs)
	if (locale === "ja") return ja_wb_cat_search(inputs)
	if (locale === "hi") return hi_wb_cat_search(inputs)
	if (locale === "pt-BR") return pt_br2_wb_cat_search(inputs)
	if (locale === "ko") return ko_wb_cat_search(inputs)
	return fr_wb_cat_search(inputs)
});