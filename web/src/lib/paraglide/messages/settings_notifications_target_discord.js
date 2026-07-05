/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notifications_Target_DiscordInputs */

const en_settings_notifications_target_discord = /** @type {(inputs: Settings_Notifications_Target_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const zh_cn2_settings_notifications_target_discord = /** @type {(inputs: Settings_Notifications_Target_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const es_settings_notifications_target_discord = /** @type {(inputs: Settings_Notifications_Target_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const ja_settings_notifications_target_discord = /** @type {(inputs: Settings_Notifications_Target_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const hi_settings_notifications_target_discord = /** @type {(inputs: Settings_Notifications_Target_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const pt_br2_settings_notifications_target_discord = /** @type {(inputs: Settings_Notifications_Target_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const ko_settings_notifications_target_discord = /** @type {(inputs: Settings_Notifications_Target_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const fr_settings_notifications_target_discord = /** @type {(inputs: Settings_Notifications_Target_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

/**
* | output |
* | --- |
* | "Discord" |
*
* @param {Settings_Notifications_Target_DiscordInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_notifications_target_discord = /** @type {((inputs?: Settings_Notifications_Target_DiscordInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notifications_Target_DiscordInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_notifications_target_discord(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_notifications_target_discord(inputs)
	if (locale === "es") return es_settings_notifications_target_discord(inputs)
	if (locale === "ja") return ja_settings_notifications_target_discord(inputs)
	if (locale === "hi") return hi_settings_notifications_target_discord(inputs)
	if (locale === "pt-BR") return pt_br2_settings_notifications_target_discord(inputs)
	if (locale === "ko") return ko_settings_notifications_target_discord(inputs)
	return fr_settings_notifications_target_discord(inputs)
});