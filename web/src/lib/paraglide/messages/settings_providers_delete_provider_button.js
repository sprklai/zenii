/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Delete_Provider_ButtonInputs */

const en_settings_providers_delete_provider_button = /** @type {(inputs: Settings_Providers_Delete_Provider_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete Provider`)
};

const zh_cn2_settings_providers_delete_provider_button = /** @type {(inputs: Settings_Providers_Delete_Provider_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除提供商`)
};

const es_settings_providers_delete_provider_button = /** @type {(inputs: Settings_Providers_Delete_Provider_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar proveedor`)
};

const ja_settings_providers_delete_provider_button = /** @type {(inputs: Settings_Providers_Delete_Provider_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロバイダーを削除`)
};

const hi_settings_providers_delete_provider_button = /** @type {(inputs: Settings_Providers_Delete_Provider_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रदाता हटाएँ`)
};

const pt_br2_settings_providers_delete_provider_button = /** @type {(inputs: Settings_Providers_Delete_Provider_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir Provedor`)
};

const ko_settings_providers_delete_provider_button = /** @type {(inputs: Settings_Providers_Delete_Provider_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`공급자 삭제`)
};

const fr_settings_providers_delete_provider_button = /** @type {(inputs: Settings_Providers_Delete_Provider_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer le fournisseur`)
};

/**
* | output |
* | --- |
* | "Delete Provider" |
*
* @param {Settings_Providers_Delete_Provider_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_delete_provider_button = /** @type {((inputs?: Settings_Providers_Delete_Provider_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Delete_Provider_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_delete_provider_button(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_delete_provider_button(inputs)
	if (locale === "es") return es_settings_providers_delete_provider_button(inputs)
	if (locale === "ja") return ja_settings_providers_delete_provider_button(inputs)
	if (locale === "hi") return hi_settings_providers_delete_provider_button(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_delete_provider_button(inputs)
	if (locale === "ko") return ko_settings_providers_delete_provider_button(inputs)
	return fr_settings_providers_delete_provider_button(inputs)
});