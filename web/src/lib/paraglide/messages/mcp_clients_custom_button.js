/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Clients_Custom_ButtonInputs */

const en_mcp_clients_custom_button = /** @type {(inputs: Mcp_Clients_Custom_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ Custom`)
};

const zh_cn2_mcp_clients_custom_button = /** @type {(inputs: Mcp_Clients_Custom_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ 自定义`)
};

const es_mcp_clients_custom_button = /** @type {(inputs: Mcp_Clients_Custom_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ Personalizado`)
};

const ja_mcp_clients_custom_button = /** @type {(inputs: Mcp_Clients_Custom_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ カスタム`)
};

const hi_mcp_clients_custom_button = /** @type {(inputs: Mcp_Clients_Custom_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ कस्टम`)
};

const pt_br2_mcp_clients_custom_button = /** @type {(inputs: Mcp_Clients_Custom_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ Personalizado`)
};

const ko_mcp_clients_custom_button = /** @type {(inputs: Mcp_Clients_Custom_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ 사용자 지정`)
};

const fr_mcp_clients_custom_button = /** @type {(inputs: Mcp_Clients_Custom_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ Personnalisé`)
};

/**
* | output |
* | --- |
* | "+ Custom" |
*
* @param {Mcp_Clients_Custom_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_clients_custom_button = /** @type {((inputs?: Mcp_Clients_Custom_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Clients_Custom_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_clients_custom_button(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_clients_custom_button(inputs)
	if (locale === "es") return es_mcp_clients_custom_button(inputs)
	if (locale === "ja") return ja_mcp_clients_custom_button(inputs)
	if (locale === "hi") return hi_mcp_clients_custom_button(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_clients_custom_button(inputs)
	if (locale === "ko") return ko_mcp_clients_custom_button(inputs)
	return fr_mcp_clients_custom_button(inputs)
});