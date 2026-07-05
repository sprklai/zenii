/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Permissions_Column_ToolInputs */

const en_settings_permissions_column_tool = /** @type {(inputs: Settings_Permissions_Column_ToolInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tool`)
};

const zh_cn2_settings_permissions_column_tool = /** @type {(inputs: Settings_Permissions_Column_ToolInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`工具`)
};

const es_settings_permissions_column_tool = /** @type {(inputs: Settings_Permissions_Column_ToolInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herramienta`)
};

const ja_settings_permissions_column_tool = /** @type {(inputs: Settings_Permissions_Column_ToolInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ツール`)
};

const hi_settings_permissions_column_tool = /** @type {(inputs: Settings_Permissions_Column_ToolInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`टूल`)
};

const pt_br2_settings_permissions_column_tool = /** @type {(inputs: Settings_Permissions_Column_ToolInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ferramenta`)
};

const ko_settings_permissions_column_tool = /** @type {(inputs: Settings_Permissions_Column_ToolInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`도구`)
};

const fr_settings_permissions_column_tool = /** @type {(inputs: Settings_Permissions_Column_ToolInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outil`)
};

/**
* | output |
* | --- |
* | "Tool" |
*
* @param {Settings_Permissions_Column_ToolInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_permissions_column_tool = /** @type {((inputs?: Settings_Permissions_Column_ToolInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Permissions_Column_ToolInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_permissions_column_tool(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_permissions_column_tool(inputs)
	if (locale === "es") return es_settings_permissions_column_tool(inputs)
	if (locale === "ja") return ja_settings_permissions_column_tool(inputs)
	if (locale === "hi") return hi_settings_permissions_column_tool(inputs)
	if (locale === "pt-BR") return pt_br2_settings_permissions_column_tool(inputs)
	if (locale === "ko") return ko_settings_permissions_column_tool(inputs)
	return fr_settings_permissions_column_tool(inputs)
});