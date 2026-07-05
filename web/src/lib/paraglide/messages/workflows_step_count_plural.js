/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Workflows_Step_Count_PluralInputs */

const en_workflows_step_count_plural = /** @type {(inputs: Workflows_Step_Count_PluralInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} steps`)
};

const zh_cn2_workflows_step_count_plural = /** @type {(inputs: Workflows_Step_Count_PluralInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 步`)
};

const es_workflows_step_count_plural = /** @type {(inputs: Workflows_Step_Count_PluralInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} pasos`)
};

const ja_workflows_step_count_plural = /** @type {(inputs: Workflows_Step_Count_PluralInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} ステップ`)
};

const hi_workflows_step_count_plural = /** @type {(inputs: Workflows_Step_Count_PluralInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} चरण`)
};

const pt_br2_workflows_step_count_plural = /** @type {(inputs: Workflows_Step_Count_PluralInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} etapas`)
};

const ko_workflows_step_count_plural = /** @type {(inputs: Workflows_Step_Count_PluralInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count}개 단계`)
};

const fr_workflows_step_count_plural = /** @type {(inputs: Workflows_Step_Count_PluralInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} étapes`)
};

/**
* | output |
* | --- |
* | "{count} steps" |
*
* @param {Workflows_Step_Count_PluralInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_step_count_plural = /** @type {((inputs: Workflows_Step_Count_PluralInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Step_Count_PluralInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_step_count_plural(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_step_count_plural(inputs)
	if (locale === "es") return es_workflows_step_count_plural(inputs)
	if (locale === "ja") return ja_workflows_step_count_plural(inputs)
	if (locale === "hi") return hi_workflows_step_count_plural(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_step_count_plural(inputs)
	if (locale === "ko") return ko_workflows_step_count_plural(inputs)
	return fr_workflows_step_count_plural(inputs)
});