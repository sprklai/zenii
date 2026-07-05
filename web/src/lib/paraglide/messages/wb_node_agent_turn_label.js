/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Agent_Turn_LabelInputs */

const en_wb_node_agent_turn_label = /** @type {(inputs: Wb_Node_Agent_Turn_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent Turn`)
};

const zh_cn2_wb_node_agent_turn_label = /** @type {(inputs: Wb_Node_Agent_Turn_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`智能体轮次`)
};

const es_wb_node_agent_turn_label = /** @type {(inputs: Wb_Node_Agent_Turn_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turno del agente`)
};

const ja_wb_node_agent_turn_label = /** @type {(inputs: Wb_Node_Agent_Turn_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エージェントターン`)
};

const hi_wb_node_agent_turn_label = /** @type {(inputs: Wb_Node_Agent_Turn_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एजेंट टर्न`)
};

const pt_br2_wb_node_agent_turn_label = /** @type {(inputs: Wb_Node_Agent_Turn_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turno do Agente`)
};

const ko_wb_node_agent_turn_label = /** @type {(inputs: Wb_Node_Agent_Turn_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`에이전트 턴`)
};

const fr_wb_node_agent_turn_label = /** @type {(inputs: Wb_Node_Agent_Turn_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tour d'agent`)
};

/**
* | output |
* | --- |
* | "Agent Turn" |
*
* @param {Wb_Node_Agent_Turn_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_agent_turn_label = /** @type {((inputs?: Wb_Node_Agent_Turn_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Agent_Turn_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_agent_turn_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_agent_turn_label(inputs)
	if (locale === "es") return es_wb_node_agent_turn_label(inputs)
	if (locale === "ja") return ja_wb_node_agent_turn_label(inputs)
	if (locale === "hi") return hi_wb_node_agent_turn_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_agent_turn_label(inputs)
	if (locale === "ko") return ko_wb_node_agent_turn_label(inputs)
	return fr_wb_node_agent_turn_label(inputs)
});