/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tool_Output_Error_HeadingInputs */

const en_tool_output_error_heading = /** @type {(inputs: Tool_Output_Error_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error`)
};

const zh_cn2_tool_output_error_heading = /** @type {(inputs: Tool_Output_Error_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`错误`)
};

const es_tool_output_error_heading = /** @type {(inputs: Tool_Output_Error_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error`)
};

const ja_tool_output_error_heading = /** @type {(inputs: Tool_Output_Error_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エラー`)
};

const hi_tool_output_error_heading = /** @type {(inputs: Tool_Output_Error_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`त्रुटि`)
};

const pt_br2_tool_output_error_heading = /** @type {(inputs: Tool_Output_Error_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erro`)
};

const ko_tool_output_error_heading = /** @type {(inputs: Tool_Output_Error_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`오류`)
};

const fr_tool_output_error_heading = /** @type {(inputs: Tool_Output_Error_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erreur`)
};

/**
* | output |
* | --- |
* | "Error" |
*
* @param {Tool_Output_Error_HeadingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const tool_output_error_heading = /** @type {((inputs?: Tool_Output_Error_HeadingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tool_Output_Error_HeadingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tool_output_error_heading(inputs)
	if (locale === "zh-CN") return zh_cn2_tool_output_error_heading(inputs)
	if (locale === "es") return es_tool_output_error_heading(inputs)
	if (locale === "ja") return ja_tool_output_error_heading(inputs)
	if (locale === "hi") return hi_tool_output_error_heading(inputs)
	if (locale === "pt-BR") return pt_br2_tool_output_error_heading(inputs)
	if (locale === "ko") return ko_tool_output_error_heading(inputs)
	return fr_tool_output_error_heading(inputs)
});