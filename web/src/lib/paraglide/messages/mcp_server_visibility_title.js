/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Server_Visibility_TitleInputs */

const en_mcp_server_visibility_title = /** @type {(inputs: Mcp_Server_Visibility_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tool Visibility`)
};

const zh_cn2_mcp_server_visibility_title = /** @type {(inputs: Mcp_Server_Visibility_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`工具可见性`)
};

const es_mcp_server_visibility_title = /** @type {(inputs: Mcp_Server_Visibility_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visibilidad de Herramientas`)
};

const ja_mcp_server_visibility_title = /** @type {(inputs: Mcp_Server_Visibility_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ツールの可視性`)
};

const hi_mcp_server_visibility_title = /** @type {(inputs: Mcp_Server_Visibility_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`टूल दृश्यता`)
};

const pt_br2_mcp_server_visibility_title = /** @type {(inputs: Mcp_Server_Visibility_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visibilidade das Ferramentas`)
};

const ko_mcp_server_visibility_title = /** @type {(inputs: Mcp_Server_Visibility_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`도구 가시성`)
};

const fr_mcp_server_visibility_title = /** @type {(inputs: Mcp_Server_Visibility_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visibilité des Outils`)
};

/**
* | output |
* | --- |
* | "Tool Visibility" |
*
* @param {Mcp_Server_Visibility_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_server_visibility_title = /** @type {((inputs?: Mcp_Server_Visibility_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Server_Visibility_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_server_visibility_title(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_server_visibility_title(inputs)
	if (locale === "es") return es_mcp_server_visibility_title(inputs)
	if (locale === "ja") return ja_mcp_server_visibility_title(inputs)
	if (locale === "hi") return hi_mcp_server_visibility_title(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_server_visibility_title(inputs)
	if (locale === "ko") return ko_mcp_server_visibility_title(inputs)
	return fr_mcp_server_visibility_title(inputs)
});