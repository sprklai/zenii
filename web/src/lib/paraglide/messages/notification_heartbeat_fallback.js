/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Notification_Heartbeat_FallbackInputs */

const en_notification_heartbeat_fallback = /** @type {(inputs: Notification_Heartbeat_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heartbeat`)
};

const zh_cn2_notification_heartbeat_fallback = /** @type {(inputs: Notification_Heartbeat_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`心跳`)
};

const es_notification_heartbeat_fallback = /** @type {(inputs: Notification_Heartbeat_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Latido`)
};

const ja_notification_heartbeat_fallback = /** @type {(inputs: Notification_Heartbeat_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ハートビート`)
};

const hi_notification_heartbeat_fallback = /** @type {(inputs: Notification_Heartbeat_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`हार्टबीट`)
};

const pt_br2_notification_heartbeat_fallback = /** @type {(inputs: Notification_Heartbeat_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heartbeat`)
};

const ko_notification_heartbeat_fallback = /** @type {(inputs: Notification_Heartbeat_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`하트비트`)
};

const fr_notification_heartbeat_fallback = /** @type {(inputs: Notification_Heartbeat_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heartbeat`)
};

/**
* | output |
* | --- |
* | "Heartbeat" |
*
* @param {Notification_Heartbeat_FallbackInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const notification_heartbeat_fallback = /** @type {((inputs?: Notification_Heartbeat_FallbackInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Notification_Heartbeat_FallbackInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_notification_heartbeat_fallback(inputs)
	if (locale === "zh-CN") return zh_cn2_notification_heartbeat_fallback(inputs)
	if (locale === "es") return es_notification_heartbeat_fallback(inputs)
	if (locale === "ja") return ja_notification_heartbeat_fallback(inputs)
	if (locale === "hi") return hi_notification_heartbeat_fallback(inputs)
	if (locale === "pt-BR") return pt_br2_notification_heartbeat_fallback(inputs)
	if (locale === "ko") return ko_notification_heartbeat_fallback(inputs)
	return fr_notification_heartbeat_fallback(inputs)
});