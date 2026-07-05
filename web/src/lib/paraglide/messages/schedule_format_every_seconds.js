/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ value: NonNullable<unknown> }} Schedule_Format_Every_SecondsInputs */

const en_schedule_format_every_seconds = /** @type {(inputs: Schedule_Format_Every_SecondsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Every ${i?.value}s`)
};

const zh_cn2_schedule_format_every_seconds = /** @type {(inputs: Schedule_Format_Every_SecondsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`每 ${i?.value} 秒`)
};

const es_schedule_format_every_seconds = /** @type {(inputs: Schedule_Format_Every_SecondsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cada ${i?.value}s`)
};

const ja_schedule_format_every_seconds = /** @type {(inputs: Schedule_Format_Every_SecondsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value} 秒ごと`)
};

const hi_schedule_format_every_seconds = /** @type {(inputs: Schedule_Format_Every_SecondsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`हर ${i?.value} सेकंड`)
};

const pt_br2_schedule_format_every_seconds = /** @type {(inputs: Schedule_Format_Every_SecondsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A cada ${i?.value}s`)
};

const ko_schedule_format_every_seconds = /** @type {(inputs: Schedule_Format_Every_SecondsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value}초마다`)
};

const fr_schedule_format_every_seconds = /** @type {(inputs: Schedule_Format_Every_SecondsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Toutes les ${i?.value}s`)
};

/**
* | output |
* | --- |
* | "Every {value}s" |
*
* @param {Schedule_Format_Every_SecondsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_format_every_seconds = /** @type {((inputs: Schedule_Format_Every_SecondsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Format_Every_SecondsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_format_every_seconds(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_format_every_seconds(inputs)
	if (locale === "es") return es_schedule_format_every_seconds(inputs)
	if (locale === "ja") return ja_schedule_format_every_seconds(inputs)
	if (locale === "hi") return hi_schedule_format_every_seconds(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_format_every_seconds(inputs)
	if (locale === "ko") return ko_schedule_format_every_seconds(inputs)
	return fr_schedule_format_every_seconds(inputs)
});