/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Memory_Learned_Observations_TitleInputs */

const en_memory_learned_observations_title = /** @type {(inputs: Memory_Learned_Observations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learned Observations`)
};

const zh_cn2_memory_learned_observations_title = /** @type {(inputs: Memory_Learned_Observations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已学习的观察`)
};

const es_memory_learned_observations_title = /** @type {(inputs: Memory_Learned_Observations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Observaciones aprendidas`)
};

const ja_memory_learned_observations_title = /** @type {(inputs: Memory_Learned_Observations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`学習した観察`)
};

const hi_memory_learned_observations_title = /** @type {(inputs: Memory_Learned_Observations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सीखे गए अवलोकन`)
};

const pt_br2_memory_learned_observations_title = /** @type {(inputs: Memory_Learned_Observations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Observações Aprendidas`)
};

const ko_memory_learned_observations_title = /** @type {(inputs: Memory_Learned_Observations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`학습된 관찰`)
};

const fr_memory_learned_observations_title = /** @type {(inputs: Memory_Learned_Observations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Observations apprises`)
};

/**
* | output |
* | --- |
* | "Learned Observations" |
*
* @param {Memory_Learned_Observations_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const memory_learned_observations_title = /** @type {((inputs?: Memory_Learned_Observations_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Memory_Learned_Observations_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_memory_learned_observations_title(inputs)
	if (locale === "zh-CN") return zh_cn2_memory_learned_observations_title(inputs)
	if (locale === "es") return es_memory_learned_observations_title(inputs)
	if (locale === "ja") return ja_memory_learned_observations_title(inputs)
	if (locale === "hi") return hi_memory_learned_observations_title(inputs)
	if (locale === "pt-BR") return pt_br2_memory_learned_observations_title(inputs)
	if (locale === "ko") return ko_memory_learned_observations_title(inputs)
	return fr_memory_learned_observations_title(inputs)
});