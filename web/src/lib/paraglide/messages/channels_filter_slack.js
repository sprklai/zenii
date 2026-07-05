/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Channels_Filter_SlackInputs */

const en_channels_filter_slack = /** @type {(inputs: Channels_Filter_SlackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

const zh_cn2_channels_filter_slack = /** @type {(inputs: Channels_Filter_SlackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

const es_channels_filter_slack = /** @type {(inputs: Channels_Filter_SlackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

const ja_channels_filter_slack = /** @type {(inputs: Channels_Filter_SlackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

const hi_channels_filter_slack = /** @type {(inputs: Channels_Filter_SlackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

const pt_br2_channels_filter_slack = /** @type {(inputs: Channels_Filter_SlackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

const ko_channels_filter_slack = /** @type {(inputs: Channels_Filter_SlackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

const fr_channels_filter_slack = /** @type {(inputs: Channels_Filter_SlackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slack`)
};

/**
* | output |
* | --- |
* | "Slack" |
*
* @param {Channels_Filter_SlackInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const channels_filter_slack = /** @type {((inputs?: Channels_Filter_SlackInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Channels_Filter_SlackInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_channels_filter_slack(inputs)
	if (locale === "zh-CN") return zh_cn2_channels_filter_slack(inputs)
	if (locale === "es") return es_channels_filter_slack(inputs)
	if (locale === "ja") return ja_channels_filter_slack(inputs)
	if (locale === "hi") return hi_channels_filter_slack(inputs)
	if (locale === "pt-BR") return pt_br2_channels_filter_slack(inputs)
	if (locale === "ko") return ko_channels_filter_slack(inputs)
	return fr_channels_filter_slack(inputs)
});