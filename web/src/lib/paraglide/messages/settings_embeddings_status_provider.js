/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Embeddings_Status_ProviderInputs */

const en_settings_embeddings_status_provider = /** @type {(inputs: Settings_Embeddings_Status_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Provider:`)
};

const zh_cn2_settings_embeddings_status_provider = /** @type {(inputs: Settings_Embeddings_Status_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提供商：`)
};

const es_settings_embeddings_status_provider = /** @type {(inputs: Settings_Embeddings_Status_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Proveedor:`)
};

const ja_settings_embeddings_status_provider = /** @type {(inputs: Settings_Embeddings_Status_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロバイダー：`)
};

const hi_settings_embeddings_status_provider = /** @type {(inputs: Settings_Embeddings_Status_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रदाता:`)
};

const pt_br2_settings_embeddings_status_provider = /** @type {(inputs: Settings_Embeddings_Status_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Provedor:`)
};

const ko_settings_embeddings_status_provider = /** @type {(inputs: Settings_Embeddings_Status_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`공급자:`)
};

const fr_settings_embeddings_status_provider = /** @type {(inputs: Settings_Embeddings_Status_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fournisseur :`)
};

/**
* | output |
* | --- |
* | "Provider:" |
*
* @param {Settings_Embeddings_Status_ProviderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_status_provider = /** @type {((inputs?: Settings_Embeddings_Status_ProviderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Status_ProviderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_status_provider(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_status_provider(inputs)
	if (locale === "es") return es_settings_embeddings_status_provider(inputs)
	if (locale === "ja") return ja_settings_embeddings_status_provider(inputs)
	if (locale === "hi") return hi_settings_embeddings_status_provider(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_status_provider(inputs)
	if (locale === "ko") return ko_settings_embeddings_status_provider(inputs)
	return fr_settings_embeddings_status_provider(inputs)
});