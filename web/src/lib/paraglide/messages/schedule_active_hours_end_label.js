/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Active_Hours_End_LabelInputs */

const en_schedule_active_hours_end_label = /** @type {(inputs: Schedule_Active_Hours_End_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`End hour`)
};

const zh_cn2_schedule_active_hours_end_label = /** @type {(inputs: Schedule_Active_Hours_End_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`结束时间`)
};

const es_schedule_active_hours_end_label = /** @type {(inputs: Schedule_Active_Hours_End_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hora de fin`)
};

const ja_schedule_active_hours_end_label = /** @type {(inputs: Schedule_Active_Hours_End_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`終了時刻`)
};

const hi_schedule_active_hours_end_label = /** @type {(inputs: Schedule_Active_Hours_End_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`समाप्ति घंटा`)
};

const pt_br2_schedule_active_hours_end_label = /** @type {(inputs: Schedule_Active_Hours_End_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hora final`)
};

const ko_schedule_active_hours_end_label = /** @type {(inputs: Schedule_Active_Hours_End_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`종료 시간`)
};

const fr_schedule_active_hours_end_label = /** @type {(inputs: Schedule_Active_Hours_End_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heure de fin`)
};

/**
* | output |
* | --- |
* | "End hour" |
*
* @param {Schedule_Active_Hours_End_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_active_hours_end_label = /** @type {((inputs?: Schedule_Active_Hours_End_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Active_Hours_End_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_active_hours_end_label(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_active_hours_end_label(inputs)
	if (locale === "es") return es_schedule_active_hours_end_label(inputs)
	if (locale === "ja") return ja_schedule_active_hours_end_label(inputs)
	if (locale === "hi") return hi_schedule_active_hours_end_label(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_active_hours_end_label(inputs)
	if (locale === "ko") return ko_schedule_active_hours_end_label(inputs)
	return fr_schedule_active_hours_end_label(inputs)
});