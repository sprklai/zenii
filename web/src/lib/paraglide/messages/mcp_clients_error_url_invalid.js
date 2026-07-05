/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Clients_Error_Url_InvalidInputs */

const en_mcp_clients_error_url_invalid = /** @type {(inputs: Mcp_Clients_Error_Url_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL must start with http:// or https://`)
};

const zh_cn2_mcp_clients_error_url_invalid = /** @type {(inputs: Mcp_Clients_Error_Url_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL 必须以 http:// 或 https:// 开头`)
};

const es_mcp_clients_error_url_invalid = /** @type {(inputs: Mcp_Clients_Error_Url_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La URL debe comenzar con http:// o https://`)
};

const ja_mcp_clients_error_url_invalid = /** @type {(inputs: Mcp_Clients_Error_Url_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URLはhttp://またはhttps://で始まる必要があります`)
};

const hi_mcp_clients_error_url_invalid = /** @type {(inputs: Mcp_Clients_Error_Url_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL http:// या https:// से शुरू होना चाहिए`)
};

const pt_br2_mcp_clients_error_url_invalid = /** @type {(inputs: Mcp_Clients_Error_Url_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A URL deve começar com http:// ou https://`)
};

const ko_mcp_clients_error_url_invalid = /** @type {(inputs: Mcp_Clients_Error_Url_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL은 http:// 또는 https://로 시작해야 합니다`)
};

const fr_mcp_clients_error_url_invalid = /** @type {(inputs: Mcp_Clients_Error_Url_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L'URL doit commencer par http:// ou https://`)
};

/**
* | output |
* | --- |
* | "URL must start with http:// or https://" |
*
* @param {Mcp_Clients_Error_Url_InvalidInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_clients_error_url_invalid = /** @type {((inputs?: Mcp_Clients_Error_Url_InvalidInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Clients_Error_Url_InvalidInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_clients_error_url_invalid(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_clients_error_url_invalid(inputs)
	if (locale === "es") return es_mcp_clients_error_url_invalid(inputs)
	if (locale === "ja") return ja_mcp_clients_error_url_invalid(inputs)
	if (locale === "hi") return hi_mcp_clients_error_url_invalid(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_clients_error_url_invalid(inputs)
	if (locale === "ko") return ko_mcp_clients_error_url_invalid(inputs)
	return fr_mcp_clients_error_url_invalid(inputs)
});