/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_Error_No_Provider_LinkInputs */

const en_chat_error_no_provider_link = /** @type {(inputs: Chat_Error_No_Provider_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Go to Settings → Providers`)
};

const zh_cn2_chat_error_no_provider_link = /** @type {(inputs: Chat_Error_No_Provider_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前往 设置 → 提供商`)
};

const es_chat_error_no_provider_link = /** @type {(inputs: Chat_Error_No_Provider_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir a Ajustes → Proveedores`)
};

const ja_chat_error_no_provider_link = /** @type {(inputs: Chat_Error_No_Provider_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定 → プロバイダー へ移動`)
};

const hi_chat_error_no_provider_link = /** @type {(inputs: Chat_Error_No_Provider_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सेटिंग्स → प्रदाता पर जाएँ`)
};

const pt_br2_chat_error_no_provider_link = /** @type {(inputs: Chat_Error_No_Provider_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir para Configurações → Provedores`)
};

const ko_chat_error_no_provider_link = /** @type {(inputs: Chat_Error_No_Provider_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`설정 → 공급자로 이동`)
};

const fr_chat_error_no_provider_link = /** @type {(inputs: Chat_Error_No_Provider_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aller à Paramètres → Fournisseurs`)
};

/**
* | output |
* | --- |
* | "Go to Settings → Providers" |
*
* @param {Chat_Error_No_Provider_LinkInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_error_no_provider_link = /** @type {((inputs?: Chat_Error_No_Provider_LinkInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_Error_No_Provider_LinkInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_error_no_provider_link(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_error_no_provider_link(inputs)
	if (locale === "es") return es_chat_error_no_provider_link(inputs)
	if (locale === "ja") return ja_chat_error_no_provider_link(inputs)
	if (locale === "hi") return hi_chat_error_no_provider_link(inputs)
	if (locale === "pt-BR") return pt_br2_chat_error_no_provider_link(inputs)
	if (locale === "ko") return ko_chat_error_no_provider_link(inputs)
	return fr_chat_error_no_provider_link(inputs)
});