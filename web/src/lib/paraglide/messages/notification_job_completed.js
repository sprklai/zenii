/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ jobName: NonNullable<unknown> }} Notification_Job_CompletedInputs */

const en_notification_job_completed = /** @type {(inputs: Notification_Job_CompletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Job "${i?.jobName}" completed`)
};

const zh_cn2_notification_job_completed = /** @type {(inputs: Notification_Job_CompletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`任务 "${i?.jobName}" 已完成`)
};

const es_notification_job_completed = /** @type {(inputs: Notification_Job_CompletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tarea "${i?.jobName}" completada`)
};

const ja_notification_job_completed = /** @type {(inputs: Notification_Job_CompletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ジョブ「${i?.jobName}」が完了しました`)
};

const hi_notification_job_completed = /** @type {(inputs: Notification_Job_CompletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`कार्य "${i?.jobName}" पूर्ण`)
};

const pt_br2_notification_job_completed = /** @type {(inputs: Notification_Job_CompletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tarefa "${i?.jobName}" concluída`)
};

const ko_notification_job_completed = /** @type {(inputs: Notification_Job_CompletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`작업 "${i?.jobName}" 완료`)
};

const fr_notification_job_completed = /** @type {(inputs: Notification_Job_CompletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tâche "${i?.jobName}" terminée`)
};

/**
* | output |
* | --- |
* | "Job \"{jobName}\" completed" |
*
* @param {Notification_Job_CompletedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const notification_job_completed = /** @type {((inputs: Notification_Job_CompletedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Notification_Job_CompletedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_notification_job_completed(inputs)
	if (locale === "zh-CN") return zh_cn2_notification_job_completed(inputs)
	if (locale === "es") return es_notification_job_completed(inputs)
	if (locale === "ja") return ja_notification_job_completed(inputs)
	if (locale === "hi") return hi_notification_job_completed(inputs)
	if (locale === "pt-BR") return pt_br2_notification_job_completed(inputs)
	if (locale === "ko") return ko_notification_job_completed(inputs)
	return fr_notification_job_completed(inputs)
});