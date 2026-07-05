/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Validation_Date_Time_FutureInputs */

const en_schedule_validation_date_time_future = /** @type {(inputs: Schedule_Validation_Date_Time_FutureInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Date and time must be in the future`)
};

const zh_cn2_schedule_validation_date_time_future = /** @type {(inputs: Schedule_Validation_Date_Time_FutureInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日期和时间必须在未来`)
};

const es_schedule_validation_date_time_future = /** @type {(inputs: Schedule_Validation_Date_Time_FutureInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La fecha y hora deben estar en el futuro`)
};

const ja_schedule_validation_date_time_future = /** @type {(inputs: Schedule_Validation_Date_Time_FutureInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日時は未来の時刻である必要があります`)
};

const hi_schedule_validation_date_time_future = /** @type {(inputs: Schedule_Validation_Date_Time_FutureInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`तारीख और समय भविष्य में होना चाहिए`)
};

const pt_br2_schedule_validation_date_time_future = /** @type {(inputs: Schedule_Validation_Date_Time_FutureInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Data e hora devem estar no futuro`)
};

const ko_schedule_validation_date_time_future = /** @type {(inputs: Schedule_Validation_Date_Time_FutureInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`날짜와 시간은 미래여야 합니다`)
};

const fr_schedule_validation_date_time_future = /** @type {(inputs: Schedule_Validation_Date_Time_FutureInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La date et l'heure doivent être dans le futur`)
};

/**
* | output |
* | --- |
* | "Date and time must be in the future" |
*
* @param {Schedule_Validation_Date_Time_FutureInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_validation_date_time_future = /** @type {((inputs?: Schedule_Validation_Date_Time_FutureInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Validation_Date_Time_FutureInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_validation_date_time_future(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_validation_date_time_future(inputs)
	if (locale === "es") return es_schedule_validation_date_time_future(inputs)
	if (locale === "ja") return ja_schedule_validation_date_time_future(inputs)
	if (locale === "hi") return hi_schedule_validation_date_time_future(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_validation_date_time_future(inputs)
	if (locale === "ko") return ko_schedule_validation_date_time_future(inputs)
	return fr_schedule_validation_date_time_future(inputs)
});