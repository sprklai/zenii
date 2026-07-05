/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Agent_System_PromptInputs */

const en_wb_option_agent_system_prompt = /** @type {(inputs: Wb_Option_Agent_System_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent System Prompt`)
};

const zh_cn2_wb_option_agent_system_prompt = /** @type {(inputs: Wb_Option_Agent_System_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`智能体系统提示词`)
};

const es_wb_option_agent_system_prompt = /** @type {(inputs: Wb_Option_Agent_System_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt de sistema del agente`)
};

const ja_wb_option_agent_system_prompt = /** @type {(inputs: Wb_Option_Agent_System_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エージェントシステムプロンプト`)
};

const hi_wb_option_agent_system_prompt = /** @type {(inputs: Wb_Option_Agent_System_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एजेंट सिस्टम प्रॉम्प्ट`)
};

const pt_br2_wb_option_agent_system_prompt = /** @type {(inputs: Wb_Option_Agent_System_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt do sistema do agente`)
};

const ko_wb_option_agent_system_prompt = /** @type {(inputs: Wb_Option_Agent_System_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`에이전트 시스템 프롬프트`)
};

const fr_wb_option_agent_system_prompt = /** @type {(inputs: Wb_Option_Agent_System_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invite système de l'agent`)
};

/**
* | output |
* | --- |
* | "Agent System Prompt" |
*
* @param {Wb_Option_Agent_System_PromptInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_agent_system_prompt = /** @type {((inputs?: Wb_Option_Agent_System_PromptInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Agent_System_PromptInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_agent_system_prompt(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_agent_system_prompt(inputs)
	if (locale === "es") return es_wb_option_agent_system_prompt(inputs)
	if (locale === "ja") return ja_wb_option_agent_system_prompt(inputs)
	if (locale === "hi") return hi_wb_option_agent_system_prompt(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_agent_system_prompt(inputs)
	if (locale === "ko") return ko_wb_option_agent_system_prompt(inputs)
	return fr_wb_option_agent_system_prompt(inputs)
});