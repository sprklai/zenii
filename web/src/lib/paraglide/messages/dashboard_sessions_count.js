/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, suffix: NonNullable<unknown> }} Dashboard_Sessions_CountInputs */

const en_dashboard_sessions_count = /** @type {(inputs: Dashboard_Sessions_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} session${i?.suffix}`)
};

const zh_cn2_dashboard_sessions_count = /** @type {(inputs: Dashboard_Sessions_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 个会话${i?.suffix}`)
};

const es_dashboard_sessions_count = /** @type {(inputs: Dashboard_Sessions_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} sesión${i?.suffix}`)
};

const ja_dashboard_sessions_count = /** @type {(inputs: Dashboard_Sessions_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} セッション${i?.suffix}`)
};

const hi_dashboard_sessions_count = /** @type {(inputs: Dashboard_Sessions_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} सत्र${i?.suffix}`)
};

const pt_br2_dashboard_sessions_count = /** @type {(inputs: Dashboard_Sessions_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} sessão${i?.suffix}`)
};

const ko_dashboard_sessions_count = /** @type {(inputs: Dashboard_Sessions_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count}개 세션${i?.suffix}`)
};

const fr_dashboard_sessions_count = /** @type {(inputs: Dashboard_Sessions_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} session${i?.suffix}`)
};

/**
* | output |
* | --- |
* | "{count} session{suffix}" |
*
* @param {Dashboard_Sessions_CountInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_sessions_count = /** @type {((inputs: Dashboard_Sessions_CountInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Sessions_CountInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_sessions_count(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_sessions_count(inputs)
	if (locale === "es") return es_dashboard_sessions_count(inputs)
	if (locale === "ja") return ja_dashboard_sessions_count(inputs)
	if (locale === "hi") return hi_dashboard_sessions_count(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_sessions_count(inputs)
	if (locale === "ko") return ko_dashboard_sessions_count(inputs)
	return fr_dashboard_sessions_count(inputs)
});