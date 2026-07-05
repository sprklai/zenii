/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Channels_Filter_TelegramInputs */

const en_channels_filter_telegram = /** @type {(inputs: Channels_Filter_TelegramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

const zh_cn2_channels_filter_telegram = /** @type {(inputs: Channels_Filter_TelegramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

const es_channels_filter_telegram = /** @type {(inputs: Channels_Filter_TelegramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

const ja_channels_filter_telegram = /** @type {(inputs: Channels_Filter_TelegramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

const hi_channels_filter_telegram = /** @type {(inputs: Channels_Filter_TelegramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

const pt_br2_channels_filter_telegram = /** @type {(inputs: Channels_Filter_TelegramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

const ko_channels_filter_telegram = /** @type {(inputs: Channels_Filter_TelegramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

const fr_channels_filter_telegram = /** @type {(inputs: Channels_Filter_TelegramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

/**
* | output |
* | --- |
* | "Telegram" |
*
* @param {Channels_Filter_TelegramInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const channels_filter_telegram = /** @type {((inputs?: Channels_Filter_TelegramInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Channels_Filter_TelegramInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_channels_filter_telegram(inputs)
	if (locale === "zh-CN") return zh_cn2_channels_filter_telegram(inputs)
	if (locale === "es") return es_channels_filter_telegram(inputs)
	if (locale === "ja") return ja_channels_filter_telegram(inputs)
	if (locale === "hi") return hi_channels_filter_telegram(inputs)
	if (locale === "pt-BR") return pt_br2_channels_filter_telegram(inputs)
	if (locale === "ko") return ko_channels_filter_telegram(inputs)
	return fr_channels_filter_telegram(inputs)
});