/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ value: NonNullable<unknown> }} Schedule_Format_Every_MinutesInputs */

const en_schedule_format_every_minutes = /** @type {(inputs: Schedule_Format_Every_MinutesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Every ${i?.value}m`)
};

const zh_cn2_schedule_format_every_minutes = /** @type {(inputs: Schedule_Format_Every_MinutesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`每 ${i?.value} 分钟`)
};

const es_schedule_format_every_minutes = /** @type {(inputs: Schedule_Format_Every_MinutesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cada ${i?.value}m`)
};

const ja_schedule_format_every_minutes = /** @type {(inputs: Schedule_Format_Every_MinutesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value} 分ごと`)
};

const hi_schedule_format_every_minutes = /** @type {(inputs: Schedule_Format_Every_MinutesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`हर ${i?.value} मिनट`)
};

const pt_br2_schedule_format_every_minutes = /** @type {(inputs: Schedule_Format_Every_MinutesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A cada ${i?.value}min`)
};

const ko_schedule_format_every_minutes = /** @type {(inputs: Schedule_Format_Every_MinutesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value}분마다`)
};

const fr_schedule_format_every_minutes = /** @type {(inputs: Schedule_Format_Every_MinutesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Toutes les ${i?.value}m`)
};

/**
* | output |
* | --- |
* | "Every {value}m" |
*
* @param {Schedule_Format_Every_MinutesInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_format_every_minutes = /** @type {((inputs: Schedule_Format_Every_MinutesInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Format_Every_MinutesInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_format_every_minutes(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_format_every_minutes(inputs)
	if (locale === "es") return es_schedule_format_every_minutes(inputs)
	if (locale === "ja") return ja_schedule_format_every_minutes(inputs)
	if (locale === "hi") return hi_schedule_format_every_minutes(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_format_every_minutes(inputs)
	if (locale === "ko") return ko_schedule_format_every_minutes(inputs)
	return fr_schedule_format_every_minutes(inputs)
});