/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_About_GithubInputs */

const en_settings_about_github = /** @type {(inputs: Settings_About_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const zh_cn2_settings_about_github = /** @type {(inputs: Settings_About_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const es_settings_about_github = /** @type {(inputs: Settings_About_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const ja_settings_about_github = /** @type {(inputs: Settings_About_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const hi_settings_about_github = /** @type {(inputs: Settings_About_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const pt_br2_settings_about_github = /** @type {(inputs: Settings_About_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const ko_settings_about_github = /** @type {(inputs: Settings_About_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

const fr_settings_about_github = /** @type {(inputs: Settings_About_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub`)
};

/**
* | output |
* | --- |
* | "GitHub" |
*
* @param {Settings_About_GithubInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_about_github = /** @type {((inputs?: Settings_About_GithubInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_About_GithubInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_about_github(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_about_github(inputs)
	if (locale === "es") return es_settings_about_github(inputs)
	if (locale === "ja") return ja_settings_about_github(inputs)
	if (locale === "hi") return hi_settings_about_github(inputs)
	if (locale === "pt-BR") return pt_br2_settings_about_github(inputs)
	if (locale === "ko") return ko_settings_about_github(inputs)
	return fr_settings_about_github(inputs)
});