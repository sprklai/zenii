/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Validation_Date_Time_RequiredInputs */

const en_schedule_validation_date_time_required = /** @type {(inputs: Schedule_Validation_Date_Time_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Both date and time are required`)
};

const zh_cn2_schedule_validation_date_time_required = /** @type {(inputs: Schedule_Validation_Date_Time_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日期和时间均为必填项`)
};

const es_schedule_validation_date_time_required = /** @type {(inputs: Schedule_Validation_Date_Time_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se requieren tanto la fecha como la hora`)
};

const ja_schedule_validation_date_time_required = /** @type {(inputs: Schedule_Validation_Date_Time_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日付と時刻の両方が必要です`)
};

const hi_schedule_validation_date_time_required = /** @type {(inputs: Schedule_Validation_Date_Time_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`तारीख और समय दोनों आवश्यक हैं`)
};

const pt_br2_schedule_validation_date_time_required = /** @type {(inputs: Schedule_Validation_Date_Time_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Data e hora são obrigatórios`)
};

const ko_schedule_validation_date_time_required = /** @type {(inputs: Schedule_Validation_Date_Time_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`날짜와 시간 모두 필수입니다`)
};

const fr_schedule_validation_date_time_required = /** @type {(inputs: Schedule_Validation_Date_Time_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La date et l'heure sont toutes deux requises`)
};

/**
* | output |
* | --- |
* | "Both date and time are required" |
*
* @param {Schedule_Validation_Date_Time_RequiredInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_validation_date_time_required = /** @type {((inputs?: Schedule_Validation_Date_Time_RequiredInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Validation_Date_Time_RequiredInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_validation_date_time_required(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_validation_date_time_required(inputs)
	if (locale === "es") return es_schedule_validation_date_time_required(inputs)
	if (locale === "ja") return ja_schedule_validation_date_time_required(inputs)
	if (locale === "hi") return hi_schedule_validation_date_time_required(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_validation_date_time_required(inputs)
	if (locale === "ko") return ko_schedule_validation_date_time_required(inputs)
	return fr_schedule_validation_date_time_required(inputs)
});