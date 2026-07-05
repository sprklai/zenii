/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Permissions_No_ToolsInputs */

const en_settings_permissions_no_tools = /** @type {(inputs: Settings_Permissions_No_ToolsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No tools registered. Start the daemon to see available tools.`)
};

const zh_cn2_settings_permissions_no_tools = /** @type {(inputs: Settings_Permissions_No_ToolsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未注册工具。启动守护进程以查看可用工具。`)
};

const es_settings_permissions_no_tools = /** @type {(inputs: Settings_Permissions_No_ToolsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay herramientas registradas. Inicia el daemon para ver las herramientas disponibles.`)
};

const ja_settings_permissions_no_tools = /** @type {(inputs: Settings_Permissions_No_ToolsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ツールが登録されていません。デーモンを起動して利用可能なツールを確認してください。`)
};

const hi_settings_permissions_no_tools = /** @type {(inputs: Settings_Permissions_No_ToolsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कोई टूल पंजीकृत नहीं। उपलब्ध टूल देखने के लिए daemon शुरू करें।`)
};

const pt_br2_settings_permissions_no_tools = /** @type {(inputs: Settings_Permissions_No_ToolsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma ferramenta registrada. Inicie o daemon para ver as ferramentas disponíveis.`)
};

const ko_settings_permissions_no_tools = /** @type {(inputs: Settings_Permissions_No_ToolsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`등록된 도구가 없습니다. 사용 가능한 도구를 보려면 daemon을 시작하세요.`)
};

const fr_settings_permissions_no_tools = /** @type {(inputs: Settings_Permissions_No_ToolsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun outil enregistré. Démarrez le daemon pour voir les outils disponibles.`)
};

/**
* | output |
* | --- |
* | "No tools registered. Start the daemon to see available tools." |
*
* @param {Settings_Permissions_No_ToolsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_permissions_no_tools = /** @type {((inputs?: Settings_Permissions_No_ToolsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Permissions_No_ToolsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_permissions_no_tools(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_permissions_no_tools(inputs)
	if (locale === "es") return es_settings_permissions_no_tools(inputs)
	if (locale === "ja") return ja_settings_permissions_no_tools(inputs)
	if (locale === "hi") return hi_settings_permissions_no_tools(inputs)
	if (locale === "pt-BR") return pt_br2_settings_permissions_no_tools(inputs)
	if (locale === "ko") return ko_settings_permissions_no_tools(inputs)
	return fr_settings_permissions_no_tools(inputs)
});