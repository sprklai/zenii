/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Auth_Token_PlaceholderInputs */

const en_settings_general_auth_token_placeholder = /** @type {(inputs: Settings_General_Auth_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearer token`)
};

const zh_cn2_settings_general_auth_token_placeholder = /** @type {(inputs: Settings_General_Auth_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearer 令牌`)
};

const es_settings_general_auth_token_placeholder = /** @type {(inputs: Settings_General_Auth_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token de autenticación`)
};

const ja_settings_general_auth_token_placeholder = /** @type {(inputs: Settings_General_Auth_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearer トークン`)
};

const hi_settings_general_auth_token_placeholder = /** @type {(inputs: Settings_General_Auth_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearer टोकन`)
};

const pt_br2_settings_general_auth_token_placeholder = /** @type {(inputs: Settings_General_Auth_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token Bearer`)
};

const ko_settings_general_auth_token_placeholder = /** @type {(inputs: Settings_General_Auth_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearer 토큰`)
};

const fr_settings_general_auth_token_placeholder = /** @type {(inputs: Settings_General_Auth_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeton d'authentification`)
};

/**
* | output |
* | --- |
* | "Bearer token" |
*
* @param {Settings_General_Auth_Token_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_auth_token_placeholder = /** @type {((inputs?: Settings_General_Auth_Token_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Auth_Token_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_auth_token_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_auth_token_placeholder(inputs)
	if (locale === "es") return es_settings_general_auth_token_placeholder(inputs)
	if (locale === "ja") return ja_settings_general_auth_token_placeholder(inputs)
	if (locale === "hi") return hi_settings_general_auth_token_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_auth_token_placeholder(inputs)
	if (locale === "ko") return ko_settings_general_auth_token_placeholder(inputs)
	return fr_settings_general_auth_token_placeholder(inputs)
});