/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Clients_Error_Id_RequiredInputs */

const en_mcp_clients_error_id_required = /** @type {(inputs: Mcp_Clients_Error_Id_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID is required`)
};

const zh_cn2_mcp_clients_error_id_required = /** @type {(inputs: Mcp_Clients_Error_Id_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID 是必填项`)
};

const es_mcp_clients_error_id_required = /** @type {(inputs: Mcp_Clients_Error_Id_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El ID es obligatorio`)
};

const ja_mcp_clients_error_id_required = /** @type {(inputs: Mcp_Clients_Error_Id_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IDは必須です`)
};

const hi_mcp_clients_error_id_required = /** @type {(inputs: Mcp_Clients_Error_Id_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID आवश्यक है`)
};

const pt_br2_mcp_clients_error_id_required = /** @type {(inputs: Mcp_Clients_Error_Id_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O ID é obrigatório`)
};

const ko_mcp_clients_error_id_required = /** @type {(inputs: Mcp_Clients_Error_Id_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID는 필수입니다`)
};

const fr_mcp_clients_error_id_required = /** @type {(inputs: Mcp_Clients_Error_Id_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L'ID est requis`)
};

/**
* | output |
* | --- |
* | "ID is required" |
*
* @param {Mcp_Clients_Error_Id_RequiredInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_clients_error_id_required = /** @type {((inputs?: Mcp_Clients_Error_Id_RequiredInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Clients_Error_Id_RequiredInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_clients_error_id_required(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_clients_error_id_required(inputs)
	if (locale === "es") return es_mcp_clients_error_id_required(inputs)
	if (locale === "ja") return ja_mcp_clients_error_id_required(inputs)
	if (locale === "hi") return hi_mcp_clients_error_id_required(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_clients_error_id_required(inputs)
	if (locale === "ko") return ko_mcp_clients_error_id_required(inputs)
	return fr_mcp_clients_error_id_required(inputs)
});