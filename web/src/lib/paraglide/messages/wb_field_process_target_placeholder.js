/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Process_Target_PlaceholderInputs */

const en_wb_field_process_target_placeholder = /** @type {(inputs: Wb_Field_Process_Target_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Process name or PID`)
};

const zh_cn2_wb_field_process_target_placeholder = /** @type {(inputs: Wb_Field_Process_Target_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`进程名称或 PID`)
};

const es_wb_field_process_target_placeholder = /** @type {(inputs: Wb_Field_Process_Target_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre del proceso o PID`)
};

const ja_wb_field_process_target_placeholder = /** @type {(inputs: Wb_Field_Process_Target_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロセス名または PID`)
};

const hi_wb_field_process_target_placeholder = /** @type {(inputs: Wb_Field_Process_Target_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रक्रिया नाम या PID`)
};

const pt_br2_wb_field_process_target_placeholder = /** @type {(inputs: Wb_Field_Process_Target_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome do processo ou PID`)
};

const ko_wb_field_process_target_placeholder = /** @type {(inputs: Wb_Field_Process_Target_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`프로세스 이름 또는 PID`)
};

const fr_wb_field_process_target_placeholder = /** @type {(inputs: Wb_Field_Process_Target_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom du processus ou PID`)
};

/**
* | output |
* | --- |
* | "Process name or PID" |
*
* @param {Wb_Field_Process_Target_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_process_target_placeholder = /** @type {((inputs?: Wb_Field_Process_Target_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Process_Target_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_process_target_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_process_target_placeholder(inputs)
	if (locale === "es") return es_wb_field_process_target_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_process_target_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_process_target_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_process_target_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_process_target_placeholder(inputs)
	return fr_wb_field_process_target_placeholder(inputs)
});