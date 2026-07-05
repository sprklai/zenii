/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Action_MemoryInputs */

const en_wb_option_action_memory = /** @type {(inputs: Wb_Option_Action_MemoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Memory`)
};

const zh_cn2_wb_option_action_memory = /** @type {(inputs: Wb_Option_Action_MemoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内存`)
};

const es_wb_option_action_memory = /** @type {(inputs: Wb_Option_Action_MemoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Memoria`)
};

const ja_wb_option_action_memory = /** @type {(inputs: Wb_Option_Action_MemoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモリ`)
};

const hi_wb_option_action_memory = /** @type {(inputs: Wb_Option_Action_MemoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मेमोरी`)
};

const pt_br2_wb_option_action_memory = /** @type {(inputs: Wb_Option_Action_MemoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Memória`)
};

const ko_wb_option_action_memory = /** @type {(inputs: Wb_Option_Action_MemoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메모리`)
};

const fr_wb_option_action_memory = /** @type {(inputs: Wb_Option_Action_MemoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mémoire`)
};

/**
* | output |
* | --- |
* | "Memory" |
*
* @param {Wb_Option_Action_MemoryInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_action_memory = /** @type {((inputs?: Wb_Option_Action_MemoryInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Action_MemoryInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_action_memory(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_action_memory(inputs)
	if (locale === "es") return es_wb_option_action_memory(inputs)
	if (locale === "ja") return ja_wb_option_action_memory(inputs)
	if (locale === "hi") return hi_wb_option_action_memory(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_action_memory(inputs)
	if (locale === "ko") return ko_wb_option_action_memory(inputs)
	return fr_wb_option_action_memory(inputs)
});