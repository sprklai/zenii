/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ workflowId: NonNullable<unknown> }} Notification_Workflow_FailedInputs */

const en_notification_workflow_failed = /** @type {(inputs: Notification_Workflow_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Workflow "${i?.workflowId}" failed`)
};

const zh_cn2_notification_workflow_failed = /** @type {(inputs: Notification_Workflow_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`工作流 "${i?.workflowId}" 失败`)
};

const es_notification_workflow_failed = /** @type {(inputs: Notification_Workflow_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Flujo de trabajo "${i?.workflowId}" fallido`)
};

const ja_notification_workflow_failed = /** @type {(inputs: Notification_Workflow_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ワークフロー「${i?.workflowId}」が失敗しました`)
};

const hi_notification_workflow_failed = /** @type {(inputs: Notification_Workflow_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो "${i?.workflowId}" विफल`)
};

const pt_br2_notification_workflow_failed = /** @type {(inputs: Notification_Workflow_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fluxo de trabalho "${i?.workflowId}" falhou`)
};

const ko_notification_workflow_failed = /** @type {(inputs: Notification_Workflow_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`워크플로 "${i?.workflowId}" 실패`)
};

const fr_notification_workflow_failed = /** @type {(inputs: Notification_Workflow_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Workflow "${i?.workflowId}" échoué`)
};

/**
* | output |
* | --- |
* | "Workflow \"{workflowId}\" failed" |
*
* @param {Notification_Workflow_FailedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const notification_workflow_failed = /** @type {((inputs: Notification_Workflow_FailedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Notification_Workflow_FailedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_notification_workflow_failed(inputs)
	if (locale === "zh-CN") return zh_cn2_notification_workflow_failed(inputs)
	if (locale === "es") return es_notification_workflow_failed(inputs)
	if (locale === "ja") return ja_notification_workflow_failed(inputs)
	if (locale === "hi") return hi_notification_workflow_failed(inputs)
	if (locale === "pt-BR") return pt_br2_notification_workflow_failed(inputs)
	if (locale === "ko") return ko_notification_workflow_failed(inputs)
	return fr_notification_workflow_failed(inputs)
});