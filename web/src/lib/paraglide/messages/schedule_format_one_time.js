/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ datetime: NonNullable<unknown> }} Schedule_Format_One_TimeInputs */

const en_schedule_format_one_time = /** @type {(inputs: Schedule_Format_One_TimeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`At ${i?.datetime}`)
};

const zh_cn2_schedule_format_one_time = /** @type {(inputs: Schedule_Format_One_TimeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`在 ${i?.datetime}`)
};

const es_schedule_format_one_time = /** @type {(inputs: Schedule_Format_One_TimeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A las ${i?.datetime}`)
};

const ja_schedule_format_one_time = /** @type {(inputs: Schedule_Format_One_TimeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.datetime} に実行`)
};

const hi_schedule_format_one_time = /** @type {(inputs: Schedule_Format_One_TimeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.datetime} पर`)
};

const pt_br2_schedule_format_one_time = /** @type {(inputs: Schedule_Format_One_TimeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Em ${i?.datetime}`)
};

const ko_schedule_format_one_time = /** @type {(inputs: Schedule_Format_One_TimeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.datetime}에`)
};

const fr_schedule_format_one_time = /** @type {(inputs: Schedule_Format_One_TimeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`À ${i?.datetime}`)
};

/**
* | output |
* | --- |
* | "At {datetime}" |
*
* @param {Schedule_Format_One_TimeInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_format_one_time = /** @type {((inputs: Schedule_Format_One_TimeInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Format_One_TimeInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_format_one_time(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_format_one_time(inputs)
	if (locale === "es") return es_schedule_format_one_time(inputs)
	if (locale === "ja") return ja_schedule_format_one_time(inputs)
	if (locale === "hi") return hi_schedule_format_one_time(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_format_one_time(inputs)
	if (locale === "ko") return ko_schedule_format_one_time(inputs)
	return fr_schedule_format_one_time(inputs)
});