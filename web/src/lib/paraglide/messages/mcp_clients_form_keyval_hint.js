/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Clients_Form_Keyval_HintInputs */

const en_mcp_clients_form_keyval_hint = /** @type {(inputs: Mcp_Clients_Form_Keyval_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(KEY=VAL, KEY2=VAL2)`)
};

const zh_cn2_mcp_clients_form_keyval_hint = /** @type {(inputs: Mcp_Clients_Form_Keyval_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(键=值, 键2=值2)`)
};

const es_mcp_clients_form_keyval_hint = /** @type {(inputs: Mcp_Clients_Form_Keyval_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(CLAVE=VAL, CLAVE2=VAL2)`)
};

const ja_mcp_clients_form_keyval_hint = /** @type {(inputs: Mcp_Clients_Form_Keyval_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(キー=値, キー2=値2)`)
};

const hi_mcp_clients_form_keyval_hint = /** @type {(inputs: Mcp_Clients_Form_Keyval_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(कुंजी=मान, कुंजी2=मान2)`)
};

const pt_br2_mcp_clients_form_keyval_hint = /** @type {(inputs: Mcp_Clients_Form_Keyval_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(CHAVE=VAL, CHAVE2=VAL2)`)
};

const ko_mcp_clients_form_keyval_hint = /** @type {(inputs: Mcp_Clients_Form_Keyval_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(키=값, 키2=값2)`)
};

const fr_mcp_clients_form_keyval_hint = /** @type {(inputs: Mcp_Clients_Form_Keyval_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(CLÉ=VAL, CLÉ2=VAL2)`)
};

/**
* | output |
* | --- |
* | "(KEY=VAL, KEY2=VAL2)" |
*
* @param {Mcp_Clients_Form_Keyval_HintInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_clients_form_keyval_hint = /** @type {((inputs?: Mcp_Clients_Form_Keyval_HintInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Clients_Form_Keyval_HintInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_clients_form_keyval_hint(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_clients_form_keyval_hint(inputs)
	if (locale === "es") return es_mcp_clients_form_keyval_hint(inputs)
	if (locale === "ja") return ja_mcp_clients_form_keyval_hint(inputs)
	if (locale === "hi") return hi_mcp_clients_form_keyval_hint(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_clients_form_keyval_hint(inputs)
	if (locale === "ko") return ko_mcp_clients_form_keyval_hint(inputs)
	return fr_mcp_clients_form_keyval_hint(inputs)
});