/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Tree_PendingInputs */

const en_agent_tree_pending = /** @type {(inputs: Agent_Tree_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pending...`)
};

const zh_cn2_agent_tree_pending = /** @type {(inputs: Agent_Tree_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`等待中...`)
};

const es_agent_tree_pending = /** @type {(inputs: Agent_Tree_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pendiente...`)
};

const ja_agent_tree_pending = /** @type {(inputs: Agent_Tree_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`待機中...`)
};

const hi_agent_tree_pending = /** @type {(inputs: Agent_Tree_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रतीक्षा में...`)
};

const pt_br2_agent_tree_pending = /** @type {(inputs: Agent_Tree_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pendente...`)
};

const ko_agent_tree_pending = /** @type {(inputs: Agent_Tree_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`대기 중...`)
};

const fr_agent_tree_pending = /** @type {(inputs: Agent_Tree_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En attente...`)
};

/**
* | output |
* | --- |
* | "Pending..." |
*
* @param {Agent_Tree_PendingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const agent_tree_pending = /** @type {((inputs?: Agent_Tree_PendingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Tree_PendingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_tree_pending(inputs)
	if (locale === "zh-CN") return zh_cn2_agent_tree_pending(inputs)
	if (locale === "es") return es_agent_tree_pending(inputs)
	if (locale === "ja") return ja_agent_tree_pending(inputs)
	if (locale === "hi") return hi_agent_tree_pending(inputs)
	if (locale === "pt-BR") return pt_br2_agent_tree_pending(inputs)
	if (locale === "ko") return ko_agent_tree_pending(inputs)
	return fr_agent_tree_pending(inputs)
});