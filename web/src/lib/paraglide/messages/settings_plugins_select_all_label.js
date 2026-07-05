/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Plugins_Select_All_LabelInputs */

const en_settings_plugins_select_all_label = /** @type {(inputs: Settings_Plugins_Select_All_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select all`)
};

const zh_cn2_settings_plugins_select_all_label = /** @type {(inputs: Settings_Plugins_Select_All_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全选`)
};

const es_settings_plugins_select_all_label = /** @type {(inputs: Settings_Plugins_Select_All_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seleccionar todo`)
};

const ja_settings_plugins_select_all_label = /** @type {(inputs: Settings_Plugins_Select_All_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて選択`)
};

const hi_settings_plugins_select_all_label = /** @type {(inputs: Settings_Plugins_Select_All_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सभी चुनें`)
};

const pt_br2_settings_plugins_select_all_label = /** @type {(inputs: Settings_Plugins_Select_All_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecionar todos`)
};

const ko_settings_plugins_select_all_label = /** @type {(inputs: Settings_Plugins_Select_All_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`전체 선택`)
};

const fr_settings_plugins_select_all_label = /** @type {(inputs: Settings_Plugins_Select_All_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout sélectionner`)
};

/**
* | output |
* | --- |
* | "Select all" |
*
* @param {Settings_Plugins_Select_All_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_plugins_select_all_label = /** @type {((inputs?: Settings_Plugins_Select_All_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Plugins_Select_All_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_plugins_select_all_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_plugins_select_all_label(inputs)
	if (locale === "es") return es_settings_plugins_select_all_label(inputs)
	if (locale === "ja") return ja_settings_plugins_select_all_label(inputs)
	if (locale === "hi") return hi_settings_plugins_select_all_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_plugins_select_all_label(inputs)
	if (locale === "ko") return ko_settings_plugins_select_all_label(inputs)
	return fr_settings_plugins_select_all_label(inputs)
});