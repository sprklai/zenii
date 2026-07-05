/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ toolName: NonNullable<unknown> }} Tool_Approval_Needs_ApprovalInputs */

const en_tool_approval_needs_approval = /** @type {(inputs: Tool_Approval_Needs_ApprovalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tool "${i?.toolName}" needs approval`)
};

const zh_cn2_tool_approval_needs_approval = /** @type {(inputs: Tool_Approval_Needs_ApprovalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`工具 "${i?.toolName}" 需要批准`)
};

const es_tool_approval_needs_approval = /** @type {(inputs: Tool_Approval_Needs_ApprovalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La herramienta "${i?.toolName}" necesita aprobación`)
};

const ja_tool_approval_needs_approval = /** @type {(inputs: Tool_Approval_Needs_ApprovalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ツール「${i?.toolName}」の承認が必要です`)
};

const hi_tool_approval_needs_approval = /** @type {(inputs: Tool_Approval_Needs_ApprovalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`टूल "${i?.toolName}" को स्वीकृति चाहिए`)
};

const pt_br2_tool_approval_needs_approval = /** @type {(inputs: Tool_Approval_Needs_ApprovalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ferramenta "${i?.toolName}" precisa de aprovação`)
};

const ko_tool_approval_needs_approval = /** @type {(inputs: Tool_Approval_Needs_ApprovalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`도구 "${i?.toolName}"의 승인이 필요합니다`)
};

const fr_tool_approval_needs_approval = /** @type {(inputs: Tool_Approval_Needs_ApprovalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`L'outil "${i?.toolName}" nécessite une approbation`)
};

/**
* | output |
* | --- |
* | "Tool \"{toolName}\" needs approval" |
*
* @param {Tool_Approval_Needs_ApprovalInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const tool_approval_needs_approval = /** @type {((inputs: Tool_Approval_Needs_ApprovalInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tool_Approval_Needs_ApprovalInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tool_approval_needs_approval(inputs)
	if (locale === "zh-CN") return zh_cn2_tool_approval_needs_approval(inputs)
	if (locale === "es") return es_tool_approval_needs_approval(inputs)
	if (locale === "ja") return ja_tool_approval_needs_approval(inputs)
	if (locale === "hi") return hi_tool_approval_needs_approval(inputs)
	if (locale === "pt-BR") return pt_br2_tool_approval_needs_approval(inputs)
	if (locale === "ko") return ko_tool_approval_needs_approval(inputs)
	return fr_tool_approval_needs_approval(inputs)
});