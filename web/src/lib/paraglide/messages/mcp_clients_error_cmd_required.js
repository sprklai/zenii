/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Clients_Error_Cmd_RequiredInputs */

const en_mcp_clients_error_cmd_required = /** @type {(inputs: Mcp_Clients_Error_Cmd_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Command is required`)
};

const zh_cn2_mcp_clients_error_cmd_required = /** @type {(inputs: Mcp_Clients_Error_Cmd_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`命令是必填项`)
};

const es_mcp_clients_error_cmd_required = /** @type {(inputs: Mcp_Clients_Error_Cmd_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El comando es obligatorio`)
};

const ja_mcp_clients_error_cmd_required = /** @type {(inputs: Mcp_Clients_Error_Cmd_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コマンドは必須です`)
};

const hi_mcp_clients_error_cmd_required = /** @type {(inputs: Mcp_Clients_Error_Cmd_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कमांड आवश्यक है`)
};

const pt_br2_mcp_clients_error_cmd_required = /** @type {(inputs: Mcp_Clients_Error_Cmd_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O comando é obrigatório`)
};

const ko_mcp_clients_error_cmd_required = /** @type {(inputs: Mcp_Clients_Error_Cmd_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`명령은 필수입니다`)
};

const fr_mcp_clients_error_cmd_required = /** @type {(inputs: Mcp_Clients_Error_Cmd_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La commande est requise`)
};

/**
* | output |
* | --- |
* | "Command is required" |
*
* @param {Mcp_Clients_Error_Cmd_RequiredInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_clients_error_cmd_required = /** @type {((inputs?: Mcp_Clients_Error_Cmd_RequiredInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Clients_Error_Cmd_RequiredInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_clients_error_cmd_required(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_clients_error_cmd_required(inputs)
	if (locale === "es") return es_mcp_clients_error_cmd_required(inputs)
	if (locale === "ja") return ja_mcp_clients_error_cmd_required(inputs)
	if (locale === "hi") return hi_mcp_clients_error_cmd_required(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_clients_error_cmd_required(inputs)
	if (locale === "ko") return ko_mcp_clients_error_cmd_required(inputs)
	return fr_mcp_clients_error_cmd_required(inputs)
});