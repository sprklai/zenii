/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Clients_Transport_StdioInputs */

const en_mcp_clients_transport_stdio = /** @type {(inputs: Mcp_Clients_Transport_StdioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stdio`)
};

const zh_cn2_mcp_clients_transport_stdio = /** @type {(inputs: Mcp_Clients_Transport_StdioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stdio`)
};

const es_mcp_clients_transport_stdio = /** @type {(inputs: Mcp_Clients_Transport_StdioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stdio`)
};

const ja_mcp_clients_transport_stdio = /** @type {(inputs: Mcp_Clients_Transport_StdioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stdio`)
};

const hi_mcp_clients_transport_stdio = /** @type {(inputs: Mcp_Clients_Transport_StdioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stdio`)
};

const pt_br2_mcp_clients_transport_stdio = /** @type {(inputs: Mcp_Clients_Transport_StdioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stdio`)
};

const ko_mcp_clients_transport_stdio = /** @type {(inputs: Mcp_Clients_Transport_StdioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stdio`)
};

const fr_mcp_clients_transport_stdio = /** @type {(inputs: Mcp_Clients_Transport_StdioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stdio`)
};

/**
* | output |
* | --- |
* | "Stdio" |
*
* @param {Mcp_Clients_Transport_StdioInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_clients_transport_stdio = /** @type {((inputs?: Mcp_Clients_Transport_StdioInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Clients_Transport_StdioInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_clients_transport_stdio(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_clients_transport_stdio(inputs)
	if (locale === "es") return es_mcp_clients_transport_stdio(inputs)
	if (locale === "ja") return ja_mcp_clients_transport_stdio(inputs)
	if (locale === "hi") return hi_mcp_clients_transport_stdio(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_clients_transport_stdio(inputs)
	if (locale === "ko") return ko_mcp_clients_transport_stdio(inputs)
	return fr_mcp_clients_transport_stdio(inputs)
});