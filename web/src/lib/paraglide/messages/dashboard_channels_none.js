/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Channels_NoneInputs */

const en_dashboard_channels_none = /** @type {(inputs: Dashboard_Channels_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No channels configured`)
};

const zh_cn2_dashboard_channels_none = /** @type {(inputs: Dashboard_Channels_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未配置频道`)
};

const es_dashboard_channels_none = /** @type {(inputs: Dashboard_Channels_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay canales configurados`)
};

const ja_dashboard_channels_none = /** @type {(inputs: Dashboard_Channels_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャンネル未設定`)
};

const hi_dashboard_channels_none = /** @type {(inputs: Dashboard_Channels_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कोई चैनल कॉन्फ़िगर नहीं`)
};

const pt_br2_dashboard_channels_none = /** @type {(inputs: Dashboard_Channels_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum canal configurado`)
};

const ko_dashboard_channels_none = /** @type {(inputs: Dashboard_Channels_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`설정된 채널 없음`)
};

const fr_dashboard_channels_none = /** @type {(inputs: Dashboard_Channels_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun canal configuré`)
};

/**
* | output |
* | --- |
* | "No channels configured" |
*
* @param {Dashboard_Channels_NoneInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_channels_none = /** @type {((inputs?: Dashboard_Channels_NoneInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Channels_NoneInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_channels_none(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_channels_none(inputs)
	if (locale === "es") return es_dashboard_channels_none(inputs)
	if (locale === "ja") return ja_dashboard_channels_none(inputs)
	if (locale === "hi") return hi_dashboard_channels_none(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_channels_none(inputs)
	if (locale === "ko") return ko_dashboard_channels_none(inputs)
	return fr_dashboard_channels_none(inputs)
});