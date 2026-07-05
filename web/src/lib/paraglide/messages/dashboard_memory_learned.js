/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Memory_LearnedInputs */

const en_dashboard_memory_learned = /** @type {(inputs: Dashboard_Memory_LearnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learned`)
};

const zh_cn2_dashboard_memory_learned = /** @type {(inputs: Dashboard_Memory_LearnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已学习`)
};

const es_dashboard_memory_learned = /** @type {(inputs: Dashboard_Memory_LearnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aprendido`)
};

const ja_dashboard_memory_learned = /** @type {(inputs: Dashboard_Memory_LearnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`学習済み`)
};

const hi_dashboard_memory_learned = /** @type {(inputs: Dashboard_Memory_LearnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सीखा गया`)
};

const pt_br2_dashboard_memory_learned = /** @type {(inputs: Dashboard_Memory_LearnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aprendido`)
};

const ko_dashboard_memory_learned = /** @type {(inputs: Dashboard_Memory_LearnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`학습됨`)
};

const fr_dashboard_memory_learned = /** @type {(inputs: Dashboard_Memory_LearnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appris`)
};

/**
* | output |
* | --- |
* | "Learned" |
*
* @param {Dashboard_Memory_LearnedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_memory_learned = /** @type {((inputs?: Dashboard_Memory_LearnedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Memory_LearnedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_memory_learned(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_memory_learned(inputs)
	if (locale === "es") return es_dashboard_memory_learned(inputs)
	if (locale === "ja") return ja_dashboard_memory_learned(inputs)
	if (locale === "hi") return hi_dashboard_memory_learned(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_memory_learned(inputs)
	if (locale === "ko") return ko_dashboard_memory_learned(inputs)
	return fr_dashboard_memory_learned(inputs)
});