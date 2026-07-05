/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Base_Url_PrefixInputs */

const en_settings_providers_base_url_prefix = /** @type {(inputs: Settings_Providers_Base_Url_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Base URL:`)
};

const zh_cn2_settings_providers_base_url_prefix = /** @type {(inputs: Settings_Providers_Base_Url_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`基础 URL：`)
};

const es_settings_providers_base_url_prefix = /** @type {(inputs: Settings_Providers_Base_Url_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL base:`)
};

const ja_settings_providers_base_url_prefix = /** @type {(inputs: Settings_Providers_Base_Url_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ベース URL:`)
};

const hi_settings_providers_base_url_prefix = /** @type {(inputs: Settings_Providers_Base_Url_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`बेस URL:`)
};

const pt_br2_settings_providers_base_url_prefix = /** @type {(inputs: Settings_Providers_Base_Url_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL base:`)
};

const ko_settings_providers_base_url_prefix = /** @type {(inputs: Settings_Providers_Base_Url_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`기본 URL:`)
};

const fr_settings_providers_base_url_prefix = /** @type {(inputs: Settings_Providers_Base_Url_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL de base :`)
};

/**
* | output |
* | --- |
* | "Base URL:" |
*
* @param {Settings_Providers_Base_Url_PrefixInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_base_url_prefix = /** @type {((inputs?: Settings_Providers_Base_Url_PrefixInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Base_Url_PrefixInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_base_url_prefix(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_base_url_prefix(inputs)
	if (locale === "es") return es_settings_providers_base_url_prefix(inputs)
	if (locale === "ja") return ja_settings_providers_base_url_prefix(inputs)
	if (locale === "hi") return hi_settings_providers_base_url_prefix(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_base_url_prefix(inputs)
	if (locale === "ko") return ko_settings_providers_base_url_prefix(inputs)
	return fr_settings_providers_base_url_prefix(inputs)
});