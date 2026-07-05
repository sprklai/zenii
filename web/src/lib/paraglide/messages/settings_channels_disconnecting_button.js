/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Channels_Disconnecting_ButtonInputs */

const en_settings_channels_disconnecting_button = /** @type {(inputs: Settings_Channels_Disconnecting_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disconnecting...`)
};

const zh_cn2_settings_channels_disconnecting_button = /** @type {(inputs: Settings_Channels_Disconnecting_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`断开中...`)
};

const es_settings_channels_disconnecting_button = /** @type {(inputs: Settings_Channels_Disconnecting_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desconectando...`)
};

const ja_settings_channels_disconnecting_button = /** @type {(inputs: Settings_Channels_Disconnecting_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`切断中...`)
};

const hi_settings_channels_disconnecting_button = /** @type {(inputs: Settings_Channels_Disconnecting_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`डिस्कनेक्ट हो रहा है...`)
};

const pt_br2_settings_channels_disconnecting_button = /** @type {(inputs: Settings_Channels_Disconnecting_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desconectando...`)
};

const ko_settings_channels_disconnecting_button = /** @type {(inputs: Settings_Channels_Disconnecting_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`연결 해제 중...`)
};

const fr_settings_channels_disconnecting_button = /** @type {(inputs: Settings_Channels_Disconnecting_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déconnexion...`)
};

/**
* | output |
* | --- |
* | "Disconnecting..." |
*
* @param {Settings_Channels_Disconnecting_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_channels_disconnecting_button = /** @type {((inputs?: Settings_Channels_Disconnecting_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Channels_Disconnecting_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_channels_disconnecting_button(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_channels_disconnecting_button(inputs)
	if (locale === "es") return es_settings_channels_disconnecting_button(inputs)
	if (locale === "ja") return ja_settings_channels_disconnecting_button(inputs)
	if (locale === "hi") return hi_settings_channels_disconnecting_button(inputs)
	if (locale === "pt-BR") return pt_br2_settings_channels_disconnecting_button(inputs)
	if (locale === "ko") return ko_settings_channels_disconnecting_button(inputs)
	return fr_settings_channels_disconnecting_button(inputs)
});