/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Server_Connect_DescInputs */

const en_mcp_server_connect_desc = /** @type {(inputs: Mcp_Server_Connect_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use Zenii's tools from Claude Desktop, Cursor, Windsurf, or any MCP-compatible client.`)
};

const zh_cn2_mcp_server_connect_desc = /** @type {(inputs: Mcp_Server_Connect_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从 Claude Desktop、Cursor、Windsurf 或任何 MCP 兼容客户端使用 Zenii 的工具。`)
};

const es_mcp_server_connect_desc = /** @type {(inputs: Mcp_Server_Connect_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa las herramientas de Zenii desde Claude Desktop, Cursor, Windsurf o cualquier cliente compatible con MCP.`)
};

const ja_mcp_server_connect_desc = /** @type {(inputs: Mcp_Server_Connect_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Claude Desktop、Cursor、WindsurfまたはMCP対応クライアントからZeniiのツールを使用します。`)
};

const hi_mcp_server_connect_desc = /** @type {(inputs: Mcp_Server_Connect_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Claude Desktop, Cursor, Windsurf या किसी भी MCP-संगत क्लाइंट से Zenii के टूल का उपयोग करें।`)
};

const pt_br2_mcp_server_connect_desc = /** @type {(inputs: Mcp_Server_Connect_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use as ferramentas do Zenii no Claude Desktop, Cursor, Windsurf ou em qualquer cliente compatível com MCP.`)
};

const ko_mcp_server_connect_desc = /** @type {(inputs: Mcp_Server_Connect_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Claude Desktop, Cursor, Windsurf 또는 MCP 호환 클라이언트에서 Zenii 도구를 사용하세요.`)
};

const fr_mcp_server_connect_desc = /** @type {(inputs: Mcp_Server_Connect_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisez les outils de Zenii depuis Claude Desktop, Cursor, Windsurf ou tout client compatible MCP.`)
};

/**
* | output |
* | --- |
* | "Use Zenii's tools from Claude Desktop, Cursor, Windsurf, or any MCP-compatible client." |
*
* @param {Mcp_Server_Connect_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_server_connect_desc = /** @type {((inputs?: Mcp_Server_Connect_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Server_Connect_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_server_connect_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_server_connect_desc(inputs)
	if (locale === "es") return es_mcp_server_connect_desc(inputs)
	if (locale === "ja") return ja_mcp_server_connect_desc(inputs)
	if (locale === "hi") return hi_mcp_server_connect_desc(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_server_connect_desc(inputs)
	if (locale === "ko") return ko_mcp_server_connect_desc(inputs)
	return fr_mcp_server_connect_desc(inputs)
});