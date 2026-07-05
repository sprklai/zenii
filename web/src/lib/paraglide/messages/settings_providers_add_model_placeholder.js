/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Add_Model_PlaceholderInputs */

const en_settings_providers_add_model_placeholder = /** @type {(inputs: Settings_Providers_Add_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add model ID (e.g. gpt-4o-mini)`)
};

const zh_cn2_settings_providers_add_model_placeholder = /** @type {(inputs: Settings_Providers_Add_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加模型 ID（例如 gpt-4o-mini）`)
};

const es_settings_providers_add_model_placeholder = /** @type {(inputs: Settings_Providers_Add_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir ID de modelo (p. ej., gpt-4o-mini)`)
};

const ja_settings_providers_add_model_placeholder = /** @type {(inputs: Settings_Providers_Add_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデル ID を追加（例：gpt-4o-mini）`)
};

const hi_settings_providers_add_model_placeholder = /** @type {(inputs: Settings_Providers_Add_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मॉडल ID जोड़ें (जैसे gpt-4o-mini)`)
};

const pt_br2_settings_providers_add_model_placeholder = /** @type {(inputs: Settings_Providers_Add_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar ID do modelo (ex.: gpt-4o-mini)`)
};

const ko_settings_providers_add_model_placeholder = /** @type {(inputs: Settings_Providers_Add_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`모델 ID 추가 (예: gpt-4o-mini)`)
};

const fr_settings_providers_add_model_placeholder = /** @type {(inputs: Settings_Providers_Add_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter un ID de modèle (p. ex., gpt-4o-mini)`)
};

/**
* | output |
* | --- |
* | "Add model ID (e.g. gpt-4o-mini)" |
*
* @param {Settings_Providers_Add_Model_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_add_model_placeholder = /** @type {((inputs?: Settings_Providers_Add_Model_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Add_Model_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_add_model_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_add_model_placeholder(inputs)
	if (locale === "es") return es_settings_providers_add_model_placeholder(inputs)
	if (locale === "ja") return ja_settings_providers_add_model_placeholder(inputs)
	if (locale === "hi") return hi_settings_providers_add_model_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_add_model_placeholder(inputs)
	if (locale === "ko") return ko_settings_providers_add_model_placeholder(inputs)
	return fr_settings_providers_add_model_placeholder(inputs)
});