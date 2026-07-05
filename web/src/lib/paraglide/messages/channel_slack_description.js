/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Channel_Slack_DescriptionInputs */

const en_channel_slack_description = /** @type {(inputs: Channel_Slack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack Bot (Socket Mode)`)
};

const zh_cn2_channel_slack_description = /** @type {(inputs: Channel_Slack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack 机器人（Socket Mode）`)
};

const es_channel_slack_description = /** @type {(inputs: Channel_Slack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bot de Slack (Socket Mode)`)
};

const ja_channel_slack_description = /** @type {(inputs: Channel_Slack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack ボット（Socket Mode）`)
};

const hi_channel_slack_description = /** @type {(inputs: Channel_Slack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack बॉट (Socket Mode)`)
};

const pt_br2_channel_slack_description = /** @type {(inputs: Channel_Slack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bot do Slack (Socket Mode)`)
};

const ko_channel_slack_description = /** @type {(inputs: Channel_Slack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack 봇 (Socket Mode)`)
};

const fr_channel_slack_description = /** @type {(inputs: Channel_Slack_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bot Slack (Socket Mode)`)
};

/**
* | output |
* | --- |
* | "Slack Bot (Socket Mode)" |
*
* @param {Channel_Slack_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const channel_slack_description = /** @type {((inputs?: Channel_Slack_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Channel_Slack_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_channel_slack_description(inputs)
	if (locale === "zh-CN") return zh_cn2_channel_slack_description(inputs)
	if (locale === "es") return es_channel_slack_description(inputs)
	if (locale === "ja") return ja_channel_slack_description(inputs)
	if (locale === "hi") return hi_channel_slack_description(inputs)
	if (locale === "pt-BR") return pt_br2_channel_slack_description(inputs)
	if (locale === "ko") return ko_channel_slack_description(inputs)
	return fr_channel_slack_description(inputs)
});