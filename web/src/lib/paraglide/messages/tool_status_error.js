/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tool_Status_ErrorInputs */

const en_tool_status_error = /** @type {(inputs: Tool_Status_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error`)
};

const zh_cn2_tool_status_error = /** @type {(inputs: Tool_Status_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`错误`)
};

const es_tool_status_error = /** @type {(inputs: Tool_Status_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error`)
};

const ja_tool_status_error = /** @type {(inputs: Tool_Status_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エラー`)
};

const hi_tool_status_error = /** @type {(inputs: Tool_Status_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`त्रुटि`)
};

const pt_br2_tool_status_error = /** @type {(inputs: Tool_Status_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erro`)
};

const ko_tool_status_error = /** @type {(inputs: Tool_Status_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`오류`)
};

const fr_tool_status_error = /** @type {(inputs: Tool_Status_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erreur`)
};

/**
* | output |
* | --- |
* | "Error" |
*
* @param {Tool_Status_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const tool_status_error = /** @type {((inputs?: Tool_Status_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tool_Status_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tool_status_error(inputs)
	if (locale === "zh-CN") return zh_cn2_tool_status_error(inputs)
	if (locale === "es") return es_tool_status_error(inputs)
	if (locale === "ja") return ja_tool_status_error(inputs)
	if (locale === "hi") return hi_tool_status_error(inputs)
	if (locale === "pt-BR") return pt_br2_tool_status_error(inputs)
	if (locale === "ko") return ko_tool_status_error(inputs)
	return fr_tool_status_error(inputs)
});