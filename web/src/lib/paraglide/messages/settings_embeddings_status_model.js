/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Embeddings_Status_ModelInputs */

const en_settings_embeddings_status_model = /** @type {(inputs: Settings_Embeddings_Status_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Model:`)
};

const zh_cn2_settings_embeddings_status_model = /** @type {(inputs: Settings_Embeddings_Status_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模型：`)
};

const es_settings_embeddings_status_model = /** @type {(inputs: Settings_Embeddings_Status_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modelo:`)
};

const ja_settings_embeddings_status_model = /** @type {(inputs: Settings_Embeddings_Status_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデル：`)
};

const hi_settings_embeddings_status_model = /** @type {(inputs: Settings_Embeddings_Status_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मॉडल:`)
};

const pt_br2_settings_embeddings_status_model = /** @type {(inputs: Settings_Embeddings_Status_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modelo:`)
};

const ko_settings_embeddings_status_model = /** @type {(inputs: Settings_Embeddings_Status_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`모델:`)
};

const fr_settings_embeddings_status_model = /** @type {(inputs: Settings_Embeddings_Status_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modèle :`)
};

/**
* | output |
* | --- |
* | "Model:" |
*
* @param {Settings_Embeddings_Status_ModelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_status_model = /** @type {((inputs?: Settings_Embeddings_Status_ModelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Status_ModelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_status_model(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_status_model(inputs)
	if (locale === "es") return es_settings_embeddings_status_model(inputs)
	if (locale === "ja") return ja_settings_embeddings_status_model(inputs)
	if (locale === "hi") return hi_settings_embeddings_status_model(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_status_model(inputs)
	if (locale === "ko") return ko_settings_embeddings_status_model(inputs)
	return fr_settings_embeddings_status_model(inputs)
});