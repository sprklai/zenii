/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Payload_WorkflowInputs */

const en_wb_option_payload_workflow = /** @type {(inputs: Wb_Option_Payload_WorkflowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workflow`)
};

const zh_cn2_wb_option_payload_workflow = /** @type {(inputs: Wb_Option_Payload_WorkflowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`工作流`)
};

const es_wb_option_payload_workflow = /** @type {(inputs: Wb_Option_Payload_WorkflowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flujo de trabajo`)
};

const ja_wb_option_payload_workflow = /** @type {(inputs: Wb_Option_Payload_WorkflowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフロー`)
};

const hi_wb_option_payload_workflow = /** @type {(inputs: Wb_Option_Payload_WorkflowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो`)
};

const pt_br2_wb_option_payload_workflow = /** @type {(inputs: Wb_Option_Payload_WorkflowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fluxo de trabalho`)
};

const ko_wb_option_payload_workflow = /** @type {(inputs: Wb_Option_Payload_WorkflowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로`)
};

const fr_wb_option_payload_workflow = /** @type {(inputs: Wb_Option_Payload_WorkflowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workflow`)
};

/**
* | output |
* | --- |
* | "Workflow" |
*
* @param {Wb_Option_Payload_WorkflowInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_payload_workflow = /** @type {((inputs?: Wb_Option_Payload_WorkflowInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Payload_WorkflowInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_payload_workflow(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_payload_workflow(inputs)
	if (locale === "es") return es_wb_option_payload_workflow(inputs)
	if (locale === "ja") return ja_wb_option_payload_workflow(inputs)
	if (locale === "hi") return hi_wb_option_payload_workflow(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_payload_workflow(inputs)
	if (locale === "ko") return ko_wb_option_payload_workflow(inputs)
	return fr_wb_option_payload_workflow(inputs)
});