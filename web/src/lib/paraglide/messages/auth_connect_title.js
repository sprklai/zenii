/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Connect_TitleInputs */

const en_auth_connect_title = /** @type {(inputs: Auth_Connect_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect to Zenii`)
};

const zh_cn2_auth_connect_title = /** @type {(inputs: Auth_Connect_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`连接到 Zenii`)
};

const es_auth_connect_title = /** @type {(inputs: Auth_Connect_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conectar a Zenii`)
};

const ja_auth_connect_title = /** @type {(inputs: Auth_Connect_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii に接続`)
};

const hi_auth_connect_title = /** @type {(inputs: Auth_Connect_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii से कनेक्ट करें`)
};

const pt_br2_auth_connect_title = /** @type {(inputs: Auth_Connect_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conectar ao Zenii`)
};

const ko_auth_connect_title = /** @type {(inputs: Auth_Connect_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii에 연결`)
};

const fr_auth_connect_title = /** @type {(inputs: Auth_Connect_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se connecter à Zenii`)
};

/**
* | output |
* | --- |
* | "Connect to Zenii" |
*
* @param {Auth_Connect_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const auth_connect_title = /** @type {((inputs?: Auth_Connect_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Connect_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_connect_title(inputs)
	if (locale === "zh-CN") return zh_cn2_auth_connect_title(inputs)
	if (locale === "es") return es_auth_connect_title(inputs)
	if (locale === "ja") return ja_auth_connect_title(inputs)
	if (locale === "hi") return hi_auth_connect_title(inputs)
	if (locale === "pt-BR") return pt_br2_auth_connect_title(inputs)
	if (locale === "ko") return ko_auth_connect_title(inputs)
	return fr_auth_connect_title(inputs)
});