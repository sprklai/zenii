/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Event_Scheduler_NotificationsInputs */

const en_settings_general_event_scheduler_notifications = /** @type {(inputs: Settings_General_Event_Scheduler_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scheduler Notifications`)
};

const zh_cn2_settings_general_event_scheduler_notifications = /** @type {(inputs: Settings_General_Event_Scheduler_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`调度器通知`)
};

const es_settings_general_event_scheduler_notifications = /** @type {(inputs: Settings_General_Event_Scheduler_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificaciones del programador`)
};

const ja_settings_general_event_scheduler_notifications = /** @type {(inputs: Settings_General_Event_Scheduler_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スケジューラー通知`)
};

const hi_settings_general_event_scheduler_notifications = /** @type {(inputs: Settings_General_Event_Scheduler_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`शेड्यूलर सूचनाएँ`)
};

const pt_br2_settings_general_event_scheduler_notifications = /** @type {(inputs: Settings_General_Event_Scheduler_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificações do Agendador`)
};

const ko_settings_general_event_scheduler_notifications = /** @type {(inputs: Settings_General_Event_Scheduler_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`스케줄러 알림`)
};

const fr_settings_general_event_scheduler_notifications = /** @type {(inputs: Settings_General_Event_Scheduler_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications du planificateur`)
};

/**
* | output |
* | --- |
* | "Scheduler Notifications" |
*
* @param {Settings_General_Event_Scheduler_NotificationsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_event_scheduler_notifications = /** @type {((inputs?: Settings_General_Event_Scheduler_NotificationsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Event_Scheduler_NotificationsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_event_scheduler_notifications(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_event_scheduler_notifications(inputs)
	if (locale === "es") return es_settings_general_event_scheduler_notifications(inputs)
	if (locale === "ja") return ja_settings_general_event_scheduler_notifications(inputs)
	if (locale === "hi") return hi_settings_general_event_scheduler_notifications(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_event_scheduler_notifications(inputs)
	if (locale === "ko") return ko_settings_general_event_scheduler_notifications(inputs)
	return fr_settings_general_event_scheduler_notifications(inputs)
});