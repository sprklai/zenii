/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Inbox_Loading_MessagesInputs */

const en_inbox_loading_messages = /** @type {(inputs: Inbox_Loading_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading messages...`)
};

const zh_cn2_inbox_loading_messages = /** @type {(inputs: Inbox_Loading_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载消息中...`)
};

const es_inbox_loading_messages = /** @type {(inputs: Inbox_Loading_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando mensajes...`)
};

const ja_inbox_loading_messages = /** @type {(inputs: Inbox_Loading_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メッセージを読み込み中...`)
};

const hi_inbox_loading_messages = /** @type {(inputs: Inbox_Loading_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`संदेश लोड हो रहे हैं...`)
};

const pt_br2_inbox_loading_messages = /** @type {(inputs: Inbox_Loading_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregando mensagens...`)
};

const ko_inbox_loading_messages = /** @type {(inputs: Inbox_Loading_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메시지 로딩 중...`)
};

const fr_inbox_loading_messages = /** @type {(inputs: Inbox_Loading_MessagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement des messages...`)
};

/**
* | output |
* | --- |
* | "Loading messages..." |
*
* @param {Inbox_Loading_MessagesInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const inbox_loading_messages = /** @type {((inputs?: Inbox_Loading_MessagesInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Inbox_Loading_MessagesInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_inbox_loading_messages(inputs)
	if (locale === "zh-CN") return zh_cn2_inbox_loading_messages(inputs)
	if (locale === "es") return es_inbox_loading_messages(inputs)
	if (locale === "ja") return ja_inbox_loading_messages(inputs)
	if (locale === "hi") return hi_inbox_loading_messages(inputs)
	if (locale === "pt-BR") return pt_br2_inbox_loading_messages(inputs)
	if (locale === "ko") return ko_inbox_loading_messages(inputs)
	return fr_inbox_loading_messages(inputs)
});