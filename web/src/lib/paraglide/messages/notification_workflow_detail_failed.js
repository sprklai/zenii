/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Notification_Workflow_Detail_FailedInputs */

const en_notification_workflow_detail_failed = /** @type {(inputs: Notification_Workflow_Detail_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`failed`)
};

const zh_cn2_notification_workflow_detail_failed = /** @type {(inputs: Notification_Workflow_Detail_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失败`)
};

const es_notification_workflow_detail_failed = /** @type {(inputs: Notification_Workflow_Detail_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`fallido`)
};

const ja_notification_workflow_detail_failed = /** @type {(inputs: Notification_Workflow_Detail_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失敗`)
};

const hi_notification_workflow_detail_failed = /** @type {(inputs: Notification_Workflow_Detail_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`विफल`)
};

const pt_br2_notification_workflow_detail_failed = /** @type {(inputs: Notification_Workflow_Detail_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`falhou`)
};

const ko_notification_workflow_detail_failed = /** @type {(inputs: Notification_Workflow_Detail_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`실패`)
};

const fr_notification_workflow_detail_failed = /** @type {(inputs: Notification_Workflow_Detail_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`échoué`)
};

/**
* | output |
* | --- |
* | "failed" |
*
* @param {Notification_Workflow_Detail_FailedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const notification_workflow_detail_failed = /** @type {((inputs?: Notification_Workflow_Detail_FailedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Notification_Workflow_Detail_FailedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_notification_workflow_detail_failed(inputs)
	if (locale === "zh-CN") return zh_cn2_notification_workflow_detail_failed(inputs)
	if (locale === "es") return es_notification_workflow_detail_failed(inputs)
	if (locale === "ja") return ja_notification_workflow_detail_failed(inputs)
	if (locale === "hi") return hi_notification_workflow_detail_failed(inputs)
	if (locale === "pt-BR") return pt_br2_notification_workflow_detail_failed(inputs)
	if (locale === "ko") return ko_notification_workflow_detail_failed(inputs)
	return fr_notification_workflow_detail_failed(inputs)
});