/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Channels_Disconnect_ButtonInputs */

const en_settings_channels_disconnect_button = /** @type {(inputs: Settings_Channels_Disconnect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disconnect`)
};

const zh_cn2_settings_channels_disconnect_button = /** @type {(inputs: Settings_Channels_Disconnect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`断开连接`)
};

const es_settings_channels_disconnect_button = /** @type {(inputs: Settings_Channels_Disconnect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desconectar`)
};

const ja_settings_channels_disconnect_button = /** @type {(inputs: Settings_Channels_Disconnect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`切断`)
};

const hi_settings_channels_disconnect_button = /** @type {(inputs: Settings_Channels_Disconnect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`डिस्कनेक्ट करें`)
};

const pt_br2_settings_channels_disconnect_button = /** @type {(inputs: Settings_Channels_Disconnect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desconectar`)
};

const ko_settings_channels_disconnect_button = /** @type {(inputs: Settings_Channels_Disconnect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`연결 해제`)
};

const fr_settings_channels_disconnect_button = /** @type {(inputs: Settings_Channels_Disconnect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déconnecter`)
};

/**
* | output |
* | --- |
* | "Disconnect" |
*
* @param {Settings_Channels_Disconnect_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_channels_disconnect_button = /** @type {((inputs?: Settings_Channels_Disconnect_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Channels_Disconnect_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_channels_disconnect_button(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_channels_disconnect_button(inputs)
	if (locale === "es") return es_settings_channels_disconnect_button(inputs)
	if (locale === "ja") return ja_settings_channels_disconnect_button(inputs)
	if (locale === "hi") return hi_settings_channels_disconnect_button(inputs)
	if (locale === "pt-BR") return pt_br2_settings_channels_disconnect_button(inputs)
	if (locale === "ko") return ko_settings_channels_disconnect_button(inputs)
	return fr_settings_channels_disconnect_button(inputs)
});