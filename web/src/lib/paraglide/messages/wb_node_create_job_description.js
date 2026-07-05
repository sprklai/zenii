/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Create_Job_DescriptionInputs */

const en_wb_node_create_job_description = /** @type {(inputs: Wb_Node_Create_Job_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create a new scheduled job`)
};

const zh_cn2_wb_node_create_job_description = /** @type {(inputs: Wb_Node_Create_Job_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建新的计划任务`)
};

const es_wb_node_create_job_description = /** @type {(inputs: Wb_Node_Create_Job_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crear una nueva tarea programada`)
};

const ja_wb_node_create_job_description = /** @type {(inputs: Wb_Node_Create_Job_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいスケジュールジョブを作成します`)
};

const hi_wb_node_create_job_description = /** @type {(inputs: Wb_Node_Create_Job_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एक नया शेड्यूल्ड जॉब बनाएँ`)
};

const pt_br2_wb_node_create_job_description = /** @type {(inputs: Wb_Node_Create_Job_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criar uma nova tarefa agendada`)
};

const ko_wb_node_create_job_description = /** @type {(inputs: Wb_Node_Create_Job_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`새 예약 작업을 생성합니다`)
};

const fr_wb_node_create_job_description = /** @type {(inputs: Wb_Node_Create_Job_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créer une nouvelle tâche planifiée`)
};

/**
* | output |
* | --- |
* | "Create a new scheduled job" |
*
* @param {Wb_Node_Create_Job_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_create_job_description = /** @type {((inputs?: Wb_Node_Create_Job_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Create_Job_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_create_job_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_create_job_description(inputs)
	if (locale === "es") return es_wb_node_create_job_description(inputs)
	if (locale === "ja") return ja_wb_node_create_job_description(inputs)
	if (locale === "hi") return hi_wb_node_create_job_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_create_job_description(inputs)
	if (locale === "ko") return ko_wb_node_create_job_description(inputs)
	return fr_wb_node_create_job_description(inputs)
});