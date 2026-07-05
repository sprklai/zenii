/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_About_Disclaimer_TitleInputs */

const en_settings_about_disclaimer_title = /** @type {(inputs: Settings_About_Disclaimer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disclaimer`)
};

const zh_cn2_settings_about_disclaimer_title = /** @type {(inputs: Settings_About_Disclaimer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`免责声明`)
};

const es_settings_about_disclaimer_title = /** @type {(inputs: Settings_About_Disclaimer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviso legal`)
};

const ja_settings_about_disclaimer_title = /** @type {(inputs: Settings_About_Disclaimer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`免責事項`)
};

const hi_settings_about_disclaimer_title = /** @type {(inputs: Settings_About_Disclaimer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अस्वीकरण`)
};

const pt_br2_settings_about_disclaimer_title = /** @type {(inputs: Settings_About_Disclaimer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviso Legal`)
};

const ko_settings_about_disclaimer_title = /** @type {(inputs: Settings_About_Disclaimer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`면책 조항`)
};

const fr_settings_about_disclaimer_title = /** @type {(inputs: Settings_About_Disclaimer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avertissement`)
};

/**
* | output |
* | --- |
* | "Disclaimer" |
*
* @param {Settings_About_Disclaimer_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_about_disclaimer_title = /** @type {((inputs?: Settings_About_Disclaimer_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_About_Disclaimer_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_about_disclaimer_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_about_disclaimer_title(inputs)
	if (locale === "es") return es_settings_about_disclaimer_title(inputs)
	if (locale === "ja") return ja_settings_about_disclaimer_title(inputs)
	if (locale === "hi") return hi_settings_about_disclaimer_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_about_disclaimer_title(inputs)
	if (locale === "ko") return ko_settings_about_disclaimer_title(inputs)
	return fr_settings_about_disclaimer_title(inputs)
});