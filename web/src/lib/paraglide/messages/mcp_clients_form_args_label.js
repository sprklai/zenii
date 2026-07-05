/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Clients_Form_Args_LabelInputs */

const en_mcp_clients_form_args_label = /** @type {(inputs: Mcp_Clients_Form_Args_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arguments`)
};

const zh_cn2_mcp_clients_form_args_label = /** @type {(inputs: Mcp_Clients_Form_Args_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`参数`)
};

const es_mcp_clients_form_args_label = /** @type {(inputs: Mcp_Clients_Form_Args_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Argumentos`)
};

const ja_mcp_clients_form_args_label = /** @type {(inputs: Mcp_Clients_Form_Args_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`引数`)
};

const hi_mcp_clients_form_args_label = /** @type {(inputs: Mcp_Clients_Form_Args_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`तर्क`)
};

const pt_br2_mcp_clients_form_args_label = /** @type {(inputs: Mcp_Clients_Form_Args_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Argumentos`)
};

const ko_mcp_clients_form_args_label = /** @type {(inputs: Mcp_Clients_Form_Args_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`인수`)
};

const fr_mcp_clients_form_args_label = /** @type {(inputs: Mcp_Clients_Form_Args_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arguments`)
};

/**
* | output |
* | --- |
* | "Arguments" |
*
* @param {Mcp_Clients_Form_Args_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_clients_form_args_label = /** @type {((inputs?: Mcp_Clients_Form_Args_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Clients_Form_Args_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_clients_form_args_label(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_clients_form_args_label(inputs)
	if (locale === "es") return es_mcp_clients_form_args_label(inputs)
	if (locale === "ja") return ja_mcp_clients_form_args_label(inputs)
	if (locale === "hi") return hi_mcp_clients_form_args_label(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_clients_form_args_label(inputs)
	if (locale === "ko") return ko_mcp_clients_form_args_label(inputs)
	return fr_mcp_clients_form_args_label(inputs)
});