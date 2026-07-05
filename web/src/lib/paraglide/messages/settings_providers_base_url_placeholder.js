/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Base_Url_PlaceholderInputs */

const en_settings_providers_base_url_placeholder = /** @type {(inputs: Settings_Providers_Base_Url_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://my-proxy.com/v1`)
};

const zh_cn2_settings_providers_base_url_placeholder = /** @type {(inputs: Settings_Providers_Base_Url_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://my-proxy.com/v1`)
};

const es_settings_providers_base_url_placeholder = /** @type {(inputs: Settings_Providers_Base_Url_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://my-proxy.com/v1`)
};

const ja_settings_providers_base_url_placeholder = /** @type {(inputs: Settings_Providers_Base_Url_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://my-proxy.com/v1`)
};

const hi_settings_providers_base_url_placeholder = /** @type {(inputs: Settings_Providers_Base_Url_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://my-proxy.com/v1`)
};

const pt_br2_settings_providers_base_url_placeholder = /** @type {(inputs: Settings_Providers_Base_Url_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://my-proxy.com/v1`)
};

const ko_settings_providers_base_url_placeholder = /** @type {(inputs: Settings_Providers_Base_Url_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://my-proxy.com/v1`)
};

const fr_settings_providers_base_url_placeholder = /** @type {(inputs: Settings_Providers_Base_Url_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://my-proxy.com/v1`)
};

/**
* | output |
* | --- |
* | "https://my-proxy.com/v1" |
*
* @param {Settings_Providers_Base_Url_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_base_url_placeholder = /** @type {((inputs?: Settings_Providers_Base_Url_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Base_Url_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_base_url_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_base_url_placeholder(inputs)
	if (locale === "es") return es_settings_providers_base_url_placeholder(inputs)
	if (locale === "ja") return ja_settings_providers_base_url_placeholder(inputs)
	if (locale === "hi") return hi_settings_providers_base_url_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_base_url_placeholder(inputs)
	if (locale === "ko") return ko_settings_providers_base_url_placeholder(inputs)
	return fr_settings_providers_base_url_placeholder(inputs)
});