/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Shell_DescriptionInputs */

const en_wb_node_shell_description = /** @type {(inputs: Wb_Node_Shell_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Execute a shell command and capture its output`)
};

const zh_cn2_wb_node_shell_description = /** @type {(inputs: Wb_Node_Shell_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`执行 Shell 命令并捕获其输出`)
};

const es_wb_node_shell_description = /** @type {(inputs: Wb_Node_Shell_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ejecutar un comando de Shell y capturar su salida`)
};

const ja_wb_node_shell_description = /** @type {(inputs: Wb_Node_Shell_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shell コマンドを実行してその出力を取得します`)
};

const hi_wb_node_shell_description = /** @type {(inputs: Wb_Node_Shell_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shell कमांड निष्पादित करें और उसका आउटपुट कैप्चर करें`)
};

const pt_br2_wb_node_shell_description = /** @type {(inputs: Wb_Node_Shell_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Executar um comando Shell e capturar sua saída`)
};

const ko_wb_node_shell_description = /** @type {(inputs: Wb_Node_Shell_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shell 명령을 실행하고 출력을 캡처합니다`)
};

const fr_wb_node_shell_description = /** @type {(inputs: Wb_Node_Shell_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exécuter une commande Shell et capturer sa sortie`)
};

/**
* | output |
* | --- |
* | "Execute a shell command and capture its output" |
*
* @param {Wb_Node_Shell_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_shell_description = /** @type {((inputs?: Wb_Node_Shell_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Shell_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_shell_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_shell_description(inputs)
	if (locale === "es") return es_wb_node_shell_description(inputs)
	if (locale === "ja") return ja_wb_node_shell_description(inputs)
	if (locale === "hi") return hi_wb_node_shell_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_shell_description(inputs)
	if (locale === "ko") return ko_wb_node_shell_description(inputs)
	return fr_wb_node_shell_description(inputs)
});