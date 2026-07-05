/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_Error_No_Provider_SuffixInputs */

const en_chat_error_no_provider_suffix = /** @type {(inputs: Chat_Error_No_Provider_SuffixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`to set up a provider and model.`)
};

const zh_cn2_chat_error_no_provider_suffix = /** @type {(inputs: Chat_Error_No_Provider_SuffixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`以设置提供商和模型。`)
};

const es_chat_error_no_provider_suffix = /** @type {(inputs: Chat_Error_No_Provider_SuffixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`para configurar un proveedor y modelo.`)
};

const ja_chat_error_no_provider_suffix = /** @type {(inputs: Chat_Error_No_Provider_SuffixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`してプロバイダーとモデルを設定してください。`)
};

const hi_chat_error_no_provider_suffix = /** @type {(inputs: Chat_Error_No_Provider_SuffixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रदाता और मॉडल सेट करने के लिए।`)
};

const pt_br2_chat_error_no_provider_suffix = /** @type {(inputs: Chat_Error_No_Provider_SuffixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`para configurar um provedor e modelo.`)
};

const ko_chat_error_no_provider_suffix = /** @type {(inputs: Chat_Error_No_Provider_SuffixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`공급자와 모델을 설정하세요.`)
};

const fr_chat_error_no_provider_suffix = /** @type {(inputs: Chat_Error_No_Provider_SuffixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`pour configurer un fournisseur et un modèle.`)
};

/**
* | output |
* | --- |
* | "to set up a provider and model." |
*
* @param {Chat_Error_No_Provider_SuffixInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_error_no_provider_suffix = /** @type {((inputs?: Chat_Error_No_Provider_SuffixInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_Error_No_Provider_SuffixInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_error_no_provider_suffix(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_error_no_provider_suffix(inputs)
	if (locale === "es") return es_chat_error_no_provider_suffix(inputs)
	if (locale === "ja") return ja_chat_error_no_provider_suffix(inputs)
	if (locale === "hi") return hi_chat_error_no_provider_suffix(inputs)
	if (locale === "pt-BR") return pt_br2_chat_error_no_provider_suffix(inputs)
	if (locale === "ko") return ko_chat_error_no_provider_suffix(inputs)
	return fr_chat_error_no_provider_suffix(inputs)
});