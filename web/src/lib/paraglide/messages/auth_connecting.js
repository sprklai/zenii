/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_ConnectingInputs */

const en_auth_connecting = /** @type {(inputs: Auth_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connecting...`)
};

const zh_cn2_auth_connecting = /** @type {(inputs: Auth_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`连接中...`)
};

const es_auth_connecting = /** @type {(inputs: Auth_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conectando...`)
};

const ja_auth_connecting = /** @type {(inputs: Auth_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接続中...`)
};

const hi_auth_connecting = /** @type {(inputs: Auth_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कनेक्ट हो रहा है...`)
};

const pt_br2_auth_connecting = /** @type {(inputs: Auth_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conectando...`)
};

const ko_auth_connecting = /** @type {(inputs: Auth_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`연결 중...`)
};

const fr_auth_connecting = /** @type {(inputs: Auth_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connexion...`)
};

/**
* | output |
* | --- |
* | "Connecting..." |
*
* @param {Auth_ConnectingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const auth_connecting = /** @type {((inputs?: Auth_ConnectingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_ConnectingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_connecting(inputs)
	if (locale === "zh-CN") return zh_cn2_auth_connecting(inputs)
	if (locale === "es") return es_auth_connecting(inputs)
	if (locale === "ja") return ja_auth_connecting(inputs)
	if (locale === "hi") return hi_auth_connecting(inputs)
	if (locale === "pt-BR") return pt_br2_auth_connecting(inputs)
	if (locale === "ko") return ko_auth_connecting(inputs)
	return fr_auth_connecting(inputs)
});