/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Job_NameInputs */

const en_wb_field_job_name = /** @type {(inputs: Wb_Field_Job_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Job Name`)
};

const zh_cn2_wb_field_job_name = /** @type {(inputs: Wb_Field_Job_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任务名称`)
};

const es_wb_field_job_name = /** @type {(inputs: Wb_Field_Job_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre de tarea`)
};

const ja_wb_field_job_name = /** @type {(inputs: Wb_Field_Job_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジョブ名`)
};

const hi_wb_field_job_name = /** @type {(inputs: Wb_Field_Job_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`जॉब नाम`)
};

const pt_br2_wb_field_job_name = /** @type {(inputs: Wb_Field_Job_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome da Tarefa`)
};

const ko_wb_field_job_name = /** @type {(inputs: Wb_Field_Job_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`작업 이름`)
};

const fr_wb_field_job_name = /** @type {(inputs: Wb_Field_Job_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom de la tâche`)
};

/**
* | output |
* | --- |
* | "Job Name" |
*
* @param {Wb_Field_Job_NameInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_job_name = /** @type {((inputs?: Wb_Field_Job_NameInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Job_NameInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_job_name(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_job_name(inputs)
	if (locale === "es") return es_wb_field_job_name(inputs)
	if (locale === "ja") return ja_wb_field_job_name(inputs)
	if (locale === "hi") return hi_wb_field_job_name(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_job_name(inputs)
	if (locale === "ko") return ko_wb_field_job_name(inputs)
	return fr_wb_field_job_name(inputs)
});