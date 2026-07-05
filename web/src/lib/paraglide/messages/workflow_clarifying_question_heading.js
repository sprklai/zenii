/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflow_Clarifying_Question_HeadingInputs */

const en_workflow_clarifying_question_heading = /** @type {(inputs: Workflow_Clarifying_Question_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clarifying question:`)
};

const zh_cn2_workflow_clarifying_question_heading = /** @type {(inputs: Workflow_Clarifying_Question_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`澄清问题：`)
};

const es_workflow_clarifying_question_heading = /** @type {(inputs: Workflow_Clarifying_Question_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pregunta aclaratoria:`)
};

const ja_workflow_clarifying_question_heading = /** @type {(inputs: Workflow_Clarifying_Question_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`確認事項：`)
};

const hi_workflow_clarifying_question_heading = /** @type {(inputs: Workflow_Clarifying_Question_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`स्पष्टीकरण प्रश्न:`)
};

const pt_br2_workflow_clarifying_question_heading = /** @type {(inputs: Workflow_Clarifying_Question_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pergunta de esclarecimento:`)
};

const ko_workflow_clarifying_question_heading = /** @type {(inputs: Workflow_Clarifying_Question_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`확인 질문:`)
};

const fr_workflow_clarifying_question_heading = /** @type {(inputs: Workflow_Clarifying_Question_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Question de clarification :`)
};

/**
* | output |
* | --- |
* | "Clarifying question:" |
*
* @param {Workflow_Clarifying_Question_HeadingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflow_clarifying_question_heading = /** @type {((inputs?: Workflow_Clarifying_Question_HeadingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflow_Clarifying_Question_HeadingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflow_clarifying_question_heading(inputs)
	if (locale === "zh-CN") return zh_cn2_workflow_clarifying_question_heading(inputs)
	if (locale === "es") return es_workflow_clarifying_question_heading(inputs)
	if (locale === "ja") return ja_workflow_clarifying_question_heading(inputs)
	if (locale === "hi") return hi_workflow_clarifying_question_heading(inputs)
	if (locale === "pt-BR") return pt_br2_workflow_clarifying_question_heading(inputs)
	if (locale === "ko") return ko_workflow_clarifying_question_heading(inputs)
	return fr_workflow_clarifying_question_heading(inputs)
});