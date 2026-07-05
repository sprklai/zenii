/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notifications_Target_TelegramInputs */

const en_settings_notifications_target_telegram = /** @type {(inputs: Settings_Notifications_Target_TelegramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

const zh_cn2_settings_notifications_target_telegram = /** @type {(inputs: Settings_Notifications_Target_TelegramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

const es_settings_notifications_target_telegram = /** @type {(inputs: Settings_Notifications_Target_TelegramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

const ja_settings_notifications_target_telegram = /** @type {(inputs: Settings_Notifications_Target_TelegramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

const hi_settings_notifications_target_telegram = /** @type {(inputs: Settings_Notifications_Target_TelegramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

const pt_br2_settings_notifications_target_telegram = /** @type {(inputs: Settings_Notifications_Target_TelegramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

const ko_settings_notifications_target_telegram = /** @type {(inputs: Settings_Notifications_Target_TelegramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

const fr_settings_notifications_target_telegram = /** @type {(inputs: Settings_Notifications_Target_TelegramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

/**
* | output |
* | --- |
* | "Telegram" |
*
* @param {Settings_Notifications_Target_TelegramInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_notifications_target_telegram = /** @type {((inputs?: Settings_Notifications_Target_TelegramInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notifications_Target_TelegramInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_notifications_target_telegram(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_notifications_target_telegram(inputs)
	if (locale === "es") return es_settings_notifications_target_telegram(inputs)
	if (locale === "ja") return ja_settings_notifications_target_telegram(inputs)
	if (locale === "hi") return hi_settings_notifications_target_telegram(inputs)
	if (locale === "pt-BR") return pt_br2_settings_notifications_target_telegram(inputs)
	if (locale === "ko") return ko_settings_notifications_target_telegram(inputs)
	return fr_settings_notifications_target_telegram(inputs)
});