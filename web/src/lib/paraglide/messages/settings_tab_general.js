/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Tab_GeneralInputs */

const en_settings_tab_general = /** @type {(inputs: Settings_Tab_GeneralInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`General`)
};

const zh_cn2_settings_tab_general = /** @type {(inputs: Settings_Tab_GeneralInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通用`)
};

const es_settings_tab_general = /** @type {(inputs: Settings_Tab_GeneralInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`General`)
};

const ja_settings_tab_general = /** @type {(inputs: Settings_Tab_GeneralInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全般`)
};

const hi_settings_tab_general = /** @type {(inputs: Settings_Tab_GeneralInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सामान्य`)
};

const pt_br2_settings_tab_general = /** @type {(inputs: Settings_Tab_GeneralInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geral`)
};

const ko_settings_tab_general = /** @type {(inputs: Settings_Tab_GeneralInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`일반`)
};

const fr_settings_tab_general = /** @type {(inputs: Settings_Tab_GeneralInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Général`)
};

/**
* | output |
* | --- |
* | "General" |
*
* @param {Settings_Tab_GeneralInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_tab_general = /** @type {((inputs?: Settings_Tab_GeneralInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Tab_GeneralInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_tab_general(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_tab_general(inputs)
	if (locale === "es") return es_settings_tab_general(inputs)
	if (locale === "ja") return ja_settings_tab_general(inputs)
	if (locale === "hi") return hi_settings_tab_general(inputs)
	if (locale === "pt-BR") return pt_br2_settings_tab_general(inputs)
	if (locale === "ko") return ko_settings_tab_general(inputs)
	return fr_settings_tab_general(inputs)
});