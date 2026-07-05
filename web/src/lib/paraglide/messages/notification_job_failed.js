/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ jobName: NonNullable<unknown>, error: NonNullable<unknown> }} Notification_Job_FailedInputs */

const en_notification_job_failed = /** @type {(inputs: Notification_Job_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Job "${i?.jobName}" failed: ${i?.error}`)
};

const zh_cn2_notification_job_failed = /** @type {(inputs: Notification_Job_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`任务 "${i?.jobName}" 失败：${i?.error}`)
};

const es_notification_job_failed = /** @type {(inputs: Notification_Job_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tarea "${i?.jobName}" fallida: ${i?.error}`)
};

const ja_notification_job_failed = /** @type {(inputs: Notification_Job_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ジョブ「${i?.jobName}」が失敗：${i?.error}`)
};

const hi_notification_job_failed = /** @type {(inputs: Notification_Job_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`कार्य "${i?.jobName}" विफल: ${i?.error}`)
};

const pt_br2_notification_job_failed = /** @type {(inputs: Notification_Job_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tarefa "${i?.jobName}" falhou: ${i?.error}`)
};

const ko_notification_job_failed = /** @type {(inputs: Notification_Job_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`작업 "${i?.jobName}" 실패: ${i?.error}`)
};

const fr_notification_job_failed = /** @type {(inputs: Notification_Job_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tâche "${i?.jobName}" échouée : ${i?.error}`)
};

/**
* | output |
* | --- |
* | "Job \"{jobName}\" failed: {error}" |
*
* @param {Notification_Job_FailedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const notification_job_failed = /** @type {((inputs: Notification_Job_FailedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Notification_Job_FailedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_notification_job_failed(inputs)
	if (locale === "zh-CN") return zh_cn2_notification_job_failed(inputs)
	if (locale === "es") return es_notification_job_failed(inputs)
	if (locale === "ja") return ja_notification_job_failed(inputs)
	if (locale === "hi") return hi_notification_job_failed(inputs)
	if (locale === "pt-BR") return pt_br2_notification_job_failed(inputs)
	if (locale === "ko") return ko_notification_job_failed(inputs)
	return fr_notification_job_failed(inputs)
});