/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Clients_Edit_ButtonInputs */

const en_mcp_clients_edit_button = /** @type {(inputs: Mcp_Clients_Edit_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit`)
};

const zh_cn2_mcp_clients_edit_button = /** @type {(inputs: Mcp_Clients_Edit_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑`)
};

const es_mcp_clients_edit_button = /** @type {(inputs: Mcp_Clients_Edit_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar`)
};

const ja_mcp_clients_edit_button = /** @type {(inputs: Mcp_Clients_Edit_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`編集`)
};

const hi_mcp_clients_edit_button = /** @type {(inputs: Mcp_Clients_Edit_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`संपादित करें`)
};

const pt_br2_mcp_clients_edit_button = /** @type {(inputs: Mcp_Clients_Edit_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar`)
};

const ko_mcp_clients_edit_button = /** @type {(inputs: Mcp_Clients_Edit_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`편집`)
};

const fr_mcp_clients_edit_button = /** @type {(inputs: Mcp_Clients_Edit_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier`)
};

/**
* | output |
* | --- |
* | "Edit" |
*
* @param {Mcp_Clients_Edit_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_clients_edit_button = /** @type {((inputs?: Mcp_Clients_Edit_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Clients_Edit_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_clients_edit_button(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_clients_edit_button(inputs)
	if (locale === "es") return es_mcp_clients_edit_button(inputs)
	if (locale === "ja") return ja_mcp_clients_edit_button(inputs)
	if (locale === "hi") return hi_mcp_clients_edit_button(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_clients_edit_button(inputs)
	if (locale === "ko") return ko_mcp_clients_edit_button(inputs)
	return fr_mcp_clients_edit_button(inputs)
});