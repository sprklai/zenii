/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notifications_Target_ToastInputs */

const en_settings_notifications_target_toast = /** @type {(inputs: Settings_Notifications_Target_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toast`)
};

const zh_cn2_settings_notifications_target_toast = /** @type {(inputs: Settings_Notifications_Target_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`横幅`)
};

const es_settings_notifications_target_toast = /** @type {(inputs: Settings_Notifications_Target_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toast`)
};

const ja_settings_notifications_target_toast = /** @type {(inputs: Settings_Notifications_Target_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`トースト`)
};

const hi_settings_notifications_target_toast = /** @type {(inputs: Settings_Notifications_Target_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`टोस्ट`)
};

const pt_br2_settings_notifications_target_toast = /** @type {(inputs: Settings_Notifications_Target_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toast`)
};

const ko_settings_notifications_target_toast = /** @type {(inputs: Settings_Notifications_Target_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`토스트`)
};

const fr_settings_notifications_target_toast = /** @type {(inputs: Settings_Notifications_Target_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toast`)
};

/**
* | output |
* | --- |
* | "Toast" |
*
* @param {Settings_Notifications_Target_ToastInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_notifications_target_toast = /** @type {((inputs?: Settings_Notifications_Target_ToastInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notifications_Target_ToastInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_notifications_target_toast(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_notifications_target_toast(inputs)
	if (locale === "es") return es_settings_notifications_target_toast(inputs)
	if (locale === "ja") return ja_settings_notifications_target_toast(inputs)
	if (locale === "hi") return hi_settings_notifications_target_toast(inputs)
	if (locale === "pt-BR") return pt_br2_settings_notifications_target_toast(inputs)
	if (locale === "ko") return ko_settings_notifications_target_toast(inputs)
	return fr_settings_notifications_target_toast(inputs)
});