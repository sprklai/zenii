/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Clients_Error_Id_ExistsInputs */

const en_mcp_clients_error_id_exists = /** @type {(inputs: Mcp_Clients_Error_Id_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID already exists`)
};

const zh_cn2_mcp_clients_error_id_exists = /** @type {(inputs: Mcp_Clients_Error_Id_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID 已存在`)
};

const es_mcp_clients_error_id_exists = /** @type {(inputs: Mcp_Clients_Error_Id_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El ID ya existe`)
};

const ja_mcp_clients_error_id_exists = /** @type {(inputs: Mcp_Clients_Error_Id_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このIDはすでに存在します`)
};

const hi_mcp_clients_error_id_exists = /** @type {(inputs: Mcp_Clients_Error_Id_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID पहले से मौजूद है`)
};

const pt_br2_mcp_clients_error_id_exists = /** @type {(inputs: Mcp_Clients_Error_Id_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O ID já existe`)
};

const ko_mcp_clients_error_id_exists = /** @type {(inputs: Mcp_Clients_Error_Id_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이미 존재하는 ID입니다`)
};

const fr_mcp_clients_error_id_exists = /** @type {(inputs: Mcp_Clients_Error_Id_ExistsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cet ID existe déjà`)
};

/**
* | output |
* | --- |
* | "ID already exists" |
*
* @param {Mcp_Clients_Error_Id_ExistsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_clients_error_id_exists = /** @type {((inputs?: Mcp_Clients_Error_Id_ExistsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Clients_Error_Id_ExistsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_clients_error_id_exists(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_clients_error_id_exists(inputs)
	if (locale === "es") return es_mcp_clients_error_id_exists(inputs)
	if (locale === "ja") return ja_mcp_clients_error_id_exists(inputs)
	if (locale === "hi") return hi_mcp_clients_error_id_exists(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_clients_error_id_exists(inputs)
	if (locale === "ko") return ko_mcp_clients_error_id_exists(inputs)
	return fr_mcp_clients_error_id_exists(inputs)
});