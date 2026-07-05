/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Notifications_TitleInputs */

const en_settings_general_notifications_title = /** @type {(inputs: Settings_General_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications`)
};

const zh_cn2_settings_general_notifications_title = /** @type {(inputs: Settings_General_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

const es_settings_general_notifications_title = /** @type {(inputs: Settings_General_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificaciones`)
};

const ja_settings_general_notifications_title = /** @type {(inputs: Settings_General_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

const hi_settings_general_notifications_title = /** @type {(inputs: Settings_General_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अधिसूचनाएं`)
};

const pt_br2_settings_general_notifications_title = /** @type {(inputs: Settings_General_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificações`)
};

const ko_settings_general_notifications_title = /** @type {(inputs: Settings_General_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`알림`)
};

const fr_settings_general_notifications_title = /** @type {(inputs: Settings_General_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications`)
};

/**
* | output |
* | --- |
* | "Notifications" |
*
* @param {Settings_General_Notifications_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_notifications_title = /** @type {((inputs?: Settings_General_Notifications_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Notifications_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_notifications_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_notifications_title(inputs)
	if (locale === "es") return es_settings_general_notifications_title(inputs)
	if (locale === "ja") return ja_settings_general_notifications_title(inputs)
	if (locale === "hi") return hi_settings_general_notifications_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_notifications_title(inputs)
	if (locale === "ko") return ko_settings_general_notifications_title(inputs)
	return fr_settings_general_notifications_title(inputs)
});