/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Schedule_Type_CronInputs */

const en_schedule_schedule_type_cron = /** @type {(inputs: Schedule_Schedule_Type_CronInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron`)
};

const zh_cn2_schedule_schedule_type_cron = /** @type {(inputs: Schedule_Schedule_Type_CronInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron`)
};

const es_schedule_schedule_type_cron = /** @type {(inputs: Schedule_Schedule_Type_CronInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron`)
};

const ja_schedule_schedule_type_cron = /** @type {(inputs: Schedule_Schedule_Type_CronInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron`)
};

const hi_schedule_schedule_type_cron = /** @type {(inputs: Schedule_Schedule_Type_CronInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron`)
};

const pt_br2_schedule_schedule_type_cron = /** @type {(inputs: Schedule_Schedule_Type_CronInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron`)
};

const ko_schedule_schedule_type_cron = /** @type {(inputs: Schedule_Schedule_Type_CronInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron`)
};

const fr_schedule_schedule_type_cron = /** @type {(inputs: Schedule_Schedule_Type_CronInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron`)
};

/**
* | output |
* | --- |
* | "Cron" |
*
* @param {Schedule_Schedule_Type_CronInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_schedule_type_cron = /** @type {((inputs?: Schedule_Schedule_Type_CronInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Schedule_Type_CronInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_schedule_type_cron(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_schedule_type_cron(inputs)
	if (locale === "es") return es_schedule_schedule_type_cron(inputs)
	if (locale === "ja") return ja_schedule_schedule_type_cron(inputs)
	if (locale === "hi") return hi_schedule_schedule_type_cron(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_schedule_type_cron(inputs)
	if (locale === "ko") return ko_schedule_schedule_type_cron(inputs)
	return fr_schedule_schedule_type_cron(inputs)
});