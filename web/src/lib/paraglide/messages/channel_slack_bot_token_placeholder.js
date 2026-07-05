/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Channel_Slack_Bot_Token_PlaceholderInputs */

const en_channel_slack_bot_token_placeholder = /** @type {(inputs: Channel_Slack_Bot_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`xoxb-... Bot User OAuth Token`)
};

const zh_cn2_channel_slack_bot_token_placeholder = /** @type {(inputs: Channel_Slack_Bot_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`xoxb-... 机器人用户OAuth令牌`)
};

const es_channel_slack_bot_token_placeholder = /** @type {(inputs: Channel_Slack_Bot_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`xoxb-... Token OAuth del bot`)
};

const ja_channel_slack_bot_token_placeholder = /** @type {(inputs: Channel_Slack_Bot_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`xoxb-... ボットユーザーOAuthトークン`)
};

const hi_channel_slack_bot_token_placeholder = /** @type {(inputs: Channel_Slack_Bot_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`xoxb-... बॉट यूजर OAuth टोकन`)
};

const pt_br2_channel_slack_bot_token_placeholder = /** @type {(inputs: Channel_Slack_Bot_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`xoxb-... Token OAuth do bot`)
};

const ko_channel_slack_bot_token_placeholder = /** @type {(inputs: Channel_Slack_Bot_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`xoxb-... 봇 사용자 OAuth 토큰`)
};

const fr_channel_slack_bot_token_placeholder = /** @type {(inputs: Channel_Slack_Bot_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`xoxb-... Token OAuth du bot`)
};

/**
* | output |
* | --- |
* | "xoxb-... Bot User OAuth Token" |
*
* @param {Channel_Slack_Bot_Token_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const channel_slack_bot_token_placeholder = /** @type {((inputs?: Channel_Slack_Bot_Token_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Channel_Slack_Bot_Token_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_channel_slack_bot_token_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_channel_slack_bot_token_placeholder(inputs)
	if (locale === "es") return es_channel_slack_bot_token_placeholder(inputs)
	if (locale === "ja") return ja_channel_slack_bot_token_placeholder(inputs)
	if (locale === "hi") return hi_channel_slack_bot_token_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_channel_slack_bot_token_placeholder(inputs)
	if (locale === "ko") return ko_channel_slack_bot_token_placeholder(inputs)
	return fr_channel_slack_bot_token_placeholder(inputs)
});