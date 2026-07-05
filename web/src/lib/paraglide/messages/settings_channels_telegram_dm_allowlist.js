/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Channels_Telegram_Dm_AllowlistInputs */

const en_settings_channels_telegram_dm_allowlist = /** @type {(inputs: Settings_Channels_Telegram_Dm_AllowlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allowlist Only`)
};

const zh_cn2_settings_channels_telegram_dm_allowlist = /** @type {(inputs: Settings_Channels_Telegram_Dm_AllowlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅白名单`)
};

const es_settings_channels_telegram_dm_allowlist = /** @type {(inputs: Settings_Channels_Telegram_Dm_AllowlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo lista permitida`)
};

const ja_settings_channels_telegram_dm_allowlist = /** @type {(inputs: Settings_Channels_Telegram_Dm_AllowlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`許可リストのみ`)
};

const hi_settings_channels_telegram_dm_allowlist = /** @type {(inputs: Settings_Channels_Telegram_Dm_AllowlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`केवल अनुमति सूची`)
};

const pt_br2_settings_channels_telegram_dm_allowlist = /** @type {(inputs: Settings_Channels_Telegram_Dm_AllowlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Somente Lista de Permissão`)
};

const ko_settings_channels_telegram_dm_allowlist = /** @type {(inputs: Settings_Channels_Telegram_Dm_AllowlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`허용 목록만`)
};

const fr_settings_channels_telegram_dm_allowlist = /** @type {(inputs: Settings_Channels_Telegram_Dm_AllowlistInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liste autorisée uniquement`)
};

/**
* | output |
* | --- |
* | "Allowlist Only" |
*
* @param {Settings_Channels_Telegram_Dm_AllowlistInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_channels_telegram_dm_allowlist = /** @type {((inputs?: Settings_Channels_Telegram_Dm_AllowlistInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Channels_Telegram_Dm_AllowlistInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_channels_telegram_dm_allowlist(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_channels_telegram_dm_allowlist(inputs)
	if (locale === "es") return es_settings_channels_telegram_dm_allowlist(inputs)
	if (locale === "ja") return ja_settings_channels_telegram_dm_allowlist(inputs)
	if (locale === "hi") return hi_settings_channels_telegram_dm_allowlist(inputs)
	if (locale === "pt-BR") return pt_br2_settings_channels_telegram_dm_allowlist(inputs)
	if (locale === "ko") return ko_settings_channels_telegram_dm_allowlist(inputs)
	return fr_settings_channels_telegram_dm_allowlist(inputs)
});