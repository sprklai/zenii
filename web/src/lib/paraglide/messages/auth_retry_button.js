/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Retry_ButtonInputs */

const en_auth_retry_button = /** @type {(inputs: Auth_Retry_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retry`)
};

const zh_cn2_auth_retry_button = /** @type {(inputs: Auth_Retry_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重试`)
};

const es_auth_retry_button = /** @type {(inputs: Auth_Retry_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reintentar`)
};

const ja_auth_retry_button = /** @type {(inputs: Auth_Retry_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再試行`)
};

const hi_auth_retry_button = /** @type {(inputs: Auth_Retry_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पुनः प्रयास करें`)
};

const pt_br2_auth_retry_button = /** @type {(inputs: Auth_Retry_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tentar novamente`)
};

const ko_auth_retry_button = /** @type {(inputs: Auth_Retry_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`재시도`)
};

const fr_auth_retry_button = /** @type {(inputs: Auth_Retry_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réessayer`)
};

/**
* | output |
* | --- |
* | "Retry" |
*
* @param {Auth_Retry_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const auth_retry_button = /** @type {((inputs?: Auth_Retry_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Retry_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_retry_button(inputs)
	if (locale === "zh-CN") return zh_cn2_auth_retry_button(inputs)
	if (locale === "es") return es_auth_retry_button(inputs)
	if (locale === "ja") return ja_auth_retry_button(inputs)
	if (locale === "hi") return hi_auth_retry_button(inputs)
	if (locale === "pt-BR") return pt_br2_auth_retry_button(inputs)
	if (locale === "ko") return ko_auth_retry_button(inputs)
	return fr_auth_retry_button(inputs)
});