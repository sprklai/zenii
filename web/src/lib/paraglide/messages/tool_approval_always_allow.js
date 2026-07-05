/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tool_Approval_Always_AllowInputs */

const en_tool_approval_always_allow = /** @type {(inputs: Tool_Approval_Always_AllowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Always Allow`)
};

const zh_cn2_tool_approval_always_allow = /** @type {(inputs: Tool_Approval_Always_AllowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`始终允许`)
};

const es_tool_approval_always_allow = /** @type {(inputs: Tool_Approval_Always_AllowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permitir siempre`)
};

const ja_tool_approval_always_allow = /** @type {(inputs: Tool_Approval_Always_AllowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`常に許可`)
};

const hi_tool_approval_always_allow = /** @type {(inputs: Tool_Approval_Always_AllowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`हमेशा अनुमति दें`)
};

const pt_br2_tool_approval_always_allow = /** @type {(inputs: Tool_Approval_Always_AllowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sempre permitir`)
};

const ko_tool_approval_always_allow = /** @type {(inputs: Tool_Approval_Always_AllowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`항상 허용`)
};

const fr_tool_approval_always_allow = /** @type {(inputs: Tool_Approval_Always_AllowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toujours autoriser`)
};

/**
* | output |
* | --- |
* | "Always Allow" |
*
* @param {Tool_Approval_Always_AllowInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const tool_approval_always_allow = /** @type {((inputs?: Tool_Approval_Always_AllowInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tool_Approval_Always_AllowInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tool_approval_always_allow(inputs)
	if (locale === "zh-CN") return zh_cn2_tool_approval_always_allow(inputs)
	if (locale === "es") return es_tool_approval_always_allow(inputs)
	if (locale === "ja") return ja_tool_approval_always_allow(inputs)
	if (locale === "hi") return hi_tool_approval_always_allow(inputs)
	if (locale === "pt-BR") return pt_br2_tool_approval_always_allow(inputs)
	if (locale === "ko") return ko_tool_approval_always_allow(inputs)
	return fr_tool_approval_always_allow(inputs)
});