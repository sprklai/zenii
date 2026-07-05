/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ workflowId: NonNullable<unknown> }} Notification_Workflow_CancelledInputs */

const en_notification_workflow_cancelled = /** @type {(inputs: Notification_Workflow_CancelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Workflow "${i?.workflowId}" cancelled`)
};

const zh_cn2_notification_workflow_cancelled = /** @type {(inputs: Notification_Workflow_CancelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`工作流 "${i?.workflowId}" 已取消`)
};

const es_notification_workflow_cancelled = /** @type {(inputs: Notification_Workflow_CancelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Flujo de trabajo "${i?.workflowId}" cancelado`)
};

const ja_notification_workflow_cancelled = /** @type {(inputs: Notification_Workflow_CancelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ワークフロー「${i?.workflowId}」がキャンセルされました`)
};

const hi_notification_workflow_cancelled = /** @type {(inputs: Notification_Workflow_CancelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो "${i?.workflowId}" रद्द`)
};

const pt_br2_notification_workflow_cancelled = /** @type {(inputs: Notification_Workflow_CancelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fluxo de trabalho "${i?.workflowId}" cancelado`)
};

const ko_notification_workflow_cancelled = /** @type {(inputs: Notification_Workflow_CancelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`워크플로 "${i?.workflowId}" 취소됨`)
};

const fr_notification_workflow_cancelled = /** @type {(inputs: Notification_Workflow_CancelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Workflow "${i?.workflowId}" annulé`)
};

/**
* | output |
* | --- |
* | "Workflow \"{workflowId}\" cancelled" |
*
* @param {Notification_Workflow_CancelledInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const notification_workflow_cancelled = /** @type {((inputs: Notification_Workflow_CancelledInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Notification_Workflow_CancelledInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_notification_workflow_cancelled(inputs)
	if (locale === "zh-CN") return zh_cn2_notification_workflow_cancelled(inputs)
	if (locale === "es") return es_notification_workflow_cancelled(inputs)
	if (locale === "ja") return ja_notification_workflow_cancelled(inputs)
	if (locale === "hi") return hi_notification_workflow_cancelled(inputs)
	if (locale === "pt-BR") return pt_br2_notification_workflow_cancelled(inputs)
	if (locale === "ko") return ko_notification_workflow_cancelled(inputs)
	return fr_notification_workflow_cancelled(inputs)
});