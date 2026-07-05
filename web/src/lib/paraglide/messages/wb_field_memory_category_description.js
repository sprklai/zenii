/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Memory_Category_DescriptionInputs */

const en_wb_field_memory_category_description = /** @type {(inputs: Wb_Field_Memory_Category_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Category to organize this memory entry`)
};

const zh_cn2_wb_field_memory_category_description = /** @type {(inputs: Wb_Field_Memory_Category_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用于整理此记忆条目的分类`)
};

const es_wb_field_memory_category_description = /** @type {(inputs: Wb_Field_Memory_Category_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoría para organizar esta entrada de memoria`)
};

const ja_wb_field_memory_category_description = /** @type {(inputs: Wb_Field_Memory_Category_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このメモリエントリを整理するカテゴリ`)
};

const hi_wb_field_memory_category_description = /** @type {(inputs: Wb_Field_Memory_Category_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`इस मेमोरी प्रविष्टि को व्यवस्थित करने की श्रेणी`)
};

const pt_br2_wb_field_memory_category_description = /** @type {(inputs: Wb_Field_Memory_Category_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria para organizar esta entrada de memória`)
};

const ko_wb_field_memory_category_description = /** @type {(inputs: Wb_Field_Memory_Category_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이 메모리 항목을 정리하는 카테고리`)
};

const fr_wb_field_memory_category_description = /** @type {(inputs: Wb_Field_Memory_Category_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégorie pour organiser cette entrée mémoire`)
};

/**
* | output |
* | --- |
* | "Category to organize this memory entry" |
*
* @param {Wb_Field_Memory_Category_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_memory_category_description = /** @type {((inputs?: Wb_Field_Memory_Category_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Memory_Category_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_memory_category_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_memory_category_description(inputs)
	if (locale === "es") return es_wb_field_memory_category_description(inputs)
	if (locale === "ja") return ja_wb_field_memory_category_description(inputs)
	if (locale === "hi") return hi_wb_field_memory_category_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_memory_category_description(inputs)
	if (locale === "ko") return ko_wb_field_memory_category_description(inputs)
	return fr_wb_field_memory_category_description(inputs)
});