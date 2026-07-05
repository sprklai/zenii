/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Server_Exposed_HintInputs */

const en_mcp_server_exposed_hint = /** @type {(inputs: Mcp_Server_Exposed_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comma-separated list of tool names to expose. Leave empty to expose all tools.`)
};

const zh_cn2_mcp_server_exposed_hint = /** @type {(inputs: Mcp_Server_Exposed_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要公开的工具名称的逗号分隔列表。留空以公开所有工具。`)
};

const es_mcp_server_exposed_hint = /** @type {(inputs: Mcp_Server_Exposed_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista separada por comas de herramientas a exponer. Deja vacío para exponer todas.`)
};

const ja_mcp_server_exposed_hint = /** @type {(inputs: Mcp_Server_Exposed_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開するツール名のカンマ区切りリスト。すべてのツールを公開するには空にしてください。`)
};

const hi_mcp_server_exposed_hint = /** @type {(inputs: Mcp_Server_Exposed_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एक्सपोज़ करने वाले टूल नामों की अल्पविराम-अलग सूची। सभी टूल एक्सपोज़ करने के लिए खाली छोड़ें।`)
};

const pt_br2_mcp_server_exposed_hint = /** @type {(inputs: Mcp_Server_Exposed_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista separada por vírgulas de ferramentas a expor. Deixe vazio para expor todas as ferramentas.`)
};

const ko_mcp_server_exposed_hint = /** @type {(inputs: Mcp_Server_Exposed_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`노출할 도구 이름의 쉼표로 구분된 목록. 모든 도구를 노출하려면 비워 두세요.`)
};

const fr_mcp_server_exposed_hint = /** @type {(inputs: Mcp_Server_Exposed_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liste séparée par des virgules des outils à exposer. Laissez vide pour exposer tous les outils.`)
};

/**
* | output |
* | --- |
* | "Comma-separated list of tool names to expose. Leave empty to expose all tools." |
*
* @param {Mcp_Server_Exposed_HintInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_server_exposed_hint = /** @type {((inputs?: Mcp_Server_Exposed_HintInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Server_Exposed_HintInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_server_exposed_hint(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_server_exposed_hint(inputs)
	if (locale === "es") return es_mcp_server_exposed_hint(inputs)
	if (locale === "ja") return ja_mcp_server_exposed_hint(inputs)
	if (locale === "hi") return hi_mcp_server_exposed_hint(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_server_exposed_hint(inputs)
	if (locale === "ko") return ko_mcp_server_exposed_hint(inputs)
	return fr_mcp_server_exposed_hint(inputs)
});