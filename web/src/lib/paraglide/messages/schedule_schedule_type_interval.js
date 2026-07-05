/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Schedule_Type_IntervalInputs */

const en_schedule_schedule_type_interval = /** @type {(inputs: Schedule_Schedule_Type_IntervalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interval`)
};

const zh_cn2_schedule_schedule_type_interval = /** @type {(inputs: Schedule_Schedule_Type_IntervalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`间隔`)
};

const es_schedule_schedule_type_interval = /** @type {(inputs: Schedule_Schedule_Type_IntervalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intervalo`)
};

const ja_schedule_schedule_type_interval = /** @type {(inputs: Schedule_Schedule_Type_IntervalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`間隔`)
};

const hi_schedule_schedule_type_interval = /** @type {(inputs: Schedule_Schedule_Type_IntervalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अंतराल`)
};

const pt_br2_schedule_schedule_type_interval = /** @type {(inputs: Schedule_Schedule_Type_IntervalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intervalo`)
};

const ko_schedule_schedule_type_interval = /** @type {(inputs: Schedule_Schedule_Type_IntervalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`간격`)
};

const fr_schedule_schedule_type_interval = /** @type {(inputs: Schedule_Schedule_Type_IntervalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intervalle`)
};

/**
* | output |
* | --- |
* | "Interval" |
*
* @param {Schedule_Schedule_Type_IntervalInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_schedule_type_interval = /** @type {((inputs?: Schedule_Schedule_Type_IntervalInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Schedule_Type_IntervalInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_schedule_type_interval(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_schedule_type_interval(inputs)
	if (locale === "es") return es_schedule_schedule_type_interval(inputs)
	if (locale === "ja") return ja_schedule_schedule_type_interval(inputs)
	if (locale === "hi") return hi_schedule_schedule_type_interval(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_schedule_type_interval(inputs)
	if (locale === "ko") return ko_schedule_schedule_type_interval(inputs)
	return fr_schedule_schedule_type_interval(inputs)
});