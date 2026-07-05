/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Default_Model_TitleInputs */

const en_settings_providers_default_model_title = /** @type {(inputs: Settings_Providers_Default_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Default Model`)
};

const zh_cn2_settings_providers_default_model_title = /** @type {(inputs: Settings_Providers_Default_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`默认模型`)
};

const es_settings_providers_default_model_title = /** @type {(inputs: Settings_Providers_Default_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modelo predeterminado`)
};

const ja_settings_providers_default_model_title = /** @type {(inputs: Settings_Providers_Default_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`デフォルトモデル`)
};

const hi_settings_providers_default_model_title = /** @type {(inputs: Settings_Providers_Default_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`डिफ़ॉल्ट मॉडल`)
};

const pt_br2_settings_providers_default_model_title = /** @type {(inputs: Settings_Providers_Default_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modelo Padrão`)
};

const ko_settings_providers_default_model_title = /** @type {(inputs: Settings_Providers_Default_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`기본 모델`)
};

const fr_settings_providers_default_model_title = /** @type {(inputs: Settings_Providers_Default_Model_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modèle par défaut`)
};

/**
* | output |
* | --- |
* | "Default Model" |
*
* @param {Settings_Providers_Default_Model_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_default_model_title = /** @type {((inputs?: Settings_Providers_Default_Model_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Default_Model_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_default_model_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_default_model_title(inputs)
	if (locale === "es") return es_settings_providers_default_model_title(inputs)
	if (locale === "ja") return ja_settings_providers_default_model_title(inputs)
	if (locale === "hi") return hi_settings_providers_default_model_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_default_model_title(inputs)
	if (locale === "ko") return ko_settings_providers_default_model_title(inputs)
	return fr_settings_providers_default_model_title(inputs)
});