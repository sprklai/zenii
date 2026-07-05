/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Embeddings_Provider_TitleInputs */

const en_settings_embeddings_provider_title = /** @type {(inputs: Settings_Embeddings_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Provider Selection`)
};

const zh_cn2_settings_embeddings_provider_title = /** @type {(inputs: Settings_Embeddings_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提供商选择`)
};

const es_settings_embeddings_provider_title = /** @type {(inputs: Settings_Embeddings_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selección de proveedor`)
};

const ja_settings_embeddings_provider_title = /** @type {(inputs: Settings_Embeddings_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロバイダー選択`)
};

const hi_settings_embeddings_provider_title = /** @type {(inputs: Settings_Embeddings_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रदाता चयन`)
};

const pt_br2_settings_embeddings_provider_title = /** @type {(inputs: Settings_Embeddings_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seleção de Provedor`)
};

const ko_settings_embeddings_provider_title = /** @type {(inputs: Settings_Embeddings_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`공급자 선택`)
};

const fr_settings_embeddings_provider_title = /** @type {(inputs: Settings_Embeddings_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sélection du fournisseur`)
};

/**
* | output |
* | --- |
* | "Provider Selection" |
*
* @param {Settings_Embeddings_Provider_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_provider_title = /** @type {((inputs?: Settings_Embeddings_Provider_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Provider_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_provider_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_provider_title(inputs)
	if (locale === "es") return es_settings_embeddings_provider_title(inputs)
	if (locale === "ja") return ja_settings_embeddings_provider_title(inputs)
	if (locale === "hi") return hi_settings_embeddings_provider_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_provider_title(inputs)
	if (locale === "ko") return ko_settings_embeddings_provider_title(inputs)
	return fr_settings_embeddings_provider_title(inputs)
});