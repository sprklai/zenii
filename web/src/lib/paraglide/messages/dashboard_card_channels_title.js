/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Card_Channels_TitleInputs */

const en_dashboard_card_channels_title = /** @type {(inputs: Dashboard_Card_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Channels`)
};

const zh_cn2_dashboard_card_channels_title = /** @type {(inputs: Dashboard_Card_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`频道`)
};

const es_dashboard_card_channels_title = /** @type {(inputs: Dashboard_Card_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canales`)
};

const ja_dashboard_card_channels_title = /** @type {(inputs: Dashboard_Card_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャンネル`)
};

const hi_dashboard_card_channels_title = /** @type {(inputs: Dashboard_Card_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैनल`)
};

const pt_br2_dashboard_card_channels_title = /** @type {(inputs: Dashboard_Card_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canais`)
};

const ko_dashboard_card_channels_title = /** @type {(inputs: Dashboard_Card_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채널`)
};

const fr_dashboard_card_channels_title = /** @type {(inputs: Dashboard_Card_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canaux`)
};

/**
* | output |
* | --- |
* | "Channels" |
*
* @param {Dashboard_Card_Channels_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_card_channels_title = /** @type {((inputs?: Dashboard_Card_Channels_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Card_Channels_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_card_channels_title(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_card_channels_title(inputs)
	if (locale === "es") return es_dashboard_card_channels_title(inputs)
	if (locale === "ja") return ja_dashboard_card_channels_title(inputs)
	if (locale === "hi") return hi_dashboard_card_channels_title(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_card_channels_title(inputs)
	if (locale === "ko") return ko_dashboard_card_channels_title(inputs)
	return fr_dashboard_card_channels_title(inputs)
});