/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Config_Open_In_Editor_TooltipInputs */

const en_settings_config_open_in_editor_tooltip = /** @type {(inputs: Settings_Config_Open_In_Editor_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open in editor`)
};

const zh_cn2_settings_config_open_in_editor_tooltip = /** @type {(inputs: Settings_Config_Open_In_Editor_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在编辑器中打开`)
};

const es_settings_config_open_in_editor_tooltip = /** @type {(inputs: Settings_Config_Open_In_Editor_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir en editor`)
};

const ja_settings_config_open_in_editor_tooltip = /** @type {(inputs: Settings_Config_Open_In_Editor_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エディタで開く`)
};

const hi_settings_config_open_in_editor_tooltip = /** @type {(inputs: Settings_Config_Open_In_Editor_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एडिटर में खोलें`)
};

const pt_br2_settings_config_open_in_editor_tooltip = /** @type {(inputs: Settings_Config_Open_In_Editor_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir no editor`)
};

const ko_settings_config_open_in_editor_tooltip = /** @type {(inputs: Settings_Config_Open_In_Editor_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`편집기에서 열기`)
};

const fr_settings_config_open_in_editor_tooltip = /** @type {(inputs: Settings_Config_Open_In_Editor_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir dans l'éditeur`)
};

/**
* | output |
* | --- |
* | "Open in editor" |
*
* @param {Settings_Config_Open_In_Editor_TooltipInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_config_open_in_editor_tooltip = /** @type {((inputs?: Settings_Config_Open_In_Editor_TooltipInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Config_Open_In_Editor_TooltipInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_config_open_in_editor_tooltip(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_config_open_in_editor_tooltip(inputs)
	if (locale === "es") return es_settings_config_open_in_editor_tooltip(inputs)
	if (locale === "ja") return ja_settings_config_open_in_editor_tooltip(inputs)
	if (locale === "hi") return hi_settings_config_open_in_editor_tooltip(inputs)
	if (locale === "pt-BR") return pt_br2_settings_config_open_in_editor_tooltip(inputs)
	if (locale === "ko") return ko_settings_config_open_in_editor_tooltip(inputs)
	return fr_settings_config_open_in_editor_tooltip(inputs)
});