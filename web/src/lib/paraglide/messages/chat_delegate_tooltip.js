/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_Delegate_TooltipInputs */

const en_chat_delegate_tooltip = /** @type {(inputs: Chat_Delegate_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enable multi-agent delegation`)
};

const zh_cn2_chat_delegate_tooltip = /** @type {(inputs: Chat_Delegate_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`启用多代理委派`)
};

const es_chat_delegate_tooltip = /** @type {(inputs: Chat_Delegate_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Habilitar delegación multi-agente`)
};

const ja_chat_delegate_tooltip = /** @type {(inputs: Chat_Delegate_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マルチエージェント委任を有効化`)
};

const hi_chat_delegate_tooltip = /** @type {(inputs: Chat_Delegate_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मल्टी-एजेंट डेलिगेशन सक्षम करें`)
};

const pt_br2_chat_delegate_tooltip = /** @type {(inputs: Chat_Delegate_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Habilitar delegação multi-agente`)
};

const ko_chat_delegate_tooltip = /** @type {(inputs: Chat_Delegate_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`멀티 에이전트 위임 활성화`)
};

const fr_chat_delegate_tooltip = /** @type {(inputs: Chat_Delegate_TooltipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activer la délégation multi-agent`)
};

/**
* | output |
* | --- |
* | "Enable multi-agent delegation" |
*
* @param {Chat_Delegate_TooltipInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_delegate_tooltip = /** @type {((inputs?: Chat_Delegate_TooltipInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_Delegate_TooltipInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_delegate_tooltip(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_delegate_tooltip(inputs)
	if (locale === "es") return es_chat_delegate_tooltip(inputs)
	if (locale === "ja") return ja_chat_delegate_tooltip(inputs)
	if (locale === "hi") return hi_chat_delegate_tooltip(inputs)
	if (locale === "pt-BR") return pt_br2_chat_delegate_tooltip(inputs)
	if (locale === "ko") return ko_chat_delegate_tooltip(inputs)
	return fr_chat_delegate_tooltip(inputs)
});