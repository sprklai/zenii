/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Tab_ChannelsInputs */

const en_settings_tab_channels = /** @type {(inputs: Settings_Tab_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Channels`)
};

const zh_cn2_settings_tab_channels = /** @type {(inputs: Settings_Tab_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`频道`)
};

const es_settings_tab_channels = /** @type {(inputs: Settings_Tab_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canales`)
};

const ja_settings_tab_channels = /** @type {(inputs: Settings_Tab_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャンネル`)
};

const hi_settings_tab_channels = /** @type {(inputs: Settings_Tab_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैनल`)
};

const pt_br2_settings_tab_channels = /** @type {(inputs: Settings_Tab_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canais`)
};

const ko_settings_tab_channels = /** @type {(inputs: Settings_Tab_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채널`)
};

const fr_settings_tab_channels = /** @type {(inputs: Settings_Tab_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canaux`)
};

/**
* | output |
* | --- |
* | "Channels" |
*
* @param {Settings_Tab_ChannelsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_tab_channels = /** @type {((inputs?: Settings_Tab_ChannelsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Tab_ChannelsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_tab_channels(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_tab_channels(inputs)
	if (locale === "es") return es_settings_tab_channels(inputs)
	if (locale === "ja") return ja_settings_tab_channels(inputs)
	if (locale === "hi") return hi_settings_tab_channels(inputs)
	if (locale === "pt-BR") return pt_br2_settings_tab_channels(inputs)
	if (locale === "ko") return ko_settings_tab_channels(inputs)
	return fr_settings_tab_channels(inputs)
});