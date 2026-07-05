/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Nav_Notifications_DisconnectedInputs */

const en_nav_notifications_disconnected = /** @type {(inputs: Nav_Notifications_DisconnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Real-time notifications disconnected.`)
};

const zh_cn2_nav_notifications_disconnected = /** @type {(inputs: Nav_Notifications_DisconnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`实时通知已断开。`)
};

const es_nav_notifications_disconnected = /** @type {(inputs: Nav_Notifications_DisconnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificaciones en tiempo real desconectadas.`)
};

const ja_nav_notifications_disconnected = /** @type {(inputs: Nav_Notifications_DisconnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リアルタイム通知が切断されました。`)
};

const hi_nav_notifications_disconnected = /** @type {(inputs: Nav_Notifications_DisconnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`रीयल-टाइम सूचनाएँ डिस्कनेक्ट हैं।`)
};

const pt_br2_nav_notifications_disconnected = /** @type {(inputs: Nav_Notifications_DisconnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificações em tempo real desconectadas.`)
};

const ko_nav_notifications_disconnected = /** @type {(inputs: Nav_Notifications_DisconnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`실시간 알림이 연결 해제되었습니다.`)
};

const fr_nav_notifications_disconnected = /** @type {(inputs: Nav_Notifications_DisconnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications en temps réel déconnectées.`)
};

/**
* | output |
* | --- |
* | "Real-time notifications disconnected." |
*
* @param {Nav_Notifications_DisconnectedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const nav_notifications_disconnected = /** @type {((inputs?: Nav_Notifications_DisconnectedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_Notifications_DisconnectedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_nav_notifications_disconnected(inputs)
	if (locale === "zh-CN") return zh_cn2_nav_notifications_disconnected(inputs)
	if (locale === "es") return es_nav_notifications_disconnected(inputs)
	if (locale === "ja") return ja_nav_notifications_disconnected(inputs)
	if (locale === "hi") return hi_nav_notifications_disconnected(inputs)
	if (locale === "pt-BR") return pt_br2_nav_notifications_disconnected(inputs)
	if (locale === "ko") return ko_nav_notifications_disconnected(inputs)
	return fr_nav_notifications_disconnected(inputs)
});