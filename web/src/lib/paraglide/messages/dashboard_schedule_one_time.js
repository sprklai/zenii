/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Schedule_One_TimeInputs */

const en_dashboard_schedule_one_time = /** @type {(inputs: Dashboard_Schedule_One_TimeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One-time`)
};

const zh_cn2_dashboard_schedule_one_time = /** @type {(inputs: Dashboard_Schedule_One_TimeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一次性`)
};

const es_dashboard_schedule_one_time = /** @type {(inputs: Dashboard_Schedule_One_TimeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una vez`)
};

const ja_dashboard_schedule_one_time = /** @type {(inputs: Dashboard_Schedule_One_TimeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一回限り`)
};

const hi_dashboard_schedule_one_time = /** @type {(inputs: Dashboard_Schedule_One_TimeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एक बार`)
};

const pt_br2_dashboard_schedule_one_time = /** @type {(inputs: Dashboard_Schedule_One_TimeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Única vez`)
};

const ko_dashboard_schedule_one_time = /** @type {(inputs: Dashboard_Schedule_One_TimeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`일회성`)
};

const fr_dashboard_schedule_one_time = /** @type {(inputs: Dashboard_Schedule_One_TimeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ponctuel`)
};

/**
* | output |
* | --- |
* | "One-time" |
*
* @param {Dashboard_Schedule_One_TimeInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_schedule_one_time = /** @type {((inputs?: Dashboard_Schedule_One_TimeInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Schedule_One_TimeInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_schedule_one_time(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_schedule_one_time(inputs)
	if (locale === "es") return es_dashboard_schedule_one_time(inputs)
	if (locale === "ja") return ja_dashboard_schedule_one_time(inputs)
	if (locale === "hi") return hi_dashboard_schedule_one_time(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_schedule_one_time(inputs)
	if (locale === "ko") return ko_dashboard_schedule_one_time(inputs)
	return fr_dashboard_schedule_one_time(inputs)
});