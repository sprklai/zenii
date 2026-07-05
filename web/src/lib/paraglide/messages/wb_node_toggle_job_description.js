/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Toggle_Job_DescriptionInputs */

const en_wb_node_toggle_job_description = /** @type {(inputs: Wb_Node_Toggle_Job_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enable or disable an existing scheduled job`)
};

const zh_cn2_wb_node_toggle_job_description = /** @type {(inputs: Wb_Node_Toggle_Job_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`启用或禁用现有计划任务`)
};

const es_wb_node_toggle_job_description = /** @type {(inputs: Wb_Node_Toggle_Job_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Habilitar o deshabilitar una tarea programada existente`)
};

const ja_wb_node_toggle_job_description = /** @type {(inputs: Wb_Node_Toggle_Job_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`既存のスケジュールジョブを有効または無効にします`)
};

const hi_wb_node_toggle_job_description = /** @type {(inputs: Wb_Node_Toggle_Job_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मौजूदा शेड्यूल्ड जॉब सक्षम या अक्षम करें`)
};

const pt_br2_wb_node_toggle_job_description = /** @type {(inputs: Wb_Node_Toggle_Job_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Habilitar ou desabilitar uma tarefa agendada existente`)
};

const ko_wb_node_toggle_job_description = /** @type {(inputs: Wb_Node_Toggle_Job_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`기존 예약 작업을 활성화 또는 비활성화합니다`)
};

const fr_wb_node_toggle_job_description = /** @type {(inputs: Wb_Node_Toggle_Job_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activer ou désactiver une tâche planifiée existante`)
};

/**
* | output |
* | --- |
* | "Enable or disable an existing scheduled job" |
*
* @param {Wb_Node_Toggle_Job_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_toggle_job_description = /** @type {((inputs?: Wb_Node_Toggle_Job_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Toggle_Job_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_toggle_job_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_toggle_job_description(inputs)
	if (locale === "es") return es_wb_node_toggle_job_description(inputs)
	if (locale === "ja") return ja_wb_node_toggle_job_description(inputs)
	if (locale === "hi") return hi_wb_node_toggle_job_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_toggle_job_description(inputs)
	if (locale === "ko") return ko_wb_node_toggle_job_description(inputs)
	return fr_wb_node_toggle_job_description(inputs)
});