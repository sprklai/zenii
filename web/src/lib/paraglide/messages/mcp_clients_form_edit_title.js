/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Clients_Form_Edit_TitleInputs */

const en_mcp_clients_form_edit_title = /** @type {(inputs: Mcp_Clients_Form_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit Server`)
};

const zh_cn2_mcp_clients_form_edit_title = /** @type {(inputs: Mcp_Clients_Form_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑服务器`)
};

const es_mcp_clients_form_edit_title = /** @type {(inputs: Mcp_Clients_Form_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar Servidor`)
};

const ja_mcp_clients_form_edit_title = /** @type {(inputs: Mcp_Clients_Form_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サーバーを編集`)
};

const hi_mcp_clients_form_edit_title = /** @type {(inputs: Mcp_Clients_Form_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सर्वर संपादित करें`)
};

const pt_br2_mcp_clients_form_edit_title = /** @type {(inputs: Mcp_Clients_Form_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar Servidor`)
};

const ko_mcp_clients_form_edit_title = /** @type {(inputs: Mcp_Clients_Form_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`서버 편집`)
};

const fr_mcp_clients_form_edit_title = /** @type {(inputs: Mcp_Clients_Form_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier le Serveur`)
};

/**
* | output |
* | --- |
* | "Edit Server" |
*
* @param {Mcp_Clients_Form_Edit_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_clients_form_edit_title = /** @type {((inputs?: Mcp_Clients_Form_Edit_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Clients_Form_Edit_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_clients_form_edit_title(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_clients_form_edit_title(inputs)
	if (locale === "es") return es_mcp_clients_form_edit_title(inputs)
	if (locale === "ja") return ja_mcp_clients_form_edit_title(inputs)
	if (locale === "hi") return hi_mcp_clients_form_edit_title(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_clients_form_edit_title(inputs)
	if (locale === "ko") return ko_mcp_clients_form_edit_title(inputs)
	return fr_mcp_clients_form_edit_title(inputs)
});