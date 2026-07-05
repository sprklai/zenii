/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_No_Api_Key_LinkInputs */

const en_chat_no_api_key_link = /** @type {(inputs: Chat_No_Api_Key_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add one in Settings → Providers`)
};

const zh_cn2_chat_no_api_key_link = /** @type {(inputs: Chat_No_Api_Key_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在 设置 → 提供商 中添加`)
};

const es_chat_no_api_key_link = /** @type {(inputs: Chat_No_Api_Key_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añade una en Ajustes → Proveedores`)
};

const ja_chat_no_api_key_link = /** @type {(inputs: Chat_No_Api_Key_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定 → プロバイダー で追加`)
};

const hi_chat_no_api_key_link = /** @type {(inputs: Chat_No_Api_Key_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सेटिंग्स → प्रदाता में जोड़ें`)
};

const pt_br2_chat_no_api_key_link = /** @type {(inputs: Chat_No_Api_Key_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicione em Configurações → Provedores`)
};

const ko_chat_no_api_key_link = /** @type {(inputs: Chat_No_Api_Key_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`설정 → 공급자에서 추가`)
};

const fr_chat_no_api_key_link = /** @type {(inputs: Chat_No_Api_Key_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajoutez-en une dans Paramètres → Fournisseurs`)
};

/**
* | output |
* | --- |
* | "Add one in Settings → Providers" |
*
* @param {Chat_No_Api_Key_LinkInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_no_api_key_link = /** @type {((inputs?: Chat_No_Api_Key_LinkInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_No_Api_Key_LinkInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_no_api_key_link(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_no_api_key_link(inputs)
	if (locale === "es") return es_chat_no_api_key_link(inputs)
	if (locale === "ja") return ja_chat_no_api_key_link(inputs)
	if (locale === "hi") return hi_chat_no_api_key_link(inputs)
	if (locale === "pt-BR") return pt_br2_chat_no_api_key_link(inputs)
	if (locale === "ko") return ko_chat_no_api_key_link(inputs)
	return fr_chat_no_api_key_link(inputs)
});