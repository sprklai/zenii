/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Tree_FailedInputs */

const en_agent_tree_failed = /** @type {(inputs: Agent_Tree_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`failed`)
};

const zh_cn2_agent_tree_failed = /** @type {(inputs: Agent_Tree_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失败`)
};

const es_agent_tree_failed = /** @type {(inputs: Agent_Tree_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`fallido`)
};

const ja_agent_tree_failed = /** @type {(inputs: Agent_Tree_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失敗`)
};

const hi_agent_tree_failed = /** @type {(inputs: Agent_Tree_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`विफल`)
};

const pt_br2_agent_tree_failed = /** @type {(inputs: Agent_Tree_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`falhou`)
};

const ko_agent_tree_failed = /** @type {(inputs: Agent_Tree_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`실패`)
};

const fr_agent_tree_failed = /** @type {(inputs: Agent_Tree_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`échoué`)
};

/**
* | output |
* | --- |
* | "failed" |
*
* @param {Agent_Tree_FailedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const agent_tree_failed = /** @type {((inputs?: Agent_Tree_FailedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Tree_FailedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_tree_failed(inputs)
	if (locale === "zh-CN") return zh_cn2_agent_tree_failed(inputs)
	if (locale === "es") return es_agent_tree_failed(inputs)
	if (locale === "ja") return ja_agent_tree_failed(inputs)
	if (locale === "hi") return hi_agent_tree_failed(inputs)
	if (locale === "pt-BR") return pt_br2_agent_tree_failed(inputs)
	if (locale === "ko") return ko_agent_tree_failed(inputs)
	return fr_agent_tree_failed(inputs)
});