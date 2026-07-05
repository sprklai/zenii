/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Channels_Telegram_Settings_TitleInputs */

const en_settings_channels_telegram_settings_title = /** @type {(inputs: Settings_Channels_Telegram_Settings_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram Settings`)
};

const zh_cn2_settings_channels_telegram_settings_title = /** @type {(inputs: Settings_Channels_Telegram_Settings_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram 设置`)
};

const es_settings_channels_telegram_settings_title = /** @type {(inputs: Settings_Channels_Telegram_Settings_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajustes de Telegram`)
};

const ja_settings_channels_telegram_settings_title = /** @type {(inputs: Settings_Channels_Telegram_Settings_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram 設定`)
};

const hi_settings_channels_telegram_settings_title = /** @type {(inputs: Settings_Channels_Telegram_Settings_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram सेटिंग्स`)
};

const pt_br2_settings_channels_telegram_settings_title = /** @type {(inputs: Settings_Channels_Telegram_Settings_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurações do Telegram`)
};

const ko_settings_channels_telegram_settings_title = /** @type {(inputs: Settings_Channels_Telegram_Settings_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram 설정`)
};

const fr_settings_channels_telegram_settings_title = /** @type {(inputs: Settings_Channels_Telegram_Settings_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paramètres Telegram`)
};

/**
* | output |
* | --- |
* | "Telegram Settings" |
*
* @param {Settings_Channels_Telegram_Settings_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_channels_telegram_settings_title = /** @type {((inputs?: Settings_Channels_Telegram_Settings_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Channels_Telegram_Settings_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_channels_telegram_settings_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_channels_telegram_settings_title(inputs)
	if (locale === "es") return es_settings_channels_telegram_settings_title(inputs)
	if (locale === "ja") return ja_settings_channels_telegram_settings_title(inputs)
	if (locale === "hi") return hi_settings_channels_telegram_settings_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_channels_telegram_settings_title(inputs)
	if (locale === "ko") return ko_settings_channels_telegram_settings_title(inputs)
	return fr_settings_channels_telegram_settings_title(inputs)
});