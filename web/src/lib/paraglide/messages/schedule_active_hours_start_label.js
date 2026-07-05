/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Active_Hours_Start_LabelInputs */

const en_schedule_active_hours_start_label = /** @type {(inputs: Schedule_Active_Hours_Start_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start hour`)
};

const zh_cn2_schedule_active_hours_start_label = /** @type {(inputs: Schedule_Active_Hours_Start_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开始时间`)
};

const es_schedule_active_hours_start_label = /** @type {(inputs: Schedule_Active_Hours_Start_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hora de inicio`)
};

const ja_schedule_active_hours_start_label = /** @type {(inputs: Schedule_Active_Hours_Start_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開始時刻`)
};

const hi_schedule_active_hours_start_label = /** @type {(inputs: Schedule_Active_Hours_Start_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`आरंभ घंटा`)
};

const pt_br2_schedule_active_hours_start_label = /** @type {(inputs: Schedule_Active_Hours_Start_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hora inicial`)
};

const ko_schedule_active_hours_start_label = /** @type {(inputs: Schedule_Active_Hours_Start_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`시작 시간`)
};

const fr_schedule_active_hours_start_label = /** @type {(inputs: Schedule_Active_Hours_Start_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heure de début`)
};

/**
* | output |
* | --- |
* | "Start hour" |
*
* @param {Schedule_Active_Hours_Start_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_active_hours_start_label = /** @type {((inputs?: Schedule_Active_Hours_Start_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Active_Hours_Start_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_active_hours_start_label(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_active_hours_start_label(inputs)
	if (locale === "es") return es_schedule_active_hours_start_label(inputs)
	if (locale === "ja") return ja_schedule_active_hours_start_label(inputs)
	if (locale === "hi") return hi_schedule_active_hours_start_label(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_active_hours_start_label(inputs)
	if (locale === "ko") return ko_schedule_active_hours_start_label(inputs)
	return fr_schedule_active_hours_start_label(inputs)
});