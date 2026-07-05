/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Date_LabelInputs */

const en_schedule_date_label = /** @type {(inputs: Schedule_Date_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Date`)
};

const zh_cn2_schedule_date_label = /** @type {(inputs: Schedule_Date_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日期`)
};

const es_schedule_date_label = /** @type {(inputs: Schedule_Date_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fecha`)
};

const ja_schedule_date_label = /** @type {(inputs: Schedule_Date_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日付`)
};

const hi_schedule_date_label = /** @type {(inputs: Schedule_Date_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`तारीख`)
};

const pt_br2_schedule_date_label = /** @type {(inputs: Schedule_Date_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Data`)
};

const ko_schedule_date_label = /** @type {(inputs: Schedule_Date_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`날짜`)
};

const fr_schedule_date_label = /** @type {(inputs: Schedule_Date_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Date`)
};

/**
* | output |
* | --- |
* | "Date" |
*
* @param {Schedule_Date_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_date_label = /** @type {((inputs?: Schedule_Date_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Date_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_date_label(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_date_label(inputs)
	if (locale === "es") return es_schedule_date_label(inputs)
	if (locale === "ja") return ja_schedule_date_label(inputs)
	if (locale === "hi") return hi_schedule_date_label(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_date_label(inputs)
	if (locale === "ko") return ko_schedule_date_label(inputs)
	return fr_schedule_date_label(inputs)
});