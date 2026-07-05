/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_Error_No_ProviderInputs */

const en_chat_error_no_provider = /** @type {(inputs: Chat_Error_No_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No AI provider configured.`)
};

const zh_cn2_chat_error_no_provider = /** @type {(inputs: Chat_Error_No_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未配置 AI 提供商。`)
};

const es_chat_error_no_provider = /** @type {(inputs: Chat_Error_No_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay proveedor de IA configurado.`)
};

const ja_chat_error_no_provider = /** @type {(inputs: Chat_Error_No_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI プロバイダーが設定されていません。`)
};

const hi_chat_error_no_provider = /** @type {(inputs: Chat_Error_No_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कोई AI प्रदाता कॉन्फ़िगर नहीं है।`)
};

const pt_br2_chat_error_no_provider = /** @type {(inputs: Chat_Error_No_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum provedor de IA configurado.`)
};

const ko_chat_error_no_provider = /** @type {(inputs: Chat_Error_No_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI 공급자가 설정되지 않았습니다.`)
};

const fr_chat_error_no_provider = /** @type {(inputs: Chat_Error_No_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun fournisseur d'IA configuré.`)
};

/**
* | output |
* | --- |
* | "No AI provider configured." |
*
* @param {Chat_Error_No_ProviderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_error_no_provider = /** @type {((inputs?: Chat_Error_No_ProviderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_Error_No_ProviderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_error_no_provider(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_error_no_provider(inputs)
	if (locale === "es") return es_chat_error_no_provider(inputs)
	if (locale === "ja") return ja_chat_error_no_provider(inputs)
	if (locale === "hi") return hi_chat_error_no_provider(inputs)
	if (locale === "pt-BR") return pt_br2_chat_error_no_provider(inputs)
	if (locale === "ko") return ko_chat_error_no_provider(inputs)
	return fr_chat_error_no_provider(inputs)
});