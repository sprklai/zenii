/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Payload_Option_NotifyInputs */

const en_schedule_payload_option_notify = /** @type {(inputs: Schedule_Payload_Option_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notify`)
};

const zh_cn2_schedule_payload_option_notify = /** @type {(inputs: Schedule_Payload_Option_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

const es_schedule_payload_option_notify = /** @type {(inputs: Schedule_Payload_Option_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificar`)
};

const ja_schedule_payload_option_notify = /** @type {(inputs: Schedule_Payload_Option_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

const hi_schedule_payload_option_notify = /** @type {(inputs: Schedule_Payload_Option_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सूचित करें`)
};

const pt_br2_schedule_payload_option_notify = /** @type {(inputs: Schedule_Payload_Option_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificar`)
};

const ko_schedule_payload_option_notify = /** @type {(inputs: Schedule_Payload_Option_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`알림`)
};

const fr_schedule_payload_option_notify = /** @type {(inputs: Schedule_Payload_Option_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifier`)
};

/**
* | output |
* | --- |
* | "Notify" |
*
* @param {Schedule_Payload_Option_NotifyInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_payload_option_notify = /** @type {((inputs?: Schedule_Payload_Option_NotifyInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Payload_Option_NotifyInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_payload_option_notify(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_payload_option_notify(inputs)
	if (locale === "es") return es_schedule_payload_option_notify(inputs)
	if (locale === "ja") return ja_schedule_payload_option_notify(inputs)
	if (locale === "hi") return hi_schedule_payload_option_notify(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_payload_option_notify(inputs)
	if (locale === "ko") return ko_schedule_payload_option_notify(inputs)
	return fr_schedule_payload_option_notify(inputs)
});