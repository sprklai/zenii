/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Connect_DescriptionInputs */

const en_auth_connect_description = /** @type {(inputs: Auth_Connect_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter your gateway authentication token to connect.`)
};

const zh_cn2_auth_connect_description = /** @type {(inputs: Auth_Connect_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输入网关身份验证令牌以进行连接。`)
};

const es_auth_connect_description = /** @type {(inputs: Auth_Connect_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingresa tu token de autenticación del gateway para conectarte.`)
};

const ja_auth_connect_description = /** @type {(inputs: Auth_Connect_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gateway 認証トークンを入力して接続します。`)
};

const hi_auth_connect_description = /** @type {(inputs: Auth_Connect_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कनेक्ट करने के लिए अपना Gateway प्रमाणीकरण टोकन दर्ज करें।`)
};

const pt_br2_auth_connect_description = /** @type {(inputs: Auth_Connect_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insira seu token de autenticação do gateway para conectar.`)
};

const ko_auth_connect_description = /** @type {(inputs: Auth_Connect_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`연결하려면 Gateway 인증 토큰을 입력하세요.`)
};

const fr_auth_connect_description = /** @type {(inputs: Auth_Connect_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entrez votre jeton d'authentification du gateway pour vous connecter.`)
};

/**
* | output |
* | --- |
* | "Enter your gateway authentication token to connect." |
*
* @param {Auth_Connect_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const auth_connect_description = /** @type {((inputs?: Auth_Connect_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Connect_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_connect_description(inputs)
	if (locale === "zh-CN") return zh_cn2_auth_connect_description(inputs)
	if (locale === "es") return es_auth_connect_description(inputs)
	if (locale === "ja") return ja_auth_connect_description(inputs)
	if (locale === "hi") return hi_auth_connect_description(inputs)
	if (locale === "pt-BR") return pt_br2_auth_connect_description(inputs)
	if (locale === "ko") return ko_auth_connect_description(inputs)
	return fr_auth_connect_description(inputs)
});