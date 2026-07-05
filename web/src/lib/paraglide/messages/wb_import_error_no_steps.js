/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Import_Error_No_StepsInputs */

const en_wb_import_error_no_steps = /** @type {(inputs: Wb_Import_Error_No_StepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Missing workflow steps`)
};

const zh_cn2_wb_import_error_no_steps = /** @type {(inputs: Wb_Import_Error_No_StepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`缺少工作流步骤`)
};

const es_wb_import_error_no_steps = /** @type {(inputs: Wb_Import_Error_No_StepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faltan los pasos del flujo de trabajo`)
};

const ja_wb_import_error_no_steps = /** @type {(inputs: Wb_Import_Error_No_StepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフローのステップがありません`)
};

const hi_wb_import_error_no_steps = /** @type {(inputs: Wb_Import_Error_No_StepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो steps अनुपस्थित हैं`)
};

const pt_br2_wb_import_error_no_steps = /** @type {(inputs: Wb_Import_Error_No_StepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passos do workflow ausentes`)
};

const ko_wb_import_error_no_steps = /** @type {(inputs: Wb_Import_Error_No_StepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로 단계가 없습니다`)
};

const fr_wb_import_error_no_steps = /** @type {(inputs: Wb_Import_Error_No_StepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Étapes du flux de travail manquantes`)
};

/**
* | output |
* | --- |
* | "Missing workflow steps" |
*
* @param {Wb_Import_Error_No_StepsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_import_error_no_steps = /** @type {((inputs?: Wb_Import_Error_No_StepsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Import_Error_No_StepsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_import_error_no_steps(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_import_error_no_steps(inputs)
	if (locale === "es") return es_wb_import_error_no_steps(inputs)
	if (locale === "ja") return ja_wb_import_error_no_steps(inputs)
	if (locale === "hi") return hi_wb_import_error_no_steps(inputs)
	if (locale === "pt-BR") return pt_br2_wb_import_error_no_steps(inputs)
	if (locale === "ko") return ko_wb_import_error_no_steps(inputs)
	return fr_wb_import_error_no_steps(inputs)
});