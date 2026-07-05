/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Payload_Option_Agent_TurnInputs */

const en_schedule_payload_option_agent_turn = /** @type {(inputs: Schedule_Payload_Option_Agent_TurnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent Turn`)
};

const zh_cn2_schedule_payload_option_agent_turn = /** @type {(inputs: Schedule_Payload_Option_Agent_TurnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`代理轮次`)
};

const es_schedule_payload_option_agent_turn = /** @type {(inputs: Schedule_Payload_Option_Agent_TurnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turno de agente`)
};

const ja_schedule_payload_option_agent_turn = /** @type {(inputs: Schedule_Payload_Option_Agent_TurnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エージェントターン`)
};

const hi_schedule_payload_option_agent_turn = /** @type {(inputs: Schedule_Payload_Option_Agent_TurnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एजेंट टर्न`)
};

const pt_br2_schedule_payload_option_agent_turn = /** @type {(inputs: Schedule_Payload_Option_Agent_TurnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turno do Agente`)
};

const ko_schedule_payload_option_agent_turn = /** @type {(inputs: Schedule_Payload_Option_Agent_TurnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`에이전트 턴`)
};

const fr_schedule_payload_option_agent_turn = /** @type {(inputs: Schedule_Payload_Option_Agent_TurnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tour de l'agent`)
};

/**
* | output |
* | --- |
* | "Agent Turn" |
*
* @param {Schedule_Payload_Option_Agent_TurnInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_payload_option_agent_turn = /** @type {((inputs?: Schedule_Payload_Option_Agent_TurnInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Payload_Option_Agent_TurnInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_payload_option_agent_turn(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_payload_option_agent_turn(inputs)
	if (locale === "es") return es_schedule_payload_option_agent_turn(inputs)
	if (locale === "ja") return ja_schedule_payload_option_agent_turn(inputs)
	if (locale === "hi") return hi_schedule_payload_option_agent_turn(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_payload_option_agent_turn(inputs)
	if (locale === "ko") return ko_schedule_payload_option_agent_turn(inputs)
	return fr_schedule_payload_option_agent_turn(inputs)
});