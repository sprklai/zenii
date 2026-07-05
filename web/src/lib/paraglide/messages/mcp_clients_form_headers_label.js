/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Clients_Form_Headers_LabelInputs */

const en_mcp_clients_form_headers_label = /** @type {(inputs: Mcp_Clients_Form_Headers_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Headers`)
};

const zh_cn2_mcp_clients_form_headers_label = /** @type {(inputs: Mcp_Clients_Form_Headers_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求头`)
};

const es_mcp_clients_form_headers_label = /** @type {(inputs: Mcp_Clients_Form_Headers_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cabeceras`)
};

const ja_mcp_clients_form_headers_label = /** @type {(inputs: Mcp_Clients_Form_Headers_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ヘッダー`)
};

const hi_mcp_clients_form_headers_label = /** @type {(inputs: Mcp_Clients_Form_Headers_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`हेडर`)
};

const pt_br2_mcp_clients_form_headers_label = /** @type {(inputs: Mcp_Clients_Form_Headers_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cabeçalhos`)
};

const ko_mcp_clients_form_headers_label = /** @type {(inputs: Mcp_Clients_Form_Headers_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`헤더`)
};

const fr_mcp_clients_form_headers_label = /** @type {(inputs: Mcp_Clients_Form_Headers_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En-têtes`)
};

/**
* | output |
* | --- |
* | "Headers" |
*
* @param {Mcp_Clients_Form_Headers_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_clients_form_headers_label = /** @type {((inputs?: Mcp_Clients_Form_Headers_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Clients_Form_Headers_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_clients_form_headers_label(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_clients_form_headers_label(inputs)
	if (locale === "es") return es_mcp_clients_form_headers_label(inputs)
	if (locale === "ja") return ja_mcp_clients_form_headers_label(inputs)
	if (locale === "hi") return hi_mcp_clients_form_headers_label(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_clients_form_headers_label(inputs)
	if (locale === "ko") return ko_mcp_clients_form_headers_label(inputs)
	return fr_mcp_clients_form_headers_label(inputs)
});