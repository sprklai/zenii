/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Gateway_Url_PlaceholderInputs */

const en_settings_general_gateway_url_placeholder = /** @type {(inputs: Settings_General_Gateway_Url_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`http://127.0.0.1:18981`)
};

const zh_cn2_settings_general_gateway_url_placeholder = /** @type {(inputs: Settings_General_Gateway_Url_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`http://127.0.0.1:18981`)
};

const es_settings_general_gateway_url_placeholder = /** @type {(inputs: Settings_General_Gateway_Url_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`http://127.0.0.1:18981`)
};

const ja_settings_general_gateway_url_placeholder = /** @type {(inputs: Settings_General_Gateway_Url_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`http://127.0.0.1:18981`)
};

const hi_settings_general_gateway_url_placeholder = /** @type {(inputs: Settings_General_Gateway_Url_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`http://127.0.0.1:18981`)
};

const pt_br2_settings_general_gateway_url_placeholder = /** @type {(inputs: Settings_General_Gateway_Url_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`http://127.0.0.1:18981`)
};

const ko_settings_general_gateway_url_placeholder = /** @type {(inputs: Settings_General_Gateway_Url_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`http://127.0.0.1:18981`)
};

const fr_settings_general_gateway_url_placeholder = /** @type {(inputs: Settings_General_Gateway_Url_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`http://127.0.0.1:18981`)
};

/**
* | output |
* | --- |
* | "http://127.0.0.1:18981" |
*
* @param {Settings_General_Gateway_Url_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_gateway_url_placeholder = /** @type {((inputs?: Settings_General_Gateway_Url_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Gateway_Url_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_gateway_url_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_gateway_url_placeholder(inputs)
	if (locale === "es") return es_settings_general_gateway_url_placeholder(inputs)
	if (locale === "ja") return ja_settings_general_gateway_url_placeholder(inputs)
	if (locale === "hi") return hi_settings_general_gateway_url_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_gateway_url_placeholder(inputs)
	if (locale === "ko") return ko_settings_general_gateway_url_placeholder(inputs)
	return fr_settings_general_gateway_url_placeholder(inputs)
});