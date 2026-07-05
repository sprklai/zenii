/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Channel_Telegram_Token_PlaceholderInputs */

const en_channel_telegram_token_placeholder = /** @type {(inputs: Channel_Telegram_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bot token from @BotFather`)
};

const zh_cn2_channel_telegram_token_placeholder = /** @type {(inputs: Channel_Telegram_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`来自 @BotFather 的机器人令牌`)
};

const es_channel_telegram_token_placeholder = /** @type {(inputs: Channel_Telegram_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token del bot de @BotFather`)
};

const ja_channel_telegram_token_placeholder = /** @type {(inputs: Channel_Telegram_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`@BotFather からのボットトークン`)
};

const hi_channel_telegram_token_placeholder = /** @type {(inputs: Channel_Telegram_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`@BotFather से बॉट टोकन`)
};

const pt_br2_channel_telegram_token_placeholder = /** @type {(inputs: Channel_Telegram_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token do bot do @BotFather`)
};

const ko_channel_telegram_token_placeholder = /** @type {(inputs: Channel_Telegram_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`@BotFather의 봇 토큰`)
};

const fr_channel_telegram_token_placeholder = /** @type {(inputs: Channel_Telegram_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token du bot de @BotFather`)
};

/**
* | output |
* | --- |
* | "Bot token from @BotFather" |
*
* @param {Channel_Telegram_Token_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const channel_telegram_token_placeholder = /** @type {((inputs?: Channel_Telegram_Token_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Channel_Telegram_Token_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_channel_telegram_token_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_channel_telegram_token_placeholder(inputs)
	if (locale === "es") return es_channel_telegram_token_placeholder(inputs)
	if (locale === "ja") return ja_channel_telegram_token_placeholder(inputs)
	if (locale === "hi") return hi_channel_telegram_token_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_channel_telegram_token_placeholder(inputs)
	if (locale === "ko") return ko_channel_telegram_token_placeholder(inputs)
	return fr_channel_telegram_token_placeholder(inputs)
});