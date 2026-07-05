/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ stepName: NonNullable<unknown> }} Workflows_Progress_LastInputs */

const en_workflows_progress_last = /** @type {(inputs: Workflows_Progress_LastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`— last: ${i?.stepName}`)
};

const zh_cn2_workflows_progress_last = /** @type {(inputs: Workflows_Progress_LastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`— 上次：${i?.stepName}`)
};

const es_workflows_progress_last = /** @type {(inputs: Workflows_Progress_LastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`— último: ${i?.stepName}`)
};

const ja_workflows_progress_last = /** @type {(inputs: Workflows_Progress_LastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`— 前回：${i?.stepName}`)
};

const hi_workflows_progress_last = /** @type {(inputs: Workflows_Progress_LastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`— अंतिम: ${i?.stepName}`)
};

const pt_br2_workflows_progress_last = /** @type {(inputs: Workflows_Progress_LastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`— último: ${i?.stepName}`)
};

const ko_workflows_progress_last = /** @type {(inputs: Workflows_Progress_LastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`— 마지막: ${i?.stepName}`)
};

const fr_workflows_progress_last = /** @type {(inputs: Workflows_Progress_LastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`— dernier : ${i?.stepName}`)
};

/**
* | output |
* | --- |
* | "— last: {stepName}" |
*
* @param {Workflows_Progress_LastInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_progress_last = /** @type {((inputs: Workflows_Progress_LastInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Progress_LastInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_progress_last(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_progress_last(inputs)
	if (locale === "es") return es_workflows_progress_last(inputs)
	if (locale === "ja") return ja_workflows_progress_last(inputs)
	if (locale === "hi") return hi_workflows_progress_last(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_progress_last(inputs)
	if (locale === "ko") return ko_workflows_progress_last(inputs)
	return fr_workflows_progress_last(inputs)
});