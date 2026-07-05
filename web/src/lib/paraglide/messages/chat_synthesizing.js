/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_SynthesizingInputs */

const en_chat_synthesizing = /** @type {(inputs: Chat_SynthesizingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Synthesizing agent results...`)
};

const zh_cn2_chat_synthesizing = /** @type {(inputs: Chat_SynthesizingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在综合代理结果...`)
};

const es_chat_synthesizing = /** @type {(inputs: Chat_SynthesizingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sintetizando resultados del agente...`)
};

const ja_chat_synthesizing = /** @type {(inputs: Chat_SynthesizingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エージェントの結果を統合中...`)
};

const hi_chat_synthesizing = /** @type {(inputs: Chat_SynthesizingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एजेंट परिणामों का संश्लेषण हो रहा है...`)
};

const pt_br2_chat_synthesizing = /** @type {(inputs: Chat_SynthesizingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sintetizando resultados dos agentes...`)
};

const ko_chat_synthesizing = /** @type {(inputs: Chat_SynthesizingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`에이전트 결과 종합 중...`)
};

const fr_chat_synthesizing = /** @type {(inputs: Chat_SynthesizingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Synthèse des résultats de l'agent...`)
};

/**
* | output |
* | --- |
* | "Synthesizing agent results..." |
*
* @param {Chat_SynthesizingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_synthesizing = /** @type {((inputs?: Chat_SynthesizingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_SynthesizingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_synthesizing(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_synthesizing(inputs)
	if (locale === "es") return es_chat_synthesizing(inputs)
	if (locale === "ja") return ja_chat_synthesizing(inputs)
	if (locale === "hi") return hi_chat_synthesizing(inputs)
	if (locale === "pt-BR") return pt_br2_chat_synthesizing(inputs)
	if (locale === "ko") return ko_chat_synthesizing(inputs)
	return fr_chat_synthesizing(inputs)
});