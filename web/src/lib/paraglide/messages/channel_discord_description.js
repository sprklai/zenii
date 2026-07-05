/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Channel_Discord_DescriptionInputs */

const en_channel_discord_description = /** @type {(inputs: Channel_Discord_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord Bot`)
};

const zh_cn2_channel_discord_description = /** @type {(inputs: Channel_Discord_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord 机器人`)
};

const es_channel_discord_description = /** @type {(inputs: Channel_Discord_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bot de Discord`)
};

const ja_channel_discord_description = /** @type {(inputs: Channel_Discord_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord ボット`)
};

const hi_channel_discord_description = /** @type {(inputs: Channel_Discord_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord बॉट`)
};

const pt_br2_channel_discord_description = /** @type {(inputs: Channel_Discord_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bot do Discord`)
};

const ko_channel_discord_description = /** @type {(inputs: Channel_Discord_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord 봇`)
};

const fr_channel_discord_description = /** @type {(inputs: Channel_Discord_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bot Discord`)
};

/**
* | output |
* | --- |
* | "Discord Bot" |
*
* @param {Channel_Discord_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const channel_discord_description = /** @type {((inputs?: Channel_Discord_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Channel_Discord_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_channel_discord_description(inputs)
	if (locale === "zh-CN") return zh_cn2_channel_discord_description(inputs)
	if (locale === "es") return es_channel_discord_description(inputs)
	if (locale === "ja") return ja_channel_discord_description(inputs)
	if (locale === "hi") return hi_channel_discord_description(inputs)
	if (locale === "pt-BR") return pt_br2_channel_discord_description(inputs)
	if (locale === "ko") return ko_channel_discord_description(inputs)
	return fr_channel_discord_description(inputs)
});