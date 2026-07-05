/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Auth_Token_LabelInputs */

const en_settings_general_auth_token_label = /** @type {(inputs: Settings_General_Auth_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auth Token`)
};

const zh_cn2_settings_general_auth_token_label = /** @type {(inputs: Settings_General_Auth_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`身份验证令牌`)
};

const es_settings_general_auth_token_label = /** @type {(inputs: Settings_General_Auth_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token de autenticación`)
};

const ja_settings_general_auth_token_label = /** @type {(inputs: Settings_General_Auth_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証トークン`)
};

const hi_settings_general_auth_token_label = /** @type {(inputs: Settings_General_Auth_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रमाणीकरण टोकन`)
};

const pt_br2_settings_general_auth_token_label = /** @type {(inputs: Settings_General_Auth_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token de Autenticação`)
};

const ko_settings_general_auth_token_label = /** @type {(inputs: Settings_General_Auth_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`인증 토큰`)
};

const fr_settings_general_auth_token_label = /** @type {(inputs: Settings_General_Auth_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeton d'authentification`)
};

/**
* | output |
* | --- |
* | "Auth Token" |
*
* @param {Settings_General_Auth_Token_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_auth_token_label = /** @type {((inputs?: Settings_General_Auth_Token_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Auth_Token_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_auth_token_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_auth_token_label(inputs)
	if (locale === "es") return es_settings_general_auth_token_label(inputs)
	if (locale === "ja") return ja_settings_general_auth_token_label(inputs)
	if (locale === "hi") return hi_settings_general_auth_token_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_auth_token_label(inputs)
	if (locale === "ko") return ko_settings_general_auth_token_label(inputs)
	return fr_settings_general_auth_token_label(inputs)
});