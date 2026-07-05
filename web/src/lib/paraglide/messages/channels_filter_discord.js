/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Channels_Filter_DiscordInputs */

const en_channels_filter_discord = /** @type {(inputs: Channels_Filter_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const zh_cn2_channels_filter_discord = /** @type {(inputs: Channels_Filter_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const es_channels_filter_discord = /** @type {(inputs: Channels_Filter_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const ja_channels_filter_discord = /** @type {(inputs: Channels_Filter_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const hi_channels_filter_discord = /** @type {(inputs: Channels_Filter_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const pt_br2_channels_filter_discord = /** @type {(inputs: Channels_Filter_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const ko_channels_filter_discord = /** @type {(inputs: Channels_Filter_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const fr_channels_filter_discord = /** @type {(inputs: Channels_Filter_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

/**
* | output |
* | --- |
* | "Discord" |
*
* @param {Channels_Filter_DiscordInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const channels_filter_discord = /** @type {((inputs?: Channels_Filter_DiscordInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Channels_Filter_DiscordInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_channels_filter_discord(inputs)
	if (locale === "zh-CN") return zh_cn2_channels_filter_discord(inputs)
	if (locale === "es") return es_channels_filter_discord(inputs)
	if (locale === "ja") return ja_channels_filter_discord(inputs)
	if (locale === "hi") return hi_channels_filter_discord(inputs)
	if (locale === "pt-BR") return pt_br2_channels_filter_discord(inputs)
	if (locale === "ko") return ko_channels_filter_discord(inputs)
	return fr_channels_filter_discord(inputs)
});