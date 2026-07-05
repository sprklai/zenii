/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Notification_Workflow_Detail_SuccessInputs */

const en_notification_workflow_detail_success = /** @type {(inputs: Notification_Workflow_Detail_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`completed successfully`)
};

const zh_cn2_notification_workflow_detail_success = /** @type {(inputs: Notification_Workflow_Detail_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已成功完成`)
};

const es_notification_workflow_detail_success = /** @type {(inputs: Notification_Workflow_Detail_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`completado exitosamente`)
};

const ja_notification_workflow_detail_success = /** @type {(inputs: Notification_Workflow_Detail_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正常に完了`)
};

const hi_notification_workflow_detail_success = /** @type {(inputs: Notification_Workflow_Detail_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सफलतापूर्वक पूर्ण`)
};

const pt_br2_notification_workflow_detail_success = /** @type {(inputs: Notification_Workflow_Detail_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`concluído com sucesso`)
};

const ko_notification_workflow_detail_success = /** @type {(inputs: Notification_Workflow_Detail_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`성공적으로 완료`)
};

const fr_notification_workflow_detail_success = /** @type {(inputs: Notification_Workflow_Detail_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`terminé avec succès`)
};

/**
* | output |
* | --- |
* | "completed successfully" |
*
* @param {Notification_Workflow_Detail_SuccessInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const notification_workflow_detail_success = /** @type {((inputs?: Notification_Workflow_Detail_SuccessInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Notification_Workflow_Detail_SuccessInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_notification_workflow_detail_success(inputs)
	if (locale === "zh-CN") return zh_cn2_notification_workflow_detail_success(inputs)
	if (locale === "es") return es_notification_workflow_detail_success(inputs)
	if (locale === "ja") return ja_notification_workflow_detail_success(inputs)
	if (locale === "hi") return hi_notification_workflow_detail_success(inputs)
	if (locale === "pt-BR") return pt_br2_notification_workflow_detail_success(inputs)
	if (locale === "ko") return ko_notification_workflow_detail_success(inputs)
	return fr_notification_workflow_detail_success(inputs)
});