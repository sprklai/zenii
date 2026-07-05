/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Channel_Discord_Token_PlaceholderInputs */

const en_channel_discord_token_placeholder = /** @type {(inputs: Channel_Discord_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bot token from Developer Portal`)
};

const zh_cn2_channel_discord_token_placeholder = /** @type {(inputs: Channel_Discord_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`来自开发者门户的机器人令牌`)
};

const es_channel_discord_token_placeholder = /** @type {(inputs: Channel_Discord_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token del bot del Portal de Desarrolladores`)
};

const ja_channel_discord_token_placeholder = /** @type {(inputs: Channel_Discord_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開発者ポータルのボットトークン`)
};

const hi_channel_discord_token_placeholder = /** @type {(inputs: Channel_Discord_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`डेवलपर पोर्टल से बॉट टोकन`)
};

const pt_br2_channel_discord_token_placeholder = /** @type {(inputs: Channel_Discord_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token do bot do Portal de Desenvolvedores`)
};

const ko_channel_discord_token_placeholder = /** @type {(inputs: Channel_Discord_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`개발자 포털의 봇 토큰`)
};

const fr_channel_discord_token_placeholder = /** @type {(inputs: Channel_Discord_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token du bot du Portail Développeur`)
};

/**
* | output |
* | --- |
* | "Bot token from Developer Portal" |
*
* @param {Channel_Discord_Token_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const channel_discord_token_placeholder = /** @type {((inputs?: Channel_Discord_Token_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Channel_Discord_Token_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_channel_discord_token_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_channel_discord_token_placeholder(inputs)
	if (locale === "es") return es_channel_discord_token_placeholder(inputs)
	if (locale === "ja") return ja_channel_discord_token_placeholder(inputs)
	if (locale === "hi") return hi_channel_discord_token_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_channel_discord_token_placeholder(inputs)
	if (locale === "ko") return ko_channel_discord_token_placeholder(inputs)
	return fr_channel_discord_token_placeholder(inputs)
});