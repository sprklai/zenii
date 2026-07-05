/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Remove_Model_TooltipInputs */

const en_settings_providers_remove_model_tooltip = /** @type {(inputs: Settings_Providers_Remove_Model_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove model`)
};

const zh_cn2_settings_providers_remove_model_tooltip = /** @type {(inputs: Settings_Providers_Remove_Model_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除模型`)
};

const es_settings_providers_remove_model_tooltip = /** @type {(inputs: Settings_Providers_Remove_Model_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar modelo`)
};

const ja_settings_providers_remove_model_tooltip = /** @type {(inputs: Settings_Providers_Remove_Model_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデルを削除`)
};

const hi_settings_providers_remove_model_tooltip = /** @type {(inputs: Settings_Providers_Remove_Model_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मॉडल हटाएँ`)
};

const pt_br2_settings_providers_remove_model_tooltip = /** @type {(inputs: Settings_Providers_Remove_Model_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover modelo`)
};

const ko_settings_providers_remove_model_tooltip = /** @type {(inputs: Settings_Providers_Remove_Model_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`모델 제거`)
};

const fr_settings_providers_remove_model_tooltip = /** @type {(inputs: Settings_Providers_Remove_Model_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer le modèle`)
};

/**
* | output |
* | --- |
* | "Remove model" |
*
* @param {Settings_Providers_Remove_Model_TooltipInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_remove_model_tooltip = /** @type {((inputs?: Settings_Providers_Remove_Model_TooltipInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Remove_Model_TooltipInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_remove_model_tooltip(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_remove_model_tooltip(inputs)
	if (locale === "es") return es_settings_providers_remove_model_tooltip(inputs)
	if (locale === "ja") return ja_settings_providers_remove_model_tooltip(inputs)
	if (locale === "hi") return hi_settings_providers_remove_model_tooltip(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_remove_model_tooltip(inputs)
	if (locale === "ko") return ko_settings_providers_remove_model_tooltip(inputs)
	return fr_settings_providers_remove_model_tooltip(inputs)
});