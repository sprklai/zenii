/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Channel_Slack_NameInputs */

const en_channel_slack_name = /** @type {(inputs: Channel_Slack_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

const zh_cn2_channel_slack_name = /** @type {(inputs: Channel_Slack_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

const es_channel_slack_name = /** @type {(inputs: Channel_Slack_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

const ja_channel_slack_name = /** @type {(inputs: Channel_Slack_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

const hi_channel_slack_name = /** @type {(inputs: Channel_Slack_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

const pt_br2_channel_slack_name = /** @type {(inputs: Channel_Slack_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

const ko_channel_slack_name = /** @type {(inputs: Channel_Slack_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

const fr_channel_slack_name = /** @type {(inputs: Channel_Slack_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

/**
* | output |
* | --- |
* | "Slack" |
*
* @param {Channel_Slack_NameInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const channel_slack_name = /** @type {((inputs?: Channel_Slack_NameInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Channel_Slack_NameInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_channel_slack_name(inputs)
	if (locale === "zh-CN") return zh_cn2_channel_slack_name(inputs)
	if (locale === "es") return es_channel_slack_name(inputs)
	if (locale === "ja") return ja_channel_slack_name(inputs)
	if (locale === "hi") return hi_channel_slack_name(inputs)
	if (locale === "pt-BR") return pt_br2_channel_slack_name(inputs)
	if (locale === "ko") return ko_channel_slack_name(inputs)
	return fr_channel_slack_name(inputs)
});