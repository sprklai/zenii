/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Prompt_PlaceholderInputs */

const en_schedule_prompt_placeholder = /** @type {(inputs: Schedule_Prompt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent prompt to execute`)
};

const zh_cn2_schedule_prompt_placeholder = /** @type {(inputs: Schedule_Prompt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要执行的代理提示词`)
};

const es_schedule_prompt_placeholder = /** @type {(inputs: Schedule_Prompt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt del agente a ejecutar`)
};

const ja_schedule_prompt_placeholder = /** @type {(inputs: Schedule_Prompt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実行するエージェントプロンプト`)
};

const hi_schedule_prompt_placeholder = /** @type {(inputs: Schedule_Prompt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`निष्पादित करने के लिए एजेंट प्रॉम्प्ट`)
};

const pt_br2_schedule_prompt_placeholder = /** @type {(inputs: Schedule_Prompt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt do agente para executar`)
};

const ko_schedule_prompt_placeholder = /** @type {(inputs: Schedule_Prompt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`실행할 에이전트 프롬프트`)
};

const fr_schedule_prompt_placeholder = /** @type {(inputs: Schedule_Prompt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt de l'agent à exécuter`)
};

/**
* | output |
* | --- |
* | "Agent prompt to execute" |
*
* @param {Schedule_Prompt_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_prompt_placeholder = /** @type {((inputs?: Schedule_Prompt_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Prompt_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_prompt_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_prompt_placeholder(inputs)
	if (locale === "es") return es_schedule_prompt_placeholder(inputs)
	if (locale === "ja") return ja_schedule_prompt_placeholder(inputs)
	if (locale === "hi") return hi_schedule_prompt_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_prompt_placeholder(inputs)
	if (locale === "ko") return ko_schedule_prompt_placeholder(inputs)
	return fr_schedule_prompt_placeholder(inputs)
});