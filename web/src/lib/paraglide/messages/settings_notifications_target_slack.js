/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notifications_Target_SlackInputs */

const en_settings_notifications_target_slack = /** @type {(inputs: Settings_Notifications_Target_SlackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

const zh_cn2_settings_notifications_target_slack = /** @type {(inputs: Settings_Notifications_Target_SlackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

const es_settings_notifications_target_slack = /** @type {(inputs: Settings_Notifications_Target_SlackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

const ja_settings_notifications_target_slack = /** @type {(inputs: Settings_Notifications_Target_SlackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

const hi_settings_notifications_target_slack = /** @type {(inputs: Settings_Notifications_Target_SlackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

const pt_br2_settings_notifications_target_slack = /** @type {(inputs: Settings_Notifications_Target_SlackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

const ko_settings_notifications_target_slack = /** @type {(inputs: Settings_Notifications_Target_SlackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

const fr_settings_notifications_target_slack = /** @type {(inputs: Settings_Notifications_Target_SlackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

/**
* | output |
* | --- |
* | "Slack" |
*
* @param {Settings_Notifications_Target_SlackInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_notifications_target_slack = /** @type {((inputs?: Settings_Notifications_Target_SlackInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notifications_Target_SlackInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_notifications_target_slack(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_notifications_target_slack(inputs)
	if (locale === "es") return es_settings_notifications_target_slack(inputs)
	if (locale === "ja") return ja_settings_notifications_target_slack(inputs)
	if (locale === "hi") return hi_settings_notifications_target_slack(inputs)
	if (locale === "pt-BR") return pt_br2_settings_notifications_target_slack(inputs)
	if (locale === "ko") return ko_settings_notifications_target_slack(inputs)
	return fr_settings_notifications_target_slack(inputs)
});