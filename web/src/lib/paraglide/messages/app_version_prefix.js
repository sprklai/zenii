/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} App_Version_PrefixInputs */

const en_app_version_prefix = /** @type {(inputs: App_Version_PrefixInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const zh_cn2_app_version_prefix = /** @type {(inputs: App_Version_PrefixInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const es_app_version_prefix = /** @type {(inputs: App_Version_PrefixInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const ja_app_version_prefix = /** @type {(inputs: App_Version_PrefixInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const hi_app_version_prefix = /** @type {(inputs: App_Version_PrefixInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const pt_br2_app_version_prefix = /** @type {(inputs: App_Version_PrefixInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const ko_app_version_prefix = /** @type {(inputs: App_Version_PrefixInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

const fr_app_version_prefix = /** @type {(inputs: App_Version_PrefixInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version}`)
};

/**
* | output |
* | --- |
* | "v{version}" |
*
* @param {App_Version_PrefixInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const app_version_prefix = /** @type {((inputs: App_Version_PrefixInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<App_Version_PrefixInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_app_version_prefix(inputs)
	if (locale === "zh-CN") return zh_cn2_app_version_prefix(inputs)
	if (locale === "es") return es_app_version_prefix(inputs)
	if (locale === "ja") return ja_app_version_prefix(inputs)
	if (locale === "hi") return hi_app_version_prefix(inputs)
	if (locale === "pt-BR") return pt_br2_app_version_prefix(inputs)
	if (locale === "ko") return ko_app_version_prefix(inputs)
	return fr_app_version_prefix(inputs)
});