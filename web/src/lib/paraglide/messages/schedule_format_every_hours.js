/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ value: NonNullable<unknown> }} Schedule_Format_Every_HoursInputs */

const en_schedule_format_every_hours = /** @type {(inputs: Schedule_Format_Every_HoursInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Every ${i?.value}h`)
};

const zh_cn2_schedule_format_every_hours = /** @type {(inputs: Schedule_Format_Every_HoursInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`每 ${i?.value} 小时`)
};

const es_schedule_format_every_hours = /** @type {(inputs: Schedule_Format_Every_HoursInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cada ${i?.value}h`)
};

const ja_schedule_format_every_hours = /** @type {(inputs: Schedule_Format_Every_HoursInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value} 時間ごと`)
};

const hi_schedule_format_every_hours = /** @type {(inputs: Schedule_Format_Every_HoursInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`हर ${i?.value} घंटे`)
};

const pt_br2_schedule_format_every_hours = /** @type {(inputs: Schedule_Format_Every_HoursInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A cada ${i?.value}h`)
};

const ko_schedule_format_every_hours = /** @type {(inputs: Schedule_Format_Every_HoursInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value}시간마다`)
};

const fr_schedule_format_every_hours = /** @type {(inputs: Schedule_Format_Every_HoursInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Toutes les ${i?.value}h`)
};

/**
* | output |
* | --- |
* | "Every {value}h" |
*
* @param {Schedule_Format_Every_HoursInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_format_every_hours = /** @type {((inputs: Schedule_Format_Every_HoursInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Format_Every_HoursInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_format_every_hours(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_format_every_hours(inputs)
	if (locale === "es") return es_schedule_format_every_hours(inputs)
	if (locale === "ja") return ja_schedule_format_every_hours(inputs)
	if (locale === "hi") return hi_schedule_format_every_hours(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_format_every_hours(inputs)
	if (locale === "ko") return ko_schedule_format_every_hours(inputs)
	return fr_schedule_format_every_hours(inputs)
});