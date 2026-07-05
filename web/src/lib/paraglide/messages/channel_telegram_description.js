/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Channel_Telegram_DescriptionInputs */

const en_channel_telegram_description = /** @type {(inputs: Channel_Telegram_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram Bot`)
};

const zh_cn2_channel_telegram_description = /** @type {(inputs: Channel_Telegram_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram 机器人`)
};

const es_channel_telegram_description = /** @type {(inputs: Channel_Telegram_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bot de Telegram`)
};

const ja_channel_telegram_description = /** @type {(inputs: Channel_Telegram_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram ボット`)
};

const hi_channel_telegram_description = /** @type {(inputs: Channel_Telegram_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram बॉट`)
};

const pt_br2_channel_telegram_description = /** @type {(inputs: Channel_Telegram_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bot do Telegram`)
};

const ko_channel_telegram_description = /** @type {(inputs: Channel_Telegram_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram 봇`)
};

const fr_channel_telegram_description = /** @type {(inputs: Channel_Telegram_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bot Telegram`)
};

/**
* | output |
* | --- |
* | "Telegram Bot" |
*
* @param {Channel_Telegram_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const channel_telegram_description = /** @type {((inputs?: Channel_Telegram_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Channel_Telegram_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_channel_telegram_description(inputs)
	if (locale === "zh-CN") return zh_cn2_channel_telegram_description(inputs)
	if (locale === "es") return es_channel_telegram_description(inputs)
	if (locale === "ja") return ja_channel_telegram_description(inputs)
	if (locale === "hi") return hi_channel_telegram_description(inputs)
	if (locale === "pt-BR") return pt_br2_channel_telegram_description(inputs)
	if (locale === "ko") return ko_channel_telegram_description(inputs)
	return fr_channel_telegram_description(inputs)
});