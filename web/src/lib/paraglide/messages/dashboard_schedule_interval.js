/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Schedule_IntervalInputs */

const en_dashboard_schedule_interval = /** @type {(inputs: Dashboard_Schedule_IntervalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interval`)
};

const zh_cn2_dashboard_schedule_interval = /** @type {(inputs: Dashboard_Schedule_IntervalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`间隔`)
};

const es_dashboard_schedule_interval = /** @type {(inputs: Dashboard_Schedule_IntervalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intervalo`)
};

const ja_dashboard_schedule_interval = /** @type {(inputs: Dashboard_Schedule_IntervalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`間隔`)
};

const hi_dashboard_schedule_interval = /** @type {(inputs: Dashboard_Schedule_IntervalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अंतराल`)
};

const pt_br2_dashboard_schedule_interval = /** @type {(inputs: Dashboard_Schedule_IntervalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intervalo`)
};

const ko_dashboard_schedule_interval = /** @type {(inputs: Dashboard_Schedule_IntervalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`간격`)
};

const fr_dashboard_schedule_interval = /** @type {(inputs: Dashboard_Schedule_IntervalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intervalle`)
};

/**
* | output |
* | --- |
* | "Interval" |
*
* @param {Dashboard_Schedule_IntervalInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_schedule_interval = /** @type {((inputs?: Dashboard_Schedule_IntervalInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Schedule_IntervalInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_schedule_interval(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_schedule_interval(inputs)
	if (locale === "es") return es_dashboard_schedule_interval(inputs)
	if (locale === "ja") return ja_dashboard_schedule_interval(inputs)
	if (locale === "hi") return hi_dashboard_schedule_interval(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_schedule_interval(inputs)
	if (locale === "ko") return ko_dashboard_schedule_interval(inputs)
	return fr_dashboard_schedule_interval(inputs)
});