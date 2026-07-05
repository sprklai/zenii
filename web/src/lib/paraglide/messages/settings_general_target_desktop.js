/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Target_DesktopInputs */

const en_settings_general_target_desktop = /** @type {(inputs: Settings_General_Target_DesktopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desktop`)
};

const zh_cn2_settings_general_target_desktop = /** @type {(inputs: Settings_General_Target_DesktopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`桌面`)
};

const es_settings_general_target_desktop = /** @type {(inputs: Settings_General_Target_DesktopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escritorio`)
};

const ja_settings_general_target_desktop = /** @type {(inputs: Settings_General_Target_DesktopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`デスクトップ`)
};

const hi_settings_general_target_desktop = /** @type {(inputs: Settings_General_Target_DesktopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`डेस्कटॉप`)
};

const pt_br2_settings_general_target_desktop = /** @type {(inputs: Settings_General_Target_DesktopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desktop`)
};

const ko_settings_general_target_desktop = /** @type {(inputs: Settings_General_Target_DesktopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`데스크톱`)
};

const fr_settings_general_target_desktop = /** @type {(inputs: Settings_General_Target_DesktopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bureau`)
};

/**
* | output |
* | --- |
* | "Desktop" |
*
* @param {Settings_General_Target_DesktopInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_target_desktop = /** @type {((inputs?: Settings_General_Target_DesktopInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Target_DesktopInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_target_desktop(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_target_desktop(inputs)
	if (locale === "es") return es_settings_general_target_desktop(inputs)
	if (locale === "ja") return ja_settings_general_target_desktop(inputs)
	if (locale === "hi") return hi_settings_general_target_desktop(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_target_desktop(inputs)
	if (locale === "ko") return ko_settings_general_target_desktop(inputs)
	return fr_settings_general_target_desktop(inputs)
});