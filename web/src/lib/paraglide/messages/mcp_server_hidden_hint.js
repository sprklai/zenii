/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Server_Hidden_HintInputs */

const en_mcp_server_hidden_hint = /** @type {(inputs: Mcp_Server_Hidden_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comma-separated list of tool names to hide from MCP clients.`)
};

const zh_cn2_mcp_server_hidden_hint = /** @type {(inputs: Mcp_Server_Hidden_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要对 MCP 客户端隐藏的工具名称的逗号分隔列表。`)
};

const es_mcp_server_hidden_hint = /** @type {(inputs: Mcp_Server_Hidden_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista separada por comas de herramientas a ocultar de los clientes MCP.`)
};

const ja_mcp_server_hidden_hint = /** @type {(inputs: Mcp_Server_Hidden_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCPクライアントから隠すツール名のカンマ区切りリスト。`)
};

const hi_mcp_server_hidden_hint = /** @type {(inputs: Mcp_Server_Hidden_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCP क्लाइंट से छिपाने वाले टूल नामों की अल्पविराम-अलग सूची।`)
};

const pt_br2_mcp_server_hidden_hint = /** @type {(inputs: Mcp_Server_Hidden_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista separada por vírgulas de ferramentas a ocultar dos clientes MCP.`)
};

const ko_mcp_server_hidden_hint = /** @type {(inputs: Mcp_Server_Hidden_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCP 클라이언트에서 숨길 도구 이름의 쉼표로 구분된 목록.`)
};

const fr_mcp_server_hidden_hint = /** @type {(inputs: Mcp_Server_Hidden_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liste séparée par des virgules des outils à masquer aux clients MCP.`)
};

/**
* | output |
* | --- |
* | "Comma-separated list of tool names to hide from MCP clients." |
*
* @param {Mcp_Server_Hidden_HintInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_server_hidden_hint = /** @type {((inputs?: Mcp_Server_Hidden_HintInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Server_Hidden_HintInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_server_hidden_hint(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_server_hidden_hint(inputs)
	if (locale === "es") return es_mcp_server_hidden_hint(inputs)
	if (locale === "ja") return ja_mcp_server_hidden_hint(inputs)
	if (locale === "hi") return hi_mcp_server_hidden_hint(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_server_hidden_hint(inputs)
	if (locale === "ko") return ko_mcp_server_hidden_hint(inputs)
	return fr_mcp_server_hidden_hint(inputs)
});