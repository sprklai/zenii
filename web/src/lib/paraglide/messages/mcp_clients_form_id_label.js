/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Clients_Form_Id_LabelInputs */

const en_mcp_clients_form_id_label = /** @type {(inputs: Mcp_Clients_Form_Id_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server ID`)
};

const zh_cn2_mcp_clients_form_id_label = /** @type {(inputs: Mcp_Clients_Form_Id_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`服务器 ID`)
};

const es_mcp_clients_form_id_label = /** @type {(inputs: Mcp_Clients_Form_Id_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID del Servidor`)
};

const ja_mcp_clients_form_id_label = /** @type {(inputs: Mcp_Clients_Form_Id_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サーバーID`)
};

const hi_mcp_clients_form_id_label = /** @type {(inputs: Mcp_Clients_Form_Id_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सर्वर ID`)
};

const pt_br2_mcp_clients_form_id_label = /** @type {(inputs: Mcp_Clients_Form_Id_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID do Servidor`)
};

const ko_mcp_clients_form_id_label = /** @type {(inputs: Mcp_Clients_Form_Id_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`서버 ID`)
};

const fr_mcp_clients_form_id_label = /** @type {(inputs: Mcp_Clients_Form_Id_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID du Serveur`)
};

/**
* | output |
* | --- |
* | "Server ID" |
*
* @param {Mcp_Clients_Form_Id_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_clients_form_id_label = /** @type {((inputs?: Mcp_Clients_Form_Id_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Clients_Form_Id_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_clients_form_id_label(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_clients_form_id_label(inputs)
	if (locale === "es") return es_mcp_clients_form_id_label(inputs)
	if (locale === "ja") return ja_mcp_clients_form_id_label(inputs)
	if (locale === "hi") return hi_mcp_clients_form_id_label(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_clients_form_id_label(inputs)
	if (locale === "ko") return ko_mcp_clients_form_id_label(inputs)
	return fr_mcp_clients_form_id_label(inputs)
});