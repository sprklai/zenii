/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Connect_ButtonInputs */

const en_auth_connect_button = /** @type {(inputs: Auth_Connect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect`)
};

const zh_cn2_auth_connect_button = /** @type {(inputs: Auth_Connect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`连接`)
};

const es_auth_connect_button = /** @type {(inputs: Auth_Connect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conectar`)
};

const ja_auth_connect_button = /** @type {(inputs: Auth_Connect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接続`)
};

const hi_auth_connect_button = /** @type {(inputs: Auth_Connect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कनेक्ट करें`)
};

const pt_br2_auth_connect_button = /** @type {(inputs: Auth_Connect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conectar`)
};

const ko_auth_connect_button = /** @type {(inputs: Auth_Connect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`연결`)
};

const fr_auth_connect_button = /** @type {(inputs: Auth_Connect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connecter`)
};

/**
* | output |
* | --- |
* | "Connect" |
*
* @param {Auth_Connect_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const auth_connect_button = /** @type {((inputs?: Auth_Connect_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Connect_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_connect_button(inputs)
	if (locale === "zh-CN") return zh_cn2_auth_connect_button(inputs)
	if (locale === "es") return es_auth_connect_button(inputs)
	if (locale === "ja") return ja_auth_connect_button(inputs)
	if (locale === "hi") return hi_auth_connect_button(inputs)
	if (locale === "pt-BR") return pt_br2_auth_connect_button(inputs)
	if (locale === "ko") return ko_auth_connect_button(inputs)
	return fr_auth_connect_button(inputs)
});