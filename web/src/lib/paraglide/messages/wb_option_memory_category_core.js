/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Memory_Category_CoreInputs */

const en_wb_option_memory_category_core = /** @type {(inputs: Wb_Option_Memory_Category_CoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Core`)
};

const zh_cn2_wb_option_memory_category_core = /** @type {(inputs: Wb_Option_Memory_Category_CoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`核心`)
};

const es_wb_option_memory_category_core = /** @type {(inputs: Wb_Option_Memory_Category_CoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Núcleo`)
};

const ja_wb_option_memory_category_core = /** @type {(inputs: Wb_Option_Memory_Category_CoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コア`)
};

const hi_wb_option_memory_category_core = /** @type {(inputs: Wb_Option_Memory_Category_CoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मूल`)
};

const pt_br2_wb_option_memory_category_core = /** @type {(inputs: Wb_Option_Memory_Category_CoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Núcleo`)
};

const ko_wb_option_memory_category_core = /** @type {(inputs: Wb_Option_Memory_Category_CoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`핵심`)
};

const fr_wb_option_memory_category_core = /** @type {(inputs: Wb_Option_Memory_Category_CoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noyau`)
};

/**
* | output |
* | --- |
* | "Core" |
*
* @param {Wb_Option_Memory_Category_CoreInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_memory_category_core = /** @type {((inputs?: Wb_Option_Memory_Category_CoreInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Memory_Category_CoreInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_memory_category_core(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_memory_category_core(inputs)
	if (locale === "es") return es_wb_option_memory_category_core(inputs)
	if (locale === "ja") return ja_wb_option_memory_category_core(inputs)
	if (locale === "hi") return hi_wb_option_memory_category_core(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_memory_category_core(inputs)
	if (locale === "ko") return ko_wb_option_memory_category_core(inputs)
	return fr_wb_option_memory_category_core(inputs)
});