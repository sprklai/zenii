/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Tab_PermissionsInputs */

const en_settings_tab_permissions = /** @type {(inputs: Settings_Tab_PermissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permissions`)
};

const zh_cn2_settings_tab_permissions = /** @type {(inputs: Settings_Tab_PermissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`权限`)
};

const es_settings_tab_permissions = /** @type {(inputs: Settings_Tab_PermissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permisos`)
};

const ja_settings_tab_permissions = /** @type {(inputs: Settings_Tab_PermissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`権限`)
};

const hi_settings_tab_permissions = /** @type {(inputs: Settings_Tab_PermissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अनुमतियां`)
};

const pt_br2_settings_tab_permissions = /** @type {(inputs: Settings_Tab_PermissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permissões`)
};

const ko_settings_tab_permissions = /** @type {(inputs: Settings_Tab_PermissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`권한`)
};

const fr_settings_tab_permissions = /** @type {(inputs: Settings_Tab_PermissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permissions`)
};

/**
* | output |
* | --- |
* | "Permissions" |
*
* @param {Settings_Tab_PermissionsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_tab_permissions = /** @type {((inputs?: Settings_Tab_PermissionsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Tab_PermissionsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_tab_permissions(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_tab_permissions(inputs)
	if (locale === "es") return es_settings_tab_permissions(inputs)
	if (locale === "ja") return ja_settings_tab_permissions(inputs)
	if (locale === "hi") return hi_settings_tab_permissions(inputs)
	if (locale === "pt-BR") return pt_br2_settings_tab_permissions(inputs)
	if (locale === "ko") return ko_settings_tab_permissions(inputs)
	return fr_settings_tab_permissions(inputs)
});