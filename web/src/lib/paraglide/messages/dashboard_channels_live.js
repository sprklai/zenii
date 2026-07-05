/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Channels_LiveInputs */

const en_dashboard_channels_live = /** @type {(inputs: Dashboard_Channels_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const zh_cn2_dashboard_channels_live = /** @type {(inputs: Dashboard_Channels_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在线`)
};

const es_dashboard_channels_live = /** @type {(inputs: Dashboard_Channels_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activo`)
};

const ja_dashboard_channels_live = /** @type {(inputs: Dashboard_Channels_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライブ`)
};

const hi_dashboard_channels_live = /** @type {(inputs: Dashboard_Channels_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`लाइव`)
};

const pt_br2_dashboard_channels_live = /** @type {(inputs: Dashboard_Channels_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ativo`)
};

const ko_dashboard_channels_live = /** @type {(inputs: Dashboard_Channels_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`라이브`)
};

const fr_dashboard_channels_live = /** @type {(inputs: Dashboard_Channels_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actif`)
};

/**
* | output |
* | --- |
* | "Live" |
*
* @param {Dashboard_Channels_LiveInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_channels_live = /** @type {((inputs?: Dashboard_Channels_LiveInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Channels_LiveInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_channels_live(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_channels_live(inputs)
	if (locale === "es") return es_dashboard_channels_live(inputs)
	if (locale === "ja") return ja_dashboard_channels_live(inputs)
	if (locale === "hi") return hi_dashboard_channels_live(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_channels_live(inputs)
	if (locale === "ko") return ko_dashboard_channels_live(inputs)
	return fr_dashboard_channels_live(inputs)
});