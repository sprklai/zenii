/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Name_PlaceholderInputs */

const en_schedule_name_placeholder = /** @type {(inputs: Schedule_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. daily-health-check`)
};

const zh_cn2_schedule_name_placeholder = /** @type {(inputs: Schedule_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例如：daily-health-check`)
};

const es_schedule_name_placeholder = /** @type {(inputs: Schedule_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p. ej., verificacion-diaria`)
};

const ja_schedule_name_placeholder = /** @type {(inputs: Schedule_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例：daily-health-check`)
};

const hi_schedule_name_placeholder = /** @type {(inputs: Schedule_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`जैसे daily-health-check`)
};

const pt_br2_schedule_name_placeholder = /** @type {(inputs: Schedule_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ex.: verificacao-diaria`)
};

const ko_schedule_name_placeholder = /** @type {(inputs: Schedule_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`예: daily-health-check`)
};

const fr_schedule_name_placeholder = /** @type {(inputs: Schedule_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p. ex., verification-quotidienne`)
};

/**
* | output |
* | --- |
* | "e.g. daily-health-check" |
*
* @param {Schedule_Name_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_name_placeholder = /** @type {((inputs?: Schedule_Name_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Name_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_name_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_name_placeholder(inputs)
	if (locale === "es") return es_schedule_name_placeholder(inputs)
	if (locale === "ja") return ja_schedule_name_placeholder(inputs)
	if (locale === "hi") return hi_schedule_name_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_name_placeholder(inputs)
	if (locale === "ko") return ko_schedule_name_placeholder(inputs)
	return fr_schedule_name_placeholder(inputs)
});