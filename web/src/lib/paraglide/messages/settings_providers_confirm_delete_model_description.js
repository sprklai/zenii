/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Confirm_Delete_Model_DescriptionInputs */

const en_settings_providers_confirm_delete_model_description = /** @type {(inputs: Settings_Providers_Confirm_Delete_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This will remove this custom model from the provider.`)
};

const zh_cn2_settings_providers_confirm_delete_model_description = /** @type {(inputs: Settings_Providers_Confirm_Delete_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这将从提供商中移除此自定义模型。`)
};

const es_settings_providers_confirm_delete_model_description = /** @type {(inputs: Settings_Providers_Confirm_Delete_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esto eliminará este modelo personalizado del proveedor.`)
};

const ja_settings_providers_confirm_delete_model_description = /** @type {(inputs: Settings_Providers_Confirm_Delete_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このカスタムモデルがプロバイダーから削除されます。`)
};

const hi_settings_providers_confirm_delete_model_description = /** @type {(inputs: Settings_Providers_Confirm_Delete_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`यह इस कस्टम मॉडल को प्रदाता से हटा देगा।`)
};

const pt_br2_settings_providers_confirm_delete_model_description = /** @type {(inputs: Settings_Providers_Confirm_Delete_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isso removerá este modelo personalizado do provedor.`)
};

const ko_settings_providers_confirm_delete_model_description = /** @type {(inputs: Settings_Providers_Confirm_Delete_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이 사용자 정의 모델이 공급자에서 제거됩니다.`)
};

const fr_settings_providers_confirm_delete_model_description = /** @type {(inputs: Settings_Providers_Confirm_Delete_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ceci supprimera ce modèle personnalisé du fournisseur.`)
};

/**
* | output |
* | --- |
* | "This will remove this custom model from the provider." |
*
* @param {Settings_Providers_Confirm_Delete_Model_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_confirm_delete_model_description = /** @type {((inputs?: Settings_Providers_Confirm_Delete_Model_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Confirm_Delete_Model_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_confirm_delete_model_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_confirm_delete_model_description(inputs)
	if (locale === "es") return es_settings_providers_confirm_delete_model_description(inputs)
	if (locale === "ja") return ja_settings_providers_confirm_delete_model_description(inputs)
	if (locale === "hi") return hi_settings_providers_confirm_delete_model_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_confirm_delete_model_description(inputs)
	if (locale === "ko") return ko_settings_providers_confirm_delete_model_description(inputs)
	return fr_settings_providers_confirm_delete_model_description(inputs)
});