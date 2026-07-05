/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Connection_TitleInputs */

const en_settings_general_connection_title = /** @type {(inputs: Settings_General_Connection_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connection`)
};

const zh_cn2_settings_general_connection_title = /** @type {(inputs: Settings_General_Connection_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`连接`)
};

const es_settings_general_connection_title = /** @type {(inputs: Settings_General_Connection_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conexión`)
};

const ja_settings_general_connection_title = /** @type {(inputs: Settings_General_Connection_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接続`)
};

const hi_settings_general_connection_title = /** @type {(inputs: Settings_General_Connection_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कनेक्शन`)
};

const pt_br2_settings_general_connection_title = /** @type {(inputs: Settings_General_Connection_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conexão`)
};

const ko_settings_general_connection_title = /** @type {(inputs: Settings_General_Connection_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`연결`)
};

const fr_settings_general_connection_title = /** @type {(inputs: Settings_General_Connection_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connexion`)
};

/**
* | output |
* | --- |
* | "Connection" |
*
* @param {Settings_General_Connection_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_connection_title = /** @type {((inputs?: Settings_General_Connection_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Connection_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_connection_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_connection_title(inputs)
	if (locale === "es") return es_settings_general_connection_title(inputs)
	if (locale === "ja") return ja_settings_general_connection_title(inputs)
	if (locale === "hi") return hi_settings_general_connection_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_connection_title(inputs)
	if (locale === "ko") return ko_settings_general_connection_title(inputs)
	return fr_settings_general_connection_title(inputs)
});