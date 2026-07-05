/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Channel_Telegram_NameInputs */

const en_channel_telegram_name = /** @type {(inputs: Channel_Telegram_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

const zh_cn2_channel_telegram_name = /** @type {(inputs: Channel_Telegram_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

const es_channel_telegram_name = /** @type {(inputs: Channel_Telegram_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

const ja_channel_telegram_name = /** @type {(inputs: Channel_Telegram_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

const hi_channel_telegram_name = /** @type {(inputs: Channel_Telegram_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

const pt_br2_channel_telegram_name = /** @type {(inputs: Channel_Telegram_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

const ko_channel_telegram_name = /** @type {(inputs: Channel_Telegram_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

const fr_channel_telegram_name = /** @type {(inputs: Channel_Telegram_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram`)
};

/**
* | output |
* | --- |
* | "Telegram" |
*
* @param {Channel_Telegram_NameInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const channel_telegram_name = /** @type {((inputs?: Channel_Telegram_NameInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Channel_Telegram_NameInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_channel_telegram_name(inputs)
	if (locale === "zh-CN") return zh_cn2_channel_telegram_name(inputs)
	if (locale === "es") return es_channel_telegram_name(inputs)
	if (locale === "ja") return ja_channel_telegram_name(inputs)
	if (locale === "hi") return hi_channel_telegram_name(inputs)
	if (locale === "pt-BR") return pt_br2_channel_telegram_name(inputs)
	if (locale === "ko") return ko_channel_telegram_name(inputs)
	return fr_channel_telegram_name(inputs)
});