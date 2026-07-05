/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Channels_Telegram_Dm_OpenInputs */

const en_settings_channels_telegram_dm_open = /** @type {(inputs: Settings_Channels_Telegram_Dm_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open`)
};

const zh_cn2_settings_channels_telegram_dm_open = /** @type {(inputs: Settings_Channels_Telegram_Dm_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开放`)
};

const es_settings_channels_telegram_dm_open = /** @type {(inputs: Settings_Channels_Telegram_Dm_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abierto`)
};

const ja_settings_channels_telegram_dm_open = /** @type {(inputs: Settings_Channels_Telegram_Dm_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オープン`)
};

const hi_settings_channels_telegram_dm_open = /** @type {(inputs: Settings_Channels_Telegram_Dm_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`खुला`)
};

const pt_br2_settings_channels_telegram_dm_open = /** @type {(inputs: Settings_Channels_Telegram_Dm_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aberto`)
};

const ko_settings_channels_telegram_dm_open = /** @type {(inputs: Settings_Channels_Telegram_Dm_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`공개`)
};

const fr_settings_channels_telegram_dm_open = /** @type {(inputs: Settings_Channels_Telegram_Dm_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvert`)
};

/**
* | output |
* | --- |
* | "Open" |
*
* @param {Settings_Channels_Telegram_Dm_OpenInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_channels_telegram_dm_open = /** @type {((inputs?: Settings_Channels_Telegram_Dm_OpenInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Channels_Telegram_Dm_OpenInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_channels_telegram_dm_open(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_channels_telegram_dm_open(inputs)
	if (locale === "es") return es_settings_channels_telegram_dm_open(inputs)
	if (locale === "ja") return ja_settings_channels_telegram_dm_open(inputs)
	if (locale === "hi") return hi_settings_channels_telegram_dm_open(inputs)
	if (locale === "pt-BR") return pt_br2_settings_channels_telegram_dm_open(inputs)
	if (locale === "ko") return ko_settings_channels_telegram_dm_open(inputs)
	return fr_settings_channels_telegram_dm_open(inputs)
});