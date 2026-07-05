/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Nav_SettingsInputs */

const en_nav_settings = /** @type {(inputs: Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settings`)
};

const zh_cn2_nav_settings = /** @type {(inputs: Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`设置`)
};

const es_nav_settings = /** @type {(inputs: Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajustes`)
};

const ja_nav_settings = /** @type {(inputs: Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定`)
};

const hi_nav_settings = /** @type {(inputs: Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सेटिंग्स`)
};

const pt_br2_nav_settings = /** @type {(inputs: Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurações`)
};

const ko_nav_settings = /** @type {(inputs: Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`설정`)
};

const fr_nav_settings = /** @type {(inputs: Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paramètres`)
};

/**
* | output |
* | --- |
* | "Settings" |
*
* @param {Nav_SettingsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const nav_settings = /** @type {((inputs?: Nav_SettingsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_SettingsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_nav_settings(inputs)
	if (locale === "zh-CN") return zh_cn2_nav_settings(inputs)
	if (locale === "es") return es_nav_settings(inputs)
	if (locale === "ja") return ja_nav_settings(inputs)
	if (locale === "hi") return hi_nav_settings(inputs)
	if (locale === "pt-BR") return pt_br2_nav_settings(inputs)
	if (locale === "ko") return ko_nav_settings(inputs)
	return fr_nav_settings(inputs)
});