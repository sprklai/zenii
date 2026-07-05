/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Channel_Slack_App_Token_PlaceholderInputs */

const en_channel_slack_app_token_placeholder = /** @type {(inputs: Channel_Slack_App_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`xapp-... App-Level Token for Socket Mode`)
};

const zh_cn2_channel_slack_app_token_placeholder = /** @type {(inputs: Channel_Slack_App_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`xapp-... Socket Mode应用级令牌`)
};

const es_channel_slack_app_token_placeholder = /** @type {(inputs: Channel_Slack_App_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`xapp-... Token de nivel de aplicación para Socket Mode`)
};

const ja_channel_slack_app_token_placeholder = /** @type {(inputs: Channel_Slack_App_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`xapp-... Socket Modeアプリレベルトークン`)
};

const hi_channel_slack_app_token_placeholder = /** @type {(inputs: Channel_Slack_App_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`xapp-... Socket Mode ऐप-लेवल टोकन`)
};

const pt_br2_channel_slack_app_token_placeholder = /** @type {(inputs: Channel_Slack_App_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`xapp-... Token de nível de aplicativo para Socket Mode`)
};

const ko_channel_slack_app_token_placeholder = /** @type {(inputs: Channel_Slack_App_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`xapp-... Socket Mode 앱 레벨 토큰`)
};

const fr_channel_slack_app_token_placeholder = /** @type {(inputs: Channel_Slack_App_Token_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`xapp-... Token de niveau application pour Socket Mode`)
};

/**
* | output |
* | --- |
* | "xapp-... App-Level Token for Socket Mode" |
*
* @param {Channel_Slack_App_Token_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const channel_slack_app_token_placeholder = /** @type {((inputs?: Channel_Slack_App_Token_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Channel_Slack_App_Token_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_channel_slack_app_token_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_channel_slack_app_token_placeholder(inputs)
	if (locale === "es") return es_channel_slack_app_token_placeholder(inputs)
	if (locale === "ja") return ja_channel_slack_app_token_placeholder(inputs)
	if (locale === "hi") return hi_channel_slack_app_token_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_channel_slack_app_token_placeholder(inputs)
	if (locale === "ko") return ko_channel_slack_app_token_placeholder(inputs)
	return fr_channel_slack_app_token_placeholder(inputs)
});