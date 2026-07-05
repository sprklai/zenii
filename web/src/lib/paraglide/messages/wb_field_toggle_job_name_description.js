/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Toggle_Job_Name_DescriptionInputs */

const en_wb_field_toggle_job_name_description = /** @type {(inputs: Wb_Field_Toggle_Job_Name_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name of the job to enable or disable`)
};

const zh_cn2_wb_field_toggle_job_name_description = /** @type {(inputs: Wb_Field_Toggle_Job_Name_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要启用或禁用的任务名称`)
};

const es_wb_field_toggle_job_name_description = /** @type {(inputs: Wb_Field_Toggle_Job_Name_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre de la tarea a habilitar o deshabilitar`)
};

const ja_wb_field_toggle_job_name_description = /** @type {(inputs: Wb_Field_Toggle_Job_Name_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有効または無効にするジョブ名`)
};

const hi_wb_field_toggle_job_name_description = /** @type {(inputs: Wb_Field_Toggle_Job_Name_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सक्षम या अक्षम करने के लिए जॉब का नाम`)
};

const pt_br2_wb_field_toggle_job_name_description = /** @type {(inputs: Wb_Field_Toggle_Job_Name_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome da tarefa a habilitar ou desabilitar`)
};

const ko_wb_field_toggle_job_name_description = /** @type {(inputs: Wb_Field_Toggle_Job_Name_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`활성화 또는 비활성화할 작업 이름`)
};

const fr_wb_field_toggle_job_name_description = /** @type {(inputs: Wb_Field_Toggle_Job_Name_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom de la tâche à activer ou désactiver`)
};

/**
* | output |
* | --- |
* | "Name of the job to enable or disable" |
*
* @param {Wb_Field_Toggle_Job_Name_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_toggle_job_name_description = /** @type {((inputs?: Wb_Field_Toggle_Job_Name_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Toggle_Job_Name_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_toggle_job_name_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_toggle_job_name_description(inputs)
	if (locale === "es") return es_wb_field_toggle_job_name_description(inputs)
	if (locale === "ja") return ja_wb_field_toggle_job_name_description(inputs)
	if (locale === "hi") return hi_wb_field_toggle_job_name_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_toggle_job_name_description(inputs)
	if (locale === "ko") return ko_wb_field_toggle_job_name_description(inputs)
	return fr_wb_field_toggle_job_name_description(inputs)
});