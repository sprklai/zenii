/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflow_Generate_ButtonInputs */

const en_workflow_generate_button = /** @type {(inputs: Workflow_Generate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generate Workflow`)
};

const zh_cn2_workflow_generate_button = /** @type {(inputs: Workflow_Generate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`生成工作流`)
};

const es_workflow_generate_button = /** @type {(inputs: Workflow_Generate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generar flujo de trabajo`)
};

const ja_workflow_generate_button = /** @type {(inputs: Workflow_Generate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフローを生成`)
};

const hi_workflow_generate_button = /** @type {(inputs: Workflow_Generate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो बनाएं`)
};

const pt_br2_workflow_generate_button = /** @type {(inputs: Workflow_Generate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerar Workflow`)
};

const ko_workflow_generate_button = /** @type {(inputs: Workflow_Generate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로 생성`)
};

const fr_workflow_generate_button = /** @type {(inputs: Workflow_Generate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Générer le flux de travail`)
};

/**
* | output |
* | --- |
* | "Generate Workflow" |
*
* @param {Workflow_Generate_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflow_generate_button = /** @type {((inputs?: Workflow_Generate_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflow_Generate_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflow_generate_button(inputs)
	if (locale === "zh-CN") return zh_cn2_workflow_generate_button(inputs)
	if (locale === "es") return es_workflow_generate_button(inputs)
	if (locale === "ja") return ja_workflow_generate_button(inputs)
	if (locale === "hi") return hi_workflow_generate_button(inputs)
	if (locale === "pt-BR") return pt_br2_workflow_generate_button(inputs)
	if (locale === "ko") return ko_workflow_generate_button(inputs)
	return fr_workflow_generate_button(inputs)
});