/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Process_ListInputs */

const en_wb_option_process_list = /** @type {(inputs: Wb_Option_Process_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`List`)
};

const zh_cn2_wb_option_process_list = /** @type {(inputs: Wb_Option_Process_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`列出`)
};

const es_wb_option_process_list = /** @type {(inputs: Wb_Option_Process_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listar`)
};

const ja_wb_option_process_list = /** @type {(inputs: Wb_Option_Process_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一覧`)
};

const hi_wb_option_process_list = /** @type {(inputs: Wb_Option_Process_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सूचीबद्ध करें`)
};

const pt_br2_wb_option_process_list = /** @type {(inputs: Wb_Option_Process_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listar`)
};

const ko_wb_option_process_list = /** @type {(inputs: Wb_Option_Process_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`목록`)
};

const fr_wb_option_process_list = /** @type {(inputs: Wb_Option_Process_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lister`)
};

/**
* | output |
* | --- |
* | "List" |
*
* @param {Wb_Option_Process_ListInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_process_list = /** @type {((inputs?: Wb_Option_Process_ListInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Process_ListInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_process_list(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_process_list(inputs)
	if (locale === "es") return es_wb_option_process_list(inputs)
	if (locale === "ja") return ja_wb_option_process_list(inputs)
	if (locale === "hi") return hi_wb_option_process_list(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_process_list(inputs)
	if (locale === "ko") return ko_wb_option_process_list(inputs)
	return fr_wb_option_process_list(inputs)
});