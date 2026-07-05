/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Inbox_No_ConversationsInputs */

const en_inbox_no_conversations = /** @type {(inputs: Inbox_No_ConversationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No channel conversations yet`)
};

const zh_cn2_inbox_no_conversations = /** @type {(inputs: Inbox_No_ConversationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无频道对话`)
};

const es_inbox_no_conversations = /** @type {(inputs: Inbox_No_ConversationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin conversaciones de canal aún`)
};

const ja_inbox_no_conversations = /** @type {(inputs: Inbox_No_ConversationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャンネルの会話はまだありません`)
};

const hi_inbox_no_conversations = /** @type {(inputs: Inbox_No_ConversationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अभी कोई चैनल वार्तालाप नहीं`)
};

const pt_br2_inbox_no_conversations = /** @type {(inputs: Inbox_No_ConversationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma conversa de canal ainda`)
};

const ko_inbox_no_conversations = /** @type {(inputs: Inbox_No_ConversationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`아직 채널 대화가 없습니다`)
};

const fr_inbox_no_conversations = /** @type {(inputs: Inbox_No_ConversationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore de conversations de canal`)
};

/**
* | output |
* | --- |
* | "No channel conversations yet" |
*
* @param {Inbox_No_ConversationsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const inbox_no_conversations = /** @type {((inputs?: Inbox_No_ConversationsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Inbox_No_ConversationsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_inbox_no_conversations(inputs)
	if (locale === "zh-CN") return zh_cn2_inbox_no_conversations(inputs)
	if (locale === "es") return es_inbox_no_conversations(inputs)
	if (locale === "ja") return ja_inbox_no_conversations(inputs)
	if (locale === "hi") return hi_inbox_no_conversations(inputs)
	if (locale === "pt-BR") return pt_br2_inbox_no_conversations(inputs)
	if (locale === "ko") return ko_inbox_no_conversations(inputs)
	return fr_inbox_no_conversations(inputs)
});