/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Server_Prefix_HintInputs */

const en_mcp_server_prefix_hint = /** @type {(inputs: Mcp_Server_Prefix_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Optional prefix added to all exposed tool names.`)
};

const zh_cn2_mcp_server_prefix_hint = /** @type {(inputs: Mcp_Server_Prefix_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可选前缀，添加到所有公开工具名称。`)
};

const es_mcp_server_prefix_hint = /** @type {(inputs: Mcp_Server_Prefix_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prefijo opcional añadido a todos los nombres de herramientas expuestas.`)
};

const ja_mcp_server_prefix_hint = /** @type {(inputs: Mcp_Server_Prefix_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開されたすべてのツール名に追加されるオプションのプレフィックス。`)
};

const hi_mcp_server_prefix_hint = /** @type {(inputs: Mcp_Server_Prefix_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सभी एक्सपोज़ किए गए टूल नामों में वैकल्पिक उपसर्ग जोड़ा जाता है।`)
};

const pt_br2_mcp_server_prefix_hint = /** @type {(inputs: Mcp_Server_Prefix_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prefixo opcional adicionado a todos os nomes de ferramentas expostas.`)
};

const ko_mcp_server_prefix_hint = /** @type {(inputs: Mcp_Server_Prefix_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`노출된 모든 도구 이름에 추가되는 선택적 접두사.`)
};

const fr_mcp_server_prefix_hint = /** @type {(inputs: Mcp_Server_Prefix_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Préfixe optionnel ajouté à tous les noms d'outils exposés.`)
};

/**
* | output |
* | --- |
* | "Optional prefix added to all exposed tool names." |
*
* @param {Mcp_Server_Prefix_HintInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_server_prefix_hint = /** @type {((inputs?: Mcp_Server_Prefix_HintInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Server_Prefix_HintInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_server_prefix_hint(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_server_prefix_hint(inputs)
	if (locale === "es") return es_mcp_server_prefix_hint(inputs)
	if (locale === "ja") return ja_mcp_server_prefix_hint(inputs)
	if (locale === "hi") return hi_mcp_server_prefix_hint(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_server_prefix_hint(inputs)
	if (locale === "ko") return ko_mcp_server_prefix_hint(inputs)
	return fr_mcp_server_prefix_hint(inputs)
});