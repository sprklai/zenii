/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Updates_Github_ReleasesInputs */

const en_settings_updates_github_releases = /** @type {(inputs: Settings_Updates_Github_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub Releases`)
};

const zh_cn2_settings_updates_github_releases = /** @type {(inputs: Settings_Updates_Github_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub Releases`)
};

const es_settings_updates_github_releases = /** @type {(inputs: Settings_Updates_Github_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub Releases`)
};

const ja_settings_updates_github_releases = /** @type {(inputs: Settings_Updates_Github_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub Releases`)
};

const hi_settings_updates_github_releases = /** @type {(inputs: Settings_Updates_Github_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub Releases`)
};

const pt_br2_settings_updates_github_releases = /** @type {(inputs: Settings_Updates_Github_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub Releases`)
};

const ko_settings_updates_github_releases = /** @type {(inputs: Settings_Updates_Github_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub Releases`)
};

const fr_settings_updates_github_releases = /** @type {(inputs: Settings_Updates_Github_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub Releases`)
};

/**
* | output |
* | --- |
* | "GitHub Releases" |
*
* @param {Settings_Updates_Github_ReleasesInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_updates_github_releases = /** @type {((inputs?: Settings_Updates_Github_ReleasesInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Updates_Github_ReleasesInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_updates_github_releases(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_updates_github_releases(inputs)
	if (locale === "es") return es_settings_updates_github_releases(inputs)
	if (locale === "ja") return ja_settings_updates_github_releases(inputs)
	if (locale === "hi") return hi_settings_updates_github_releases(inputs)
	if (locale === "pt-BR") return pt_br2_settings_updates_github_releases(inputs)
	if (locale === "ko") return ko_settings_updates_github_releases(inputs)
	return fr_settings_updates_github_releases(inputs)
});