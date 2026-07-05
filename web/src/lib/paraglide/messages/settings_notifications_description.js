/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notifications_DescriptionInputs */

const en_settings_notifications_description = /** @type {(inputs: Settings_Notifications_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configure where notifications are delivered for each event type.`)
};

const zh_cn2_settings_notifications_description = /** @type {(inputs: Settings_Notifications_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为每种事件类型配置通知的投递方式。`)
};

const es_settings_notifications_description = /** @type {(inputs: Settings_Notifications_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configura dónde se entregan las notificaciones para cada tipo de evento.`)
};

const ja_settings_notifications_description = /** @type {(inputs: Settings_Notifications_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`各イベントタイプの通知先を設定します。`)
};

const hi_settings_notifications_description = /** @type {(inputs: Settings_Notifications_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रत्येक इवेंट प्रकार के लिए सूचनाएँ कहाँ भेजी जाएँ, कॉन्फ़िगर करें।`)
};

const pt_br2_settings_notifications_description = /** @type {(inputs: Settings_Notifications_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configure onde as notificações são entregues para cada tipo de evento.`)
};

const ko_settings_notifications_description = /** @type {(inputs: Settings_Notifications_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`각 이벤트 유형에 대해 알림이 전달되는 위치를 설정하세요.`)
};

const fr_settings_notifications_description = /** @type {(inputs: Settings_Notifications_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurez où les notifications sont livrées pour chaque type d'événement.`)
};

/**
* | output |
* | --- |
* | "Configure where notifications are delivered for each event type." |
*
* @param {Settings_Notifications_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_notifications_description = /** @type {((inputs?: Settings_Notifications_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notifications_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_notifications_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_notifications_description(inputs)
	if (locale === "es") return es_settings_notifications_description(inputs)
	if (locale === "ja") return ja_settings_notifications_description(inputs)
	if (locale === "hi") return hi_settings_notifications_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_notifications_description(inputs)
	if (locale === "ko") return ko_settings_notifications_description(inputs)
	return fr_settings_notifications_description(inputs)
});