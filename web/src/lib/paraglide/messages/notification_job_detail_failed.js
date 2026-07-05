/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ error: NonNullable<unknown> }} Notification_Job_Detail_FailedInputs */

const en_notification_job_detail_failed = /** @type {(inputs: Notification_Job_Detail_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`failed: ${i?.error}`)
};

const zh_cn2_notification_job_detail_failed = /** @type {(inputs: Notification_Job_Detail_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`失败：${i?.error}`)
};

const es_notification_job_detail_failed = /** @type {(inputs: Notification_Job_Detail_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`fallido: ${i?.error}`)
};

const ja_notification_job_detail_failed = /** @type {(inputs: Notification_Job_Detail_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`失敗：${i?.error}`)
};

const hi_notification_job_detail_failed = /** @type {(inputs: Notification_Job_Detail_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`विफल: ${i?.error}`)
};

const pt_br2_notification_job_detail_failed = /** @type {(inputs: Notification_Job_Detail_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`falhou: ${i?.error}`)
};

const ko_notification_job_detail_failed = /** @type {(inputs: Notification_Job_Detail_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`실패: ${i?.error}`)
};

const fr_notification_job_detail_failed = /** @type {(inputs: Notification_Job_Detail_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`échoué : ${i?.error}`)
};

/**
* | output |
* | --- |
* | "failed: {error}" |
*
* @param {Notification_Job_Detail_FailedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const notification_job_detail_failed = /** @type {((inputs: Notification_Job_Detail_FailedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Notification_Job_Detail_FailedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_notification_job_detail_failed(inputs)
	if (locale === "zh-CN") return zh_cn2_notification_job_detail_failed(inputs)
	if (locale === "es") return es_notification_job_detail_failed(inputs)
	if (locale === "ja") return ja_notification_job_detail_failed(inputs)
	if (locale === "hi") return hi_notification_job_detail_failed(inputs)
	if (locale === "pt-BR") return pt_br2_notification_job_detail_failed(inputs)
	if (locale === "ko") return ko_notification_job_detail_failed(inputs)
	return fr_notification_job_detail_failed(inputs)
});