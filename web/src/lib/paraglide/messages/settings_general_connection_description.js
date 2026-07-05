/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Connection_DescriptionInputs */

const en_settings_general_connection_description = /** @type {(inputs: Settings_General_Connection_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gateway connection settings`)
};

const zh_cn2_settings_general_connection_description = /** @type {(inputs: Settings_General_Connection_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gateway 连接设置`)
};

const es_settings_general_connection_description = /** @type {(inputs: Settings_General_Connection_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajustes de conexión al gateway`)
};

const ja_settings_general_connection_description = /** @type {(inputs: Settings_General_Connection_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gateway 接続設定`)
};

const hi_settings_general_connection_description = /** @type {(inputs: Settings_General_Connection_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gateway कनेक्शन सेटिंग्स`)
};

const pt_br2_settings_general_connection_description = /** @type {(inputs: Settings_General_Connection_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurações de conexão do Gateway`)
};

const ko_settings_general_connection_description = /** @type {(inputs: Settings_General_Connection_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gateway 연결 설정`)
};

const fr_settings_general_connection_description = /** @type {(inputs: Settings_General_Connection_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paramètres de connexion au gateway`)
};

/**
* | output |
* | --- |
* | "Gateway connection settings" |
*
* @param {Settings_General_Connection_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_connection_description = /** @type {((inputs?: Settings_General_Connection_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Connection_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_connection_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_connection_description(inputs)
	if (locale === "es") return es_settings_general_connection_description(inputs)
	if (locale === "ja") return ja_settings_general_connection_description(inputs)
	if (locale === "hi") return hi_settings_general_connection_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_connection_description(inputs)
	if (locale === "ko") return ko_settings_general_connection_description(inputs)
	return fr_settings_general_connection_description(inputs)
});