/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ value: NonNullable<unknown> }} Memory_Confidence_LabelInputs */

const en_memory_confidence_label = /** @type {(inputs: Memory_Confidence_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value}% confidence`)
};

const zh_cn2_memory_confidence_label = /** @type {(inputs: Memory_Confidence_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value}% 置信度`)
};

const es_memory_confidence_label = /** @type {(inputs: Memory_Confidence_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value}% de confianza`)
};

const ja_memory_confidence_label = /** @type {(inputs: Memory_Confidence_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value}% の信頼度`)
};

const hi_memory_confidence_label = /** @type {(inputs: Memory_Confidence_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value}% विश्वास`)
};

const pt_br2_memory_confidence_label = /** @type {(inputs: Memory_Confidence_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value}% de confiança`)
};

const ko_memory_confidence_label = /** @type {(inputs: Memory_Confidence_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value}% 신뢰도`)
};

const fr_memory_confidence_label = /** @type {(inputs: Memory_Confidence_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value}% de confiance`)
};

/**
* | output |
* | --- |
* | "{value}% confidence" |
*
* @param {Memory_Confidence_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const memory_confidence_label = /** @type {((inputs: Memory_Confidence_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Memory_Confidence_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_memory_confidence_label(inputs)
	if (locale === "zh-CN") return zh_cn2_memory_confidence_label(inputs)
	if (locale === "es") return es_memory_confidence_label(inputs)
	if (locale === "ja") return ja_memory_confidence_label(inputs)
	if (locale === "hi") return hi_memory_confidence_label(inputs)
	if (locale === "pt-BR") return pt_br2_memory_confidence_label(inputs)
	if (locale === "ko") return ko_memory_confidence_label(inputs)
	return fr_memory_confidence_label(inputs)
});