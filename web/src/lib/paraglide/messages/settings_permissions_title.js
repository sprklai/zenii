/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Permissions_TitleInputs */

const en_settings_permissions_title = /** @type {(inputs: Settings_Permissions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tool Permissions`)
};

const zh_cn2_settings_permissions_title = /** @type {(inputs: Settings_Permissions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`工具权限`)
};

const es_settings_permissions_title = /** @type {(inputs: Settings_Permissions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permisos de herramientas`)
};

const ja_settings_permissions_title = /** @type {(inputs: Settings_Permissions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ツール権限`)
};

const hi_settings_permissions_title = /** @type {(inputs: Settings_Permissions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`टूल अनुमतियाँ`)
};

const pt_br2_settings_permissions_title = /** @type {(inputs: Settings_Permissions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permissões de Ferramentas`)
};

const ko_settings_permissions_title = /** @type {(inputs: Settings_Permissions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`도구 권한`)
};

const fr_settings_permissions_title = /** @type {(inputs: Settings_Permissions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permissions des outils`)
};

/**
* | output |
* | --- |
* | "Tool Permissions" |
*
* @param {Settings_Permissions_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_permissions_title = /** @type {((inputs?: Settings_Permissions_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Permissions_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_permissions_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_permissions_title(inputs)
	if (locale === "es") return es_settings_permissions_title(inputs)
	if (locale === "ja") return ja_settings_permissions_title(inputs)
	if (locale === "hi") return hi_settings_permissions_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_permissions_title(inputs)
	if (locale === "ko") return ko_settings_permissions_title(inputs)
	return fr_settings_permissions_title(inputs)
});