/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Api_Key_LabelInputs */

const en_settings_providers_api_key_label = /** @type {(inputs: Settings_Providers_Api_Key_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API Key`)
};

const zh_cn2_settings_providers_api_key_label = /** @type {(inputs: Settings_Providers_Api_Key_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API 密钥`)
};

const es_settings_providers_api_key_label = /** @type {(inputs: Settings_Providers_Api_Key_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clave API`)
};

const ja_settings_providers_api_key_label = /** @type {(inputs: Settings_Providers_Api_Key_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API キー`)
};

const hi_settings_providers_api_key_label = /** @type {(inputs: Settings_Providers_Api_Key_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API कुंजी`)
};

const pt_br2_settings_providers_api_key_label = /** @type {(inputs: Settings_Providers_Api_Key_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chave de API`)
};

const ko_settings_providers_api_key_label = /** @type {(inputs: Settings_Providers_Api_Key_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API 키`)
};

const fr_settings_providers_api_key_label = /** @type {(inputs: Settings_Providers_Api_Key_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clé API`)
};

/**
* | output |
* | --- |
* | "API Key" |
*
* @param {Settings_Providers_Api_Key_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_api_key_label = /** @type {((inputs?: Settings_Providers_Api_Key_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Api_Key_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_api_key_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_api_key_label(inputs)
	if (locale === "es") return es_settings_providers_api_key_label(inputs)
	if (locale === "ja") return ja_settings_providers_api_key_label(inputs)
	if (locale === "hi") return hi_settings_providers_api_key_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_api_key_label(inputs)
	if (locale === "ko") return ko_settings_providers_api_key_label(inputs)
	return fr_settings_providers_api_key_label(inputs)
});