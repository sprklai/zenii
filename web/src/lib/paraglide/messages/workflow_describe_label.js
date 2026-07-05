/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflow_Describe_LabelInputs */

const en_workflow_describe_label = /** @type {(inputs: Workflow_Describe_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe your workflow`)
};

const zh_cn2_workflow_describe_label = /** @type {(inputs: Workflow_Describe_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`描述您的工作流`)
};

const es_workflow_describe_label = /** @type {(inputs: Workflow_Describe_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe tu flujo de trabajo`)
};

const ja_workflow_describe_label = /** @type {(inputs: Workflow_Describe_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフローを説明する`)
};

const hi_workflow_describe_label = /** @type {(inputs: Workflow_Describe_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अपने वर्कफ़्लो का वर्णन करें`)
};

const pt_br2_workflow_describe_label = /** @type {(inputs: Workflow_Describe_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descreva seu workflow`)
};

const ko_workflow_describe_label = /** @type {(inputs: Workflow_Describe_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로를 설명하세요`)
};

const fr_workflow_describe_label = /** @type {(inputs: Workflow_Describe_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Décrivez votre flux de travail`)
};

/**
* | output |
* | --- |
* | "Describe your workflow" |
*
* @param {Workflow_Describe_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflow_describe_label = /** @type {((inputs?: Workflow_Describe_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflow_Describe_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflow_describe_label(inputs)
	if (locale === "zh-CN") return zh_cn2_workflow_describe_label(inputs)
	if (locale === "es") return es_workflow_describe_label(inputs)
	if (locale === "ja") return ja_workflow_describe_label(inputs)
	if (locale === "hi") return hi_workflow_describe_label(inputs)
	if (locale === "pt-BR") return pt_br2_workflow_describe_label(inputs)
	if (locale === "ko") return ko_workflow_describe_label(inputs)
	return fr_workflow_describe_label(inputs)
});