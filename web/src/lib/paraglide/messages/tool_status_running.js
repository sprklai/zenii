/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tool_Status_RunningInputs */

const en_tool_status_running = /** @type {(inputs: Tool_Status_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Running`)
};

const zh_cn2_tool_status_running = /** @type {(inputs: Tool_Status_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`运行中`)
};

const es_tool_status_running = /** @type {(inputs: Tool_Status_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ejecutando`)
};

const ja_tool_status_running = /** @type {(inputs: Tool_Status_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実行中`)
};

const hi_tool_status_running = /** @type {(inputs: Tool_Status_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चल रहा है`)
};

const pt_br2_tool_status_running = /** @type {(inputs: Tool_Status_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Executando`)
};

const ko_tool_status_running = /** @type {(inputs: Tool_Status_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`실행 중`)
};

const fr_tool_status_running = /** @type {(inputs: Tool_Status_RunningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En cours`)
};

/**
* | output |
* | --- |
* | "Running" |
*
* @param {Tool_Status_RunningInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const tool_status_running = /** @type {((inputs?: Tool_Status_RunningInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tool_Status_RunningInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tool_status_running(inputs)
	if (locale === "zh-CN") return zh_cn2_tool_status_running(inputs)
	if (locale === "es") return es_tool_status_running(inputs)
	if (locale === "ja") return ja_tool_status_running(inputs)
	if (locale === "hi") return hi_tool_status_running(inputs)
	if (locale === "pt-BR") return pt_br2_tool_status_running(inputs)
	if (locale === "ko") return ko_tool_status_running(inputs)
	return fr_tool_status_running(inputs)
});