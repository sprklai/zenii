/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Channels_Connection_FailedInputs */

const en_settings_channels_connection_failed = /** @type {(inputs: Settings_Channels_Connection_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connection failed`)
};

const zh_cn2_settings_channels_connection_failed = /** @type {(inputs: Settings_Channels_Connection_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`连接失败`)
};

const es_settings_channels_connection_failed = /** @type {(inputs: Settings_Channels_Connection_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error de conexión`)
};

const ja_settings_channels_connection_failed = /** @type {(inputs: Settings_Channels_Connection_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接続失敗`)
};

const hi_settings_channels_connection_failed = /** @type {(inputs: Settings_Channels_Connection_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कनेक्शन विफल`)
};

const pt_br2_settings_channels_connection_failed = /** @type {(inputs: Settings_Channels_Connection_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conexão falhou`)
};

const ko_settings_channels_connection_failed = /** @type {(inputs: Settings_Channels_Connection_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`연결 실패`)
};

const fr_settings_channels_connection_failed = /** @type {(inputs: Settings_Channels_Connection_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de la connexion`)
};

/**
* | output |
* | --- |
* | "Connection failed" |
*
* @param {Settings_Channels_Connection_FailedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_channels_connection_failed = /** @type {((inputs?: Settings_Channels_Connection_FailedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Channels_Connection_FailedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_channels_connection_failed(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_channels_connection_failed(inputs)
	if (locale === "es") return es_settings_channels_connection_failed(inputs)
	if (locale === "ja") return ja_settings_channels_connection_failed(inputs)
	if (locale === "hi") return hi_settings_channels_connection_failed(inputs)
	if (locale === "pt-BR") return pt_br2_settings_channels_connection_failed(inputs)
	if (locale === "ko") return ko_settings_channels_connection_failed(inputs)
	return fr_settings_channels_connection_failed(inputs)
});