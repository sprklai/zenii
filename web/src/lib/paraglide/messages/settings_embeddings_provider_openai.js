/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Embeddings_Provider_OpenaiInputs */

const en_settings_embeddings_provider_openai = /** @type {(inputs: Settings_Embeddings_Provider_OpenaiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAI API`)
};

const zh_cn2_settings_embeddings_provider_openai = /** @type {(inputs: Settings_Embeddings_Provider_OpenaiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAI API`)
};

const es_settings_embeddings_provider_openai = /** @type {(inputs: Settings_Embeddings_Provider_OpenaiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAI API`)
};

const ja_settings_embeddings_provider_openai = /** @type {(inputs: Settings_Embeddings_Provider_OpenaiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAI API`)
};

const hi_settings_embeddings_provider_openai = /** @type {(inputs: Settings_Embeddings_Provider_OpenaiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAI API`)
};

const pt_br2_settings_embeddings_provider_openai = /** @type {(inputs: Settings_Embeddings_Provider_OpenaiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAI API`)
};

const ko_settings_embeddings_provider_openai = /** @type {(inputs: Settings_Embeddings_Provider_OpenaiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAI API`)
};

const fr_settings_embeddings_provider_openai = /** @type {(inputs: Settings_Embeddings_Provider_OpenaiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAI API`)
};

/**
* | output |
* | --- |
* | "OpenAI API" |
*
* @param {Settings_Embeddings_Provider_OpenaiInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_provider_openai = /** @type {((inputs?: Settings_Embeddings_Provider_OpenaiInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Provider_OpenaiInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_provider_openai(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_provider_openai(inputs)
	if (locale === "es") return es_settings_embeddings_provider_openai(inputs)
	if (locale === "ja") return ja_settings_embeddings_provider_openai(inputs)
	if (locale === "hi") return hi_settings_embeddings_provider_openai(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_provider_openai(inputs)
	if (locale === "ko") return ko_settings_embeddings_provider_openai(inputs)
	return fr_settings_embeddings_provider_openai(inputs)
});