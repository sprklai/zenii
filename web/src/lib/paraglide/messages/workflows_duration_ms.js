/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ value: NonNullable<unknown> }} Workflows_Duration_MsInputs */

const en_workflows_duration_ms = /** @type {(inputs: Workflows_Duration_MsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value}ms`)
};

const zh_cn2_workflows_duration_ms = /** @type {(inputs: Workflows_Duration_MsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value}ms`)
};

const es_workflows_duration_ms = /** @type {(inputs: Workflows_Duration_MsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value}ms`)
};

const ja_workflows_duration_ms = /** @type {(inputs: Workflows_Duration_MsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value}ms`)
};

const hi_workflows_duration_ms = /** @type {(inputs: Workflows_Duration_MsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value}ms`)
};

const pt_br2_workflows_duration_ms = /** @type {(inputs: Workflows_Duration_MsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value}ms`)
};

const ko_workflows_duration_ms = /** @type {(inputs: Workflows_Duration_MsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value}ms`)
};

const fr_workflows_duration_ms = /** @type {(inputs: Workflows_Duration_MsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value}ms`)
};

/**
* | output |
* | --- |
* | "{value}ms" |
*
* @param {Workflows_Duration_MsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_duration_ms = /** @type {((inputs: Workflows_Duration_MsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Duration_MsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_duration_ms(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_duration_ms(inputs)
	if (locale === "es") return es_workflows_duration_ms(inputs)
	if (locale === "ja") return ja_workflows_duration_ms(inputs)
	if (locale === "hi") return hi_workflows_duration_ms(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_duration_ms(inputs)
	if (locale === "ko") return ko_workflows_duration_ms(inputs)
	return fr_workflows_duration_ms(inputs)
});