/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tool_Approval_DenyInputs */

const en_tool_approval_deny = /** @type {(inputs: Tool_Approval_DenyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deny`)
};

const zh_cn2_tool_approval_deny = /** @type {(inputs: Tool_Approval_DenyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拒绝`)
};

const es_tool_approval_deny = /** @type {(inputs: Tool_Approval_DenyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denegar`)
};

const ja_tool_approval_deny = /** @type {(inputs: Tool_Approval_DenyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拒否`)
};

const hi_tool_approval_deny = /** @type {(inputs: Tool_Approval_DenyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अस्वीकार करें`)
};

const pt_br2_tool_approval_deny = /** @type {(inputs: Tool_Approval_DenyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Negar`)
};

const ko_tool_approval_deny = /** @type {(inputs: Tool_Approval_DenyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`거부`)
};

const fr_tool_approval_deny = /** @type {(inputs: Tool_Approval_DenyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Refuser`)
};

/**
* | output |
* | --- |
* | "Deny" |
*
* @param {Tool_Approval_DenyInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const tool_approval_deny = /** @type {((inputs?: Tool_Approval_DenyInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tool_Approval_DenyInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tool_approval_deny(inputs)
	if (locale === "zh-CN") return zh_cn2_tool_approval_deny(inputs)
	if (locale === "es") return es_tool_approval_deny(inputs)
	if (locale === "ja") return ja_tool_approval_deny(inputs)
	if (locale === "hi") return hi_tool_approval_deny(inputs)
	if (locale === "pt-BR") return pt_br2_tool_approval_deny(inputs)
	if (locale === "ko") return ko_tool_approval_deny(inputs)
	return fr_tool_approval_deny(inputs)
});