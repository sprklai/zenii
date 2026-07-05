/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Channels_Telegram_Dm_DisabledInputs */

const en_settings_channels_telegram_dm_disabled = /** @type {(inputs: Settings_Channels_Telegram_Dm_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disabled`)
};

const zh_cn2_settings_channels_telegram_dm_disabled = /** @type {(inputs: Settings_Channels_Telegram_Dm_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已禁用`)
};

const es_settings_channels_telegram_dm_disabled = /** @type {(inputs: Settings_Channels_Telegram_Dm_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deshabilitado`)
};

const ja_settings_channels_telegram_dm_disabled = /** @type {(inputs: Settings_Channels_Telegram_Dm_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`無効`)
};

const hi_settings_channels_telegram_dm_disabled = /** @type {(inputs: Settings_Channels_Telegram_Dm_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अक्षम`)
};

const pt_br2_settings_channels_telegram_dm_disabled = /** @type {(inputs: Settings_Channels_Telegram_Dm_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desabilitado`)
};

const ko_settings_channels_telegram_dm_disabled = /** @type {(inputs: Settings_Channels_Telegram_Dm_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`비활성`)
};

const fr_settings_channels_telegram_dm_disabled = /** @type {(inputs: Settings_Channels_Telegram_Dm_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Désactivé`)
};

/**
* | output |
* | --- |
* | "Disabled" |
*
* @param {Settings_Channels_Telegram_Dm_DisabledInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_channels_telegram_dm_disabled = /** @type {((inputs?: Settings_Channels_Telegram_Dm_DisabledInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Channels_Telegram_Dm_DisabledInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_channels_telegram_dm_disabled(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_channels_telegram_dm_disabled(inputs)
	if (locale === "es") return es_settings_channels_telegram_dm_disabled(inputs)
	if (locale === "ja") return ja_settings_channels_telegram_dm_disabled(inputs)
	if (locale === "hi") return hi_settings_channels_telegram_dm_disabled(inputs)
	if (locale === "pt-BR") return pt_br2_settings_channels_telegram_dm_disabled(inputs)
	if (locale === "ko") return ko_settings_channels_telegram_dm_disabled(inputs)
	return fr_settings_channels_telegram_dm_disabled(inputs)
});