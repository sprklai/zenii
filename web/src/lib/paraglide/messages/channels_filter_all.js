/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Channels_Filter_AllInputs */

const en_channels_filter_all = /** @type {(inputs: Channels_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All`)
};

const zh_cn2_channels_filter_all = /** @type {(inputs: Channels_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部`)
};

const es_channels_filter_all = /** @type {(inputs: Channels_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos`)
};

const ja_channels_filter_all = /** @type {(inputs: Channels_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて`)
};

const hi_channels_filter_all = /** @type {(inputs: Channels_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सभी`)
};

const pt_br2_channels_filter_all = /** @type {(inputs: Channels_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos`)
};

const ko_channels_filter_all = /** @type {(inputs: Channels_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`전체`)
};

const fr_channels_filter_all = /** @type {(inputs: Channels_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous`)
};

/**
* | output |
* | --- |
* | "All" |
*
* @param {Channels_Filter_AllInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const channels_filter_all = /** @type {((inputs?: Channels_Filter_AllInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Channels_Filter_AllInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_channels_filter_all(inputs)
	if (locale === "zh-CN") return zh_cn2_channels_filter_all(inputs)
	if (locale === "es") return es_channels_filter_all(inputs)
	if (locale === "ja") return ja_channels_filter_all(inputs)
	if (locale === "hi") return hi_channels_filter_all(inputs)
	if (locale === "pt-BR") return pt_br2_channels_filter_all(inputs)
	if (locale === "ko") return ko_channels_filter_all(inputs)
	return fr_channels_filter_all(inputs)
});