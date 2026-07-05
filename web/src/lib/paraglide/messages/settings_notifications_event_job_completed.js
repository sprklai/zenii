/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notifications_Event_Job_CompletedInputs */

const en_settings_notifications_event_job_completed = /** @type {(inputs: Settings_Notifications_Event_Job_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Job Completed`)
};

const zh_cn2_settings_notifications_event_job_completed = /** @type {(inputs: Settings_Notifications_Event_Job_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任务完成`)
};

const es_settings_notifications_event_job_completed = /** @type {(inputs: Settings_Notifications_Event_Job_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tarea completada`)
};

const ja_settings_notifications_event_job_completed = /** @type {(inputs: Settings_Notifications_Event_Job_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジョブ完了`)
};

const hi_settings_notifications_event_job_completed = /** @type {(inputs: Settings_Notifications_Event_Job_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कार्य पूर्ण`)
};

const pt_br2_settings_notifications_event_job_completed = /** @type {(inputs: Settings_Notifications_Event_Job_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tarefa Concluída`)
};

const ko_settings_notifications_event_job_completed = /** @type {(inputs: Settings_Notifications_Event_Job_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`작업 완료`)
};

const fr_settings_notifications_event_job_completed = /** @type {(inputs: Settings_Notifications_Event_Job_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tâche terminée`)
};

/**
* | output |
* | --- |
* | "Job Completed" |
*
* @param {Settings_Notifications_Event_Job_CompletedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_notifications_event_job_completed = /** @type {((inputs?: Settings_Notifications_Event_Job_CompletedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notifications_Event_Job_CompletedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_notifications_event_job_completed(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_notifications_event_job_completed(inputs)
	if (locale === "es") return es_settings_notifications_event_job_completed(inputs)
	if (locale === "ja") return ja_settings_notifications_event_job_completed(inputs)
	if (locale === "hi") return hi_settings_notifications_event_job_completed(inputs)
	if (locale === "pt-BR") return pt_br2_settings_notifications_event_job_completed(inputs)
	if (locale === "ko") return ko_settings_notifications_event_job_completed(inputs)
	return fr_settings_notifications_event_job_completed(inputs)
});