/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Missing_Key_WarningInputs */

const en_settings_providers_missing_key_warning = /** @type {(inputs: Settings_Providers_Missing_Key_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No API key for default provider.`)
};

const zh_cn2_settings_providers_missing_key_warning = /** @type {(inputs: Settings_Providers_Missing_Key_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`默认提供商缺少 API 密钥。`)
};

const es_settings_providers_missing_key_warning = /** @type {(inputs: Settings_Providers_Missing_Key_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay clave API para el proveedor predeterminado.`)
};

const ja_settings_providers_missing_key_warning = /** @type {(inputs: Settings_Providers_Missing_Key_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`デフォルトプロバイダーの API キーがありません。`)
};

const hi_settings_providers_missing_key_warning = /** @type {(inputs: Settings_Providers_Missing_Key_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`डिफ़ॉल्ट प्रदाता के लिए API कुंजी नहीं है।`)
};

const pt_br2_settings_providers_missing_key_warning = /** @type {(inputs: Settings_Providers_Missing_Key_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem chave de API para o provedor padrão.`)
};

const ko_settings_providers_missing_key_warning = /** @type {(inputs: Settings_Providers_Missing_Key_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`기본 공급자의 API 키가 없습니다.`)
};

const fr_settings_providers_missing_key_warning = /** @type {(inputs: Settings_Providers_Missing_Key_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas de clé API pour le fournisseur par défaut.`)
};

/**
* | output |
* | --- |
* | "No API key for default provider." |
*
* @param {Settings_Providers_Missing_Key_WarningInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_missing_key_warning = /** @type {((inputs?: Settings_Providers_Missing_Key_WarningInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Missing_Key_WarningInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_missing_key_warning(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_missing_key_warning(inputs)
	if (locale === "es") return es_settings_providers_missing_key_warning(inputs)
	if (locale === "ja") return ja_settings_providers_missing_key_warning(inputs)
	if (locale === "hi") return hi_settings_providers_missing_key_warning(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_missing_key_warning(inputs)
	if (locale === "ko") return ko_settings_providers_missing_key_warning(inputs)
	return fr_settings_providers_missing_key_warning(inputs)
});