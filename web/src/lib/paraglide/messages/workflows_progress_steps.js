/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ completed: NonNullable<unknown>, total: NonNullable<unknown> }} Workflows_Progress_StepsInputs */

const en_workflows_progress_steps = /** @type {(inputs: Workflows_Progress_StepsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.completed}/${i?.total} steps`)
};

const zh_cn2_workflows_progress_steps = /** @type {(inputs: Workflows_Progress_StepsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.completed}/${i?.total} 步`)
};

const es_workflows_progress_steps = /** @type {(inputs: Workflows_Progress_StepsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.completed}/${i?.total} pasos`)
};

const ja_workflows_progress_steps = /** @type {(inputs: Workflows_Progress_StepsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.completed}/${i?.total} ステップ`)
};

const hi_workflows_progress_steps = /** @type {(inputs: Workflows_Progress_StepsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.completed}/${i?.total} चरण`)
};

const pt_br2_workflows_progress_steps = /** @type {(inputs: Workflows_Progress_StepsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.completed}/${i?.total} etapas`)
};

const ko_workflows_progress_steps = /** @type {(inputs: Workflows_Progress_StepsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.completed}/${i?.total} 단계`)
};

const fr_workflows_progress_steps = /** @type {(inputs: Workflows_Progress_StepsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.completed}/${i?.total} étapes`)
};

/**
* | output |
* | --- |
* | "{completed}/{total} steps" |
*
* @param {Workflows_Progress_StepsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_progress_steps = /** @type {((inputs: Workflows_Progress_StepsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Progress_StepsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_progress_steps(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_progress_steps(inputs)
	if (locale === "es") return es_workflows_progress_steps(inputs)
	if (locale === "ja") return ja_workflows_progress_steps(inputs)
	if (locale === "hi") return hi_workflows_progress_steps(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_progress_steps(inputs)
	if (locale === "ko") return ko_workflows_progress_steps(inputs)
	return fr_workflows_progress_steps(inputs)
});