/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflow_Describe_PlaceholderInputs */

const en_workflow_describe_placeholder = /** @type {(inputs: Workflow_Describe_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. Every morning fetch the top 5 Hacker News stories, summarize them, and send via Telegram`)
};

const zh_cn2_workflow_describe_placeholder = /** @type {(inputs: Workflow_Describe_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例如：每天早上获取 Hacker News 前 5 条故事，进行摘要并通过 Telegram 发送`)
};

const es_workflow_describe_placeholder = /** @type {(inputs: Workflow_Describe_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p.ej. Cada mañana obtener las 5 historias principales de Hacker News, resumirlas y enviar por Telegram`)
};

const ja_workflow_describe_placeholder = /** @type {(inputs: Workflow_Describe_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例：毎朝 Hacker News のトップ 5 を取得し、要約して Telegram で送信する`)
};

const hi_workflow_describe_placeholder = /** @type {(inputs: Workflow_Describe_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`उदा. हर सुबह शीर्ष 5 Hacker News कहानियाँ लें, उन्हें सारांशित करें और Telegram के माध्यम से भेजें`)
};

const pt_br2_workflow_describe_placeholder = /** @type {(inputs: Workflow_Describe_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ex. Toda manhã buscar as 5 principais histórias do Hacker News, resumir e enviar pelo Telegram`)
};

const ko_workflow_describe_placeholder = /** @type {(inputs: Workflow_Describe_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`예: 매일 아침 Hacker News 상위 5개 기사를 가져와 요약하고 Telegram으로 보내기`)
};

const fr_workflow_describe_placeholder = /** @type {(inputs: Workflow_Describe_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ex. Chaque matin, récupérer les 5 meilleures histoires de Hacker News, les résumer et les envoyer par Telegram`)
};

/**
* | output |
* | --- |
* | "e.g. Every morning fetch the top 5 Hacker News stories, summarize them, and send via Telegram" |
*
* @param {Workflow_Describe_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflow_describe_placeholder = /** @type {((inputs?: Workflow_Describe_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflow_Describe_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflow_describe_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_workflow_describe_placeholder(inputs)
	if (locale === "es") return es_workflow_describe_placeholder(inputs)
	if (locale === "ja") return ja_workflow_describe_placeholder(inputs)
	if (locale === "hi") return hi_workflow_describe_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_workflow_describe_placeholder(inputs)
	if (locale === "ko") return ko_workflow_describe_placeholder(inputs)
	return fr_workflow_describe_placeholder(inputs)
});