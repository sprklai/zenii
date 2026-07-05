/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ finishedCount: NonNullable<unknown>, totalCount: NonNullable<unknown>, elapsed: NonNullable<unknown> }} Agent_Tree_RunningInputs */

const en_agent_tree_running = /** @type {(inputs: Agent_Tree_RunningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Running ${i?.finishedCount}/${i?.totalCount} agents... (${i?.elapsed}s)`)
};

const zh_cn2_agent_tree_running = /** @type {(inputs: Agent_Tree_RunningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`正在运行 ${i?.finishedCount}/${i?.totalCount} 个代理... (${i?.elapsed}秒)`)
};

const es_agent_tree_running = /** @type {(inputs: Agent_Tree_RunningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ejecutando ${i?.finishedCount}/${i?.totalCount} agentes... (${i?.elapsed}s)`)
};

const ja_agent_tree_running = /** @type {(inputs: Agent_Tree_RunningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.finishedCount}/${i?.totalCount}エージェント実行中... (${i?.elapsed}秒)`)
};

const hi_agent_tree_running = /** @type {(inputs: Agent_Tree_RunningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.finishedCount}/${i?.totalCount} एजेंट चल रहे हैं... (${i?.elapsed}s)`)
};

const pt_br2_agent_tree_running = /** @type {(inputs: Agent_Tree_RunningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Executando ${i?.finishedCount}/${i?.totalCount} agentes... (${i?.elapsed}s)`)
};

const ko_agent_tree_running = /** @type {(inputs: Agent_Tree_RunningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.finishedCount}/${i?.totalCount} 에이전트 실행 중... (${i?.elapsed}초)`)
};

const fr_agent_tree_running = /** @type {(inputs: Agent_Tree_RunningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Exécution de ${i?.finishedCount}/${i?.totalCount} agents... (${i?.elapsed}s)`)
};

/**
* | output |
* | --- |
* | "Running {finishedCount}/{totalCount} agents... ({elapsed}s)" |
*
* @param {Agent_Tree_RunningInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const agent_tree_running = /** @type {((inputs: Agent_Tree_RunningInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Tree_RunningInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_tree_running(inputs)
	if (locale === "zh-CN") return zh_cn2_agent_tree_running(inputs)
	if (locale === "es") return es_agent_tree_running(inputs)
	if (locale === "ja") return ja_agent_tree_running(inputs)
	if (locale === "hi") return hi_agent_tree_running(inputs)
	if (locale === "pt-BR") return pt_br2_agent_tree_running(inputs)
	if (locale === "ko") return ko_agent_tree_running(inputs)
	return fr_agent_tree_running(inputs)
});