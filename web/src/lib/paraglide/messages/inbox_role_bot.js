/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Inbox_Role_BotInputs */

const en_inbox_role_bot = /** @type {(inputs: Inbox_Role_BotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bot`)
};

const zh_cn2_inbox_role_bot = /** @type {(inputs: Inbox_Role_BotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`机器人`)
};

const es_inbox_role_bot = /** @type {(inputs: Inbox_Role_BotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bot`)
};

const ja_inbox_role_bot = /** @type {(inputs: Inbox_Role_BotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ボット`)
};

const hi_inbox_role_bot = /** @type {(inputs: Inbox_Role_BotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`बॉट`)
};

const pt_br2_inbox_role_bot = /** @type {(inputs: Inbox_Role_BotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bot`)
};

const ko_inbox_role_bot = /** @type {(inputs: Inbox_Role_BotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`봇`)
};

const fr_inbox_role_bot = /** @type {(inputs: Inbox_Role_BotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bot`)
};

/**
* | output |
* | --- |
* | "Bot" |
*
* @param {Inbox_Role_BotInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const inbox_role_bot = /** @type {((inputs?: Inbox_Role_BotInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Inbox_Role_BotInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_inbox_role_bot(inputs)
	if (locale === "zh-CN") return zh_cn2_inbox_role_bot(inputs)
	if (locale === "es") return es_inbox_role_bot(inputs)
	if (locale === "ja") return ja_inbox_role_bot(inputs)
	if (locale === "hi") return hi_inbox_role_bot(inputs)
	if (locale === "pt-BR") return pt_br2_inbox_role_bot(inputs)
	if (locale === "ko") return ko_inbox_role_bot(inputs)
	return fr_inbox_role_bot(inputs)
});