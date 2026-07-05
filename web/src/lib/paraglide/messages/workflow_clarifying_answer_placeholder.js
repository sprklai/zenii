/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflow_Clarifying_Answer_PlaceholderInputs */

const en_workflow_clarifying_answer_placeholder = /** @type {(inputs: Workflow_Clarifying_Answer_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your answer...`)
};

const zh_cn2_workflow_clarifying_answer_placeholder = /** @type {(inputs: Workflow_Clarifying_Answer_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`您的回答...`)
};

const es_workflow_clarifying_answer_placeholder = /** @type {(inputs: Workflow_Clarifying_Answer_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu respuesta...`)
};

const ja_workflow_clarifying_answer_placeholder = /** @type {(inputs: Workflow_Clarifying_Answer_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回答を入力...`)
};

const hi_workflow_clarifying_answer_placeholder = /** @type {(inputs: Workflow_Clarifying_Answer_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`आपका उत्तर...`)
};

const pt_br2_workflow_clarifying_answer_placeholder = /** @type {(inputs: Workflow_Clarifying_Answer_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua resposta...`)
};

const ko_workflow_clarifying_answer_placeholder = /** @type {(inputs: Workflow_Clarifying_Answer_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`답변을 입력하세요...`)
};

const fr_workflow_clarifying_answer_placeholder = /** @type {(inputs: Workflow_Clarifying_Answer_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre réponse...`)
};

/**
* | output |
* | --- |
* | "Your answer..." |
*
* @param {Workflow_Clarifying_Answer_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflow_clarifying_answer_placeholder = /** @type {((inputs?: Workflow_Clarifying_Answer_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflow_Clarifying_Answer_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflow_clarifying_answer_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_workflow_clarifying_answer_placeholder(inputs)
	if (locale === "es") return es_workflow_clarifying_answer_placeholder(inputs)
	if (locale === "ja") return ja_workflow_clarifying_answer_placeholder(inputs)
	if (locale === "hi") return hi_workflow_clarifying_answer_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_workflow_clarifying_answer_placeholder(inputs)
	if (locale === "ko") return ko_workflow_clarifying_answer_placeholder(inputs)
	return fr_workflow_clarifying_answer_placeholder(inputs)
});