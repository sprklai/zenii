/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Tab_NotificationsInputs */

const en_settings_tab_notifications = /** @type {(inputs: Settings_Tab_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications`)
};

const zh_cn2_settings_tab_notifications = /** @type {(inputs: Settings_Tab_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

const es_settings_tab_notifications = /** @type {(inputs: Settings_Tab_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificaciones`)
};

const ja_settings_tab_notifications = /** @type {(inputs: Settings_Tab_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

const hi_settings_tab_notifications = /** @type {(inputs: Settings_Tab_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अधिसूचनाएं`)
};

const pt_br2_settings_tab_notifications = /** @type {(inputs: Settings_Tab_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificações`)
};

const ko_settings_tab_notifications = /** @type {(inputs: Settings_Tab_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`알림`)
};

const fr_settings_tab_notifications = /** @type {(inputs: Settings_Tab_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications`)
};

/**
* | output |
* | --- |
* | "Notifications" |
*
* @param {Settings_Tab_NotificationsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_tab_notifications = /** @type {((inputs?: Settings_Tab_NotificationsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Tab_NotificationsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_tab_notifications(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_tab_notifications(inputs)
	if (locale === "es") return es_settings_tab_notifications(inputs)
	if (locale === "ja") return ja_settings_tab_notifications(inputs)
	if (locale === "hi") return hi_settings_tab_notifications(inputs)
	if (locale === "pt-BR") return pt_br2_settings_tab_notifications(inputs)
	if (locale === "ko") return ko_settings_tab_notifications(inputs)
	return fr_settings_tab_notifications(inputs)
});