/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notifications_Not_AvailableInputs */

const en_settings_notifications_not_available = /** @type {(inputs: Settings_Notifications_Not_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`N/A`)
};

const zh_cn2_settings_notifications_not_available = /** @type {(inputs: Settings_Notifications_Not_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不适用`)
};

const es_settings_notifications_not_available = /** @type {(inputs: Settings_Notifications_Not_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`N/D`)
};

const ja_settings_notifications_not_available = /** @type {(inputs: Settings_Notifications_Not_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`N/A`)
};

const hi_settings_notifications_not_available = /** @type {(inputs: Settings_Notifications_Not_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अनुपलब्ध`)
};

const pt_br2_settings_notifications_not_available = /** @type {(inputs: Settings_Notifications_Not_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`N/D`)
};

const ko_settings_notifications_not_available = /** @type {(inputs: Settings_Notifications_Not_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`N/A`)
};

const fr_settings_notifications_not_available = /** @type {(inputs: Settings_Notifications_Not_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`N/D`)
};

/**
* | output |
* | --- |
* | "N/A" |
*
* @param {Settings_Notifications_Not_AvailableInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_notifications_not_available = /** @type {((inputs?: Settings_Notifications_Not_AvailableInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notifications_Not_AvailableInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_notifications_not_available(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_notifications_not_available(inputs)
	if (locale === "es") return es_settings_notifications_not_available(inputs)
	if (locale === "ja") return ja_settings_notifications_not_available(inputs)
	if (locale === "hi") return hi_settings_notifications_not_available(inputs)
	if (locale === "pt-BR") return pt_br2_settings_notifications_not_available(inputs)
	if (locale === "ko") return ko_settings_notifications_not_available(inputs)
	return fr_settings_notifications_not_available(inputs)
});