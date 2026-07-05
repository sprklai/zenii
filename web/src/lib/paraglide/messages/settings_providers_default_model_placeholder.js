/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Default_Model_PlaceholderInputs */

const en_settings_providers_default_model_placeholder = /** @type {(inputs: Settings_Providers_Default_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select default model`)
};

const zh_cn2_settings_providers_default_model_placeholder = /** @type {(inputs: Settings_Providers_Default_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择默认模型`)
};

const es_settings_providers_default_model_placeholder = /** @type {(inputs: Settings_Providers_Default_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seleccionar modelo predeterminado`)
};

const ja_settings_providers_default_model_placeholder = /** @type {(inputs: Settings_Providers_Default_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`デフォルトモデルを選択`)
};

const hi_settings_providers_default_model_placeholder = /** @type {(inputs: Settings_Providers_Default_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`डिफ़ॉल्ट मॉडल चुनें`)
};

const pt_br2_settings_providers_default_model_placeholder = /** @type {(inputs: Settings_Providers_Default_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecionar modelo padrão`)
};

const ko_settings_providers_default_model_placeholder = /** @type {(inputs: Settings_Providers_Default_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`기본 모델 선택`)
};

const fr_settings_providers_default_model_placeholder = /** @type {(inputs: Settings_Providers_Default_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sélectionner le modèle par défaut`)
};

/**
* | output |
* | --- |
* | "Select default model" |
*
* @param {Settings_Providers_Default_Model_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_default_model_placeholder = /** @type {((inputs?: Settings_Providers_Default_Model_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Default_Model_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_default_model_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_default_model_placeholder(inputs)
	if (locale === "es") return es_settings_providers_default_model_placeholder(inputs)
	if (locale === "ja") return ja_settings_providers_default_model_placeholder(inputs)
	if (locale === "hi") return hi_settings_providers_default_model_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_default_model_placeholder(inputs)
	if (locale === "ko") return ko_settings_providers_default_model_placeholder(inputs)
	return fr_settings_providers_default_model_placeholder(inputs)
});