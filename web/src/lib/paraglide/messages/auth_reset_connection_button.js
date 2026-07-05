/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Reset_Connection_ButtonInputs */

const en_auth_reset_connection_button = /** @type {(inputs: Auth_Reset_Connection_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reset connection`)
};

const zh_cn2_auth_reset_connection_button = /** @type {(inputs: Auth_Reset_Connection_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重置连接`)
};

const es_auth_reset_connection_button = /** @type {(inputs: Auth_Reset_Connection_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restablecer conexión`)
};

const ja_auth_reset_connection_button = /** @type {(inputs: Auth_Reset_Connection_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接続をリセット`)
};

const hi_auth_reset_connection_button = /** @type {(inputs: Auth_Reset_Connection_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कनेक्शन रीसेट करें`)
};

const pt_br2_auth_reset_connection_button = /** @type {(inputs: Auth_Reset_Connection_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redefinir conexão`)
};

const ko_auth_reset_connection_button = /** @type {(inputs: Auth_Reset_Connection_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`연결 초기화`)
};

const fr_auth_reset_connection_button = /** @type {(inputs: Auth_Reset_Connection_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réinitialiser la connexion`)
};

/**
* | output |
* | --- |
* | "Reset connection" |
*
* @param {Auth_Reset_Connection_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const auth_reset_connection_button = /** @type {((inputs?: Auth_Reset_Connection_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Reset_Connection_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_reset_connection_button(inputs)
	if (locale === "zh-CN") return zh_cn2_auth_reset_connection_button(inputs)
	if (locale === "es") return es_auth_reset_connection_button(inputs)
	if (locale === "ja") return ja_auth_reset_connection_button(inputs)
	if (locale === "hi") return hi_auth_reset_connection_button(inputs)
	if (locale === "pt-BR") return pt_br2_auth_reset_connection_button(inputs)
	if (locale === "ko") return ko_auth_reset_connection_button(inputs)
	return fr_auth_reset_connection_button(inputs)
});