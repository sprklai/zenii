/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Channels_Telegram_Polling_LabelInputs */

const en_settings_channels_telegram_polling_label = /** @type {(inputs: Settings_Channels_Telegram_Polling_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Polling Timeout (seconds)`)
};

const zh_cn2_settings_channels_telegram_polling_label = /** @type {(inputs: Settings_Channels_Telegram_Polling_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`轮询超时（秒）`)
};

const es_settings_channels_telegram_polling_label = /** @type {(inputs: Settings_Channels_Telegram_Polling_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tiempo de espera de sondeo (segundos)`)
};

const ja_settings_channels_telegram_polling_label = /** @type {(inputs: Settings_Channels_Telegram_Polling_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ポーリングタイムアウト（秒）`)
};

const hi_settings_channels_telegram_polling_label = /** @type {(inputs: Settings_Channels_Telegram_Polling_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पोलिंग टाइमआउट (सेकंड)`)
};

const pt_br2_settings_channels_telegram_polling_label = /** @type {(inputs: Settings_Channels_Telegram_Polling_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Timeout de Polling (segundos)`)
};

const ko_settings_channels_telegram_polling_label = /** @type {(inputs: Settings_Channels_Telegram_Polling_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`폴링 타임아웃 (초)`)
};

const fr_settings_channels_telegram_polling_label = /** @type {(inputs: Settings_Channels_Telegram_Polling_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Délai de sondage (secondes)`)
};

/**
* | output |
* | --- |
* | "Polling Timeout (seconds)" |
*
* @param {Settings_Channels_Telegram_Polling_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_channels_telegram_polling_label = /** @type {((inputs?: Settings_Channels_Telegram_Polling_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Channels_Telegram_Polling_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_channels_telegram_polling_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_channels_telegram_polling_label(inputs)
	if (locale === "es") return es_settings_channels_telegram_polling_label(inputs)
	if (locale === "ja") return ja_settings_channels_telegram_polling_label(inputs)
	if (locale === "hi") return hi_settings_channels_telegram_polling_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_channels_telegram_polling_label(inputs)
	if (locale === "ko") return ko_settings_channels_telegram_polling_label(inputs)
	return fr_settings_channels_telegram_polling_label(inputs)
});