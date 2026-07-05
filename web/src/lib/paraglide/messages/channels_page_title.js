/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Channels_Page_TitleInputs */

const en_channels_page_title = /** @type {(inputs: Channels_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Channels`)
};

const zh_cn2_channels_page_title = /** @type {(inputs: Channels_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`频道`)
};

const es_channels_page_title = /** @type {(inputs: Channels_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canales`)
};

const ja_channels_page_title = /** @type {(inputs: Channels_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャンネル`)
};

const hi_channels_page_title = /** @type {(inputs: Channels_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैनल`)
};

const pt_br2_channels_page_title = /** @type {(inputs: Channels_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canais`)
};

const ko_channels_page_title = /** @type {(inputs: Channels_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채널`)
};

const fr_channels_page_title = /** @type {(inputs: Channels_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canaux`)
};

/**
* | output |
* | --- |
* | "Channels" |
*
* @param {Channels_Page_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const channels_page_title = /** @type {((inputs?: Channels_Page_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Channels_Page_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_channels_page_title(inputs)
	if (locale === "zh-CN") return zh_cn2_channels_page_title(inputs)
	if (locale === "es") return es_channels_page_title(inputs)
	if (locale === "ja") return ja_channels_page_title(inputs)
	if (locale === "hi") return hi_channels_page_title(inputs)
	if (locale === "pt-BR") return pt_br2_channels_page_title(inputs)
	if (locale === "ko") return ko_channels_page_title(inputs)
	return fr_channels_page_title(inputs)
});