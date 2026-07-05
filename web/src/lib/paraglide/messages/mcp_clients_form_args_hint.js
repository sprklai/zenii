/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Clients_Form_Args_HintInputs */

const en_mcp_clients_form_args_hint = /** @type {(inputs: Mcp_Clients_Form_Args_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(comma-separated)`)
};

const zh_cn2_mcp_clients_form_args_hint = /** @type {(inputs: Mcp_Clients_Form_Args_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(逗号分隔)`)
};

const es_mcp_clients_form_args_hint = /** @type {(inputs: Mcp_Clients_Form_Args_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(separados por comas)`)
};

const ja_mcp_clients_form_args_hint = /** @type {(inputs: Mcp_Clients_Form_Args_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(カンマ区切り)`)
};

const hi_mcp_clients_form_args_hint = /** @type {(inputs: Mcp_Clients_Form_Args_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(अल्पविराम-अलग)`)
};

const pt_br2_mcp_clients_form_args_hint = /** @type {(inputs: Mcp_Clients_Form_Args_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(separados por vírgulas)`)
};

const ko_mcp_clients_form_args_hint = /** @type {(inputs: Mcp_Clients_Form_Args_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(쉼표로 구분)`)
};

const fr_mcp_clients_form_args_hint = /** @type {(inputs: Mcp_Clients_Form_Args_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(séparés par des virgules)`)
};

/**
* | output |
* | --- |
* | "(comma-separated)" |
*
* @param {Mcp_Clients_Form_Args_HintInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_clients_form_args_hint = /** @type {((inputs?: Mcp_Clients_Form_Args_HintInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Clients_Form_Args_HintInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_clients_form_args_hint(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_clients_form_args_hint(inputs)
	if (locale === "es") return es_mcp_clients_form_args_hint(inputs)
	if (locale === "ja") return ja_mcp_clients_form_args_hint(inputs)
	if (locale === "hi") return hi_mcp_clients_form_args_hint(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_clients_form_args_hint(inputs)
	if (locale === "ko") return ko_mcp_clients_form_args_hint(inputs)
	return fr_mcp_clients_form_args_hint(inputs)
});