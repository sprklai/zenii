/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Shell_DescInputs */

const en_wb_node_shell_desc = /** @type {(inputs: Wb_Node_Shell_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Execute shell command`)
};

const zh_cn2_wb_node_shell_desc = /** @type {(inputs: Wb_Node_Shell_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`执行 Shell 命令`)
};

const es_wb_node_shell_desc = /** @type {(inputs: Wb_Node_Shell_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ejecutar comando de Shell`)
};

const ja_wb_node_shell_desc = /** @type {(inputs: Wb_Node_Shell_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shell コマンドを実行`)
};

const hi_wb_node_shell_desc = /** @type {(inputs: Wb_Node_Shell_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shell कमांड निष्पादित करें`)
};

const pt_br2_wb_node_shell_desc = /** @type {(inputs: Wb_Node_Shell_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Executar comando Shell`)
};

const ko_wb_node_shell_desc = /** @type {(inputs: Wb_Node_Shell_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shell 명령 실행`)
};

const fr_wb_node_shell_desc = /** @type {(inputs: Wb_Node_Shell_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exécuter une commande Shell`)
};

/**
* | output |
* | --- |
* | "Execute shell command" |
*
* @param {Wb_Node_Shell_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_shell_desc = /** @type {((inputs?: Wb_Node_Shell_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Shell_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_shell_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_shell_desc(inputs)
	if (locale === "es") return es_wb_node_shell_desc(inputs)
	if (locale === "ja") return ja_wb_node_shell_desc(inputs)
	if (locale === "hi") return hi_wb_node_shell_desc(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_shell_desc(inputs)
	if (locale === "ko") return ko_wb_node_shell_desc(inputs)
	return fr_wb_node_shell_desc(inputs)
});