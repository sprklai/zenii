/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_Configure_Provider_PlaceholderInputs */

const en_chat_configure_provider_placeholder = /** @type {(inputs: Chat_Configure_Provider_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configure a provider to start chatting...`)
};

const zh_cn2_chat_configure_provider_placeholder = /** @type {(inputs: Chat_Configure_Provider_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先配置提供商以开始聊天...`)
};

const es_chat_configure_provider_placeholder = /** @type {(inputs: Chat_Configure_Provider_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configura un proveedor para comenzar a chatear...`)
};

const ja_chat_configure_provider_placeholder = /** @type {(inputs: Chat_Configure_Provider_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャットを開始するにはプロバイダーを設定してください...`)
};

const hi_chat_configure_provider_placeholder = /** @type {(inputs: Chat_Configure_Provider_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैट शुरू करने के लिए एक प्रदाता कॉन्फ़िगर करें...`)
};

const pt_br2_chat_configure_provider_placeholder = /** @type {(inputs: Chat_Configure_Provider_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configure um provedor para começar a conversar...`)
};

const ko_chat_configure_provider_placeholder = /** @type {(inputs: Chat_Configure_Provider_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채팅을 시작하려면 공급자를 설정하세요...`)
};

const fr_chat_configure_provider_placeholder = /** @type {(inputs: Chat_Configure_Provider_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurez un fournisseur pour commencer à discuter...`)
};

/**
* | output |
* | --- |
* | "Configure a provider to start chatting..." |
*
* @param {Chat_Configure_Provider_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_configure_provider_placeholder = /** @type {((inputs?: Chat_Configure_Provider_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_Configure_Provider_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_configure_provider_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_configure_provider_placeholder(inputs)
	if (locale === "es") return es_chat_configure_provider_placeholder(inputs)
	if (locale === "ja") return ja_chat_configure_provider_placeholder(inputs)
	if (locale === "hi") return hi_chat_configure_provider_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_chat_configure_provider_placeholder(inputs)
	if (locale === "ko") return ko_chat_configure_provider_placeholder(inputs)
	return fr_chat_configure_provider_placeholder(inputs)
});