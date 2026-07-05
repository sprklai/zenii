/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Tab_ClientsInputs */

const en_mcp_tab_clients = /** @type {(inputs: Mcp_Tab_ClientsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clients`)
};

const zh_cn2_mcp_tab_clients = /** @type {(inputs: Mcp_Tab_ClientsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`客户端`)
};

const es_mcp_tab_clients = /** @type {(inputs: Mcp_Tab_ClientsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clientes`)
};

const ja_mcp_tab_clients = /** @type {(inputs: Mcp_Tab_ClientsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クライアント`)
};

const hi_mcp_tab_clients = /** @type {(inputs: Mcp_Tab_ClientsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`क्लाइंट`)
};

const pt_br2_mcp_tab_clients = /** @type {(inputs: Mcp_Tab_ClientsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clientes`)
};

const ko_mcp_tab_clients = /** @type {(inputs: Mcp_Tab_ClientsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`클라이언트`)
};

const fr_mcp_tab_clients = /** @type {(inputs: Mcp_Tab_ClientsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clients`)
};

/**
* | output |
* | --- |
* | "Clients" |
*
* @param {Mcp_Tab_ClientsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_tab_clients = /** @type {((inputs?: Mcp_Tab_ClientsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Tab_ClientsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_tab_clients(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_tab_clients(inputs)
	if (locale === "es") return es_mcp_tab_clients(inputs)
	if (locale === "ja") return ja_mcp_tab_clients(inputs)
	if (locale === "hi") return hi_mcp_tab_clients(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_tab_clients(inputs)
	if (locale === "ko") return ko_mcp_tab_clients(inputs)
	return fr_mcp_tab_clients(inputs)
});