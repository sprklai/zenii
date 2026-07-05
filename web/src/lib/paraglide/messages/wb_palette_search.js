/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Palette_SearchInputs */

const en_wb_palette_search = /** @type {(inputs: Wb_Palette_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search nodes...`)
};

const zh_cn2_wb_palette_search = /** @type {(inputs: Wb_Palette_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索节点...`)
};

const es_wb_palette_search = /** @type {(inputs: Wb_Palette_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar nodos...`)
};

const ja_wb_palette_search = /** @type {(inputs: Wb_Palette_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ノードを検索...`)
};

const hi_wb_palette_search = /** @type {(inputs: Wb_Palette_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`नोड्स खोजें...`)
};

const pt_br2_wb_palette_search = /** @type {(inputs: Wb_Palette_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisar nós...`)
};

const ko_wb_palette_search = /** @type {(inputs: Wb_Palette_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`노드 검색...`)
};

const fr_wb_palette_search = /** @type {(inputs: Wb_Palette_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher des nœuds...`)
};

/**
* | output |
* | --- |
* | "Search nodes..." |
*
* @param {Wb_Palette_SearchInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_palette_search = /** @type {((inputs?: Wb_Palette_SearchInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Palette_SearchInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_palette_search(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_palette_search(inputs)
	if (locale === "es") return es_wb_palette_search(inputs)
	if (locale === "ja") return ja_wb_palette_search(inputs)
	if (locale === "hi") return hi_wb_palette_search(inputs)
	if (locale === "pt-BR") return pt_br2_wb_palette_search(inputs)
	if (locale === "ko") return ko_wb_palette_search(inputs)
	return fr_wb_palette_search(inputs)
});