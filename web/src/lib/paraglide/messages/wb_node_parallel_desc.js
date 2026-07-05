/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Parallel_DescInputs */

const en_wb_node_parallel_desc = /** @type {(inputs: Wb_Node_Parallel_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Execute steps concurrently`)
};

const zh_cn2_wb_node_parallel_desc = /** @type {(inputs: Wb_Node_Parallel_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`并发执行步骤`)
};

const es_wb_node_parallel_desc = /** @type {(inputs: Wb_Node_Parallel_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ejecutar pasos de forma concurrente`)
};

const ja_wb_node_parallel_desc = /** @type {(inputs: Wb_Node_Parallel_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ステップを並行実行`)
};

const hi_wb_node_parallel_desc = /** @type {(inputs: Wb_Node_Parallel_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चरण एक साथ चलाएँ`)
};

const pt_br2_wb_node_parallel_desc = /** @type {(inputs: Wb_Node_Parallel_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Executar passos de forma concorrente`)
};

const ko_wb_node_parallel_desc = /** @type {(inputs: Wb_Node_Parallel_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`단계를 동시에 실행`)
};

const fr_wb_node_parallel_desc = /** @type {(inputs: Wb_Node_Parallel_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exécuter des étapes simultanément`)
};

/**
* | output |
* | --- |
* | "Execute steps concurrently" |
*
* @param {Wb_Node_Parallel_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_parallel_desc = /** @type {((inputs?: Wb_Node_Parallel_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Parallel_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_parallel_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_parallel_desc(inputs)
	if (locale === "es") return es_wb_node_parallel_desc(inputs)
	if (locale === "ja") return ja_wb_node_parallel_desc(inputs)
	if (locale === "hi") return hi_wb_node_parallel_desc(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_parallel_desc(inputs)
	if (locale === "ko") return ko_wb_node_parallel_desc(inputs)
	return fr_wb_node_parallel_desc(inputs)
});