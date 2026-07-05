/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Server_Prefix_LabelInputs */

const en_mcp_server_prefix_label = /** @type {(inputs: Mcp_Server_Prefix_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tool name prefix`)
};

const zh_cn2_mcp_server_prefix_label = /** @type {(inputs: Mcp_Server_Prefix_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`工具名称前缀`)
};

const es_mcp_server_prefix_label = /** @type {(inputs: Mcp_Server_Prefix_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prefijo del nombre de herramienta`)
};

const ja_mcp_server_prefix_label = /** @type {(inputs: Mcp_Server_Prefix_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ツール名プレフィックス`)
};

const hi_mcp_server_prefix_label = /** @type {(inputs: Mcp_Server_Prefix_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`टूल नाम उपसर्ग`)
};

const pt_br2_mcp_server_prefix_label = /** @type {(inputs: Mcp_Server_Prefix_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prefixo do nome da ferramenta`)
};

const ko_mcp_server_prefix_label = /** @type {(inputs: Mcp_Server_Prefix_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`도구 이름 접두사`)
};

const fr_mcp_server_prefix_label = /** @type {(inputs: Mcp_Server_Prefix_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Préfixe du nom d'outil`)
};

/**
* | output |
* | --- |
* | "Tool name prefix" |
*
* @param {Mcp_Server_Prefix_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_server_prefix_label = /** @type {((inputs?: Mcp_Server_Prefix_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Server_Prefix_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_server_prefix_label(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_server_prefix_label(inputs)
	if (locale === "es") return es_mcp_server_prefix_label(inputs)
	if (locale === "ja") return ja_mcp_server_prefix_label(inputs)
	if (locale === "hi") return hi_mcp_server_prefix_label(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_server_prefix_label(inputs)
	if (locale === "ko") return ko_mcp_server_prefix_label(inputs)
	return fr_mcp_server_prefix_label(inputs)
});