/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Browse_Model_Ids_TooltipInputs */

const en_settings_providers_browse_model_ids_tooltip = /** @type {(inputs: Settings_Providers_Browse_Model_Ids_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Browse model IDs`)
};

const zh_cn2_settings_providers_browse_model_ids_tooltip = /** @type {(inputs: Settings_Providers_Browse_Model_Ids_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浏览模型 ID`)
};

const es_settings_providers_browse_model_ids_tooltip = /** @type {(inputs: Settings_Providers_Browse_Model_Ids_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar IDs de modelo`)
};

const ja_settings_providers_browse_model_ids_tooltip = /** @type {(inputs: Settings_Providers_Browse_Model_Ids_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデル ID を閲覧`)
};

const hi_settings_providers_browse_model_ids_tooltip = /** @type {(inputs: Settings_Providers_Browse_Model_Ids_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मॉडल ID ब्राउज़ करें`)
};

const pt_br2_settings_providers_browse_model_ids_tooltip = /** @type {(inputs: Settings_Providers_Browse_Model_Ids_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar IDs de modelos`)
};

const ko_settings_providers_browse_model_ids_tooltip = /** @type {(inputs: Settings_Providers_Browse_Model_Ids_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`모델 ID 둘러보기`)
};

const fr_settings_providers_browse_model_ids_tooltip = /** @type {(inputs: Settings_Providers_Browse_Model_Ids_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parcourir les IDs de modèle`)
};

/**
* | output |
* | --- |
* | "Browse model IDs" |
*
* @param {Settings_Providers_Browse_Model_Ids_TooltipInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_browse_model_ids_tooltip = /** @type {((inputs?: Settings_Providers_Browse_Model_Ids_TooltipInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Browse_Model_Ids_TooltipInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_browse_model_ids_tooltip(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_browse_model_ids_tooltip(inputs)
	if (locale === "es") return es_settings_providers_browse_model_ids_tooltip(inputs)
	if (locale === "ja") return ja_settings_providers_browse_model_ids_tooltip(inputs)
	if (locale === "hi") return hi_settings_providers_browse_model_ids_tooltip(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_browse_model_ids_tooltip(inputs)
	if (locale === "ko") return ko_settings_providers_browse_model_ids_tooltip(inputs)
	return fr_settings_providers_browse_model_ids_tooltip(inputs)
});