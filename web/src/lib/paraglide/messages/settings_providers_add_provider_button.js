/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Add_Provider_ButtonInputs */

const en_settings_providers_add_provider_button = /** @type {(inputs: Settings_Providers_Add_Provider_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add Provider`)
};

const zh_cn2_settings_providers_add_provider_button = /** @type {(inputs: Settings_Providers_Add_Provider_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加提供商`)
};

const es_settings_providers_add_provider_button = /** @type {(inputs: Settings_Providers_Add_Provider_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir proveedor`)
};

const ja_settings_providers_add_provider_button = /** @type {(inputs: Settings_Providers_Add_Provider_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロバイダーを追加`)
};

const hi_settings_providers_add_provider_button = /** @type {(inputs: Settings_Providers_Add_Provider_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रदाता जोड़ें`)
};

const pt_br2_settings_providers_add_provider_button = /** @type {(inputs: Settings_Providers_Add_Provider_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar Provedor`)
};

const ko_settings_providers_add_provider_button = /** @type {(inputs: Settings_Providers_Add_Provider_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`공급자 추가`)
};

const fr_settings_providers_add_provider_button = /** @type {(inputs: Settings_Providers_Add_Provider_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter un fournisseur`)
};

/**
* | output |
* | --- |
* | "Add Provider" |
*
* @param {Settings_Providers_Add_Provider_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_add_provider_button = /** @type {((inputs?: Settings_Providers_Add_Provider_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Add_Provider_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_add_provider_button(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_add_provider_button(inputs)
	if (locale === "es") return es_settings_providers_add_provider_button(inputs)
	if (locale === "ja") return ja_settings_providers_add_provider_button(inputs)
	if (locale === "hi") return hi_settings_providers_add_provider_button(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_add_provider_button(inputs)
	if (locale === "ko") return ko_settings_providers_add_provider_button(inputs)
	return fr_settings_providers_add_provider_button(inputs)
});