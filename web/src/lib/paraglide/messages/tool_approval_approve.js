/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tool_Approval_ApproveInputs */

const en_tool_approval_approve = /** @type {(inputs: Tool_Approval_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approve`)
};

const zh_cn2_tool_approval_approve = /** @type {(inputs: Tool_Approval_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`批准`)
};

const es_tool_approval_approve = /** @type {(inputs: Tool_Approval_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aprobar`)
};

const ja_tool_approval_approve = /** @type {(inputs: Tool_Approval_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`承認`)
};

const hi_tool_approval_approve = /** @type {(inputs: Tool_Approval_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`स्वीकृत करें`)
};

const pt_br2_tool_approval_approve = /** @type {(inputs: Tool_Approval_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aprovar`)
};

const ko_tool_approval_approve = /** @type {(inputs: Tool_Approval_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`승인`)
};

const fr_tool_approval_approve = /** @type {(inputs: Tool_Approval_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approuver`)
};

/**
* | output |
* | --- |
* | "Approve" |
*
* @param {Tool_Approval_ApproveInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const tool_approval_approve = /** @type {((inputs?: Tool_Approval_ApproveInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tool_Approval_ApproveInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tool_approval_approve(inputs)
	if (locale === "zh-CN") return zh_cn2_tool_approval_approve(inputs)
	if (locale === "es") return es_tool_approval_approve(inputs)
	if (locale === "ja") return ja_tool_approval_approve(inputs)
	if (locale === "hi") return hi_tool_approval_approve(inputs)
	if (locale === "pt-BR") return pt_br2_tool_approval_approve(inputs)
	if (locale === "ko") return ko_tool_approval_approve(inputs)
	return fr_tool_approval_approve(inputs)
});