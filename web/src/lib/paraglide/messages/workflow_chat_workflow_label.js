/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflow_Chat_Workflow_LabelInputs */

const en_workflow_chat_workflow_label = /** @type {(inputs: Workflow_Chat_Workflow_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workflow`)
};

const zh_cn2_workflow_chat_workflow_label = /** @type {(inputs: Workflow_Chat_Workflow_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`工作流`)
};

const es_workflow_chat_workflow_label = /** @type {(inputs: Workflow_Chat_Workflow_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flujo de trabajo`)
};

const ja_workflow_chat_workflow_label = /** @type {(inputs: Workflow_Chat_Workflow_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフロー`)
};

const hi_workflow_chat_workflow_label = /** @type {(inputs: Workflow_Chat_Workflow_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो`)
};

const pt_br2_workflow_chat_workflow_label = /** @type {(inputs: Workflow_Chat_Workflow_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fluxo de trabalho`)
};

const ko_workflow_chat_workflow_label = /** @type {(inputs: Workflow_Chat_Workflow_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로`)
};

const fr_workflow_chat_workflow_label = /** @type {(inputs: Workflow_Chat_Workflow_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workflow`)
};

/**
* | output |
* | --- |
* | "Workflow" |
*
* @param {Workflow_Chat_Workflow_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflow_chat_workflow_label = /** @type {((inputs?: Workflow_Chat_Workflow_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflow_Chat_Workflow_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflow_chat_workflow_label(inputs)
	if (locale === "zh-CN") return zh_cn2_workflow_chat_workflow_label(inputs)
	if (locale === "es") return es_workflow_chat_workflow_label(inputs)
	if (locale === "ja") return ja_workflow_chat_workflow_label(inputs)
	if (locale === "hi") return hi_workflow_chat_workflow_label(inputs)
	if (locale === "pt-BR") return pt_br2_workflow_chat_workflow_label(inputs)
	if (locale === "ko") return ko_workflow_chat_workflow_label(inputs)
	return fr_workflow_chat_workflow_label(inputs)
});