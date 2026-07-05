/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Job_Name_PlaceholderInputs */

const en_wb_field_job_name_placeholder = /** @type {(inputs: Wb_Field_Job_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. daily-report`)
};

const zh_cn2_wb_field_job_name_placeholder = /** @type {(inputs: Wb_Field_Job_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例如 daily-report`)
};

const es_wb_field_job_name_placeholder = /** @type {(inputs: Wb_Field_Job_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ej. daily-report`)
};

const ja_wb_field_job_name_placeholder = /** @type {(inputs: Wb_Field_Job_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例: daily-report`)
};

const hi_wb_field_job_name_placeholder = /** @type {(inputs: Wb_Field_Job_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`उदा. daily-report`)
};

const pt_br2_wb_field_job_name_placeholder = /** @type {(inputs: Wb_Field_Job_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ex. daily-report`)
};

const ko_wb_field_job_name_placeholder = /** @type {(inputs: Wb_Field_Job_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`예: daily-report`)
};

const fr_wb_field_job_name_placeholder = /** @type {(inputs: Wb_Field_Job_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ex. daily-report`)
};

/**
* | output |
* | --- |
* | "e.g. daily-report" |
*
* @param {Wb_Field_Job_Name_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_job_name_placeholder = /** @type {((inputs?: Wb_Field_Job_Name_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Job_Name_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_job_name_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_job_name_placeholder(inputs)
	if (locale === "es") return es_wb_field_job_name_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_job_name_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_job_name_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_job_name_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_job_name_placeholder(inputs)
	return fr_wb_field_job_name_placeholder(inputs)
});