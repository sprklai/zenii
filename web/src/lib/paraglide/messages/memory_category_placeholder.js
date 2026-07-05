/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Memory_Category_PlaceholderInputs */

const en_memory_category_placeholder = /** @type {(inputs: Memory_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Category`)
};

const zh_cn2_memory_category_placeholder = /** @type {(inputs: Memory_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`类别`)
};

const es_memory_category_placeholder = /** @type {(inputs: Memory_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoría`)
};

const ja_memory_category_placeholder = /** @type {(inputs: Memory_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリ`)
};

const hi_memory_category_placeholder = /** @type {(inputs: Memory_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`श्रेणी`)
};

const pt_br2_memory_category_placeholder = /** @type {(inputs: Memory_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria`)
};

const ko_memory_category_placeholder = /** @type {(inputs: Memory_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`카테고리`)
};

const fr_memory_category_placeholder = /** @type {(inputs: Memory_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégorie`)
};

/**
* | output |
* | --- |
* | "Category" |
*
* @param {Memory_Category_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const memory_category_placeholder = /** @type {((inputs?: Memory_Category_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Memory_Category_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_memory_category_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_memory_category_placeholder(inputs)
	if (locale === "es") return es_memory_category_placeholder(inputs)
	if (locale === "ja") return ja_memory_category_placeholder(inputs)
	if (locale === "hi") return hi_memory_category_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_memory_category_placeholder(inputs)
	if (locale === "ko") return ko_memory_category_placeholder(inputs)
	return fr_memory_category_placeholder(inputs)
});