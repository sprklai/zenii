/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Channel_Slack_App_Token_LabelInputs */

const en_channel_slack_app_token_label = /** @type {(inputs: Channel_Slack_App_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`App Token`)
};

const zh_cn2_channel_slack_app_token_label = /** @type {(inputs: Channel_Slack_App_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`应用令牌`)
};

const es_channel_slack_app_token_label = /** @type {(inputs: Channel_Slack_App_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token de aplicación`)
};

const ja_channel_slack_app_token_label = /** @type {(inputs: Channel_Slack_App_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アプリトークン`)
};

const hi_channel_slack_app_token_label = /** @type {(inputs: Channel_Slack_App_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ऐप टोकन`)
};

const pt_br2_channel_slack_app_token_label = /** @type {(inputs: Channel_Slack_App_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token do aplicativo`)
};

const ko_channel_slack_app_token_label = /** @type {(inputs: Channel_Slack_App_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`앱 토큰`)
};

const fr_channel_slack_app_token_label = /** @type {(inputs: Channel_Slack_App_Token_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token d'application`)
};

/**
* | output |
* | --- |
* | "App Token" |
*
* @param {Channel_Slack_App_Token_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const channel_slack_app_token_label = /** @type {((inputs?: Channel_Slack_App_Token_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Channel_Slack_App_Token_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_channel_slack_app_token_label(inputs)
	if (locale === "zh-CN") return zh_cn2_channel_slack_app_token_label(inputs)
	if (locale === "es") return es_channel_slack_app_token_label(inputs)
	if (locale === "ja") return ja_channel_slack_app_token_label(inputs)
	if (locale === "hi") return hi_channel_slack_app_token_label(inputs)
	if (locale === "pt-BR") return pt_br2_channel_slack_app_token_label(inputs)
	if (locale === "ko") return ko_channel_slack_app_token_label(inputs)
	return fr_channel_slack_app_token_label(inputs)
});