/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Status_StoppedInputs */

const en_schedule_status_stopped = /** @type {(inputs: Schedule_Status_StoppedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stopped`)
};

const zh_cn2_schedule_status_stopped = /** @type {(inputs: Schedule_Status_StoppedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已停止`)
};

const es_schedule_status_stopped = /** @type {(inputs: Schedule_Status_StoppedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detenida`)
};

const ja_schedule_status_stopped = /** @type {(inputs: Schedule_Status_StoppedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`停止中`)
};

const hi_schedule_status_stopped = /** @type {(inputs: Schedule_Status_StoppedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`रुका हुआ`)
};

const pt_br2_schedule_status_stopped = /** @type {(inputs: Schedule_Status_StoppedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parado`)
};

const ko_schedule_status_stopped = /** @type {(inputs: Schedule_Status_StoppedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`중지됨`)
};

const fr_schedule_status_stopped = /** @type {(inputs: Schedule_Status_StoppedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arrêtée`)
};

/**
* | output |
* | --- |
* | "Stopped" |
*
* @param {Schedule_Status_StoppedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_status_stopped = /** @type {((inputs?: Schedule_Status_StoppedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Status_StoppedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_status_stopped(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_status_stopped(inputs)
	if (locale === "es") return es_schedule_status_stopped(inputs)
	if (locale === "ja") return ja_schedule_status_stopped(inputs)
	if (locale === "hi") return hi_schedule_status_stopped(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_status_stopped(inputs)
	if (locale === "ko") return ko_schedule_status_stopped(inputs)
	return fr_schedule_status_stopped(inputs)
});