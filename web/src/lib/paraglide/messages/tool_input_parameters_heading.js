/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tool_Input_Parameters_HeadingInputs */

const en_tool_input_parameters_heading = /** @type {(inputs: Tool_Input_Parameters_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parameters`)
};

const zh_cn2_tool_input_parameters_heading = /** @type {(inputs: Tool_Input_Parameters_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`参数`)
};

const es_tool_input_parameters_heading = /** @type {(inputs: Tool_Input_Parameters_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parámetros`)
};

const ja_tool_input_parameters_heading = /** @type {(inputs: Tool_Input_Parameters_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パラメータ`)
};

const hi_tool_input_parameters_heading = /** @type {(inputs: Tool_Input_Parameters_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पैरामीटर`)
};

const pt_br2_tool_input_parameters_heading = /** @type {(inputs: Tool_Input_Parameters_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parâmetros`)
};

const ko_tool_input_parameters_heading = /** @type {(inputs: Tool_Input_Parameters_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`매개변수`)
};

const fr_tool_input_parameters_heading = /** @type {(inputs: Tool_Input_Parameters_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paramètres`)
};

/**
* | output |
* | --- |
* | "Parameters" |
*
* @param {Tool_Input_Parameters_HeadingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const tool_input_parameters_heading = /** @type {((inputs?: Tool_Input_Parameters_HeadingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tool_Input_Parameters_HeadingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tool_input_parameters_heading(inputs)
	if (locale === "zh-CN") return zh_cn2_tool_input_parameters_heading(inputs)
	if (locale === "es") return es_tool_input_parameters_heading(inputs)
	if (locale === "ja") return ja_tool_input_parameters_heading(inputs)
	if (locale === "hi") return hi_tool_input_parameters_heading(inputs)
	if (locale === "pt-BR") return pt_br2_tool_input_parameters_heading(inputs)
	if (locale === "ko") return ko_tool_input_parameters_heading(inputs)
	return fr_tool_input_parameters_heading(inputs)
});