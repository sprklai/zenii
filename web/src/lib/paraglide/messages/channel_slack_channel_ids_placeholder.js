/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Channel_Slack_Channel_Ids_PlaceholderInputs */

const en_channel_slack_channel_ids_placeholder = /** @type {(inputs: Channel_Slack_Channel_Ids_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comma-separated channel IDs (empty = all)`)
};

const zh_cn2_channel_slack_channel_ids_placeholder = /** @type {(inputs: Channel_Slack_Channel_Ids_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`逗号分隔的频道ID（留空=全部）`)
};

const es_channel_slack_channel_ids_placeholder = /** @type {(inputs: Channel_Slack_Channel_Ids_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IDs de canales separados por comas (vacío = todos)`)
};

const ja_channel_slack_channel_ids_placeholder = /** @type {(inputs: Channel_Slack_Channel_Ids_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カンマ区切りのチャンネルID（空=すべて）`)
};

const hi_channel_slack_channel_ids_placeholder = /** @type {(inputs: Channel_Slack_Channel_Ids_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अल्पविराम से अलग चैनल ID (खाली = सभी)`)
};

const pt_br2_channel_slack_channel_ids_placeholder = /** @type {(inputs: Channel_Slack_Channel_Ids_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IDs de canais separados por vírgula (vazio = todos)`)
};

const ko_channel_slack_channel_ids_placeholder = /** @type {(inputs: Channel_Slack_Channel_Ids_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`쉼표로 구분된 채널 ID (비어있으면 = 모두)`)
};

const fr_channel_slack_channel_ids_placeholder = /** @type {(inputs: Channel_Slack_Channel_Ids_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID de canaux séparés par des virgules (vide = tous)`)
};

/**
* | output |
* | --- |
* | "Comma-separated channel IDs (empty = all)" |
*
* @param {Channel_Slack_Channel_Ids_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const channel_slack_channel_ids_placeholder = /** @type {((inputs?: Channel_Slack_Channel_Ids_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Channel_Slack_Channel_Ids_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_channel_slack_channel_ids_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_channel_slack_channel_ids_placeholder(inputs)
	if (locale === "es") return es_channel_slack_channel_ids_placeholder(inputs)
	if (locale === "ja") return ja_channel_slack_channel_ids_placeholder(inputs)
	if (locale === "hi") return hi_channel_slack_channel_ids_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_channel_slack_channel_ids_placeholder(inputs)
	if (locale === "ko") return ko_channel_slack_channel_ids_placeholder(inputs)
	return fr_channel_slack_channel_ids_placeholder(inputs)
});