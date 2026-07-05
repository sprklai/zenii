/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Format_UnknownInputs */

const en_schedule_format_unknown = /** @type {(inputs: Schedule_Format_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unknown`)
};

const zh_cn2_schedule_format_unknown = /** @type {(inputs: Schedule_Format_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未知`)
};

const es_schedule_format_unknown = /** @type {(inputs: Schedule_Format_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desconocido`)
};

const ja_schedule_format_unknown = /** @type {(inputs: Schedule_Format_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不明`)
};

const hi_schedule_format_unknown = /** @type {(inputs: Schedule_Format_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अज्ञात`)
};

const pt_br2_schedule_format_unknown = /** @type {(inputs: Schedule_Format_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desconhecido`)
};

const ko_schedule_format_unknown = /** @type {(inputs: Schedule_Format_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`알 수 없음`)
};

const fr_schedule_format_unknown = /** @type {(inputs: Schedule_Format_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inconnu`)
};

/**
* | output |
* | --- |
* | "Unknown" |
*
* @param {Schedule_Format_UnknownInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_format_unknown = /** @type {((inputs?: Schedule_Format_UnknownInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Format_UnknownInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_format_unknown(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_format_unknown(inputs)
	if (locale === "es") return es_schedule_format_unknown(inputs)
	if (locale === "ja") return ja_schedule_format_unknown(inputs)
	if (locale === "hi") return hi_schedule_format_unknown(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_format_unknown(inputs)
	if (locale === "ko") return ko_schedule_format_unknown(inputs)
	return fr_schedule_format_unknown(inputs)
});