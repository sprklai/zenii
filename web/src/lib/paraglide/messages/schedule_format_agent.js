/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ prompt: NonNullable<unknown> }} Schedule_Format_AgentInputs */

const en_schedule_format_agent = /** @type {(inputs: Schedule_Format_AgentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Agent: ${i?.prompt}`)
};

const zh_cn2_schedule_format_agent = /** @type {(inputs: Schedule_Format_AgentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`代理：${i?.prompt}`)
};

const es_schedule_format_agent = /** @type {(inputs: Schedule_Format_AgentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Agente: ${i?.prompt}`)
};

const ja_schedule_format_agent = /** @type {(inputs: Schedule_Format_AgentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`エージェント：${i?.prompt}`)
};

const hi_schedule_format_agent = /** @type {(inputs: Schedule_Format_AgentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`एजेंट: ${i?.prompt}`)
};

const pt_br2_schedule_format_agent = /** @type {(inputs: Schedule_Format_AgentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Agente: ${i?.prompt}`)
};

const ko_schedule_format_agent = /** @type {(inputs: Schedule_Format_AgentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`에이전트: ${i?.prompt}`)
};

const fr_schedule_format_agent = /** @type {(inputs: Schedule_Format_AgentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Agent : ${i?.prompt}`)
};

/**
* | output |
* | --- |
* | "Agent: {prompt}" |
*
* @param {Schedule_Format_AgentInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_format_agent = /** @type {((inputs: Schedule_Format_AgentInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Format_AgentInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_format_agent(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_format_agent(inputs)
	if (locale === "es") return es_schedule_format_agent(inputs)
	if (locale === "ja") return ja_schedule_format_agent(inputs)
	if (locale === "hi") return hi_schedule_format_agent(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_format_agent(inputs)
	if (locale === "ko") return ko_schedule_format_agent(inputs)
	return fr_schedule_format_agent(inputs)
});