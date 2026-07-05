/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Parallel_Steps_DescriptionInputs */

const en_wb_field_parallel_steps_description = /** @type {(inputs: Wb_Field_Parallel_Steps_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steps to execute concurrently`)
};

const zh_cn2_wb_field_parallel_steps_description = /** @type {(inputs: Wb_Field_Parallel_Steps_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`并发执行的步骤`)
};

const es_wb_field_parallel_steps_description = /** @type {(inputs: Wb_Field_Parallel_Steps_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pasos a ejecutar de forma concurrente`)
};

const ja_wb_field_parallel_steps_description = /** @type {(inputs: Wb_Field_Parallel_Steps_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`並行して実行するステップ`)
};

const hi_wb_field_parallel_steps_description = /** @type {(inputs: Wb_Field_Parallel_Steps_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एक साथ निष्पादित किए जाने वाले चरण`)
};

const pt_br2_wb_field_parallel_steps_description = /** @type {(inputs: Wb_Field_Parallel_Steps_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passos a executar de forma concorrente`)
};

const ko_wb_field_parallel_steps_description = /** @type {(inputs: Wb_Field_Parallel_Steps_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`동시에 실행할 단계`)
};

const fr_wb_field_parallel_steps_description = /** @type {(inputs: Wb_Field_Parallel_Steps_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Étapes à exécuter simultanément`)
};

/**
* | output |
* | --- |
* | "Steps to execute concurrently" |
*
* @param {Wb_Field_Parallel_Steps_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_parallel_steps_description = /** @type {((inputs?: Wb_Field_Parallel_Steps_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Parallel_Steps_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_parallel_steps_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_parallel_steps_description(inputs)
	if (locale === "es") return es_wb_field_parallel_steps_description(inputs)
	if (locale === "ja") return ja_wb_field_parallel_steps_description(inputs)
	if (locale === "hi") return hi_wb_field_parallel_steps_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_parallel_steps_description(inputs)
	if (locale === "ko") return ko_wb_field_parallel_steps_description(inputs)
	return fr_wb_field_parallel_steps_description(inputs)
});