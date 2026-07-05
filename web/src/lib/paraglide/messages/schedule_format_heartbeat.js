/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Format_HeartbeatInputs */

const en_schedule_format_heartbeat = /** @type {(inputs: Schedule_Format_HeartbeatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heartbeat`)
};

const zh_cn2_schedule_format_heartbeat = /** @type {(inputs: Schedule_Format_HeartbeatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`心跳`)
};

const es_schedule_format_heartbeat = /** @type {(inputs: Schedule_Format_HeartbeatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Latido`)
};

const ja_schedule_format_heartbeat = /** @type {(inputs: Schedule_Format_HeartbeatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ハートビート`)
};

const hi_schedule_format_heartbeat = /** @type {(inputs: Schedule_Format_HeartbeatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`हार्टबीट`)
};

const pt_br2_schedule_format_heartbeat = /** @type {(inputs: Schedule_Format_HeartbeatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heartbeat`)
};

const ko_schedule_format_heartbeat = /** @type {(inputs: Schedule_Format_HeartbeatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`하트비트`)
};

const fr_schedule_format_heartbeat = /** @type {(inputs: Schedule_Format_HeartbeatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heartbeat`)
};

/**
* | output |
* | --- |
* | "Heartbeat" |
*
* @param {Schedule_Format_HeartbeatInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_format_heartbeat = /** @type {((inputs?: Schedule_Format_HeartbeatInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Format_HeartbeatInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_format_heartbeat(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_format_heartbeat(inputs)
	if (locale === "es") return es_schedule_format_heartbeat(inputs)
	if (locale === "ja") return ja_schedule_format_heartbeat(inputs)
	if (locale === "hi") return hi_schedule_format_heartbeat(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_format_heartbeat(inputs)
	if (locale === "ko") return ko_schedule_format_heartbeat(inputs)
	return fr_schedule_format_heartbeat(inputs)
});