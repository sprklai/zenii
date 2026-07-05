/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Server_Visibility_DescInputs */

const en_mcp_server_visibility_desc = /** @type {(inputs: Mcp_Server_Visibility_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Control which tools are exposed to MCP clients and how they are named.`)
};

const zh_cn2_mcp_server_visibility_desc = /** @type {(inputs: Mcp_Server_Visibility_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`控制哪些工具对 MCP 客户端公开及其命名方式。`)
};

const es_mcp_server_visibility_desc = /** @type {(inputs: Mcp_Server_Visibility_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controla qué herramientas se exponen a los clientes MCP y cómo se nombran.`)
};

const ja_mcp_server_visibility_desc = /** @type {(inputs: Mcp_Server_Visibility_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCPクライアントに公開するツールとその名前を制御します。`)
};

const hi_mcp_server_visibility_desc = /** @type {(inputs: Mcp_Server_Visibility_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`नियंत्रित करें कि MCP क्लाइंट को कौन से टूल दिखाए जाएं और उन्हें कैसे नाम दिया जाए।`)
};

const pt_br2_mcp_server_visibility_desc = /** @type {(inputs: Mcp_Server_Visibility_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controle quais ferramentas são expostas aos clientes MCP e como são nomeadas.`)
};

const ko_mcp_server_visibility_desc = /** @type {(inputs: Mcp_Server_Visibility_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCP 클라이언트에 노출할 도구와 이름 지정 방식을 제어합니다.`)
};

const fr_mcp_server_visibility_desc = /** @type {(inputs: Mcp_Server_Visibility_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contrôlez quels outils sont exposés aux clients MCP et comment ils sont nommés.`)
};

/**
* | output |
* | --- |
* | "Control which tools are exposed to MCP clients and how they are named." |
*
* @param {Mcp_Server_Visibility_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_server_visibility_desc = /** @type {((inputs?: Mcp_Server_Visibility_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Server_Visibility_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_server_visibility_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_server_visibility_desc(inputs)
	if (locale === "es") return es_mcp_server_visibility_desc(inputs)
	if (locale === "ja") return ja_mcp_server_visibility_desc(inputs)
	if (locale === "hi") return hi_mcp_server_visibility_desc(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_server_visibility_desc(inputs)
	if (locale === "ko") return ko_mcp_server_visibility_desc(inputs)
	return fr_mcp_server_visibility_desc(inputs)
});