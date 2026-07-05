/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Clients_Transport_HttpInputs */

const en_mcp_clients_transport_http = /** @type {(inputs: Mcp_Clients_Transport_HttpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTTP`)
};

const zh_cn2_mcp_clients_transport_http = /** @type {(inputs: Mcp_Clients_Transport_HttpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTTP`)
};

const es_mcp_clients_transport_http = /** @type {(inputs: Mcp_Clients_Transport_HttpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTTP`)
};

const ja_mcp_clients_transport_http = /** @type {(inputs: Mcp_Clients_Transport_HttpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTTP`)
};

const hi_mcp_clients_transport_http = /** @type {(inputs: Mcp_Clients_Transport_HttpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTTP`)
};

const pt_br2_mcp_clients_transport_http = /** @type {(inputs: Mcp_Clients_Transport_HttpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTTP`)
};

const ko_mcp_clients_transport_http = /** @type {(inputs: Mcp_Clients_Transport_HttpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTTP`)
};

const fr_mcp_clients_transport_http = /** @type {(inputs: Mcp_Clients_Transport_HttpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTTP`)
};

/**
* | output |
* | --- |
* | "HTTP" |
*
* @param {Mcp_Clients_Transport_HttpInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_clients_transport_http = /** @type {((inputs?: Mcp_Clients_Transport_HttpInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Clients_Transport_HttpInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_clients_transport_http(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_clients_transport_http(inputs)
	if (locale === "es") return es_mcp_clients_transport_http(inputs)
	if (locale === "ja") return ja_mcp_clients_transport_http(inputs)
	if (locale === "hi") return hi_mcp_clients_transport_http(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_clients_transport_http(inputs)
	if (locale === "ko") return ko_mcp_clients_transport_http(inputs)
	return fr_mcp_clients_transport_http(inputs)
});