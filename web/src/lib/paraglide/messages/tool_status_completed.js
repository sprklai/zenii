/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tool_Status_CompletedInputs */

const en_tool_status_completed = /** @type {(inputs: Tool_Status_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completed`)
};

const zh_cn2_tool_status_completed = /** @type {(inputs: Tool_Status_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已完成`)
};

const es_tool_status_completed = /** @type {(inputs: Tool_Status_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completado`)
};

const ja_tool_status_completed = /** @type {(inputs: Tool_Status_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完了`)
};

const hi_tool_status_completed = /** @type {(inputs: Tool_Status_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पूर्ण`)
};

const pt_br2_tool_status_completed = /** @type {(inputs: Tool_Status_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concluído`)
};

const ko_tool_status_completed = /** @type {(inputs: Tool_Status_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`완료`)
};

const fr_tool_status_completed = /** @type {(inputs: Tool_Status_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminé`)
};

/**
* | output |
* | --- |
* | "Completed" |
*
* @param {Tool_Status_CompletedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const tool_status_completed = /** @type {((inputs?: Tool_Status_CompletedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tool_Status_CompletedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tool_status_completed(inputs)
	if (locale === "zh-CN") return zh_cn2_tool_status_completed(inputs)
	if (locale === "es") return es_tool_status_completed(inputs)
	if (locale === "ja") return ja_tool_status_completed(inputs)
	if (locale === "hi") return hi_tool_status_completed(inputs)
	if (locale === "pt-BR") return pt_br2_tool_status_completed(inputs)
	if (locale === "ko") return ko_tool_status_completed(inputs)
	return fr_tool_status_completed(inputs)
});