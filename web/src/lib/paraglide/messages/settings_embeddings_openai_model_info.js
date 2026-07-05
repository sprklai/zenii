/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ dimensions: NonNullable<unknown> }} Settings_Embeddings_Openai_Model_InfoInputs */

const en_settings_embeddings_openai_model_info = /** @type {(inputs: Settings_Embeddings_Openai_Model_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Model: text-embedding-3-small (${i?.dimensions} dimensions)`)
};

const zh_cn2_settings_embeddings_openai_model_info = /** @type {(inputs: Settings_Embeddings_Openai_Model_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`模型：text-embedding-3-small（${i?.dimensions} 维）`)
};

const es_settings_embeddings_openai_model_info = /** @type {(inputs: Settings_Embeddings_Openai_Model_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modelo: text-embedding-3-small (${i?.dimensions} dimensiones)`)
};

const ja_settings_embeddings_openai_model_info = /** @type {(inputs: Settings_Embeddings_Openai_Model_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`モデル：text-embedding-3-small（${i?.dimensions} 次元）`)
};

const hi_settings_embeddings_openai_model_info = /** @type {(inputs: Settings_Embeddings_Openai_Model_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`मॉडल: text-embedding-3-small (${i?.dimensions} डाइमेंशन)`)
};

const pt_br2_settings_embeddings_openai_model_info = /** @type {(inputs: Settings_Embeddings_Openai_Model_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modelo: text-embedding-3-small (${i?.dimensions} dimensões)`)
};

const ko_settings_embeddings_openai_model_info = /** @type {(inputs: Settings_Embeddings_Openai_Model_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`모델: text-embedding-3-small (${i?.dimensions} 차원)`)
};

const fr_settings_embeddings_openai_model_info = /** @type {(inputs: Settings_Embeddings_Openai_Model_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modèle : text-embedding-3-small (${i?.dimensions} dimensions)`)
};

/**
* | output |
* | --- |
* | "Model: text-embedding-3-small ({dimensions} dimensions)" |
*
* @param {Settings_Embeddings_Openai_Model_InfoInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_openai_model_info = /** @type {((inputs: Settings_Embeddings_Openai_Model_InfoInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Openai_Model_InfoInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_openai_model_info(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_openai_model_info(inputs)
	if (locale === "es") return es_settings_embeddings_openai_model_info(inputs)
	if (locale === "ja") return ja_settings_embeddings_openai_model_info(inputs)
	if (locale === "hi") return hi_settings_embeddings_openai_model_info(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_openai_model_info(inputs)
	if (locale === "ko") return ko_settings_embeddings_openai_model_info(inputs)
	return fr_settings_embeddings_openai_model_info(inputs)
});