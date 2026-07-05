/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Payload_Agent_TurnInputs */

const en_wb_option_payload_agent_turn = /** @type {(inputs: Wb_Option_Payload_Agent_TurnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent Turn`)
};

const zh_cn2_wb_option_payload_agent_turn = /** @type {(inputs: Wb_Option_Payload_Agent_TurnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`智能体轮次`)
};

const es_wb_option_payload_agent_turn = /** @type {(inputs: Wb_Option_Payload_Agent_TurnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turno del agente`)
};

const ja_wb_option_payload_agent_turn = /** @type {(inputs: Wb_Option_Payload_Agent_TurnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エージェントターン`)
};

const hi_wb_option_payload_agent_turn = /** @type {(inputs: Wb_Option_Payload_Agent_TurnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एजेंट टर्न`)
};

const pt_br2_wb_option_payload_agent_turn = /** @type {(inputs: Wb_Option_Payload_Agent_TurnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turno do Agente`)
};

const ko_wb_option_payload_agent_turn = /** @type {(inputs: Wb_Option_Payload_Agent_TurnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`에이전트 턴`)
};

const fr_wb_option_payload_agent_turn = /** @type {(inputs: Wb_Option_Payload_Agent_TurnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tour d'agent`)
};

/**
* | output |
* | --- |
* | "Agent Turn" |
*
* @param {Wb_Option_Payload_Agent_TurnInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_payload_agent_turn = /** @type {((inputs?: Wb_Option_Payload_Agent_TurnInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Payload_Agent_TurnInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_payload_agent_turn(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_payload_agent_turn(inputs)
	if (locale === "es") return es_wb_option_payload_agent_turn(inputs)
	if (locale === "ja") return ja_wb_option_payload_agent_turn(inputs)
	if (locale === "hi") return hi_wb_option_payload_agent_turn(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_payload_agent_turn(inputs)
	if (locale === "ko") return ko_wb_option_payload_agent_turn(inputs)
	return fr_wb_option_payload_agent_turn(inputs)
});