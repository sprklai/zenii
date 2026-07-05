/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Clients_Form_Add_TitleInputs */

const en_mcp_clients_form_add_title = /** @type {(inputs: Mcp_Clients_Form_Add_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add MCP Server`)
};

const zh_cn2_mcp_clients_form_add_title = /** @type {(inputs: Mcp_Clients_Form_Add_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加 MCP 服务器`)
};

const es_mcp_clients_form_add_title = /** @type {(inputs: Mcp_Clients_Form_Add_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir Servidor MCP`)
};

const ja_mcp_clients_form_add_title = /** @type {(inputs: Mcp_Clients_Form_Add_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCPサーバーを追加`)
};

const hi_mcp_clients_form_add_title = /** @type {(inputs: Mcp_Clients_Form_Add_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCP सर्वर जोड़ें`)
};

const pt_br2_mcp_clients_form_add_title = /** @type {(inputs: Mcp_Clients_Form_Add_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar Servidor MCP`)
};

const ko_mcp_clients_form_add_title = /** @type {(inputs: Mcp_Clients_Form_Add_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCP 서버 추가`)
};

const fr_mcp_clients_form_add_title = /** @type {(inputs: Mcp_Clients_Form_Add_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter un Serveur MCP`)
};

/**
* | output |
* | --- |
* | "Add MCP Server" |
*
* @param {Mcp_Clients_Form_Add_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_clients_form_add_title = /** @type {((inputs?: Mcp_Clients_Form_Add_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Clients_Form_Add_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_clients_form_add_title(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_clients_form_add_title(inputs)
	if (locale === "es") return es_mcp_clients_form_add_title(inputs)
	if (locale === "ja") return ja_mcp_clients_form_add_title(inputs)
	if (locale === "hi") return hi_mcp_clients_form_add_title(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_clients_form_add_title(inputs)
	if (locale === "ko") return ko_mcp_clients_form_add_title(inputs)
	return fr_mcp_clients_form_add_title(inputs)
});