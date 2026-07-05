/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Tab_AboutInputs */

const en_settings_tab_about = /** @type {(inputs: Settings_Tab_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`About`)
};

const zh_cn2_settings_tab_about = /** @type {(inputs: Settings_Tab_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关于`)
};

const es_settings_tab_about = /** @type {(inputs: Settings_Tab_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acerca de`)
};

const ja_settings_tab_about = /** @type {(inputs: Settings_Tab_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`概要`)
};

const hi_settings_tab_about = /** @type {(inputs: Settings_Tab_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`परिचय`)
};

const pt_br2_settings_tab_about = /** @type {(inputs: Settings_Tab_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobre`)
};

const ko_settings_tab_about = /** @type {(inputs: Settings_Tab_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`정보`)
};

const fr_settings_tab_about = /** @type {(inputs: Settings_Tab_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À propos`)
};

/**
* | output |
* | --- |
* | "About" |
*
* @param {Settings_Tab_AboutInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_tab_about = /** @type {((inputs?: Settings_Tab_AboutInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Tab_AboutInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_tab_about(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_tab_about(inputs)
	if (locale === "es") return es_settings_tab_about(inputs)
	if (locale === "ja") return ja_settings_tab_about(inputs)
	if (locale === "hi") return hi_settings_tab_about(inputs)
	if (locale === "pt-BR") return pt_br2_settings_tab_about(inputs)
	if (locale === "ko") return ko_settings_tab_about(inputs)
	return fr_settings_tab_about(inputs)
});