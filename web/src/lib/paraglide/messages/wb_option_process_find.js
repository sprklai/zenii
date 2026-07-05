/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Process_FindInputs */

const en_wb_option_process_find = /** @type {(inputs: Wb_Option_Process_FindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Find`)
};

const zh_cn2_wb_option_process_find = /** @type {(inputs: Wb_Option_Process_FindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查找`)
};

const es_wb_option_process_find = /** @type {(inputs: Wb_Option_Process_FindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar`)
};

const ja_wb_option_process_find = /** @type {(inputs: Wb_Option_Process_FindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索`)
};

const hi_wb_option_process_find = /** @type {(inputs: Wb_Option_Process_FindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`खोजें`)
};

const pt_br2_wb_option_process_find = /** @type {(inputs: Wb_Option_Process_FindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Encontrar`)
};

const ko_wb_option_process_find = /** @type {(inputs: Wb_Option_Process_FindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`검색`)
};

const fr_wb_option_process_find = /** @type {(inputs: Wb_Option_Process_FindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher`)
};

/**
* | output |
* | --- |
* | "Find" |
*
* @param {Wb_Option_Process_FindInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_process_find = /** @type {((inputs?: Wb_Option_Process_FindInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Process_FindInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_process_find(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_process_find(inputs)
	if (locale === "es") return es_wb_option_process_find(inputs)
	if (locale === "ja") return ja_wb_option_process_find(inputs)
	if (locale === "hi") return hi_wb_option_process_find(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_process_find(inputs)
	if (locale === "ko") return ko_wb_option_process_find(inputs)
	return fr_wb_option_process_find(inputs)
});