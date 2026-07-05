/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ toolUses: NonNullable<unknown>, tokens: NonNullable<unknown>, duration: NonNullable<unknown> }} Delegation_Summary_Agent_StatsInputs */

const en_delegation_summary_agent_stats = /** @type {(inputs: Delegation_Summary_Agent_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.toolUses} tool(s) — ${i?.tokens} tokens — ${i?.duration}`)
};

const zh_cn2_delegation_summary_agent_stats = /** @type {(inputs: Delegation_Summary_Agent_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.toolUses} 个工具 — ${i?.tokens} 令牌 — ${i?.duration}`)
};

const es_delegation_summary_agent_stats = /** @type {(inputs: Delegation_Summary_Agent_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.toolUses} herramienta(s) — ${i?.tokens} tokens — ${i?.duration}`)
};

const ja_delegation_summary_agent_stats = /** @type {(inputs: Delegation_Summary_Agent_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.toolUses} ツール — ${i?.tokens} トークン — ${i?.duration}`)
};

const hi_delegation_summary_agent_stats = /** @type {(inputs: Delegation_Summary_Agent_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.toolUses} टूल — ${i?.tokens} टोकन — ${i?.duration}`)
};

const pt_br2_delegation_summary_agent_stats = /** @type {(inputs: Delegation_Summary_Agent_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.toolUses} ferramenta(s) — ${i?.tokens} tokens — ${i?.duration}`)
};

const ko_delegation_summary_agent_stats = /** @type {(inputs: Delegation_Summary_Agent_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.toolUses} 도구 — ${i?.tokens} 토큰 — ${i?.duration}`)
};

const fr_delegation_summary_agent_stats = /** @type {(inputs: Delegation_Summary_Agent_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.toolUses} outil(s) — ${i?.tokens} jetons — ${i?.duration}`)
};

/**
* | output |
* | --- |
* | "{toolUses} tool(s) — {tokens} tokens — {duration}" |
*
* @param {Delegation_Summary_Agent_StatsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const delegation_summary_agent_stats = /** @type {((inputs: Delegation_Summary_Agent_StatsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Delegation_Summary_Agent_StatsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_delegation_summary_agent_stats(inputs)
	if (locale === "zh-CN") return zh_cn2_delegation_summary_agent_stats(inputs)
	if (locale === "es") return es_delegation_summary_agent_stats(inputs)
	if (locale === "ja") return ja_delegation_summary_agent_stats(inputs)
	if (locale === "hi") return hi_delegation_summary_agent_stats(inputs)
	if (locale === "pt-BR") return pt_br2_delegation_summary_agent_stats(inputs)
	if (locale === "ko") return ko_delegation_summary_agent_stats(inputs)
	return fr_delegation_summary_agent_stats(inputs)
});