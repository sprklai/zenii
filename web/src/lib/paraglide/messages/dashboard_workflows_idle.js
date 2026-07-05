/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Workflows_IdleInputs */

const en_dashboard_workflows_idle = /** @type {(inputs: Dashboard_Workflows_IdleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idle`)
};

const zh_cn2_dashboard_workflows_idle = /** @type {(inputs: Dashboard_Workflows_IdleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`空闲`)
};

const es_dashboard_workflows_idle = /** @type {(inputs: Dashboard_Workflows_IdleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inactivo`)
};

const ja_dashboard_workflows_idle = /** @type {(inputs: Dashboard_Workflows_IdleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`待機中`)
};

const hi_dashboard_workflows_idle = /** @type {(inputs: Dashboard_Workflows_IdleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`निष्क्रिय`)
};

const pt_br2_dashboard_workflows_idle = /** @type {(inputs: Dashboard_Workflows_IdleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inativo`)
};

const ko_dashboard_workflows_idle = /** @type {(inputs: Dashboard_Workflows_IdleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`유휴`)
};

const fr_dashboard_workflows_idle = /** @type {(inputs: Dashboard_Workflows_IdleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inactif`)
};

/**
* | output |
* | --- |
* | "Idle" |
*
* @param {Dashboard_Workflows_IdleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_workflows_idle = /** @type {((inputs?: Dashboard_Workflows_IdleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Workflows_IdleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_workflows_idle(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_workflows_idle(inputs)
	if (locale === "es") return es_dashboard_workflows_idle(inputs)
	if (locale === "ja") return ja_dashboard_workflows_idle(inputs)
	if (locale === "hi") return hi_dashboard_workflows_idle(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_workflows_idle(inputs)
	if (locale === "ko") return ko_dashboard_workflows_idle(inputs)
	return fr_dashboard_workflows_idle(inputs)
});