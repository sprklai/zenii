/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Process_Target_DescriptionInputs */

const en_wb_field_process_target_description = /** @type {(inputs: Wb_Field_Process_Target_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Process name or PID for find/kill actions`)
};

const zh_cn2_wb_field_process_target_description = /** @type {(inputs: Wb_Field_Process_Target_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用于 find/kill 操作的进程名称或 PID`)
};

const es_wb_field_process_target_description = /** @type {(inputs: Wb_Field_Process_Target_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre del proceso o PID para acciones de buscar/terminar`)
};

const ja_wb_field_process_target_description = /** @type {(inputs: Wb_Field_Process_Target_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索/終了アクション用のプロセス名または PID`)
};

const hi_wb_field_process_target_description = /** @type {(inputs: Wb_Field_Process_Target_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`find/kill क्रियाओं के लिए प्रक्रिया नाम या PID`)
};

const pt_br2_wb_field_process_target_description = /** @type {(inputs: Wb_Field_Process_Target_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome do processo ou PID para ações de encontrar/encerrar`)
};

const ko_wb_field_process_target_description = /** @type {(inputs: Wb_Field_Process_Target_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`검색/종료 액션을 위한 프로세스 이름 또는 PID`)
};

const fr_wb_field_process_target_description = /** @type {(inputs: Wb_Field_Process_Target_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom du processus ou PID pour les actions de recherche/terminaison`)
};

/**
* | output |
* | --- |
* | "Process name or PID for find/kill actions" |
*
* @param {Wb_Field_Process_Target_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_process_target_description = /** @type {((inputs?: Wb_Field_Process_Target_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Process_Target_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_process_target_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_process_target_description(inputs)
	if (locale === "es") return es_wb_field_process_target_description(inputs)
	if (locale === "ja") return ja_wb_field_process_target_description(inputs)
	if (locale === "hi") return hi_wb_field_process_target_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_process_target_description(inputs)
	if (locale === "ko") return ko_wb_field_process_target_description(inputs)
	return fr_wb_field_process_target_description(inputs)
});