/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Parallel_DescriptionInputs */

const en_wb_node_parallel_description = /** @type {(inputs: Wb_Node_Parallel_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Execute multiple steps concurrently`)
};

const zh_cn2_wb_node_parallel_description = /** @type {(inputs: Wb_Node_Parallel_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`并发执行多个步骤`)
};

const es_wb_node_parallel_description = /** @type {(inputs: Wb_Node_Parallel_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ejecutar múltiples pasos de forma concurrente`)
};

const ja_wb_node_parallel_description = /** @type {(inputs: Wb_Node_Parallel_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`複数のステップを並行して実行します`)
};

const hi_wb_node_parallel_description = /** @type {(inputs: Wb_Node_Parallel_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एक साथ कई चरण निष्पादित करें`)
};

const pt_br2_wb_node_parallel_description = /** @type {(inputs: Wb_Node_Parallel_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Executar múltiplos passos de forma concorrente`)
};

const ko_wb_node_parallel_description = /** @type {(inputs: Wb_Node_Parallel_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`여러 단계를 동시에 실행합니다`)
};

const fr_wb_node_parallel_description = /** @type {(inputs: Wb_Node_Parallel_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exécuter plusieurs étapes simultanément`)
};

/**
* | output |
* | --- |
* | "Execute multiple steps concurrently" |
*
* @param {Wb_Node_Parallel_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_parallel_description = /** @type {((inputs?: Wb_Node_Parallel_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Parallel_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_parallel_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_parallel_description(inputs)
	if (locale === "es") return es_wb_node_parallel_description(inputs)
	if (locale === "ja") return ja_wb_node_parallel_description(inputs)
	if (locale === "hi") return hi_wb_node_parallel_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_parallel_description(inputs)
	if (locale === "ko") return ko_wb_node_parallel_description(inputs)
	return fr_wb_node_parallel_description(inputs)
});