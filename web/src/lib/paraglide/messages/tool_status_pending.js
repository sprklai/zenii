/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tool_Status_PendingInputs */

const en_tool_status_pending = /** @type {(inputs: Tool_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pending`)
};

const zh_cn2_tool_status_pending = /** @type {(inputs: Tool_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`等待中`)
};

const es_tool_status_pending = /** @type {(inputs: Tool_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pendiente`)
};

const ja_tool_status_pending = /** @type {(inputs: Tool_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保留中`)
};

const hi_tool_status_pending = /** @type {(inputs: Tool_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`लंबित`)
};

const pt_br2_tool_status_pending = /** @type {(inputs: Tool_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pendente`)
};

const ko_tool_status_pending = /** @type {(inputs: Tool_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`대기 중`)
};

const fr_tool_status_pending = /** @type {(inputs: Tool_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En attente`)
};

/**
* | output |
* | --- |
* | "Pending" |
*
* @param {Tool_Status_PendingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const tool_status_pending = /** @type {((inputs?: Tool_Status_PendingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tool_Status_PendingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tool_status_pending(inputs)
	if (locale === "zh-CN") return zh_cn2_tool_status_pending(inputs)
	if (locale === "es") return es_tool_status_pending(inputs)
	if (locale === "ja") return ja_tool_status_pending(inputs)
	if (locale === "hi") return hi_tool_status_pending(inputs)
	if (locale === "pt-BR") return pt_br2_tool_status_pending(inputs)
	if (locale === "ko") return ko_tool_status_pending(inputs)
	return fr_tool_status_pending(inputs)
});