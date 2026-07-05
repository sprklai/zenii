/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Interval_LabelInputs */

const en_schedule_interval_label = /** @type {(inputs: Schedule_Interval_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interval (seconds)`)
};

const zh_cn2_schedule_interval_label = /** @type {(inputs: Schedule_Interval_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`间隔（秒）`)
};

const es_schedule_interval_label = /** @type {(inputs: Schedule_Interval_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intervalo (segundos)`)
};

const ja_schedule_interval_label = /** @type {(inputs: Schedule_Interval_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`間隔（秒）`)
};

const hi_schedule_interval_label = /** @type {(inputs: Schedule_Interval_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अंतराल (सेकंड)`)
};

const pt_br2_schedule_interval_label = /** @type {(inputs: Schedule_Interval_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intervalo (segundos)`)
};

const ko_schedule_interval_label = /** @type {(inputs: Schedule_Interval_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`간격 (초)`)
};

const fr_schedule_interval_label = /** @type {(inputs: Schedule_Interval_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intervalle (secondes)`)
};

/**
* | output |
* | --- |
* | "Interval (seconds)" |
*
* @param {Schedule_Interval_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_interval_label = /** @type {((inputs?: Schedule_Interval_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Interval_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_interval_label(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_interval_label(inputs)
	if (locale === "es") return es_schedule_interval_label(inputs)
	if (locale === "ja") return ja_schedule_interval_label(inputs)
	if (locale === "hi") return hi_schedule_interval_label(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_interval_label(inputs)
	if (locale === "ko") return ko_schedule_interval_label(inputs)
	return fr_schedule_interval_label(inputs)
});