/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Server_Hidden_LabelInputs */

const en_mcp_server_hidden_label = /** @type {(inputs: Mcp_Server_Hidden_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hidden tools`)
};

const zh_cn2_mcp_server_hidden_label = /** @type {(inputs: Mcp_Server_Hidden_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐藏的工具`)
};

const es_mcp_server_hidden_label = /** @type {(inputs: Mcp_Server_Hidden_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herramientas ocultas`)
};

const ja_mcp_server_hidden_label = /** @type {(inputs: Mcp_Server_Hidden_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非表示のツール`)
};

const hi_mcp_server_hidden_label = /** @type {(inputs: Mcp_Server_Hidden_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`छिपे टूल`)
};

const pt_br2_mcp_server_hidden_label = /** @type {(inputs: Mcp_Server_Hidden_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ferramentas ocultas`)
};

const ko_mcp_server_hidden_label = /** @type {(inputs: Mcp_Server_Hidden_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`숨겨진 도구`)
};

const fr_mcp_server_hidden_label = /** @type {(inputs: Mcp_Server_Hidden_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outils masqués`)
};

/**
* | output |
* | --- |
* | "Hidden tools" |
*
* @param {Mcp_Server_Hidden_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_server_hidden_label = /** @type {((inputs?: Mcp_Server_Hidden_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Server_Hidden_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_server_hidden_label(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_server_hidden_label(inputs)
	if (locale === "es") return es_mcp_server_hidden_label(inputs)
	if (locale === "ja") return ja_mcp_server_hidden_label(inputs)
	if (locale === "hi") return hi_mcp_server_hidden_label(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_server_hidden_label(inputs)
	if (locale === "ko") return ko_mcp_server_hidden_label(inputs)
	return fr_mcp_server_hidden_label(inputs)
});