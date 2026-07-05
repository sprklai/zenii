/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Channels_Telegram_Save_ButtonInputs */

const en_settings_channels_telegram_save_button = /** @type {(inputs: Settings_Channels_Telegram_Save_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save Telegram Settings`)
};

const zh_cn2_settings_channels_telegram_save_button = /** @type {(inputs: Settings_Channels_Telegram_Save_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存 Telegram 设置`)
};

const es_settings_channels_telegram_save_button = /** @type {(inputs: Settings_Channels_Telegram_Save_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar ajustes de Telegram`)
};

const ja_settings_channels_telegram_save_button = /** @type {(inputs: Settings_Channels_Telegram_Save_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram 設定を保存`)
};

const hi_settings_channels_telegram_save_button = /** @type {(inputs: Settings_Channels_Telegram_Save_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram सेटिंग्स सहेजें`)
};

const pt_br2_settings_channels_telegram_save_button = /** @type {(inputs: Settings_Channels_Telegram_Save_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar Configurações do Telegram`)
};

const ko_settings_channels_telegram_save_button = /** @type {(inputs: Settings_Channels_Telegram_Save_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram 설정 저장`)
};

const fr_settings_channels_telegram_save_button = /** @type {(inputs: Settings_Channels_Telegram_Save_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer les paramètres Telegram`)
};

/**
* | output |
* | --- |
* | "Save Telegram Settings" |
*
* @param {Settings_Channels_Telegram_Save_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_channels_telegram_save_button = /** @type {((inputs?: Settings_Channels_Telegram_Save_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Channels_Telegram_Save_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_channels_telegram_save_button(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_channels_telegram_save_button(inputs)
	if (locale === "es") return es_settings_channels_telegram_save_button(inputs)
	if (locale === "ja") return ja_settings_channels_telegram_save_button(inputs)
	if (locale === "hi") return hi_settings_channels_telegram_save_button(inputs)
	if (locale === "pt-BR") return pt_br2_settings_channels_telegram_save_button(inputs)
	if (locale === "ko") return ko_settings_channels_telegram_save_button(inputs)
	return fr_settings_channels_telegram_save_button(inputs)
});