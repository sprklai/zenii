/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Server_Config_HintInputs */

const en_mcp_server_config_hint = /** @type {(inputs: Mcp_Server_Config_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add the following to your MCP client configuration file:`)
};

const zh_cn2_mcp_server_config_hint = /** @type {(inputs: Mcp_Server_Config_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`将以下内容添加到您的 MCP 客户端配置文件中：`)
};

const es_mcp_server_config_hint = /** @type {(inputs: Mcp_Server_Config_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añade lo siguiente al archivo de configuración de tu cliente MCP:`)
};

const ja_mcp_server_config_hint = /** @type {(inputs: Mcp_Server_Config_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCPクライアント設定ファイルに以下を追加してください：`)
};

const hi_mcp_server_config_hint = /** @type {(inputs: Mcp_Server_Config_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अपने MCP क्लाइंट कॉन्फिगरेशन फाइल में निम्नलिखित जोड़ें:`)
};

const pt_br2_mcp_server_config_hint = /** @type {(inputs: Mcp_Server_Config_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicione o seguinte ao seu arquivo de configuração do cliente MCP:`)
};

const ko_mcp_server_config_hint = /** @type {(inputs: Mcp_Server_Config_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MCP 클라이언트 구성 파일에 다음을 추가하세요:`)
};

const fr_mcp_server_config_hint = /** @type {(inputs: Mcp_Server_Config_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajoutez ce qui suit au fichier de configuration de votre client MCP :`)
};

/**
* | output |
* | --- |
* | "Add the following to your MCP client configuration file:" |
*
* @param {Mcp_Server_Config_HintInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_server_config_hint = /** @type {((inputs?: Mcp_Server_Config_HintInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Server_Config_HintInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_server_config_hint(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_server_config_hint(inputs)
	if (locale === "es") return es_mcp_server_config_hint(inputs)
	if (locale === "ja") return ja_mcp_server_config_hint(inputs)
	if (locale === "hi") return hi_mcp_server_config_hint(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_server_config_hint(inputs)
	if (locale === "ko") return ko_mcp_server_config_hint(inputs)
	return fr_mcp_server_config_hint(inputs)
});