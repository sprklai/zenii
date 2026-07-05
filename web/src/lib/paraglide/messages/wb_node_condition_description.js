/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Condition_DescriptionInputs */

const en_wb_node_condition_description = /** @type {(inputs: Wb_Node_Condition_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Branch workflow execution based on an expression`)
};

const zh_cn2_wb_node_condition_description = /** @type {(inputs: Wb_Node_Condition_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`根据表达式对工作流执行进行分支`)
};

const es_wb_node_condition_description = /** @type {(inputs: Wb_Node_Condition_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ramificar la ejecución del flujo de trabajo basándose en una expresión`)
};

const ja_wb_node_condition_description = /** @type {(inputs: Wb_Node_Condition_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`式に基づいてワークフローの実行を分岐させます`)
};

const hi_wb_node_condition_description = /** @type {(inputs: Wb_Node_Condition_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एक्सप्रेशन के आधार पर वर्कफ़्लो निष्पादन शाखित करें`)
};

const pt_br2_wb_node_condition_description = /** @type {(inputs: Wb_Node_Condition_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ramificar a execução do workflow com base em uma expressão`)
};

const ko_wb_node_condition_description = /** @type {(inputs: Wb_Node_Condition_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`식에 따라 워크플로 실행을 분기합니다`)
};

const fr_wb_node_condition_description = /** @type {(inputs: Wb_Node_Condition_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brancher l'exécution du flux de travail selon une expression`)
};

/**
* | output |
* | --- |
* | "Branch workflow execution based on an expression" |
*
* @param {Wb_Node_Condition_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_condition_description = /** @type {((inputs?: Wb_Node_Condition_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Condition_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_condition_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_condition_description(inputs)
	if (locale === "es") return es_wb_node_condition_description(inputs)
	if (locale === "ja") return ja_wb_node_condition_description(inputs)
	if (locale === "hi") return hi_wb_node_condition_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_condition_description(inputs)
	if (locale === "ko") return ko_wb_node_condition_description(inputs)
	return fr_wb_node_condition_description(inputs)
});