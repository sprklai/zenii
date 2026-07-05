/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Memory_Learned_Observations_DescriptionInputs */

const en_memory_learned_observations_description = /** @type {(inputs: Memory_Learned_Observations_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Facts the agent has learned about you from conversations.`)
};

const zh_cn2_memory_learned_observations_description = /** @type {(inputs: Memory_Learned_Observations_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`代理从对话中了解到的关于你的信息。`)
};

const es_memory_learned_observations_description = /** @type {(inputs: Memory_Learned_Observations_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hechos que el agente ha aprendido sobre ti a partir de las conversaciones.`)
};

const ja_memory_learned_observations_description = /** @type {(inputs: Memory_Learned_Observations_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エージェントが会話からあなたについて学んだ情報です。`)
};

const hi_memory_learned_observations_description = /** @type {(inputs: Memory_Learned_Observations_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एजेंट ने बातचीत से आपके बारे में जो तथ्य सीखे हैं।`)
};

const pt_br2_memory_learned_observations_description = /** @type {(inputs: Memory_Learned_Observations_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fatos que o agente aprendeu sobre você nas conversas.`)
};

const ko_memory_learned_observations_description = /** @type {(inputs: Memory_Learned_Observations_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`에이전트가 대화에서 여러분에 대해 학습한 사실입니다.`)
};

const fr_memory_learned_observations_description = /** @type {(inputs: Memory_Learned_Observations_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faits que l'agent a appris sur vous à partir des conversations.`)
};

/**
* | output |
* | --- |
* | "Facts the agent has learned about you from conversations." |
*
* @param {Memory_Learned_Observations_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const memory_learned_observations_description = /** @type {((inputs?: Memory_Learned_Observations_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Memory_Learned_Observations_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_memory_learned_observations_description(inputs)
	if (locale === "zh-CN") return zh_cn2_memory_learned_observations_description(inputs)
	if (locale === "es") return es_memory_learned_observations_description(inputs)
	if (locale === "ja") return ja_memory_learned_observations_description(inputs)
	if (locale === "hi") return hi_memory_learned_observations_description(inputs)
	if (locale === "pt-BR") return pt_br2_memory_learned_observations_description(inputs)
	if (locale === "ko") return ko_memory_learned_observations_description(inputs)
	return fr_memory_learned_observations_description(inputs)
});