/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflow_Chat_Question_HeadingInputs */

const en_workflow_chat_question_heading = /** @type {(inputs: Workflow_Chat_Question_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`⬡ Zenii needs more info:`)
};

const zh_cn2_workflow_chat_question_heading = /** @type {(inputs: Workflow_Chat_Question_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`⬡ Zenii 需要更多信息：`)
};

const es_workflow_chat_question_heading = /** @type {(inputs: Workflow_Chat_Question_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`⬡ Zenii necesita más información:`)
};

const ja_workflow_chat_question_heading = /** @type {(inputs: Workflow_Chat_Question_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`⬡ Zenii はさらに情報が必要です:`)
};

const hi_workflow_chat_question_heading = /** @type {(inputs: Workflow_Chat_Question_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`⬡ Zenii को अधिक जानकारी चाहिए:`)
};

const pt_br2_workflow_chat_question_heading = /** @type {(inputs: Workflow_Chat_Question_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`⬡ Zenii precisa de mais informações:`)
};

const ko_workflow_chat_question_heading = /** @type {(inputs: Workflow_Chat_Question_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`⬡ Zenii에게 추가 정보가 필요합니다:`)
};

const fr_workflow_chat_question_heading = /** @type {(inputs: Workflow_Chat_Question_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`⬡ Zenii a besoin de plus d'informations :`)
};

/**
* | output |
* | --- |
* | "⬡ Zenii needs more info:" |
*
* @param {Workflow_Chat_Question_HeadingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflow_chat_question_heading = /** @type {((inputs?: Workflow_Chat_Question_HeadingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflow_Chat_Question_HeadingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflow_chat_question_heading(inputs)
	if (locale === "zh-CN") return zh_cn2_workflow_chat_question_heading(inputs)
	if (locale === "es") return es_workflow_chat_question_heading(inputs)
	if (locale === "ja") return ja_workflow_chat_question_heading(inputs)
	if (locale === "hi") return hi_workflow_chat_question_heading(inputs)
	if (locale === "pt-BR") return pt_br2_workflow_chat_question_heading(inputs)
	if (locale === "ko") return ko_workflow_chat_question_heading(inputs)
	return fr_workflow_chat_question_heading(inputs)
});