/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Schedule_CronInputs */

const en_dashboard_schedule_cron = /** @type {(inputs: Dashboard_Schedule_CronInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron`)
};

const zh_cn2_dashboard_schedule_cron = /** @type {(inputs: Dashboard_Schedule_CronInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron`)
};

const es_dashboard_schedule_cron = /** @type {(inputs: Dashboard_Schedule_CronInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron`)
};

const ja_dashboard_schedule_cron = /** @type {(inputs: Dashboard_Schedule_CronInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron`)
};

const hi_dashboard_schedule_cron = /** @type {(inputs: Dashboard_Schedule_CronInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron`)
};

const pt_br2_dashboard_schedule_cron = /** @type {(inputs: Dashboard_Schedule_CronInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron`)
};

const ko_dashboard_schedule_cron = /** @type {(inputs: Dashboard_Schedule_CronInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron`)
};

const fr_dashboard_schedule_cron = /** @type {(inputs: Dashboard_Schedule_CronInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron`)
};

/**
* | output |
* | --- |
* | "Cron" |
*
* @param {Dashboard_Schedule_CronInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_schedule_cron = /** @type {((inputs?: Dashboard_Schedule_CronInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Schedule_CronInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_schedule_cron(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_schedule_cron(inputs)
	if (locale === "es") return es_dashboard_schedule_cron(inputs)
	if (locale === "ja") return ja_dashboard_schedule_cron(inputs)
	if (locale === "hi") return hi_dashboard_schedule_cron(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_schedule_cron(inputs)
	if (locale === "ko") return ko_dashboard_schedule_cron(inputs)
	return fr_dashboard_schedule_cron(inputs)
});