/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Tab_ServerInputs */

const en_mcp_tab_server = /** @type {(inputs: Mcp_Tab_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server`)
};

const zh_cn2_mcp_tab_server = /** @type {(inputs: Mcp_Tab_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`服务器`)
};

const es_mcp_tab_server = /** @type {(inputs: Mcp_Tab_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servidor`)
};

const ja_mcp_tab_server = /** @type {(inputs: Mcp_Tab_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サーバー`)
};

const hi_mcp_tab_server = /** @type {(inputs: Mcp_Tab_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सर्वर`)
};

const pt_br2_mcp_tab_server = /** @type {(inputs: Mcp_Tab_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servidor`)
};

const ko_mcp_tab_server = /** @type {(inputs: Mcp_Tab_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`서버`)
};

const fr_mcp_tab_server = /** @type {(inputs: Mcp_Tab_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serveur`)
};

/**
* | output |
* | --- |
* | "Server" |
*
* @param {Mcp_Tab_ServerInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_tab_server = /** @type {((inputs?: Mcp_Tab_ServerInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Tab_ServerInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_tab_server(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_tab_server(inputs)
	if (locale === "es") return es_mcp_tab_server(inputs)
	if (locale === "ja") return ja_mcp_tab_server(inputs)
	if (locale === "hi") return hi_mcp_tab_server(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_tab_server(inputs)
	if (locale === "ko") return ko_mcp_tab_server(inputs)
	return fr_mcp_tab_server(inputs)
});