/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Create_Job_LabelInputs */

const en_wb_node_create_job_label = /** @type {(inputs: Wb_Node_Create_Job_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create Job`)
};

const zh_cn2_wb_node_create_job_label = /** @type {(inputs: Wb_Node_Create_Job_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建任务`)
};

const es_wb_node_create_job_label = /** @type {(inputs: Wb_Node_Create_Job_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crear tarea`)
};

const ja_wb_node_create_job_label = /** @type {(inputs: Wb_Node_Create_Job_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジョブ作成`)
};

const hi_wb_node_create_job_label = /** @type {(inputs: Wb_Node_Create_Job_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`जॉब बनाएँ`)
};

const pt_br2_wb_node_create_job_label = /** @type {(inputs: Wb_Node_Create_Job_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criar Tarefa`)
};

const ko_wb_node_create_job_label = /** @type {(inputs: Wb_Node_Create_Job_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`작업 생성`)
};

const fr_wb_node_create_job_label = /** @type {(inputs: Wb_Node_Create_Job_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créer une tâche`)
};

/**
* | output |
* | --- |
* | "Create Job" |
*
* @param {Wb_Node_Create_Job_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_create_job_label = /** @type {((inputs?: Wb_Node_Create_Job_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Create_Job_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_create_job_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_create_job_label(inputs)
	if (locale === "es") return es_wb_node_create_job_label(inputs)
	if (locale === "ja") return ja_wb_node_create_job_label(inputs)
	if (locale === "hi") return hi_wb_node_create_job_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_create_job_label(inputs)
	if (locale === "ko") return ko_wb_node_create_job_label(inputs)
	return fr_wb_node_create_job_label(inputs)
});