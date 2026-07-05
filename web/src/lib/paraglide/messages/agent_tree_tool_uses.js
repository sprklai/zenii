/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Agent_Tree_Tool_UsesInputs */

const en_agent_tree_tool_uses = /** @type {(inputs: Agent_Tree_Tool_UsesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} tool uses`)
};

const zh_cn2_agent_tree_tool_uses = /** @type {(inputs: Agent_Tree_Tool_UsesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 次工具调用`)
};

const es_agent_tree_tool_uses = /** @type {(inputs: Agent_Tree_Tool_UsesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} usos de herramientas`)
};

const ja_agent_tree_tool_uses = /** @type {(inputs: Agent_Tree_Tool_UsesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} ツール使用`)
};

const hi_agent_tree_tool_uses = /** @type {(inputs: Agent_Tree_Tool_UsesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} टूल उपयोग`)
};

const pt_br2_agent_tree_tool_uses = /** @type {(inputs: Agent_Tree_Tool_UsesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} usos de ferramentas`)
};

const ko_agent_tree_tool_uses = /** @type {(inputs: Agent_Tree_Tool_UsesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 도구 사용`)
};

const fr_agent_tree_tool_uses = /** @type {(inputs: Agent_Tree_Tool_UsesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} utilisations d'outils`)
};

/**
* | output |
* | --- |
* | "{count} tool uses" |
*
* @param {Agent_Tree_Tool_UsesInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const agent_tree_tool_uses = /** @type {((inputs: Agent_Tree_Tool_UsesInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Tree_Tool_UsesInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_tree_tool_uses(inputs)
	if (locale === "zh-CN") return zh_cn2_agent_tree_tool_uses(inputs)
	if (locale === "es") return es_agent_tree_tool_uses(inputs)
	if (locale === "ja") return ja_agent_tree_tool_uses(inputs)
	if (locale === "hi") return hi_agent_tree_tool_uses(inputs)
	if (locale === "pt-BR") return pt_br2_agent_tree_tool_uses(inputs)
	if (locale === "ko") return ko_agent_tree_tool_uses(inputs)
	return fr_agent_tree_tool_uses(inputs)
});