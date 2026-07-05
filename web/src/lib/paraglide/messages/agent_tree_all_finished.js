/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ totalCount: NonNullable<unknown>, elapsed: NonNullable<unknown> }} Agent_Tree_All_FinishedInputs */

const en_agent_tree_all_finished = /** @type {(inputs: Agent_Tree_All_FinishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`All ${i?.totalCount} agents finished (${i?.elapsed}s)`)
};

const zh_cn2_agent_tree_all_finished = /** @type {(inputs: Agent_Tree_All_FinishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`所有 ${i?.totalCount} 个代理已完成 (${i?.elapsed}秒)`)
};

const es_agent_tree_all_finished = /** @type {(inputs: Agent_Tree_All_FinishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Los ${i?.totalCount} agentes han terminado (${i?.elapsed}s)`)
};

const ja_agent_tree_all_finished = /** @type {(inputs: Agent_Tree_All_FinishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`全${i?.totalCount}エージェント完了 (${i?.elapsed}秒)`)
};

const hi_agent_tree_all_finished = /** @type {(inputs: Agent_Tree_All_FinishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`सभी ${i?.totalCount} एजेंट पूर्ण (${i?.elapsed}s)`)
};

const pt_br2_agent_tree_all_finished = /** @type {(inputs: Agent_Tree_All_FinishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Todos os ${i?.totalCount} agentes finalizaram (${i?.elapsed}s)`)
};

const ko_agent_tree_all_finished = /** @type {(inputs: Agent_Tree_All_FinishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`모든 ${i?.totalCount}개 에이전트 완료 (${i?.elapsed}초)`)
};

const fr_agent_tree_all_finished = /** @type {(inputs: Agent_Tree_All_FinishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Les ${i?.totalCount} agents ont terminé (${i?.elapsed}s)`)
};

/**
* | output |
* | --- |
* | "All {totalCount} agents finished ({elapsed}s)" |
*
* @param {Agent_Tree_All_FinishedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const agent_tree_all_finished = /** @type {((inputs: Agent_Tree_All_FinishedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Tree_All_FinishedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_tree_all_finished(inputs)
	if (locale === "zh-CN") return zh_cn2_agent_tree_all_finished(inputs)
	if (locale === "es") return es_agent_tree_all_finished(inputs)
	if (locale === "ja") return ja_agent_tree_all_finished(inputs)
	if (locale === "hi") return hi_agent_tree_all_finished(inputs)
	if (locale === "pt-BR") return pt_br2_agent_tree_all_finished(inputs)
	if (locale === "ko") return ko_agent_tree_all_finished(inputs)
	return fr_agent_tree_all_finished(inputs)
});