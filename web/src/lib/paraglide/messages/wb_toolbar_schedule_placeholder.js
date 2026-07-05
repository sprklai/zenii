/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Toolbar_Schedule_PlaceholderInputs */

const en_wb_toolbar_schedule_placeholder = /** @type {(inputs: Wb_Toolbar_Schedule_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron schedule`)
};

const zh_cn2_wb_toolbar_schedule_placeholder = /** @type {(inputs: Wb_Toolbar_Schedule_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron 计划`)
};

const es_wb_toolbar_schedule_placeholder = /** @type {(inputs: Wb_Toolbar_Schedule_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Programación Cron`)
};

const ja_wb_toolbar_schedule_placeholder = /** @type {(inputs: Wb_Toolbar_Schedule_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron スケジュール`)
};

const hi_wb_toolbar_schedule_placeholder = /** @type {(inputs: Wb_Toolbar_Schedule_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron शेड्यूल`)
};

const pt_br2_wb_toolbar_schedule_placeholder = /** @type {(inputs: Wb_Toolbar_Schedule_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agendamento Cron`)
};

const ko_wb_toolbar_schedule_placeholder = /** @type {(inputs: Wb_Toolbar_Schedule_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron 일정`)
};

const fr_wb_toolbar_schedule_placeholder = /** @type {(inputs: Wb_Toolbar_Schedule_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Planification Cron`)
};

/**
* | output |
* | --- |
* | "Cron schedule" |
*
* @param {Wb_Toolbar_Schedule_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_toolbar_schedule_placeholder = /** @type {((inputs?: Wb_Toolbar_Schedule_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Toolbar_Schedule_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_toolbar_schedule_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_toolbar_schedule_placeholder(inputs)
	if (locale === "es") return es_wb_toolbar_schedule_placeholder(inputs)
	if (locale === "ja") return ja_wb_toolbar_schedule_placeholder(inputs)
	if (locale === "hi") return hi_wb_toolbar_schedule_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_toolbar_schedule_placeholder(inputs)
	if (locale === "ko") return ko_wb_toolbar_schedule_placeholder(inputs)
	return fr_wb_toolbar_schedule_placeholder(inputs)
});