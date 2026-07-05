/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Confirm_Delete_Provider_DescriptionInputs */

const en_settings_providers_confirm_delete_provider_description = /** @type {(inputs: Settings_Providers_Confirm_Delete_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This will permanently delete this provider and all its models.`)
};

const zh_cn2_settings_providers_confirm_delete_provider_description = /** @type {(inputs: Settings_Providers_Confirm_Delete_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这将永久删除此提供商及其所有模型。`)
};

const es_settings_providers_confirm_delete_provider_description = /** @type {(inputs: Settings_Providers_Confirm_Delete_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esto eliminará permanentemente este proveedor y todos sus modelos.`)
};

const ja_settings_providers_confirm_delete_provider_description = /** @type {(inputs: Settings_Providers_Confirm_Delete_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このプロバイダーとすべてのモデルが完全に削除されます。`)
};

const hi_settings_providers_confirm_delete_provider_description = /** @type {(inputs: Settings_Providers_Confirm_Delete_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`यह इस प्रदाता और उसके सभी मॉडल को स्थायी रूप से हटा देगा।`)
};

const pt_br2_settings_providers_confirm_delete_provider_description = /** @type {(inputs: Settings_Providers_Confirm_Delete_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isso excluirá permanentemente este provedor e todos os seus modelos.`)
};

const ko_settings_providers_confirm_delete_provider_description = /** @type {(inputs: Settings_Providers_Confirm_Delete_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이 공급자와 모든 모델이 영구적으로 삭제됩니다.`)
};

const fr_settings_providers_confirm_delete_provider_description = /** @type {(inputs: Settings_Providers_Confirm_Delete_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ceci supprimera définitivement ce fournisseur et tous ses modèles.`)
};

/**
* | output |
* | --- |
* | "This will permanently delete this provider and all its models." |
*
* @param {Settings_Providers_Confirm_Delete_Provider_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_confirm_delete_provider_description = /** @type {((inputs?: Settings_Providers_Confirm_Delete_Provider_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Confirm_Delete_Provider_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_confirm_delete_provider_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_confirm_delete_provider_description(inputs)
	if (locale === "es") return es_settings_providers_confirm_delete_provider_description(inputs)
	if (locale === "ja") return ja_settings_providers_confirm_delete_provider_description(inputs)
	if (locale === "hi") return hi_settings_providers_confirm_delete_provider_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_confirm_delete_provider_description(inputs)
	if (locale === "ko") return ko_settings_providers_confirm_delete_provider_description(inputs)
	return fr_settings_providers_confirm_delete_provider_description(inputs)
});