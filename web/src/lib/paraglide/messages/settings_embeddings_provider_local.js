/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Embeddings_Provider_LocalInputs */

const en_settings_embeddings_provider_local = /** @type {(inputs: Settings_Embeddings_Provider_LocalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Local (fastembed)`)
};

const zh_cn2_settings_embeddings_provider_local = /** @type {(inputs: Settings_Embeddings_Provider_LocalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本地 (fastembed)`)
};

const es_settings_embeddings_provider_local = /** @type {(inputs: Settings_Embeddings_Provider_LocalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Local (fastembed)`)
};

const ja_settings_embeddings_provider_local = /** @type {(inputs: Settings_Embeddings_Provider_LocalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ローカル (fastembed)`)
};

const hi_settings_embeddings_provider_local = /** @type {(inputs: Settings_Embeddings_Provider_LocalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`स्थानीय (fastembed)`)
};

const pt_br2_settings_embeddings_provider_local = /** @type {(inputs: Settings_Embeddings_Provider_LocalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Local (fastembed)`)
};

const ko_settings_embeddings_provider_local = /** @type {(inputs: Settings_Embeddings_Provider_LocalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`로컬 (fastembed)`)
};

const fr_settings_embeddings_provider_local = /** @type {(inputs: Settings_Embeddings_Provider_LocalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Local (fastembed)`)
};

/**
* | output |
* | --- |
* | "Local (fastembed)" |
*
* @param {Settings_Embeddings_Provider_LocalInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_provider_local = /** @type {((inputs?: Settings_Embeddings_Provider_LocalInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Provider_LocalInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_provider_local(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_provider_local(inputs)
	if (locale === "es") return es_settings_embeddings_provider_local(inputs)
	if (locale === "ja") return ja_settings_embeddings_provider_local(inputs)
	if (locale === "hi") return hi_settings_embeddings_provider_local(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_provider_local(inputs)
	if (locale === "ko") return ko_settings_embeddings_provider_local(inputs)
	return fr_settings_embeddings_provider_local(inputs)
});