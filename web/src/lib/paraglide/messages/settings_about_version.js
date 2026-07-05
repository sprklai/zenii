/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Settings_About_VersionInputs */

const en_settings_about_version = /** @type {(inputs: Settings_About_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const zh_cn2_settings_about_version = /** @type {(inputs: Settings_About_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const es_settings_about_version = /** @type {(inputs: Settings_About_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const ja_settings_about_version = /** @type {(inputs: Settings_About_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const hi_settings_about_version = /** @type {(inputs: Settings_About_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const pt_br2_settings_about_version = /** @type {(inputs: Settings_About_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const ko_settings_about_version = /** @type {(inputs: Settings_About_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const fr_settings_about_version = /** @type {(inputs: Settings_About_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

/**
* | output |
* | --- |
* | "v{version}" |
*
* @param {Settings_About_VersionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_about_version = /** @type {((inputs: Settings_About_VersionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_About_VersionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_about_version(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_about_version(inputs)
	if (locale === "es") return es_settings_about_version(inputs)
	if (locale === "ja") return ja_settings_about_version(inputs)
	if (locale === "hi") return hi_settings_about_version(inputs)
	if (locale === "pt-BR") return pt_br2_settings_about_version(inputs)
	if (locale === "ko") return ko_settings_about_version(inputs)
	return fr_settings_about_version(inputs)
});