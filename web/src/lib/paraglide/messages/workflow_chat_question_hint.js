/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflow_Chat_Question_HintInputs */

const en_workflow_chat_question_hint = /** @type {(inputs: Workflow_Chat_Question_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reply in the message box and send again.`)
};

const zh_cn2_workflow_chat_question_hint = /** @type {(inputs: Workflow_Chat_Question_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在消息框中回复并再次发送。`)
};

const es_workflow_chat_question_hint = /** @type {(inputs: Workflow_Chat_Question_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Responde en el cuadro de mensajes y envía de nuevo.`)
};

const ja_workflow_chat_question_hint = /** @type {(inputs: Workflow_Chat_Question_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メッセージボックスで返信してもう一度送信してください。`)
};

const hi_workflow_chat_question_hint = /** @type {(inputs: Workflow_Chat_Question_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`संदेश बॉक्स में उत्तर दें और पुनः भेजें।`)
};

const pt_br2_workflow_chat_question_hint = /** @type {(inputs: Workflow_Chat_Question_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Responda na caixa de mensagem e envie novamente.`)
};

const ko_workflow_chat_question_hint = /** @type {(inputs: Workflow_Chat_Question_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메시지 상자에서 답장하고 다시 보내세요.`)
};

const fr_workflow_chat_question_hint = /** @type {(inputs: Workflow_Chat_Question_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Répondez dans la zone de message et envoyez à nouveau.`)
};

/**
* | output |
* | --- |
* | "Reply in the message box and send again." |
*
* @param {Workflow_Chat_Question_HintInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflow_chat_question_hint = /** @type {((inputs?: Workflow_Chat_Question_HintInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflow_Chat_Question_HintInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflow_chat_question_hint(inputs)
	if (locale === "zh-CN") return zh_cn2_workflow_chat_question_hint(inputs)
	if (locale === "es") return es_workflow_chat_question_hint(inputs)
	if (locale === "ja") return ja_workflow_chat_question_hint(inputs)
	if (locale === "hi") return hi_workflow_chat_question_hint(inputs)
	if (locale === "pt-BR") return pt_br2_workflow_chat_question_hint(inputs)
	if (locale === "ko") return ko_workflow_chat_question_hint(inputs)
	return fr_workflow_chat_question_hint(inputs)
});