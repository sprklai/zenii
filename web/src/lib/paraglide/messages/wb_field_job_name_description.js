/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Job_Name_DescriptionInputs */

const en_wb_field_job_name_description = /** @type {(inputs: Wb_Field_Job_Name_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unique name for the scheduled job`)
};

const zh_cn2_wb_field_job_name_description = /** @type {(inputs: Wb_Field_Job_Name_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`计划任务的唯一名称`)
};

const es_wb_field_job_name_description = /** @type {(inputs: Wb_Field_Job_Name_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre único para la tarea programada`)
};

const ja_wb_field_job_name_description = /** @type {(inputs: Wb_Field_Job_Name_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スケジュールジョブの一意の名前`)
};

const hi_wb_field_job_name_description = /** @type {(inputs: Wb_Field_Job_Name_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`शेड्यूल्ड जॉब के लिए अद्वितीय नाम`)
};

const pt_br2_wb_field_job_name_description = /** @type {(inputs: Wb_Field_Job_Name_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome único para a tarefa agendada`)
};

const ko_wb_field_job_name_description = /** @type {(inputs: Wb_Field_Job_Name_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`예약 작업의 고유 이름`)
};

const fr_wb_field_job_name_description = /** @type {(inputs: Wb_Field_Job_Name_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom unique pour la tâche planifiée`)
};

/**
* | output |
* | --- |
* | "Unique name for the scheduled job" |
*
* @param {Wb_Field_Job_Name_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_job_name_description = /** @type {((inputs?: Wb_Field_Job_Name_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Job_Name_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_job_name_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_job_name_description(inputs)
	if (locale === "es") return es_wb_field_job_name_description(inputs)
	if (locale === "ja") return ja_wb_field_job_name_description(inputs)
	if (locale === "hi") return hi_wb_field_job_name_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_job_name_description(inputs)
	if (locale === "ko") return ko_wb_field_job_name_description(inputs)
	return fr_wb_field_job_name_description(inputs)
});