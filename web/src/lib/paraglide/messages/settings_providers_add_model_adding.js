/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Add_Model_AddingInputs */

const en_settings_providers_add_model_adding = /** @type {(inputs: Settings_Providers_Add_Model_AddingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adding...`)
};

const zh_cn2_settings_providers_add_model_adding = /** @type {(inputs: Settings_Providers_Add_Model_AddingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加中...`)
};

const es_settings_providers_add_model_adding = /** @type {(inputs: Settings_Providers_Add_Model_AddingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadiendo...`)
};

const ja_settings_providers_add_model_adding = /** @type {(inputs: Settings_Providers_Add_Model_AddingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`追加中...`)
};

const hi_settings_providers_add_model_adding = /** @type {(inputs: Settings_Providers_Add_Model_AddingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`जोड़ा जा रहा है...`)
};

const pt_br2_settings_providers_add_model_adding = /** @type {(inputs: Settings_Providers_Add_Model_AddingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionando...`)
};

const ko_settings_providers_add_model_adding = /** @type {(inputs: Settings_Providers_Add_Model_AddingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`추가 중...`)
};

const fr_settings_providers_add_model_adding = /** @type {(inputs: Settings_Providers_Add_Model_AddingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajout...`)
};

/**
* | output |
* | --- |
* | "Adding..." |
*
* @param {Settings_Providers_Add_Model_AddingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_add_model_adding = /** @type {((inputs?: Settings_Providers_Add_Model_AddingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Add_Model_AddingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_add_model_adding(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_add_model_adding(inputs)
	if (locale === "es") return es_settings_providers_add_model_adding(inputs)
	if (locale === "ja") return ja_settings_providers_add_model_adding(inputs)
	if (locale === "hi") return hi_settings_providers_add_model_adding(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_add_model_adding(inputs)
	if (locale === "ko") return ko_settings_providers_add_model_adding(inputs)
	return fr_settings_providers_add_model_adding(inputs)
});