/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Memory_Category_DailyInputs */

const en_wb_option_memory_category_daily = /** @type {(inputs: Wb_Option_Memory_Category_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daily`)
};

const zh_cn2_wb_option_memory_category_daily = /** @type {(inputs: Wb_Option_Memory_Category_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日常`)
};

const es_wb_option_memory_category_daily = /** @type {(inputs: Wb_Option_Memory_Category_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diario`)
};

const ja_wb_option_memory_category_daily = /** @type {(inputs: Wb_Option_Memory_Category_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日常`)
};

const hi_wb_option_memory_category_daily = /** @type {(inputs: Wb_Option_Memory_Category_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`दैनिक`)
};

const pt_br2_wb_option_memory_category_daily = /** @type {(inputs: Wb_Option_Memory_Category_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diário`)
};

const ko_wb_option_memory_category_daily = /** @type {(inputs: Wb_Option_Memory_Category_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`일상`)
};

const fr_wb_option_memory_category_daily = /** @type {(inputs: Wb_Option_Memory_Category_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quotidien`)
};

/**
* | output |
* | --- |
* | "Daily" |
*
* @param {Wb_Option_Memory_Category_DailyInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_memory_category_daily = /** @type {((inputs?: Wb_Option_Memory_Category_DailyInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Memory_Category_DailyInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_memory_category_daily(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_memory_category_daily(inputs)
	if (locale === "es") return es_wb_option_memory_category_daily(inputs)
	if (locale === "ja") return ja_wb_option_memory_category_daily(inputs)
	if (locale === "hi") return hi_wb_option_memory_category_daily(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_memory_category_daily(inputs)
	if (locale === "ko") return ko_wb_option_memory_category_daily(inputs)
	return fr_wb_option_memory_category_daily(inputs)
});