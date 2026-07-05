/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Trigger_Manual_DescriptionInputs */

const en_wb_node_trigger_manual_description = /** @type {(inputs: Wb_Node_Trigger_Manual_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trigger this workflow manually on demand`)
};

const zh_cn2_wb_node_trigger_manual_description = /** @type {(inputs: Wb_Node_Trigger_Manual_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按需手动触发此工作流`)
};

const es_wb_node_trigger_manual_description = /** @type {(inputs: Wb_Node_Trigger_Manual_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disparar este flujo de trabajo manualmente bajo demanda`)
};

const ja_wb_node_trigger_manual_description = /** @type {(inputs: Wb_Node_Trigger_Manual_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このワークフローをオンデマンドで手動トリガーします`)
};

const hi_wb_node_trigger_manual_description = /** @type {(inputs: Wb_Node_Trigger_Manual_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`माँग पर इस वर्कफ़्लो को मैन्युअल रूप से ट्रिगर करें`)
};

const pt_br2_wb_node_trigger_manual_description = /** @type {(inputs: Wb_Node_Trigger_Manual_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disparar este workflow manualmente sob demanda`)
};

const ko_wb_node_trigger_manual_description = /** @type {(inputs: Wb_Node_Trigger_Manual_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이 워크플로를 요청 시 수동으로 트리거합니다`)
};

const fr_wb_node_trigger_manual_description = /** @type {(inputs: Wb_Node_Trigger_Manual_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déclencher ce flux de travail manuellement à la demande`)
};

/**
* | output |
* | --- |
* | "Trigger this workflow manually on demand" |
*
* @param {Wb_Node_Trigger_Manual_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_trigger_manual_description = /** @type {((inputs?: Wb_Node_Trigger_Manual_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Trigger_Manual_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_trigger_manual_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_trigger_manual_description(inputs)
	if (locale === "es") return es_wb_node_trigger_manual_description(inputs)
	if (locale === "ja") return ja_wb_node_trigger_manual_description(inputs)
	if (locale === "hi") return hi_wb_node_trigger_manual_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_trigger_manual_description(inputs)
	if (locale === "ko") return ko_wb_node_trigger_manual_description(inputs)
	return fr_wb_node_trigger_manual_description(inputs)
});