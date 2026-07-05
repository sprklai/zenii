/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Clients_Quick_Add_DescInputs */

const en_mcp_clients_quick_add_desc = /** @type {(inputs: Mcp_Clients_Quick_Add_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add a popular MCP server with one click.`)
};

const zh_cn2_mcp_clients_quick_add_desc = /** @type {(inputs: Mcp_Clients_Quick_Add_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一键添加常用 MCP 服务器。`)
};

const es_mcp_clients_quick_add_desc = /** @type {(inputs: Mcp_Clients_Quick_Add_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añade un servidor MCP popular con un clic.`)
};

const ja_mcp_clients_quick_add_desc = /** @type {(inputs: Mcp_Clients_Quick_Add_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワンクリックで人気のMCPサーバーを追加します。`)
};

const hi_mcp_clients_quick_add_desc = /** @type {(inputs: Mcp_Clients_Quick_Add_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एक क्लिक में लोकप्रिय MCP सर्वर जोड़ें।`)
};

const pt_br2_mcp_clients_quick_add_desc = /** @type {(inputs: Mcp_Clients_Quick_Add_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicione um servidor MCP popular com um clique.`)
};

const ko_mcp_clients_quick_add_desc = /** @type {(inputs: Mcp_Clients_Quick_Add_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`한 번의 클릭으로 인기 MCP 서버를 추가하세요.`)
};

const fr_mcp_clients_quick_add_desc = /** @type {(inputs: Mcp_Clients_Quick_Add_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajoutez un serveur MCP populaire en un clic.`)
};

/**
* | output |
* | --- |
* | "Add a popular MCP server with one click." |
*
* @param {Mcp_Clients_Quick_Add_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_clients_quick_add_desc = /** @type {((inputs?: Mcp_Clients_Quick_Add_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Clients_Quick_Add_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_clients_quick_add_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_clients_quick_add_desc(inputs)
	if (locale === "es") return es_mcp_clients_quick_add_desc(inputs)
	if (locale === "ja") return ja_mcp_clients_quick_add_desc(inputs)
	if (locale === "hi") return hi_mcp_clients_quick_add_desc(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_clients_quick_add_desc(inputs)
	if (locale === "ko") return ko_mcp_clients_quick_add_desc(inputs)
	return fr_mcp_clients_quick_add_desc(inputs)
});