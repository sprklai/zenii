/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_About_CompanyInputs */

const en_settings_about_company = /** @type {(inputs: Settings_About_CompanyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SprklAI by NSRTech`)
};

const zh_cn2_settings_about_company = /** @type {(inputs: Settings_About_CompanyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SprklAI by NSRTech`)
};

const es_settings_about_company = /** @type {(inputs: Settings_About_CompanyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SprklAI por NSRTech`)
};

const ja_settings_about_company = /** @type {(inputs: Settings_About_CompanyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SprklAI by NSRTech`)
};

const hi_settings_about_company = /** @type {(inputs: Settings_About_CompanyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SprklAI by NSRTech`)
};

const pt_br2_settings_about_company = /** @type {(inputs: Settings_About_CompanyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SprklAI by NSRTech`)
};

const ko_settings_about_company = /** @type {(inputs: Settings_About_CompanyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SprklAI by NSRTech`)
};

const fr_settings_about_company = /** @type {(inputs: Settings_About_CompanyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SprklAI par NSRTech`)
};

/**
* | output |
* | --- |
* | "SprklAI by NSRTech" |
*
* @param {Settings_About_CompanyInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_about_company = /** @type {((inputs?: Settings_About_CompanyInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_About_CompanyInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_about_company(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_about_company(inputs)
	if (locale === "es") return es_settings_about_company(inputs)
	if (locale === "ja") return ja_settings_about_company(inputs)
	if (locale === "hi") return hi_settings_about_company(inputs)
	if (locale === "pt-BR") return pt_br2_settings_about_company(inputs)
	if (locale === "ko") return ko_settings_about_company(inputs)
	return fr_settings_about_company(inputs)
});