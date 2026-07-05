/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Reasoning_ThinkingInputs */

const en_reasoning_thinking = /** @type {(inputs: Reasoning_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thinking...`)
};

const zh_cn2_reasoning_thinking = /** @type {(inputs: Reasoning_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`思考中...`)
};

const es_reasoning_thinking = /** @type {(inputs: Reasoning_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pensando...`)
};

const ja_reasoning_thinking = /** @type {(inputs: Reasoning_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`考え中...`)
};

const hi_reasoning_thinking = /** @type {(inputs: Reasoning_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सोच रहा है...`)
};

const pt_br2_reasoning_thinking = /** @type {(inputs: Reasoning_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pensando...`)
};

const ko_reasoning_thinking = /** @type {(inputs: Reasoning_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`생각 중...`)
};

const fr_reasoning_thinking = /** @type {(inputs: Reasoning_ThinkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réflexion...`)
};

/**
* | output |
* | --- |
* | "Thinking..." |
*
* @param {Reasoning_ThinkingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const reasoning_thinking = /** @type {((inputs?: Reasoning_ThinkingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Reasoning_ThinkingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_reasoning_thinking(inputs)
	if (locale === "zh-CN") return zh_cn2_reasoning_thinking(inputs)
	if (locale === "es") return es_reasoning_thinking(inputs)
	if (locale === "ja") return ja_reasoning_thinking(inputs)
	if (locale === "hi") return hi_reasoning_thinking(inputs)
	if (locale === "pt-BR") return pt_br2_reasoning_thinking(inputs)
	if (locale === "ko") return ko_reasoning_thinking(inputs)
	return fr_reasoning_thinking(inputs)
});