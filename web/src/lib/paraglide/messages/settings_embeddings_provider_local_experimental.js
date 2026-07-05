/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Embeddings_Provider_Local_ExperimentalInputs */

const en_settings_embeddings_provider_local_experimental = /** @type {(inputs: Settings_Embeddings_Provider_Local_ExperimentalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(Experimental)`)
};

const zh_cn2_settings_embeddings_provider_local_experimental = /** @type {(inputs: Settings_Embeddings_Provider_Local_ExperimentalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`（实验性）`)
};

const es_settings_embeddings_provider_local_experimental = /** @type {(inputs: Settings_Embeddings_Provider_Local_ExperimentalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(Experimental)`)
};

const ja_settings_embeddings_provider_local_experimental = /** @type {(inputs: Settings_Embeddings_Provider_Local_ExperimentalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`（実験的）`)
};

const hi_settings_embeddings_provider_local_experimental = /** @type {(inputs: Settings_Embeddings_Provider_Local_ExperimentalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(प्रयोगात्मक)`)
};

const pt_br2_settings_embeddings_provider_local_experimental = /** @type {(inputs: Settings_Embeddings_Provider_Local_ExperimentalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(Experimental)`)
};

const ko_settings_embeddings_provider_local_experimental = /** @type {(inputs: Settings_Embeddings_Provider_Local_ExperimentalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(실험적)`)
};

const fr_settings_embeddings_provider_local_experimental = /** @type {(inputs: Settings_Embeddings_Provider_Local_ExperimentalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(Expérimental)`)
};

/**
* | output |
* | --- |
* | "(Experimental)" |
*
* @param {Settings_Embeddings_Provider_Local_ExperimentalInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_provider_local_experimental = /** @type {((inputs?: Settings_Embeddings_Provider_Local_ExperimentalInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Provider_Local_ExperimentalInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_provider_local_experimental(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_provider_local_experimental(inputs)
	if (locale === "es") return es_settings_embeddings_provider_local_experimental(inputs)
	if (locale === "ja") return ja_settings_embeddings_provider_local_experimental(inputs)
	if (locale === "hi") return hi_settings_embeddings_provider_local_experimental(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_provider_local_experimental(inputs)
	if (locale === "ko") return ko_settings_embeddings_provider_local_experimental(inputs)
	return fr_settings_embeddings_provider_local_experimental(inputs)
});