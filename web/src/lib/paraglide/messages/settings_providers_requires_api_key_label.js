/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Requires_Api_Key_LabelInputs */

const en_settings_providers_requires_api_key_label = /** @type {(inputs: Settings_Providers_Requires_Api_Key_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requires API key`)
};

const zh_cn2_settings_providers_requires_api_key_label = /** @type {(inputs: Settings_Providers_Requires_Api_Key_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`需要 API 密钥`)
};

const es_settings_providers_requires_api_key_label = /** @type {(inputs: Settings_Providers_Requires_Api_Key_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requiere clave API`)
};

const ja_settings_providers_requires_api_key_label = /** @type {(inputs: Settings_Providers_Requires_Api_Key_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API キーが必要`)
};

const hi_settings_providers_requires_api_key_label = /** @type {(inputs: Settings_Providers_Requires_Api_Key_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API कुंजी आवश्यक`)
};

const pt_br2_settings_providers_requires_api_key_label = /** @type {(inputs: Settings_Providers_Requires_Api_Key_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requer chave de API`)
};

const ko_settings_providers_requires_api_key_label = /** @type {(inputs: Settings_Providers_Requires_Api_Key_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API 키 필요`)
};

const fr_settings_providers_requires_api_key_label = /** @type {(inputs: Settings_Providers_Requires_Api_Key_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clé API requise`)
};

/**
* | output |
* | --- |
* | "Requires API key" |
*
* @param {Settings_Providers_Requires_Api_Key_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_requires_api_key_label = /** @type {((inputs?: Settings_Providers_Requires_Api_Key_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Requires_Api_Key_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_requires_api_key_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_requires_api_key_label(inputs)
	if (locale === "es") return es_settings_providers_requires_api_key_label(inputs)
	if (locale === "ja") return ja_settings_providers_requires_api_key_label(inputs)
	if (locale === "hi") return hi_settings_providers_requires_api_key_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_requires_api_key_label(inputs)
	if (locale === "ko") return ko_settings_providers_requires_api_key_label(inputs)
	return fr_settings_providers_requires_api_key_label(inputs)
});