/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Save_Connection_ButtonInputs */

const en_settings_general_save_connection_button = /** @type {(inputs: Settings_General_Save_Connection_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save Connection`)
};

const zh_cn2_settings_general_save_connection_button = /** @type {(inputs: Settings_General_Save_Connection_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存连接`)
};

const es_settings_general_save_connection_button = /** @type {(inputs: Settings_General_Save_Connection_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar conexión`)
};

const ja_settings_general_save_connection_button = /** @type {(inputs: Settings_General_Save_Connection_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接続を保存`)
};

const hi_settings_general_save_connection_button = /** @type {(inputs: Settings_General_Save_Connection_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कनेक्शन सहेजें`)
};

const pt_br2_settings_general_save_connection_button = /** @type {(inputs: Settings_General_Save_Connection_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar Conexão`)
};

const ko_settings_general_save_connection_button = /** @type {(inputs: Settings_General_Save_Connection_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`연결 저장`)
};

const fr_settings_general_save_connection_button = /** @type {(inputs: Settings_General_Save_Connection_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer la connexion`)
};

/**
* | output |
* | --- |
* | "Save Connection" |
*
* @param {Settings_General_Save_Connection_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_save_connection_button = /** @type {((inputs?: Settings_General_Save_Connection_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Save_Connection_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_save_connection_button(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_save_connection_button(inputs)
	if (locale === "es") return es_settings_general_save_connection_button(inputs)
	if (locale === "ja") return ja_settings_general_save_connection_button(inputs)
	if (locale === "hi") return hi_settings_general_save_connection_button(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_save_connection_button(inputs)
	if (locale === "ko") return ko_settings_general_save_connection_button(inputs)
	return fr_settings_general_save_connection_button(inputs)
});