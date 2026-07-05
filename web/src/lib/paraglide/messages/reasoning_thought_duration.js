/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ duration: NonNullable<unknown> }} Reasoning_Thought_DurationInputs */

const en_reasoning_thought_duration = /** @type {(inputs: Reasoning_Thought_DurationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Thought for ${i?.duration} seconds`)
};

const zh_cn2_reasoning_thought_duration = /** @type {(inputs: Reasoning_Thought_DurationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`思考了 ${i?.duration} 秒`)
};

const es_reasoning_thought_duration = /** @type {(inputs: Reasoning_Thought_DurationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pensó durante ${i?.duration} segundos`)
};

const ja_reasoning_thought_duration = /** @type {(inputs: Reasoning_Thought_DurationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.duration}秒考えました`)
};

const hi_reasoning_thought_duration = /** @type {(inputs: Reasoning_Thought_DurationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.duration} सेकंड सोचा`)
};

const pt_br2_reasoning_thought_duration = /** @type {(inputs: Reasoning_Thought_DurationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pensou por ${i?.duration} segundos`)
};

const ko_reasoning_thought_duration = /** @type {(inputs: Reasoning_Thought_DurationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.duration}초 동안 생각했습니다`)
};

const fr_reasoning_thought_duration = /** @type {(inputs: Reasoning_Thought_DurationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A réfléchi pendant ${i?.duration} secondes`)
};

/**
* | output |
* | --- |
* | "Thought for {duration} seconds" |
*
* @param {Reasoning_Thought_DurationInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const reasoning_thought_duration = /** @type {((inputs: Reasoning_Thought_DurationInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Reasoning_Thought_DurationInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_reasoning_thought_duration(inputs)
	if (locale === "zh-CN") return zh_cn2_reasoning_thought_duration(inputs)
	if (locale === "es") return es_reasoning_thought_duration(inputs)
	if (locale === "ja") return ja_reasoning_thought_duration(inputs)
	if (locale === "hi") return hi_reasoning_thought_duration(inputs)
	if (locale === "pt-BR") return pt_br2_reasoning_thought_duration(inputs)
	if (locale === "ko") return ko_reasoning_thought_duration(inputs)
	return fr_reasoning_thought_duration(inputs)
});