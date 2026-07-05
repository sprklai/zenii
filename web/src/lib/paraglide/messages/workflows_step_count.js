/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Workflows_Step_CountInputs */

const en_workflows_step_count = /** @type {(inputs: Workflows_Step_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} step`)
};

const zh_cn2_workflows_step_count = /** @type {(inputs: Workflows_Step_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 步`)
};

const es_workflows_step_count = /** @type {(inputs: Workflows_Step_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} paso`)
};

const ja_workflows_step_count = /** @type {(inputs: Workflows_Step_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} ステップ`)
};

const hi_workflows_step_count = /** @type {(inputs: Workflows_Step_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} चरण`)
};

const pt_br2_workflows_step_count = /** @type {(inputs: Workflows_Step_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} etapa`)
};

const ko_workflows_step_count = /** @type {(inputs: Workflows_Step_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count}개 단계`)
};

const fr_workflows_step_count = /** @type {(inputs: Workflows_Step_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} étape`)
};

/**
* | output |
* | --- |
* | "{count} step" |
*
* @param {Workflows_Step_CountInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_step_count = /** @type {((inputs: Workflows_Step_CountInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Step_CountInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_step_count(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_step_count(inputs)
	if (locale === "es") return es_workflows_step_count(inputs)
	if (locale === "ja") return ja_workflows_step_count(inputs)
	if (locale === "hi") return hi_workflows_step_count(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_step_count(inputs)
	if (locale === "ko") return ko_workflows_step_count(inputs)
	return fr_workflows_step_count(inputs)
});