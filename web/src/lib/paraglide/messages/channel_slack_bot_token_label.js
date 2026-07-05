/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Channel_Slack_Bot_Token_LabelInputs */

const en_channel_slack_bot_token_label = /** @type {(inputs: Channel_Slack_Bot_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bot Token`)
};

const zh_cn2_channel_slack_bot_token_label = /** @type {(inputs: Channel_Slack_Bot_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`机器人令牌`)
};

const es_channel_slack_bot_token_label = /** @type {(inputs: Channel_Slack_Bot_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token del bot`)
};

const ja_channel_slack_bot_token_label = /** @type {(inputs: Channel_Slack_Bot_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ボットトークン`)
};

const hi_channel_slack_bot_token_label = /** @type {(inputs: Channel_Slack_Bot_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`बॉट टोकन`)
};

const pt_br2_channel_slack_bot_token_label = /** @type {(inputs: Channel_Slack_Bot_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token do bot`)
};

const ko_channel_slack_bot_token_label = /** @type {(inputs: Channel_Slack_Bot_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`봇 토큰`)
};

const fr_channel_slack_bot_token_label = /** @type {(inputs: Channel_Slack_Bot_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token du bot`)
};

/**
* | output |
* | --- |
* | "Bot Token" |
*
* @param {Channel_Slack_Bot_Token_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const channel_slack_bot_token_label = /** @type {((inputs?: Channel_Slack_Bot_Token_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Channel_Slack_Bot_Token_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_channel_slack_bot_token_label(inputs)
	if (locale === "zh-CN") return zh_cn2_channel_slack_bot_token_label(inputs)
	if (locale === "es") return es_channel_slack_bot_token_label(inputs)
	if (locale === "ja") return ja_channel_slack_bot_token_label(inputs)
	if (locale === "hi") return hi_channel_slack_bot_token_label(inputs)
	if (locale === "pt-BR") return pt_br2_channel_slack_bot_token_label(inputs)
	if (locale === "ko") return ko_channel_slack_bot_token_label(inputs)
	return fr_channel_slack_bot_token_label(inputs)
});