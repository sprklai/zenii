/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Save_Key_ButtonInputs */

const en_settings_providers_save_key_button = /** @type {(inputs: Settings_Providers_Save_Key_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save Key`)
};

const zh_cn2_settings_providers_save_key_button = /** @type {(inputs: Settings_Providers_Save_Key_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存密钥`)
};

const es_settings_providers_save_key_button = /** @type {(inputs: Settings_Providers_Save_Key_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar clave`)
};

const ja_settings_providers_save_key_button = /** @type {(inputs: Settings_Providers_Save_Key_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キーを保存`)
};

const hi_settings_providers_save_key_button = /** @type {(inputs: Settings_Providers_Save_Key_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कुंजी सहेजें`)
};

const pt_br2_settings_providers_save_key_button = /** @type {(inputs: Settings_Providers_Save_Key_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar Chave`)
};

const ko_settings_providers_save_key_button = /** @type {(inputs: Settings_Providers_Save_Key_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`키 저장`)
};

const fr_settings_providers_save_key_button = /** @type {(inputs: Settings_Providers_Save_Key_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer la clé`)
};

/**
* | output |
* | --- |
* | "Save Key" |
*
* @param {Settings_Providers_Save_Key_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_save_key_button = /** @type {((inputs?: Settings_Providers_Save_Key_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Save_Key_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_save_key_button(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_save_key_button(inputs)
	if (locale === "es") return es_settings_providers_save_key_button(inputs)
	if (locale === "ja") return ja_settings_providers_save_key_button(inputs)
	if (locale === "hi") return hi_settings_providers_save_key_button(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_save_key_button(inputs)
	if (locale === "ko") return ko_settings_providers_save_key_button(inputs)
	return fr_settings_providers_save_key_button(inputs)
});