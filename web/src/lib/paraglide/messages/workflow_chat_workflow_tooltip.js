/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflow_Chat_Workflow_TooltipInputs */

const en_workflow_chat_workflow_tooltip = /** @type {(inputs: Workflow_Chat_Workflow_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generate a workflow from your message instead of sending to chat`)
};

const zh_cn2_workflow_chat_workflow_tooltip = /** @type {(inputs: Workflow_Chat_Workflow_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从您的消息生成工作流，而不是发送到聊天`)
};

const es_workflow_chat_workflow_tooltip = /** @type {(inputs: Workflow_Chat_Workflow_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Genera un flujo de trabajo a partir de tu mensaje en lugar de enviarlo al chat`)
};

const ja_workflow_chat_workflow_tooltip = /** @type {(inputs: Workflow_Chat_Workflow_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メッセージからワークフローを生成します（チャットへの送信の代わり）`)
};

const hi_workflow_chat_workflow_tooltip = /** @type {(inputs: Workflow_Chat_Workflow_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैट पर भेजने के बजाय अपने संदेश से वर्कफ़्लो उत्पन्न करें`)
};

const pt_br2_workflow_chat_workflow_tooltip = /** @type {(inputs: Workflow_Chat_Workflow_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gere um fluxo de trabalho a partir da sua mensagem em vez de enviar para o chat`)
};

const ko_workflow_chat_workflow_tooltip = /** @type {(inputs: Workflow_Chat_Workflow_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채팅으로 보내는 대신 메시지에서 워크플로 생성`)
};

const fr_workflow_chat_workflow_tooltip = /** @type {(inputs: Workflow_Chat_Workflow_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Générer un workflow à partir de votre message au lieu de l'envoyer dans le chat`)
};

/**
* | output |
* | --- |
* | "Generate a workflow from your message instead of sending to chat" |
*
* @param {Workflow_Chat_Workflow_TooltipInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflow_chat_workflow_tooltip = /** @type {((inputs?: Workflow_Chat_Workflow_TooltipInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflow_Chat_Workflow_TooltipInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflow_chat_workflow_tooltip(inputs)
	if (locale === "zh-CN") return zh_cn2_workflow_chat_workflow_tooltip(inputs)
	if (locale === "es") return es_workflow_chat_workflow_tooltip(inputs)
	if (locale === "ja") return ja_workflow_chat_workflow_tooltip(inputs)
	if (locale === "hi") return hi_workflow_chat_workflow_tooltip(inputs)
	if (locale === "pt-BR") return pt_br2_workflow_chat_workflow_tooltip(inputs)
	if (locale === "ko") return ko_workflow_chat_workflow_tooltip(inputs)
	return fr_workflow_chat_workflow_tooltip(inputs)
});