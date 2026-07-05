/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ expr: NonNullable<unknown> }} Schedule_Format_CronInputs */

const en_schedule_format_cron = /** @type {(inputs: Schedule_Format_CronInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cron: ${i?.expr}`)
};

const zh_cn2_schedule_format_cron = /** @type {(inputs: Schedule_Format_CronInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cron: ${i?.expr}`)
};

const es_schedule_format_cron = /** @type {(inputs: Schedule_Format_CronInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cron: ${i?.expr}`)
};

const ja_schedule_format_cron = /** @type {(inputs: Schedule_Format_CronInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cron: ${i?.expr}`)
};

const hi_schedule_format_cron = /** @type {(inputs: Schedule_Format_CronInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cron: ${i?.expr}`)
};

const pt_br2_schedule_format_cron = /** @type {(inputs: Schedule_Format_CronInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cron: ${i?.expr}`)
};

const ko_schedule_format_cron = /** @type {(inputs: Schedule_Format_CronInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cron: ${i?.expr}`)
};

const fr_schedule_format_cron = /** @type {(inputs: Schedule_Format_CronInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cron : ${i?.expr}`)
};

/**
* | output |
* | --- |
* | "Cron: {expr}" |
*
* @param {Schedule_Format_CronInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_format_cron = /** @type {((inputs: Schedule_Format_CronInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Format_CronInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_format_cron(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_format_cron(inputs)
	if (locale === "es") return es_schedule_format_cron(inputs)
	if (locale === "ja") return ja_schedule_format_cron(inputs)
	if (locale === "hi") return hi_schedule_format_cron(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_format_cron(inputs)
	if (locale === "ko") return ko_schedule_format_cron(inputs)
	return fr_schedule_format_cron(inputs)
});