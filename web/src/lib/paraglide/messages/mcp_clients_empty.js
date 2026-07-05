/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Clients_EmptyInputs */

const en_mcp_clients_empty = /** @type {(inputs: Mcp_Clients_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No MCP clients configured. Add a server above to get started.`)
};

const zh_cn2_mcp_clients_empty = /** @type {(inputs: Mcp_Clients_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有已配置的 MCP 客户端。请在上方添加服务器以开始使用。`)
};

const es_mcp_clients_empty = /** @type {(inputs: Mcp_Clients_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay clientes MCP configurados. Añade un servidor arriba para comenzar.`)
};

const ja_mcp_clients_empty = /** @type {(inputs: Mcp_Clients_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCPクライアントが設定されていません。上のサーバーを追加してください。`)
};

const hi_mcp_clients_empty = /** @type {(inputs: Mcp_Clients_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कोई MCP क्लाइंट कॉन्फिगर नहीं है। शुरू करने के लिए ऊपर एक सर्वर जोड़ें।`)
};

const pt_br2_mcp_clients_empty = /** @type {(inputs: Mcp_Clients_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum cliente MCP configurado. Adicione um servidor acima para começar.`)
};

const ko_mcp_clients_empty = /** @type {(inputs: Mcp_Clients_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`구성된 MCP 클라이언트가 없습니다. 시작하려면 위에 서버를 추가하세요.`)
};

const fr_mcp_clients_empty = /** @type {(inputs: Mcp_Clients_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun client MCP configuré. Ajoutez un serveur ci-dessus pour commencer.`)
};

/**
* | output |
* | --- |
* | "No MCP clients configured. Add a server above to get started." |
*
* @param {Mcp_Clients_EmptyInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_clients_empty = /** @type {((inputs?: Mcp_Clients_EmptyInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Clients_EmptyInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_clients_empty(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_clients_empty(inputs)
	if (locale === "es") return es_mcp_clients_empty(inputs)
	if (locale === "ja") return ja_mcp_clients_empty(inputs)
	if (locale === "hi") return hi_mcp_clients_empty(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_clients_empty(inputs)
	if (locale === "ko") return ko_mcp_clients_empty(inputs)
	return fr_mcp_clients_empty(inputs)
});