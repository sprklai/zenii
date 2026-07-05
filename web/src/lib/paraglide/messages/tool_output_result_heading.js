/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tool_Output_Result_HeadingInputs */

const en_tool_output_result_heading = /** @type {(inputs: Tool_Output_Result_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Result`)
};

const zh_cn2_tool_output_result_heading = /** @type {(inputs: Tool_Output_Result_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`结果`)
};

const es_tool_output_result_heading = /** @type {(inputs: Tool_Output_Result_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultado`)
};

const ja_tool_output_result_heading = /** @type {(inputs: Tool_Output_Result_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果`)
};

const hi_tool_output_result_heading = /** @type {(inputs: Tool_Output_Result_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`परिणाम`)
};

const pt_br2_tool_output_result_heading = /** @type {(inputs: Tool_Output_Result_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultado`)
};

const ko_tool_output_result_heading = /** @type {(inputs: Tool_Output_Result_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`결과`)
};

const fr_tool_output_result_heading = /** @type {(inputs: Tool_Output_Result_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Résultat`)
};

/**
* | output |
* | --- |
* | "Result" |
*
* @param {Tool_Output_Result_HeadingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const tool_output_result_heading = /** @type {((inputs?: Tool_Output_Result_HeadingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tool_Output_Result_HeadingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tool_output_result_heading(inputs)
	if (locale === "zh-CN") return zh_cn2_tool_output_result_heading(inputs)
	if (locale === "es") return es_tool_output_result_heading(inputs)
	if (locale === "ja") return ja_tool_output_result_heading(inputs)
	if (locale === "hi") return hi_tool_output_result_heading(inputs)
	if (locale === "pt-BR") return pt_br2_tool_output_result_heading(inputs)
	if (locale === "ko") return ko_tool_output_result_heading(inputs)
	return fr_tool_output_result_heading(inputs)
});