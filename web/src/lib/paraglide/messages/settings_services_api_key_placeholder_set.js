/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Services_Api_Key_Placeholder_SetInputs */

const en_settings_services_api_key_placeholder_set = /** @type {(inputs: Settings_Services_Api_Key_Placeholder_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`••••••••  (key is set)`)
};

const zh_cn2_settings_services_api_key_placeholder_set = /** @type {(inputs: Settings_Services_Api_Key_Placeholder_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`••••••••  （密钥已设置）`)
};

const es_settings_services_api_key_placeholder_set = /** @type {(inputs: Settings_Services_Api_Key_Placeholder_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`••••••••  (clave configurada)`)
};

const ja_settings_services_api_key_placeholder_set = /** @type {(inputs: Settings_Services_Api_Key_Placeholder_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`••••••••  （キー設定済み）`)
};

const hi_settings_services_api_key_placeholder_set = /** @type {(inputs: Settings_Services_Api_Key_Placeholder_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`••••••••  (कुंजी सेट है)`)
};

const pt_br2_settings_services_api_key_placeholder_set = /** @type {(inputs: Settings_Services_Api_Key_Placeholder_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`••••••••  (chave definida)`)
};

const ko_settings_services_api_key_placeholder_set = /** @type {(inputs: Settings_Services_Api_Key_Placeholder_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`••••••••  (키가 설정됨)`)
};

const fr_settings_services_api_key_placeholder_set = /** @type {(inputs: Settings_Services_Api_Key_Placeholder_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`••••••••  (clé définie)`)
};

/**
* | output |
* | --- |
* | "•••••••• (key is set)" |
*
* @param {Settings_Services_Api_Key_Placeholder_SetInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_services_api_key_placeholder_set = /** @type {((inputs?: Settings_Services_Api_Key_Placeholder_SetInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Services_Api_Key_Placeholder_SetInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_services_api_key_placeholder_set(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_services_api_key_placeholder_set(inputs)
	if (locale === "es") return es_settings_services_api_key_placeholder_set(inputs)
	if (locale === "ja") return ja_settings_services_api_key_placeholder_set(inputs)
	if (locale === "hi") return hi_settings_services_api_key_placeholder_set(inputs)
	if (locale === "pt-BR") return pt_br2_settings_services_api_key_placeholder_set(inputs)
	if (locale === "ko") return ko_settings_services_api_key_placeholder_set(inputs)
	return fr_settings_services_api_key_placeholder_set(inputs)
});