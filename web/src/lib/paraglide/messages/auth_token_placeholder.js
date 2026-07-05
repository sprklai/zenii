/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Token_PlaceholderInputs */

const en_auth_token_placeholder = /** @type {(inputs: Auth_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearer token`)
};

const zh_cn2_auth_token_placeholder = /** @type {(inputs: Auth_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearer 令牌`)
};

const es_auth_token_placeholder = /** @type {(inputs: Auth_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token de autenticación`)
};

const ja_auth_token_placeholder = /** @type {(inputs: Auth_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearer トークン`)
};

const hi_auth_token_placeholder = /** @type {(inputs: Auth_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearer टोकन`)
};

const pt_br2_auth_token_placeholder = /** @type {(inputs: Auth_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token Bearer`)
};

const ko_auth_token_placeholder = /** @type {(inputs: Auth_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearer 토큰`)
};

const fr_auth_token_placeholder = /** @type {(inputs: Auth_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeton d'authentification`)
};

/**
* | output |
* | --- |
* | "Bearer token" |
*
* @param {Auth_Token_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const auth_token_placeholder = /** @type {((inputs?: Auth_Token_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Token_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_token_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_auth_token_placeholder(inputs)
	if (locale === "es") return es_auth_token_placeholder(inputs)
	if (locale === "ja") return ja_auth_token_placeholder(inputs)
	if (locale === "hi") return hi_auth_token_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_auth_token_placeholder(inputs)
	if (locale === "ko") return ko_auth_token_placeholder(inputs)
	return fr_auth_token_placeholder(inputs)
});