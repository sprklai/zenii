/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Server_Connect_TitleInputs */

const en_mcp_server_connect_title = /** @type {(inputs: Mcp_Server_Connect_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect your AI clients`)
};

const zh_cn2_mcp_server_connect_title = /** @type {(inputs: Mcp_Server_Connect_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`连接您的 AI 客户端`)
};

const es_mcp_server_connect_title = /** @type {(inputs: Mcp_Server_Connect_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conecta tus clientes de IA`)
};

const ja_mcp_server_connect_title = /** @type {(inputs: Mcp_Server_Connect_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AIクライアントを接続する`)
};

const hi_mcp_server_connect_title = /** @type {(inputs: Mcp_Server_Connect_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अपने AI क्लाइंट कनेक्ट करें`)
};

const pt_br2_mcp_server_connect_title = /** @type {(inputs: Mcp_Server_Connect_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conecte seus clientes de IA`)
};

const ko_mcp_server_connect_title = /** @type {(inputs: Mcp_Server_Connect_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI 클라이언트 연결`)
};

const fr_mcp_server_connect_title = /** @type {(inputs: Mcp_Server_Connect_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectez vos clients IA`)
};

/**
* | output |
* | --- |
* | "Connect your AI clients" |
*
* @param {Mcp_Server_Connect_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_server_connect_title = /** @type {((inputs?: Mcp_Server_Connect_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Server_Connect_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_server_connect_title(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_server_connect_title(inputs)
	if (locale === "es") return es_mcp_server_connect_title(inputs)
	if (locale === "ja") return ja_mcp_server_connect_title(inputs)
	if (locale === "hi") return hi_mcp_server_connect_title(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_server_connect_title(inputs)
	if (locale === "ko") return ko_mcp_server_connect_title(inputs)
	return fr_mcp_server_connect_title(inputs)
});