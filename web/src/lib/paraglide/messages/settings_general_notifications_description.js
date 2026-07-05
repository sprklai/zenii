/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Notifications_DescriptionInputs */

const en_settings_general_notifications_description = /** @type {(inputs: Settings_General_Notifications_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose how you receive notifications for each event type`)
};

const zh_cn2_settings_general_notifications_description = /** @type {(inputs: Settings_General_Notifications_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为每种事件类型选择通知方式`)
};

const es_settings_general_notifications_description = /** @type {(inputs: Settings_General_Notifications_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige cómo recibes notificaciones para cada tipo de evento`)
};

const ja_settings_general_notifications_description = /** @type {(inputs: Settings_General_Notifications_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`各イベントタイプの通知方法を選択`)
};

const hi_settings_general_notifications_description = /** @type {(inputs: Settings_General_Notifications_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रत्येक इवेंट प्रकार के लिए सूचना प्राप्त करने का तरीका चुनें`)
};

const pt_br2_settings_general_notifications_description = /** @type {(inputs: Settings_General_Notifications_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha como receber notificações para cada tipo de evento`)
};

const ko_settings_general_notifications_description = /** @type {(inputs: Settings_General_Notifications_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`각 이벤트 유형에 대한 알림 수신 방법을 선택하세요`)
};

const fr_settings_general_notifications_description = /** @type {(inputs: Settings_General_Notifications_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez comment recevoir les notifications pour chaque type d'événement`)
};

/**
* | output |
* | --- |
* | "Choose how you receive notifications for each event type" |
*
* @param {Settings_General_Notifications_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_notifications_description = /** @type {((inputs?: Settings_General_Notifications_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Notifications_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_notifications_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_notifications_description(inputs)
	if (locale === "es") return es_settings_general_notifications_description(inputs)
	if (locale === "ja") return ja_settings_general_notifications_description(inputs)
	if (locale === "hi") return hi_settings_general_notifications_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_notifications_description(inputs)
	if (locale === "ko") return ko_settings_general_notifications_description(inputs)
	return fr_settings_general_notifications_description(inputs)
});