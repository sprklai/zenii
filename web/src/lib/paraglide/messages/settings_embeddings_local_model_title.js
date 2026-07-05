/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Embeddings_Local_Model_TitleInputs */

const en_settings_embeddings_local_model_title = /** @type {(inputs: Settings_Embeddings_Local_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Local Model`)
};

const zh_cn2_settings_embeddings_local_model_title = /** @type {(inputs: Settings_Embeddings_Local_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本地模型`)
};

const es_settings_embeddings_local_model_title = /** @type {(inputs: Settings_Embeddings_Local_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modelo local`)
};

const ja_settings_embeddings_local_model_title = /** @type {(inputs: Settings_Embeddings_Local_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ローカルモデル`)
};

const hi_settings_embeddings_local_model_title = /** @type {(inputs: Settings_Embeddings_Local_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`लोकल मॉडल`)
};

const pt_br2_settings_embeddings_local_model_title = /** @type {(inputs: Settings_Embeddings_Local_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modelo Local`)
};

const ko_settings_embeddings_local_model_title = /** @type {(inputs: Settings_Embeddings_Local_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`로컬 모델`)
};

const fr_settings_embeddings_local_model_title = /** @type {(inputs: Settings_Embeddings_Local_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modèle local`)
};

/**
* | output |
* | --- |
* | "Local Model" |
*
* @param {Settings_Embeddings_Local_Model_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_local_model_title = /** @type {((inputs?: Settings_Embeddings_Local_Model_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Local_Model_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_local_model_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_local_model_title(inputs)
	if (locale === "es") return es_settings_embeddings_local_model_title(inputs)
	if (locale === "ja") return ja_settings_embeddings_local_model_title(inputs)
	if (locale === "hi") return hi_settings_embeddings_local_model_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_local_model_title(inputs)
	if (locale === "ko") return ko_settings_embeddings_local_model_title(inputs)
	return fr_settings_embeddings_local_model_title(inputs)
});