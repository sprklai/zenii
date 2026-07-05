/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Server_Exposed_LabelInputs */

const en_mcp_server_exposed_label = /** @type {(inputs: Mcp_Server_Exposed_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exposed tools`)
};

const zh_cn2_mcp_server_exposed_label = /** @type {(inputs: Mcp_Server_Exposed_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公开的工具`)
};

const es_mcp_server_exposed_label = /** @type {(inputs: Mcp_Server_Exposed_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herramientas expuestas`)
};

const ja_mcp_server_exposed_label = /** @type {(inputs: Mcp_Server_Exposed_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開するツール`)
};

const hi_mcp_server_exposed_label = /** @type {(inputs: Mcp_Server_Exposed_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एक्सपोज़ किए गए टूल`)
};

const pt_br2_mcp_server_exposed_label = /** @type {(inputs: Mcp_Server_Exposed_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ferramentas expostas`)
};

const ko_mcp_server_exposed_label = /** @type {(inputs: Mcp_Server_Exposed_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`노출된 도구`)
};

const fr_mcp_server_exposed_label = /** @type {(inputs: Mcp_Server_Exposed_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outils exposés`)
};

/**
* | output |
* | --- |
* | "Exposed tools" |
*
* @param {Mcp_Server_Exposed_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_server_exposed_label = /** @type {((inputs?: Mcp_Server_Exposed_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Server_Exposed_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_server_exposed_label(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_server_exposed_label(inputs)
	if (locale === "es") return es_mcp_server_exposed_label(inputs)
	if (locale === "ja") return ja_mcp_server_exposed_label(inputs)
	if (locale === "hi") return hi_mcp_server_exposed_label(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_server_exposed_label(inputs)
	if (locale === "ko") return ko_mcp_server_exposed_label(inputs)
	return fr_mcp_server_exposed_label(inputs)
});