/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Clients_Delete_ButtonInputs */

const en_mcp_clients_delete_button = /** @type {(inputs: Mcp_Clients_Delete_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete`)
};

const zh_cn2_mcp_clients_delete_button = /** @type {(inputs: Mcp_Clients_Delete_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除`)
};

const es_mcp_clients_delete_button = /** @type {(inputs: Mcp_Clients_Delete_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar`)
};

const ja_mcp_clients_delete_button = /** @type {(inputs: Mcp_Clients_Delete_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除`)
};

const hi_mcp_clients_delete_button = /** @type {(inputs: Mcp_Clients_Delete_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`हटाएं`)
};

const pt_br2_mcp_clients_delete_button = /** @type {(inputs: Mcp_Clients_Delete_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir`)
};

const ko_mcp_clients_delete_button = /** @type {(inputs: Mcp_Clients_Delete_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`삭제`)
};

const fr_mcp_clients_delete_button = /** @type {(inputs: Mcp_Clients_Delete_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer`)
};

/**
* | output |
* | --- |
* | "Delete" |
*
* @param {Mcp_Clients_Delete_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_clients_delete_button = /** @type {((inputs?: Mcp_Clients_Delete_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Clients_Delete_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_clients_delete_button(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_clients_delete_button(inputs)
	if (locale === "es") return es_mcp_clients_delete_button(inputs)
	if (locale === "ja") return ja_mcp_clients_delete_button(inputs)
	if (locale === "hi") return hi_mcp_clients_delete_button(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_clients_delete_button(inputs)
	if (locale === "ko") return ko_mcp_clients_delete_button(inputs)
	return fr_mcp_clients_delete_button(inputs)
});