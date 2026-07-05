/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Nav_ChannelsInputs */

const en_nav_channels = /** @type {(inputs: Nav_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Channels`)
};

const zh_cn2_nav_channels = /** @type {(inputs: Nav_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`频道`)
};

const es_nav_channels = /** @type {(inputs: Nav_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canales`)
};

const ja_nav_channels = /** @type {(inputs: Nav_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャンネル`)
};

const hi_nav_channels = /** @type {(inputs: Nav_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैनल`)
};

const pt_br2_nav_channels = /** @type {(inputs: Nav_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canais`)
};

const ko_nav_channels = /** @type {(inputs: Nav_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채널`)
};

const fr_nav_channels = /** @type {(inputs: Nav_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canaux`)
};

/**
* | output |
* | --- |
* | "Channels" |
*
* @param {Nav_ChannelsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const nav_channels = /** @type {((inputs?: Nav_ChannelsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_ChannelsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_nav_channels(inputs)
	if (locale === "zh-CN") return zh_cn2_nav_channels(inputs)
	if (locale === "es") return es_nav_channels(inputs)
	if (locale === "ja") return ja_nav_channels(inputs)
	if (locale === "hi") return hi_nav_channels(inputs)
	if (locale === "pt-BR") return pt_br2_nav_channels(inputs)
	if (locale === "ko") return ko_nav_channels(inputs)
	return fr_nav_channels(inputs)
});