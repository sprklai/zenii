/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Nav_ScheduleInputs */

const en_nav_schedule = /** @type {(inputs: Nav_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schedule`)
};

const zh_cn2_nav_schedule = /** @type {(inputs: Nav_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日程`)
};

const es_nav_schedule = /** @type {(inputs: Nav_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Programación`)
};

const ja_nav_schedule = /** @type {(inputs: Nav_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スケジュール`)
};

const hi_nav_schedule = /** @type {(inputs: Nav_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`शेड्यूल`)
};

const pt_br2_nav_schedule = /** @type {(inputs: Nav_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agenda`)
};

const ko_nav_schedule = /** @type {(inputs: Nav_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`일정`)
};

const fr_nav_schedule = /** @type {(inputs: Nav_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Planification`)
};

/**
* | output |
* | --- |
* | "Schedule" |
*
* @param {Nav_ScheduleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const nav_schedule = /** @type {((inputs?: Nav_ScheduleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_ScheduleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_nav_schedule(inputs)
	if (locale === "zh-CN") return zh_cn2_nav_schedule(inputs)
	if (locale === "es") return es_nav_schedule(inputs)
	if (locale === "ja") return ja_nav_schedule(inputs)
	if (locale === "hi") return hi_nav_schedule(inputs)
	if (locale === "pt-BR") return pt_br2_nav_schedule(inputs)
	if (locale === "ko") return ko_nav_schedule(inputs)
	return fr_nav_schedule(inputs)
});