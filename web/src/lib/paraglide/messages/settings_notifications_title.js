/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notifications_TitleInputs */

const en_settings_notifications_title = /** @type {(inputs: Settings_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notification Routing`)
};

const zh_cn2_settings_notifications_title = /** @type {(inputs: Settings_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知路由`)
};

const es_settings_notifications_title = /** @type {(inputs: Settings_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enrutamiento de notificaciones`)
};

const ja_settings_notifications_title = /** @type {(inputs: Settings_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知ルーティング`)
};

const hi_settings_notifications_title = /** @type {(inputs: Settings_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सूचना रूटिंग`)
};

const pt_br2_settings_notifications_title = /** @type {(inputs: Settings_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Roteamento de Notificações`)
};

const ko_settings_notifications_title = /** @type {(inputs: Settings_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`알림 라우팅`)
};

const fr_settings_notifications_title = /** @type {(inputs: Settings_Notifications_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Routage des notifications`)
};

/**
* | output |
* | --- |
* | "Notification Routing" |
*
* @param {Settings_Notifications_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_notifications_title = /** @type {((inputs?: Settings_Notifications_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notifications_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_notifications_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_notifications_title(inputs)
	if (locale === "es") return es_settings_notifications_title(inputs)
	if (locale === "ja") return ja_settings_notifications_title(inputs)
	if (locale === "hi") return hi_settings_notifications_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_notifications_title(inputs)
	if (locale === "ko") return ko_settings_notifications_title(inputs)
	return fr_settings_notifications_title(inputs)
});