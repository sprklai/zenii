/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Clients_Error_Id_SpacesInputs */

const en_mcp_clients_error_id_spaces = /** @type {(inputs: Mcp_Clients_Error_Id_SpacesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID cannot contain spaces`)
};

const zh_cn2_mcp_clients_error_id_spaces = /** @type {(inputs: Mcp_Clients_Error_Id_SpacesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID 不能包含空格`)
};

const es_mcp_clients_error_id_spaces = /** @type {(inputs: Mcp_Clients_Error_Id_SpacesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El ID no puede contener espacios`)
};

const ja_mcp_clients_error_id_spaces = /** @type {(inputs: Mcp_Clients_Error_Id_SpacesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IDにスペースは含められません`)
};

const hi_mcp_clients_error_id_spaces = /** @type {(inputs: Mcp_Clients_Error_Id_SpacesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID में रिक्त स्थान नहीं हो सकते`)
};

const pt_br2_mcp_clients_error_id_spaces = /** @type {(inputs: Mcp_Clients_Error_Id_SpacesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O ID não pode conter espaços`)
};

const ko_mcp_clients_error_id_spaces = /** @type {(inputs: Mcp_Clients_Error_Id_SpacesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID에 공백이 포함될 수 없습니다`)
};

const fr_mcp_clients_error_id_spaces = /** @type {(inputs: Mcp_Clients_Error_Id_SpacesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L'ID ne peut pas contenir d'espaces`)
};

/**
* | output |
* | --- |
* | "ID cannot contain spaces" |
*
* @param {Mcp_Clients_Error_Id_SpacesInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_clients_error_id_spaces = /** @type {((inputs?: Mcp_Clients_Error_Id_SpacesInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Clients_Error_Id_SpacesInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_clients_error_id_spaces(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_clients_error_id_spaces(inputs)
	if (locale === "es") return es_mcp_clients_error_id_spaces(inputs)
	if (locale === "ja") return ja_mcp_clients_error_id_spaces(inputs)
	if (locale === "hi") return hi_mcp_clients_error_id_spaces(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_clients_error_id_spaces(inputs)
	if (locale === "ko") return ko_mcp_clients_error_id_spaces(inputs)
	return fr_mcp_clients_error_id_spaces(inputs)
});