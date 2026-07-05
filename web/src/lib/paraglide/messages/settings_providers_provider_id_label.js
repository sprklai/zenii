/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Provider_Id_LabelInputs */

const en_settings_providers_provider_id_label = /** @type {(inputs: Settings_Providers_Provider_Id_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Provider ID`)
};

const zh_cn2_settings_providers_provider_id_label = /** @type {(inputs: Settings_Providers_Provider_Id_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提供商 ID`)
};

const es_settings_providers_provider_id_label = /** @type {(inputs: Settings_Providers_Provider_Id_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID del proveedor`)
};

const ja_settings_providers_provider_id_label = /** @type {(inputs: Settings_Providers_Provider_Id_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロバイダー ID`)
};

const hi_settings_providers_provider_id_label = /** @type {(inputs: Settings_Providers_Provider_Id_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रदाता ID`)
};

const pt_br2_settings_providers_provider_id_label = /** @type {(inputs: Settings_Providers_Provider_Id_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID do Provedor`)
};

const ko_settings_providers_provider_id_label = /** @type {(inputs: Settings_Providers_Provider_Id_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`공급자 ID`)
};

const fr_settings_providers_provider_id_label = /** @type {(inputs: Settings_Providers_Provider_Id_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID du fournisseur`)
};

/**
* | output |
* | --- |
* | "Provider ID" |
*
* @param {Settings_Providers_Provider_Id_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_provider_id_label = /** @type {((inputs?: Settings_Providers_Provider_Id_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Provider_Id_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_provider_id_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_provider_id_label(inputs)
	if (locale === "es") return es_settings_providers_provider_id_label(inputs)
	if (locale === "ja") return ja_settings_providers_provider_id_label(inputs)
	if (locale === "hi") return hi_settings_providers_provider_id_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_provider_id_label(inputs)
	if (locale === "ko") return ko_settings_providers_provider_id_label(inputs)
	return fr_settings_providers_provider_id_label(inputs)
});