/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Token_RequiredInputs */

const en_auth_token_required = /** @type {(inputs: Auth_Token_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token is required`)
};

const zh_cn2_auth_token_required = /** @type {(inputs: Auth_Token_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`令牌为必填项`)
};

const es_auth_token_required = /** @type {(inputs: Auth_Token_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El token es obligatorio`)
};

const ja_auth_token_required = /** @type {(inputs: Auth_Token_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`トークンは必須です`)
};

const hi_auth_token_required = /** @type {(inputs: Auth_Token_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`टोकन आवश्यक है`)
};

const pt_br2_auth_token_required = /** @type {(inputs: Auth_Token_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token é obrigatório`)
};

const ko_auth_token_required = /** @type {(inputs: Auth_Token_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`토큰은 필수입니다`)
};

const fr_auth_token_required = /** @type {(inputs: Auth_Token_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le jeton est requis`)
};

/**
* | output |
* | --- |
* | "Token is required" |
*
* @param {Auth_Token_RequiredInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const auth_token_required = /** @type {((inputs?: Auth_Token_RequiredInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Token_RequiredInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_token_required(inputs)
	if (locale === "zh-CN") return zh_cn2_auth_token_required(inputs)
	if (locale === "es") return es_auth_token_required(inputs)
	if (locale === "ja") return ja_auth_token_required(inputs)
	if (locale === "hi") return hi_auth_token_required(inputs)
	if (locale === "pt-BR") return pt_br2_auth_token_required(inputs)
	if (locale === "ko") return ko_auth_token_required(inputs)
	return fr_auth_token_required(inputs)
});