/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Clients_Form_OptionalInputs */

const en_mcp_clients_form_optional = /** @type {(inputs: Mcp_Clients_Form_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(optional)`)
};

const zh_cn2_mcp_clients_form_optional = /** @type {(inputs: Mcp_Clients_Form_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(可选)`)
};

const es_mcp_clients_form_optional = /** @type {(inputs: Mcp_Clients_Form_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(opcional)`)
};

const ja_mcp_clients_form_optional = /** @type {(inputs: Mcp_Clients_Form_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(オプション)`)
};

const hi_mcp_clients_form_optional = /** @type {(inputs: Mcp_Clients_Form_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(वैकल्पिक)`)
};

const pt_br2_mcp_clients_form_optional = /** @type {(inputs: Mcp_Clients_Form_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(opcional)`)
};

const ko_mcp_clients_form_optional = /** @type {(inputs: Mcp_Clients_Form_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(선택 사항)`)
};

const fr_mcp_clients_form_optional = /** @type {(inputs: Mcp_Clients_Form_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(optionnel)`)
};

/**
* | output |
* | --- |
* | "(optional)" |
*
* @param {Mcp_Clients_Form_OptionalInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_clients_form_optional = /** @type {((inputs?: Mcp_Clients_Form_OptionalInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Clients_Form_OptionalInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_clients_form_optional(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_clients_form_optional(inputs)
	if (locale === "es") return es_mcp_clients_form_optional(inputs)
	if (locale === "ja") return ja_mcp_clients_form_optional(inputs)
	if (locale === "hi") return hi_mcp_clients_form_optional(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_clients_form_optional(inputs)
	if (locale === "ko") return ko_mcp_clients_form_optional(inputs)
	return fr_mcp_clients_form_optional(inputs)
});