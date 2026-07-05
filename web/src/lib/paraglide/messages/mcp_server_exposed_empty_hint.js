/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Server_Exposed_Empty_HintInputs */

const en_mcp_server_exposed_empty_hint = /** @type {(inputs: Mcp_Server_Exposed_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(empty = all)`)
};

const zh_cn2_mcp_server_exposed_empty_hint = /** @type {(inputs: Mcp_Server_Exposed_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(空 = 全部)`)
};

const es_mcp_server_exposed_empty_hint = /** @type {(inputs: Mcp_Server_Exposed_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(vacío = todas)`)
};

const ja_mcp_server_exposed_empty_hint = /** @type {(inputs: Mcp_Server_Exposed_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(空 = すべて)`)
};

const hi_mcp_server_exposed_empty_hint = /** @type {(inputs: Mcp_Server_Exposed_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(खाली = सभी)`)
};

const pt_br2_mcp_server_exposed_empty_hint = /** @type {(inputs: Mcp_Server_Exposed_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(vazio = todas)`)
};

const ko_mcp_server_exposed_empty_hint = /** @type {(inputs: Mcp_Server_Exposed_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(비어 있음 = 모두)`)
};

const fr_mcp_server_exposed_empty_hint = /** @type {(inputs: Mcp_Server_Exposed_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(vide = tous)`)
};

/**
* | output |
* | --- |
* | "(empty = all)" |
*
* @param {Mcp_Server_Exposed_Empty_HintInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_server_exposed_empty_hint = /** @type {((inputs?: Mcp_Server_Exposed_Empty_HintInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Server_Exposed_Empty_HintInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_server_exposed_empty_hint(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_server_exposed_empty_hint(inputs)
	if (locale === "es") return es_mcp_server_exposed_empty_hint(inputs)
	if (locale === "ja") return ja_mcp_server_exposed_empty_hint(inputs)
	if (locale === "hi") return hi_mcp_server_exposed_empty_hint(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_server_exposed_empty_hint(inputs)
	if (locale === "ko") return ko_mcp_server_exposed_empty_hint(inputs)
	return fr_mcp_server_exposed_empty_hint(inputs)
});