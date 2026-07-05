/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Reasoning_Thought_Few_SecondsInputs */

const en_reasoning_thought_few_seconds = /** @type {(inputs: Reasoning_Thought_Few_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thought for a few seconds`)
};

const zh_cn2_reasoning_thought_few_seconds = /** @type {(inputs: Reasoning_Thought_Few_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`思考了几秒钟`)
};

const es_reasoning_thought_few_seconds = /** @type {(inputs: Reasoning_Thought_Few_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pensó durante unos segundos`)
};

const ja_reasoning_thought_few_seconds = /** @type {(inputs: Reasoning_Thought_Few_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`数秒考えました`)
};

const hi_reasoning_thought_few_seconds = /** @type {(inputs: Reasoning_Thought_Few_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कुछ सेकंड सोचा`)
};

const pt_br2_reasoning_thought_few_seconds = /** @type {(inputs: Reasoning_Thought_Few_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pensou por alguns segundos`)
};

const ko_reasoning_thought_few_seconds = /** @type {(inputs: Reasoning_Thought_Few_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`몇 초간 생각했습니다`)
};

const fr_reasoning_thought_few_seconds = /** @type {(inputs: Reasoning_Thought_Few_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A réfléchi pendant quelques secondes`)
};

/**
* | output |
* | --- |
* | "Thought for a few seconds" |
*
* @param {Reasoning_Thought_Few_SecondsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const reasoning_thought_few_seconds = /** @type {((inputs?: Reasoning_Thought_Few_SecondsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Reasoning_Thought_Few_SecondsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_reasoning_thought_few_seconds(inputs)
	if (locale === "zh-CN") return zh_cn2_reasoning_thought_few_seconds(inputs)
	if (locale === "es") return es_reasoning_thought_few_seconds(inputs)
	if (locale === "ja") return ja_reasoning_thought_few_seconds(inputs)
	if (locale === "hi") return hi_reasoning_thought_few_seconds(inputs)
	if (locale === "pt-BR") return pt_br2_reasoning_thought_few_seconds(inputs)
	if (locale === "ko") return ko_reasoning_thought_few_seconds(inputs)
	return fr_reasoning_thought_few_seconds(inputs)
});