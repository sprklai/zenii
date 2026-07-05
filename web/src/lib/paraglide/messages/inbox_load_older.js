/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Inbox_Load_OlderInputs */

const en_inbox_load_older = /** @type {(inputs: Inbox_Load_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Load older messages`)
};

const zh_cn2_inbox_load_older = /** @type {(inputs: Inbox_Load_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载更早的消息`)
};

const es_inbox_load_older = /** @type {(inputs: Inbox_Load_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargar mensajes anteriores`)
};

const ja_inbox_load_older = /** @type {(inputs: Inbox_Load_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`古いメッセージを読み込む`)
};

const hi_inbox_load_older = /** @type {(inputs: Inbox_Load_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पुराने संदेश लोड करें`)
};

const pt_br2_inbox_load_older = /** @type {(inputs: Inbox_Load_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregar mensagens anteriores`)
};

const ko_inbox_load_older = /** @type {(inputs: Inbox_Load_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이전 메시지 불러오기`)
};

const fr_inbox_load_older = /** @type {(inputs: Inbox_Load_OlderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Charger les messages plus anciens`)
};

/**
* | output |
* | --- |
* | "Load older messages" |
*
* @param {Inbox_Load_OlderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const inbox_load_older = /** @type {((inputs?: Inbox_Load_OlderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Inbox_Load_OlderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_inbox_load_older(inputs)
	if (locale === "zh-CN") return zh_cn2_inbox_load_older(inputs)
	if (locale === "es") return es_inbox_load_older(inputs)
	if (locale === "ja") return ja_inbox_load_older(inputs)
	if (locale === "hi") return hi_inbox_load_older(inputs)
	if (locale === "pt-BR") return pt_br2_inbox_load_older(inputs)
	if (locale === "ko") return ko_inbox_load_older(inputs)
	return fr_inbox_load_older(inputs)
});