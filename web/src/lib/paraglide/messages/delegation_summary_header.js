/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, duration: NonNullable<unknown>, tokens: NonNullable<unknown> }} Delegation_Summary_HeaderInputs */

const en_delegation_summary_header = /** @type {(inputs: Delegation_Summary_HeaderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delegated to ${i?.count} agent(s) (${i?.duration}) — ${i?.tokens} tokens`)
};

const zh_cn2_delegation_summary_header = /** @type {(inputs: Delegation_Summary_HeaderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`委派给 ${i?.count} 个代理 (${i?.duration}) — ${i?.tokens} 令牌`)
};

const es_delegation_summary_header = /** @type {(inputs: Delegation_Summary_HeaderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delegado a ${i?.count} agente(s) (${i?.duration}) — ${i?.tokens} tokens`)
};

const ja_delegation_summary_header = /** @type {(inputs: Delegation_Summary_HeaderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} エージェントに委任 (${i?.duration}) — ${i?.tokens} トークン`)
};

const hi_delegation_summary_header = /** @type {(inputs: Delegation_Summary_HeaderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} एजेंट को सौंपा (${i?.duration}) — ${i?.tokens} टोकन`)
};

const pt_br2_delegation_summary_header = /** @type {(inputs: Delegation_Summary_HeaderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delegado a ${i?.count} agente(s) (${i?.duration}) — ${i?.tokens} tokens`)
};

const ko_delegation_summary_header = /** @type {(inputs: Delegation_Summary_HeaderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count}개 에이전트에 위임 (${i?.duration}) — ${i?.tokens} 토큰`)
};

const fr_delegation_summary_header = /** @type {(inputs: Delegation_Summary_HeaderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Délégué à ${i?.count} agent(s) (${i?.duration}) — ${i?.tokens} jetons`)
};

/**
* | output |
* | --- |
* | "Delegated to {count} agent(s) ({duration}) — {tokens} tokens" |
*
* @param {Delegation_Summary_HeaderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const delegation_summary_header = /** @type {((inputs: Delegation_Summary_HeaderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Delegation_Summary_HeaderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_delegation_summary_header(inputs)
	if (locale === "zh-CN") return zh_cn2_delegation_summary_header(inputs)
	if (locale === "es") return es_delegation_summary_header(inputs)
	if (locale === "ja") return ja_delegation_summary_header(inputs)
	if (locale === "hi") return hi_delegation_summary_header(inputs)
	if (locale === "pt-BR") return pt_br2_delegation_summary_header(inputs)
	if (locale === "ko") return ko_delegation_summary_header(inputs)
	return fr_delegation_summary_header(inputs)
});