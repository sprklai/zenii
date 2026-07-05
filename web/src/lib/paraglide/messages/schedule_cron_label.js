/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Cron_LabelInputs */

const en_schedule_cron_label = /** @type {(inputs: Schedule_Cron_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron Expression`)
};

const zh_cn2_schedule_cron_label = /** @type {(inputs: Schedule_Cron_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron 表达式`)
};

const es_schedule_cron_label = /** @type {(inputs: Schedule_Cron_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expresión cron`)
};

const ja_schedule_cron_label = /** @type {(inputs: Schedule_Cron_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron 式`)
};

const hi_schedule_cron_label = /** @type {(inputs: Schedule_Cron_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron एक्सप्रेशन`)
};

const pt_br2_schedule_cron_label = /** @type {(inputs: Schedule_Cron_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expressão Cron`)
};

const ko_schedule_cron_label = /** @type {(inputs: Schedule_Cron_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron 표현식`)
};

const fr_schedule_cron_label = /** @type {(inputs: Schedule_Cron_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expression cron`)
};

/**
* | output |
* | --- |
* | "Cron Expression" |
*
* @param {Schedule_Cron_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_cron_label = /** @type {((inputs?: Schedule_Cron_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Cron_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_cron_label(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_cron_label(inputs)
	if (locale === "es") return es_schedule_cron_label(inputs)
	if (locale === "ja") return ja_schedule_cron_label(inputs)
	if (locale === "hi") return hi_schedule_cron_label(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_cron_label(inputs)
	if (locale === "ko") return ko_schedule_cron_label(inputs)
	return fr_schedule_cron_label(inputs)
});