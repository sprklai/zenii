/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Embeddings_Local_Model_DescriptionInputs */

const en_settings_embeddings_local_model_description = /** @type {(inputs: Settings_Embeddings_Local_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage the local embedding model`)
};

const zh_cn2_settings_embeddings_local_model_description = /** @type {(inputs: Settings_Embeddings_Local_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理本地嵌入模型`)
};

const es_settings_embeddings_local_model_description = /** @type {(inputs: Settings_Embeddings_Local_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Administrar el modelo de embeddings local`)
};

const ja_settings_embeddings_local_model_description = /** @type {(inputs: Settings_Embeddings_Local_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ローカル埋め込みモデルを管理`)
};

const hi_settings_embeddings_local_model_description = /** @type {(inputs: Settings_Embeddings_Local_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`लोकल एम्बेडिंग मॉडल प्रबंधित करें`)
};

const pt_br2_settings_embeddings_local_model_description = /** @type {(inputs: Settings_Embeddings_Local_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerenciar o modelo de embedding local`)
};

const ko_settings_embeddings_local_model_description = /** @type {(inputs: Settings_Embeddings_Local_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`로컬 임베딩 모델 관리`)
};

const fr_settings_embeddings_local_model_description = /** @type {(inputs: Settings_Embeddings_Local_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gérer le modèle d'embeddings local`)
};

/**
* | output |
* | --- |
* | "Manage the local embedding model" |
*
* @param {Settings_Embeddings_Local_Model_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_local_model_description = /** @type {((inputs?: Settings_Embeddings_Local_Model_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Local_Model_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_local_model_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_local_model_description(inputs)
	if (locale === "es") return es_settings_embeddings_local_model_description(inputs)
	if (locale === "ja") return ja_settings_embeddings_local_model_description(inputs)
	if (locale === "hi") return hi_settings_embeddings_local_model_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_local_model_description(inputs)
	if (locale === "ko") return ko_settings_embeddings_local_model_description(inputs)
	return fr_settings_embeddings_local_model_description(inputs)
});