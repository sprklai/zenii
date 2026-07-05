/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Agent_Prompt_DescriptionInputs */

const en_wb_field_agent_prompt_description = /** @type {(inputs: Wb_Field_Agent_Prompt_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt for the agent turn. The agent has access to all registered tools.`)
};

const zh_cn2_wb_field_agent_prompt_description = /** @type {(inputs: Wb_Field_Agent_Prompt_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`智能体轮次的提示。智能体可访问所有已注册工具。`)
};

const es_wb_field_agent_prompt_description = /** @type {(inputs: Wb_Field_Agent_Prompt_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt para el turno del agente. El agente tiene acceso a todas las herramientas registradas.`)
};

const ja_wb_field_agent_prompt_description = /** @type {(inputs: Wb_Field_Agent_Prompt_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エージェントターン用のプロンプト。エージェントはすべての登録済みツールにアクセスできます。`)
};

const hi_wb_field_agent_prompt_description = /** @type {(inputs: Wb_Field_Agent_Prompt_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एजेंट टर्न के लिए प्रॉम्प्ट। एजेंट के पास सभी पंजीकृत टूल तक पहुँच है।`)
};

const pt_br2_wb_field_agent_prompt_description = /** @type {(inputs: Wb_Field_Agent_Prompt_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt para o turno do agente. O agente tem acesso a todas as ferramentas registradas.`)
};

const ko_wb_field_agent_prompt_description = /** @type {(inputs: Wb_Field_Agent_Prompt_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`에이전트 턴용 프롬프트. 에이전트는 모든 등록된 도구에 접근할 수 있습니다.`)
};

const fr_wb_field_agent_prompt_description = /** @type {(inputs: Wb_Field_Agent_Prompt_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invite pour le tour d'agent. L'agent a accès à tous les outils enregistrés.`)
};

/**
* | output |
* | --- |
* | "Prompt for the agent turn. The agent has access to all registered tools." |
*
* @param {Wb_Field_Agent_Prompt_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_agent_prompt_description = /** @type {((inputs?: Wb_Field_Agent_Prompt_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Agent_Prompt_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_agent_prompt_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_agent_prompt_description(inputs)
	if (locale === "es") return es_wb_field_agent_prompt_description(inputs)
	if (locale === "ja") return ja_wb_field_agent_prompt_description(inputs)
	if (locale === "hi") return hi_wb_field_agent_prompt_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_agent_prompt_description(inputs)
	if (locale === "ko") return ko_wb_field_agent_prompt_description(inputs)
	return fr_wb_field_agent_prompt_description(inputs)
});