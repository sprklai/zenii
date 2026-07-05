/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Cat_ChannelsInputs */

const en_wb_cat_channels = /** @type {(inputs: Wb_Cat_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Channels`)
};

const zh_cn2_wb_cat_channels = /** @type {(inputs: Wb_Cat_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`频道`)
};

const es_wb_cat_channels = /** @type {(inputs: Wb_Cat_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canales`)
};

const ja_wb_cat_channels = /** @type {(inputs: Wb_Cat_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャンネル`)
};

const hi_wb_cat_channels = /** @type {(inputs: Wb_Cat_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैनल`)
};

const pt_br2_wb_cat_channels = /** @type {(inputs: Wb_Cat_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canais`)
};

const ko_wb_cat_channels = /** @type {(inputs: Wb_Cat_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채널`)
};

const fr_wb_cat_channels = /** @type {(inputs: Wb_Cat_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canaux`)
};

/**
* | output |
* | --- |
* | "Channels" |
*
* @param {Wb_Cat_ChannelsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_cat_channels = /** @type {((inputs?: Wb_Cat_ChannelsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Cat_ChannelsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_cat_channels(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_cat_channels(inputs)
	if (locale === "es") return es_wb_cat_channels(inputs)
	if (locale === "ja") return ja_wb_cat_channels(inputs)
	if (locale === "hi") return hi_wb_cat_channels(inputs)
	if (locale === "pt-BR") return pt_br2_wb_cat_channels(inputs)
	if (locale === "ko") return ko_wb_cat_channels(inputs)
	return fr_wb_cat_channels(inputs)
});