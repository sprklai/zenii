/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Trigger_Cron_DescriptionInputs */

const en_wb_node_trigger_cron_description = /** @type {(inputs: Wb_Node_Trigger_Cron_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trigger this workflow on a cron schedule`)
};

const zh_cn2_wb_node_trigger_cron_description = /** @type {(inputs: Wb_Node_Trigger_Cron_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按 Cron 计划触发此工作流`)
};

const es_wb_node_trigger_cron_description = /** @type {(inputs: Wb_Node_Trigger_Cron_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disparar este flujo de trabajo según una programación Cron`)
};

const ja_wb_node_trigger_cron_description = /** @type {(inputs: Wb_Node_Trigger_Cron_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron スケジュールでこのワークフローをトリガーします`)
};

const hi_wb_node_trigger_cron_description = /** @type {(inputs: Wb_Node_Trigger_Cron_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron शेड्यूल पर इस वर्कफ़्लो को ट्रिगर करें`)
};

const pt_br2_wb_node_trigger_cron_description = /** @type {(inputs: Wb_Node_Trigger_Cron_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disparar este workflow em um agendamento Cron`)
};

const ko_wb_node_trigger_cron_description = /** @type {(inputs: Wb_Node_Trigger_Cron_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron 스케줄로 이 워크플로를 트리거합니다`)
};

const fr_wb_node_trigger_cron_description = /** @type {(inputs: Wb_Node_Trigger_Cron_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déclencher ce flux de travail selon une planification Cron`)
};

/**
* | output |
* | --- |
* | "Trigger this workflow on a cron schedule" |
*
* @param {Wb_Node_Trigger_Cron_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_trigger_cron_description = /** @type {((inputs?: Wb_Node_Trigger_Cron_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Trigger_Cron_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_trigger_cron_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_trigger_cron_description(inputs)
	if (locale === "es") return es_wb_node_trigger_cron_description(inputs)
	if (locale === "ja") return ja_wb_node_trigger_cron_description(inputs)
	if (locale === "hi") return hi_wb_node_trigger_cron_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_trigger_cron_description(inputs)
	if (locale === "ko") return ko_wb_node_trigger_cron_description(inputs)
	return fr_wb_node_trigger_cron_description(inputs)
});