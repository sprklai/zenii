/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Agent_Turn_DescriptionInputs */

const en_wb_node_agent_turn_description = /** @type {(inputs: Wb_Node_Agent_Turn_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Run a full agentic conversation turn with tool access`)
};

const zh_cn2_wb_node_agent_turn_description = /** @type {(inputs: Wb_Node_Agent_Turn_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`运行具有工具访问权限的完整智能体对话轮次`)
};

const es_wb_node_agent_turn_description = /** @type {(inputs: Wb_Node_Agent_Turn_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ejecutar un turno de conversación agente completo con acceso a herramientas`)
};

const ja_wb_node_agent_turn_description = /** @type {(inputs: Wb_Node_Agent_Turn_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ツールアクセスありで完全なエージェント会話ターンを実行します`)
};

const hi_wb_node_agent_turn_description = /** @type {(inputs: Wb_Node_Agent_Turn_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`टूल एक्सेस के साथ एक पूर्ण एजेंटिक वार्तालाप टर्न चलाएँ`)
};

const pt_br2_wb_node_agent_turn_description = /** @type {(inputs: Wb_Node_Agent_Turn_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Executar um turno completo de conversa do agente com acesso a ferramentas`)
};

const ko_wb_node_agent_turn_description = /** @type {(inputs: Wb_Node_Agent_Turn_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`도구 접근이 가능한 완전한 에이전트 대화 턴을 실행합니다`)
};

const fr_wb_node_agent_turn_description = /** @type {(inputs: Wb_Node_Agent_Turn_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exécuter un tour de conversation agentique complet avec accès aux outils`)
};

/**
* | output |
* | --- |
* | "Run a full agentic conversation turn with tool access" |
*
* @param {Wb_Node_Agent_Turn_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_agent_turn_description = /** @type {((inputs?: Wb_Node_Agent_Turn_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Agent_Turn_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_agent_turn_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_agent_turn_description(inputs)
	if (locale === "es") return es_wb_node_agent_turn_description(inputs)
	if (locale === "ja") return ja_wb_node_agent_turn_description(inputs)
	if (locale === "hi") return hi_wb_node_agent_turn_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_agent_turn_description(inputs)
	if (locale === "ko") return ko_wb_node_agent_turn_description(inputs)
	return fr_wb_node_agent_turn_description(inputs)
});