/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ workflowId: NonNullable<unknown> }} Notification_Workflow_CompletedInputs */

const en_notification_workflow_completed = /** @type {(inputs: Notification_Workflow_CompletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Workflow "${i?.workflowId}" completed`)
};

const zh_cn2_notification_workflow_completed = /** @type {(inputs: Notification_Workflow_CompletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`工作流 "${i?.workflowId}" 已完成`)
};

const es_notification_workflow_completed = /** @type {(inputs: Notification_Workflow_CompletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Flujo de trabajo "${i?.workflowId}" completado`)
};

const ja_notification_workflow_completed = /** @type {(inputs: Notification_Workflow_CompletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ワークフロー「${i?.workflowId}」が完了しました`)
};

const hi_notification_workflow_completed = /** @type {(inputs: Notification_Workflow_CompletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो "${i?.workflowId}" पूर्ण`)
};

const pt_br2_notification_workflow_completed = /** @type {(inputs: Notification_Workflow_CompletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fluxo de trabalho "${i?.workflowId}" concluído`)
};

const ko_notification_workflow_completed = /** @type {(inputs: Notification_Workflow_CompletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`워크플로 "${i?.workflowId}" 완료`)
};

const fr_notification_workflow_completed = /** @type {(inputs: Notification_Workflow_CompletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Workflow "${i?.workflowId}" terminé`)
};

/**
* | output |
* | --- |
* | "Workflow \"{workflowId}\" completed" |
*
* @param {Notification_Workflow_CompletedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const notification_workflow_completed = /** @type {((inputs: Notification_Workflow_CompletedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Notification_Workflow_CompletedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_notification_workflow_completed(inputs)
	if (locale === "zh-CN") return zh_cn2_notification_workflow_completed(inputs)
	if (locale === "es") return es_notification_workflow_completed(inputs)
	if (locale === "ja") return ja_notification_workflow_completed(inputs)
	if (locale === "hi") return hi_notification_workflow_completed(inputs)
	if (locale === "pt-BR") return pt_br2_notification_workflow_completed(inputs)
	if (locale === "ko") return ko_notification_workflow_completed(inputs)
	return fr_notification_workflow_completed(inputs)
});