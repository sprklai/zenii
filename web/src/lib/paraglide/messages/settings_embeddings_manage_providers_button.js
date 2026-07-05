/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Embeddings_Manage_Providers_ButtonInputs */

const en_settings_embeddings_manage_providers_button = /** @type {(inputs: Settings_Embeddings_Manage_Providers_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage Providers`)
};

const zh_cn2_settings_embeddings_manage_providers_button = /** @type {(inputs: Settings_Embeddings_Manage_Providers_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理提供商`)
};

const es_settings_embeddings_manage_providers_button = /** @type {(inputs: Settings_Embeddings_Manage_Providers_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Administrar proveedores`)
};

const ja_settings_embeddings_manage_providers_button = /** @type {(inputs: Settings_Embeddings_Manage_Providers_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロバイダーを管理`)
};

const hi_settings_embeddings_manage_providers_button = /** @type {(inputs: Settings_Embeddings_Manage_Providers_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रदाता प्रबंधित करें`)
};

const pt_br2_settings_embeddings_manage_providers_button = /** @type {(inputs: Settings_Embeddings_Manage_Providers_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerenciar Provedores`)
};

const ko_settings_embeddings_manage_providers_button = /** @type {(inputs: Settings_Embeddings_Manage_Providers_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`공급자 관리`)
};

const fr_settings_embeddings_manage_providers_button = /** @type {(inputs: Settings_Embeddings_Manage_Providers_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gérer les fournisseurs`)
};

/**
* | output |
* | --- |
* | "Manage Providers" |
*
* @param {Settings_Embeddings_Manage_Providers_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_manage_providers_button = /** @type {((inputs?: Settings_Embeddings_Manage_Providers_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Manage_Providers_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_manage_providers_button(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_manage_providers_button(inputs)
	if (locale === "es") return es_settings_embeddings_manage_providers_button(inputs)
	if (locale === "ja") return ja_settings_embeddings_manage_providers_button(inputs)
	if (locale === "hi") return hi_settings_embeddings_manage_providers_button(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_manage_providers_button(inputs)
	if (locale === "ko") return ko_settings_embeddings_manage_providers_button(inputs)
	return fr_settings_embeddings_manage_providers_button(inputs)
});