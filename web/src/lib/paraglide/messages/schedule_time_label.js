/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Time_LabelInputs */

const en_schedule_time_label = /** @type {(inputs: Schedule_Time_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Time`)
};

const zh_cn2_schedule_time_label = /** @type {(inputs: Schedule_Time_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`时间`)
};

const es_schedule_time_label = /** @type {(inputs: Schedule_Time_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hora`)
};

const ja_schedule_time_label = /** @type {(inputs: Schedule_Time_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`時刻`)
};

const hi_schedule_time_label = /** @type {(inputs: Schedule_Time_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`समय`)
};

const pt_br2_schedule_time_label = /** @type {(inputs: Schedule_Time_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hora`)
};

const ko_schedule_time_label = /** @type {(inputs: Schedule_Time_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`시간`)
};

const fr_schedule_time_label = /** @type {(inputs: Schedule_Time_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heure`)
};

/**
* | output |
* | --- |
* | "Time" |
*
* @param {Schedule_Time_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_time_label = /** @type {((inputs?: Schedule_Time_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Time_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_time_label(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_time_label(inputs)
	if (locale === "es") return es_schedule_time_label(inputs)
	if (locale === "ja") return ja_schedule_time_label(inputs)
	if (locale === "hi") return hi_schedule_time_label(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_time_label(inputs)
	if (locale === "ko") return ko_schedule_time_label(inputs)
	return fr_schedule_time_label(inputs)
});