/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ message: NonNullable<unknown> }} Schedule_Format_NotifyInputs */

const en_schedule_format_notify = /** @type {(inputs: Schedule_Format_NotifyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Notify: ${i?.message}`)
};

const zh_cn2_schedule_format_notify = /** @type {(inputs: Schedule_Format_NotifyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`通知：${i?.message}`)
};

const es_schedule_format_notify = /** @type {(inputs: Schedule_Format_NotifyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Notificar: ${i?.message}`)
};

const ja_schedule_format_notify = /** @type {(inputs: Schedule_Format_NotifyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`通知：${i?.message}`)
};

const hi_schedule_format_notify = /** @type {(inputs: Schedule_Format_NotifyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`सूचना: ${i?.message}`)
};

const pt_br2_schedule_format_notify = /** @type {(inputs: Schedule_Format_NotifyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Notificar: ${i?.message}`)
};

const ko_schedule_format_notify = /** @type {(inputs: Schedule_Format_NotifyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`알림: ${i?.message}`)
};

const fr_schedule_format_notify = /** @type {(inputs: Schedule_Format_NotifyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Notifier : ${i?.message}`)
};

/**
* | output |
* | --- |
* | "Notify: {message}" |
*
* @param {Schedule_Format_NotifyInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_format_notify = /** @type {((inputs: Schedule_Format_NotifyInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Format_NotifyInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_format_notify(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_format_notify(inputs)
	if (locale === "es") return es_schedule_format_notify(inputs)
	if (locale === "ja") return ja_schedule_format_notify(inputs)
	if (locale === "hi") return hi_schedule_format_notify(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_format_notify(inputs)
	if (locale === "ko") return ko_schedule_format_notify(inputs)
	return fr_schedule_format_notify(inputs)
});