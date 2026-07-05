/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tool_Approval_Timed_OutInputs */

const en_tool_approval_timed_out = /** @type {(inputs: Tool_Approval_Timed_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Timed out — automatically denied.`)
};

const zh_cn2_tool_approval_timed_out = /** @type {(inputs: Tool_Approval_Timed_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已超时 — 自动拒绝。`)
};

const es_tool_approval_timed_out = /** @type {(inputs: Tool_Approval_Timed_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tiempo agotado — denegado automáticamente.`)
};

const ja_tool_approval_timed_out = /** @type {(inputs: Tool_Approval_Timed_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タイムアウト — 自動的に拒否されました。`)
};

const hi_tool_approval_timed_out = /** @type {(inputs: Tool_Approval_Timed_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`समय समाप्त — स्वचालित रूप से अस्वीकृत।`)
};

const pt_br2_tool_approval_timed_out = /** @type {(inputs: Tool_Approval_Timed_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tempo esgotado — negado automaticamente.`)
};

const ko_tool_approval_timed_out = /** @type {(inputs: Tool_Approval_Timed_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`시간 초과 — 자동으로 거부되었습니다.`)
};

const fr_tool_approval_timed_out = /** @type {(inputs: Tool_Approval_Timed_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Délai expiré — refusé automatiquement.`)
};

/**
* | output |
* | --- |
* | "Timed out — automatically denied." |
*
* @param {Tool_Approval_Timed_OutInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const tool_approval_timed_out = /** @type {((inputs?: Tool_Approval_Timed_OutInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tool_Approval_Timed_OutInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tool_approval_timed_out(inputs)
	if (locale === "zh-CN") return zh_cn2_tool_approval_timed_out(inputs)
	if (locale === "es") return es_tool_approval_timed_out(inputs)
	if (locale === "ja") return ja_tool_approval_timed_out(inputs)
	if (locale === "hi") return hi_tool_approval_timed_out(inputs)
	if (locale === "pt-BR") return pt_br2_tool_approval_timed_out(inputs)
	if (locale === "ko") return ko_tool_approval_timed_out(inputs)
	return fr_tool_approval_timed_out(inputs)
});