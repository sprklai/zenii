/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_No_Api_Key_RequiredInputs */

const en_settings_providers_no_api_key_required = /** @type {(inputs: Settings_Providers_No_Api_Key_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No API key required (local provider)`)
};

const zh_cn2_settings_providers_no_api_key_required = /** @type {(inputs: Settings_Providers_No_Api_Key_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无需 API 密钥（本地提供商）`)
};

const es_settings_providers_no_api_key_required = /** @type {(inputs: Settings_Providers_No_Api_Key_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se requiere clave API (proveedor local)`)
};

const ja_settings_providers_no_api_key_required = /** @type {(inputs: Settings_Providers_No_Api_Key_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API キー不要（ローカルプロバイダー）`)
};

const hi_settings_providers_no_api_key_required = /** @type {(inputs: Settings_Providers_No_Api_Key_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API कुंजी आवश्यक नहीं (लोकल प्रदाता)`)
};

const pt_br2_settings_providers_no_api_key_required = /** @type {(inputs: Settings_Providers_No_Api_Key_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chave de API não necessária (provedor local)`)
};

const ko_settings_providers_no_api_key_required = /** @type {(inputs: Settings_Providers_No_Api_Key_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API 키 불필요 (로컬 공급자)`)
};

const fr_settings_providers_no_api_key_required = /** @type {(inputs: Settings_Providers_No_Api_Key_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune clé API requise (fournisseur local)`)
};

/**
* | output |
* | --- |
* | "No API key required (local provider)" |
*
* @param {Settings_Providers_No_Api_Key_RequiredInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_no_api_key_required = /** @type {((inputs?: Settings_Providers_No_Api_Key_RequiredInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_No_Api_Key_RequiredInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_no_api_key_required(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_no_api_key_required(inputs)
	if (locale === "es") return es_settings_providers_no_api_key_required(inputs)
	if (locale === "ja") return ja_settings_providers_no_api_key_required(inputs)
	if (locale === "hi") return hi_settings_providers_no_api_key_required(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_no_api_key_required(inputs)
	if (locale === "ko") return ko_settings_providers_no_api_key_required(inputs)
	return fr_settings_providers_no_api_key_required(inputs)
});