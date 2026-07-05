/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Channels_Telegram_Dm_Policy_LabelInputs */

const en_settings_channels_telegram_dm_policy_label = /** @type {(inputs: Settings_Channels_Telegram_Dm_Policy_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DM Policy`)
};

const zh_cn2_settings_channels_telegram_dm_policy_label = /** @type {(inputs: Settings_Channels_Telegram_Dm_Policy_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`私信策略`)
};

const es_settings_channels_telegram_dm_policy_label = /** @type {(inputs: Settings_Channels_Telegram_Dm_Policy_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Política de mensajes directos`)
};

const ja_settings_channels_telegram_dm_policy_label = /** @type {(inputs: Settings_Channels_Telegram_Dm_Policy_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DM ポリシー`)
};

const hi_settings_channels_telegram_dm_policy_label = /** @type {(inputs: Settings_Channels_Telegram_Dm_Policy_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DM नीति`)
};

const pt_br2_settings_channels_telegram_dm_policy_label = /** @type {(inputs: Settings_Channels_Telegram_Dm_Policy_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Política de DM`)
};

const ko_settings_channels_telegram_dm_policy_label = /** @type {(inputs: Settings_Channels_Telegram_Dm_Policy_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DM 정책`)
};

const fr_settings_channels_telegram_dm_policy_label = /** @type {(inputs: Settings_Channels_Telegram_Dm_Policy_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Politique de messages privés`)
};

/**
* | output |
* | --- |
* | "DM Policy" |
*
* @param {Settings_Channels_Telegram_Dm_Policy_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_channels_telegram_dm_policy_label = /** @type {((inputs?: Settings_Channels_Telegram_Dm_Policy_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Channels_Telegram_Dm_Policy_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_channels_telegram_dm_policy_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_channels_telegram_dm_policy_label(inputs)
	if (locale === "es") return es_settings_channels_telegram_dm_policy_label(inputs)
	if (locale === "ja") return ja_settings_channels_telegram_dm_policy_label(inputs)
	if (locale === "hi") return hi_settings_channels_telegram_dm_policy_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_channels_telegram_dm_policy_label(inputs)
	if (locale === "ko") return ko_settings_channels_telegram_dm_policy_label(inputs)
	return fr_settings_channels_telegram_dm_policy_label(inputs)
});