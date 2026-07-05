/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Connecting_StatusInputs */

const en_auth_connecting_status = /** @type {(inputs: Auth_Connecting_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connecting to Zenii...`)
};

const zh_cn2_auth_connecting_status = /** @type {(inputs: Auth_Connecting_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在连接 Zenii...`)
};

const es_auth_connecting_status = /** @type {(inputs: Auth_Connecting_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conectando a Zenii...`)
};

const ja_auth_connecting_status = /** @type {(inputs: Auth_Connecting_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii に接続中...`)
};

const hi_auth_connecting_status = /** @type {(inputs: Auth_Connecting_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii से कनेक्ट हो रहा है...`)
};

const pt_br2_auth_connecting_status = /** @type {(inputs: Auth_Connecting_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conectando ao Zenii...`)
};

const ko_auth_connecting_status = /** @type {(inputs: Auth_Connecting_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii에 연결 중...`)
};

const fr_auth_connecting_status = /** @type {(inputs: Auth_Connecting_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connexion à Zenii...`)
};

/**
* | output |
* | --- |
* | "Connecting to Zenii..." |
*
* @param {Auth_Connecting_StatusInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const auth_connecting_status = /** @type {((inputs?: Auth_Connecting_StatusInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Connecting_StatusInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_connecting_status(inputs)
	if (locale === "zh-CN") return zh_cn2_auth_connecting_status(inputs)
	if (locale === "es") return es_auth_connecting_status(inputs)
	if (locale === "ja") return ja_auth_connecting_status(inputs)
	if (locale === "hi") return hi_auth_connecting_status(inputs)
	if (locale === "pt-BR") return pt_br2_auth_connecting_status(inputs)
	if (locale === "ko") return ko_auth_connecting_status(inputs)
	return fr_auth_connecting_status(inputs)
});