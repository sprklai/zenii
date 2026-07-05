/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Channels_ConnectedInputs */

const en_settings_channels_connected = /** @type {(inputs: Settings_Channels_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connected`)
};

const zh_cn2_settings_channels_connected = /** @type {(inputs: Settings_Channels_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已连接`)
};

const es_settings_channels_connected = /** @type {(inputs: Settings_Channels_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conectado`)
};

const ja_settings_channels_connected = /** @type {(inputs: Settings_Channels_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接続済み`)
};

const hi_settings_channels_connected = /** @type {(inputs: Settings_Channels_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कनेक्टेड`)
};

const pt_br2_settings_channels_connected = /** @type {(inputs: Settings_Channels_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conectado`)
};

const ko_settings_channels_connected = /** @type {(inputs: Settings_Channels_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`연결됨`)
};

const fr_settings_channels_connected = /** @type {(inputs: Settings_Channels_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connecté`)
};

/**
* | output |
* | --- |
* | "Connected" |
*
* @param {Settings_Channels_ConnectedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_channels_connected = /** @type {((inputs?: Settings_Channels_ConnectedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Channels_ConnectedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_channels_connected(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_channels_connected(inputs)
	if (locale === "es") return es_settings_channels_connected(inputs)
	if (locale === "ja") return ja_settings_channels_connected(inputs)
	if (locale === "hi") return hi_settings_channels_connected(inputs)
	if (locale === "pt-BR") return pt_br2_settings_channels_connected(inputs)
	if (locale === "ko") return ko_settings_channels_connected(inputs)
	return fr_settings_channels_connected(inputs)
});