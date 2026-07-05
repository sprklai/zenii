/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ duration: NonNullable<unknown> }} Agent_Tree_Completed_DurationInputs */

const en_agent_tree_completed_duration = /** @type {(inputs: Agent_Tree_Completed_DurationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`completed (${i?.duration}s)`)
};

const zh_cn2_agent_tree_completed_duration = /** @type {(inputs: Agent_Tree_Completed_DurationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已完成 (${i?.duration}秒)`)
};

const es_agent_tree_completed_duration = /** @type {(inputs: Agent_Tree_Completed_DurationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`completado (${i?.duration}s)`)
};

const ja_agent_tree_completed_duration = /** @type {(inputs: Agent_Tree_Completed_DurationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`完了 (${i?.duration}秒)`)
};

const hi_agent_tree_completed_duration = /** @type {(inputs: Agent_Tree_Completed_DurationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`पूर्ण (${i?.duration}s)`)
};

const pt_br2_agent_tree_completed_duration = /** @type {(inputs: Agent_Tree_Completed_DurationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`concluído (${i?.duration}s)`)
};

const ko_agent_tree_completed_duration = /** @type {(inputs: Agent_Tree_Completed_DurationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`완료 (${i?.duration}초)`)
};

const fr_agent_tree_completed_duration = /** @type {(inputs: Agent_Tree_Completed_DurationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`terminé (${i?.duration}s)`)
};

/**
* | output |
* | --- |
* | "completed ({duration}s)" |
*
* @param {Agent_Tree_Completed_DurationInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const agent_tree_completed_duration = /** @type {((inputs: Agent_Tree_Completed_DurationInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Tree_Completed_DurationInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_agent_tree_completed_duration(inputs)
	if (locale === "zh-CN") return zh_cn2_agent_tree_completed_duration(inputs)
	if (locale === "es") return es_agent_tree_completed_duration(inputs)
	if (locale === "ja") return ja_agent_tree_completed_duration(inputs)
	if (locale === "hi") return hi_agent_tree_completed_duration(inputs)
	if (locale === "pt-BR") return pt_br2_agent_tree_completed_duration(inputs)
	if (locale === "ko") return ko_agent_tree_completed_duration(inputs)
	return fr_agent_tree_completed_duration(inputs)
});