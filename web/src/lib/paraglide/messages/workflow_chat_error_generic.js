/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflow_Chat_Error_GenericInputs */

const en_workflow_chat_error_generic = /** @type {(inputs: Workflow_Chat_Error_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workflow generation failed.`)
};

const zh_cn2_workflow_chat_error_generic = /** @type {(inputs: Workflow_Chat_Error_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`工作流生成失败。`)
};

const es_workflow_chat_error_generic = /** @type {(inputs: Workflow_Chat_Error_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falló la generación del flujo de trabajo.`)
};

const ja_workflow_chat_error_generic = /** @type {(inputs: Workflow_Chat_Error_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフローの生成に失敗しました。`)
};

const hi_workflow_chat_error_generic = /** @type {(inputs: Workflow_Chat_Error_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो उत्पन्न करने में विफल।`)
};

const pt_br2_workflow_chat_error_generic = /** @type {(inputs: Workflow_Chat_Error_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha na geração do fluxo de trabalho.`)
};

const ko_workflow_chat_error_generic = /** @type {(inputs: Workflow_Chat_Error_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로 생성에 실패했습니다.`)
};

const fr_workflow_chat_error_generic = /** @type {(inputs: Workflow_Chat_Error_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La génération du workflow a échoué.`)
};

/**
* | output |
* | --- |
* | "Workflow generation failed." |
*
* @param {Workflow_Chat_Error_GenericInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflow_chat_error_generic = /** @type {((inputs?: Workflow_Chat_Error_GenericInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflow_Chat_Error_GenericInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflow_chat_error_generic(inputs)
	if (locale === "zh-CN") return zh_cn2_workflow_chat_error_generic(inputs)
	if (locale === "es") return es_workflow_chat_error_generic(inputs)
	if (locale === "ja") return ja_workflow_chat_error_generic(inputs)
	if (locale === "hi") return hi_workflow_chat_error_generic(inputs)
	if (locale === "pt-BR") return pt_br2_workflow_chat_error_generic(inputs)
	if (locale === "ko") return ko_workflow_chat_error_generic(inputs)
	return fr_workflow_chat_error_generic(inputs)
});