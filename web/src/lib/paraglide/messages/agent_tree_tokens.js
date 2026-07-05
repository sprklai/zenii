/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Agent_Tree_TokensInputs */

const en_agent_tree_tokens = /** @type {(inputs: Agent_Tree_TokensInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} tokens`)
};

const zh_cn2_agent_tree_tokens = /** @type {(inputs: Agent_Tree_TokensInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 令牌`)
};

const es_agent_tree_tokens = /** @type {(inputs: Agent_Tree_TokensInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} tokens`)
};

const ja_agent_tree_tokens = /** @type {(inputs: Agent_Tree_TokensInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} トークン`)
};

const hi_agent_tree_tokens = /** @type {(inputs: Agent_Tree_TokensInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} टोकन`)
};

const pt_br2_agent_tree_tokens = /** @type {(inputs: Agent_Tree_TokensInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} tokens`)
};

const ko_agent_tree_tokens = /** @type {(inputs: Agent_Tree_TokensInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 토큰`)
};

const fr_agent_tree_tokens = /** @type {(inputs: Agent_Tree_TokensInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} jetons`)
};

/**
* | output |
* | --- |
* | "{count} tokens" |
*
* @param {Agent_Tree_TokensInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const agent_tree_tokens = /** @type {((inputs: Agent_Tree_TokensInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Tree_TokensInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_tree_tokens(inputs)
	if (locale === "zh-CN") return zh_cn2_agent_tree_tokens(inputs)
	if (locale === "es") return es_agent_tree_tokens(inputs)
	if (locale === "ja") return ja_agent_tree_tokens(inputs)
	if (locale === "hi") return hi_agent_tree_tokens(inputs)
	if (locale === "pt-BR") return pt_br2_agent_tree_tokens(inputs)
	if (locale === "ko") return ko_agent_tree_tokens(inputs)
	return fr_agent_tree_tokens(inputs)
});