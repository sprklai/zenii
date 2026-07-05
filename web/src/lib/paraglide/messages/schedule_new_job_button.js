/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_New_Job_ButtonInputs */

const en_schedule_new_job_button = /** @type {(inputs: Schedule_New_Job_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New Job`)
};

const zh_cn2_schedule_new_job_button = /** @type {(inputs: Schedule_New_Job_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建任务`)
};

const es_schedule_new_job_button = /** @type {(inputs: Schedule_New_Job_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nueva tarea`)
};

const ja_schedule_new_job_button = /** @type {(inputs: Schedule_New_Job_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新規ジョブ`)
};

const hi_schedule_new_job_button = /** @type {(inputs: Schedule_New_Job_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`नया कार्य`)
};

const pt_br2_schedule_new_job_button = /** @type {(inputs: Schedule_New_Job_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nova Tarefa`)
};

const ko_schedule_new_job_button = /** @type {(inputs: Schedule_New_Job_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`새 작업`)
};

const fr_schedule_new_job_button = /** @type {(inputs: Schedule_New_Job_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelle tâche`)
};

/**
* | output |
* | --- |
* | "New Job" |
*
* @param {Schedule_New_Job_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_new_job_button = /** @type {((inputs?: Schedule_New_Job_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_New_Job_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_new_job_button(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_new_job_button(inputs)
	if (locale === "es") return es_schedule_new_job_button(inputs)
	if (locale === "ja") return ja_schedule_new_job_button(inputs)
	if (locale === "hi") return hi_schedule_new_job_button(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_new_job_button(inputs)
	if (locale === "ko") return ko_schedule_new_job_button(inputs)
	return fr_schedule_new_job_button(inputs)
});