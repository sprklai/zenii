/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Display_Name_LabelInputs */

const en_settings_providers_display_name_label = /** @type {(inputs: Settings_Providers_Display_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Display Name`)
};

const zh_cn2_settings_providers_display_name_label = /** @type {(inputs: Settings_Providers_Display_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示名称`)
};

const es_settings_providers_display_name_label = /** @type {(inputs: Settings_Providers_Display_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre para mostrar`)
};

const ja_settings_providers_display_name_label = /** @type {(inputs: Settings_Providers_Display_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示名`)
};

const hi_settings_providers_display_name_label = /** @type {(inputs: Settings_Providers_Display_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रदर्शन नाम`)
};

const pt_br2_settings_providers_display_name_label = /** @type {(inputs: Settings_Providers_Display_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome de Exibição`)
};

const ko_settings_providers_display_name_label = /** @type {(inputs: Settings_Providers_Display_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`표시 이름`)
};

const fr_settings_providers_display_name_label = /** @type {(inputs: Settings_Providers_Display_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom d'affichage`)
};

/**
* | output |
* | --- |
* | "Display Name" |
*
* @param {Settings_Providers_Display_Name_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_display_name_label = /** @type {((inputs?: Settings_Providers_Display_Name_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Display_Name_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_display_name_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_display_name_label(inputs)
	if (locale === "es") return es_settings_providers_display_name_label(inputs)
	if (locale === "ja") return ja_settings_providers_display_name_label(inputs)
	if (locale === "hi") return hi_settings_providers_display_name_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_display_name_label(inputs)
	if (locale === "ko") return ko_settings_providers_display_name_label(inputs)
	return fr_settings_providers_display_name_label(inputs)
});