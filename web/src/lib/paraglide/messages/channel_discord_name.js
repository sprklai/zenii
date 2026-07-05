/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Channel_Discord_NameInputs */

const en_channel_discord_name = /** @type {(inputs: Channel_Discord_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const zh_cn2_channel_discord_name = /** @type {(inputs: Channel_Discord_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const es_channel_discord_name = /** @type {(inputs: Channel_Discord_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const ja_channel_discord_name = /** @type {(inputs: Channel_Discord_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const hi_channel_discord_name = /** @type {(inputs: Channel_Discord_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const pt_br2_channel_discord_name = /** @type {(inputs: Channel_Discord_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const ko_channel_discord_name = /** @type {(inputs: Channel_Discord_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const fr_channel_discord_name = /** @type {(inputs: Channel_Discord_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

/**
* | output |
* | --- |
* | "Discord" |
*
* @param {Channel_Discord_NameInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const channel_discord_name = /** @type {((inputs?: Channel_Discord_NameInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Channel_Discord_NameInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_channel_discord_name(inputs)
	if (locale === "zh-CN") return zh_cn2_channel_discord_name(inputs)
	if (locale === "es") return es_channel_discord_name(inputs)
	if (locale === "ja") return ja_channel_discord_name(inputs)
	if (locale === "hi") return hi_channel_discord_name(inputs)
	if (locale === "pt-BR") return pt_br2_channel_discord_name(inputs)
	if (locale === "ko") return ko_channel_discord_name(inputs)
	return fr_channel_discord_name(inputs)
});