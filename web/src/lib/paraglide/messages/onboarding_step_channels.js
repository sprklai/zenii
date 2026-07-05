/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Step_ChannelsInputs */

const en_onboarding_step_channels = /** @type {(inputs: Onboarding_Step_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Channels`)
};

const zh_cn2_onboarding_step_channels = /** @type {(inputs: Onboarding_Step_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`频道`)
};

const es_onboarding_step_channels = /** @type {(inputs: Onboarding_Step_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canales`)
};

const ja_onboarding_step_channels = /** @type {(inputs: Onboarding_Step_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャンネル`)
};

const hi_onboarding_step_channels = /** @type {(inputs: Onboarding_Step_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैनल`)
};

const pt_br2_onboarding_step_channels = /** @type {(inputs: Onboarding_Step_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canais`)
};

const ko_onboarding_step_channels = /** @type {(inputs: Onboarding_Step_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채널`)
};

const fr_onboarding_step_channels = /** @type {(inputs: Onboarding_Step_ChannelsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canaux`)
};

/**
* | output |
* | --- |
* | "Channels" |
*
* @param {Onboarding_Step_ChannelsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_step_channels = /** @type {((inputs?: Onboarding_Step_ChannelsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Step_ChannelsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_step_channels(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_step_channels(inputs)
	if (locale === "es") return es_onboarding_step_channels(inputs)
	if (locale === "ja") return ja_onboarding_step_channels(inputs)
	if (locale === "hi") return hi_onboarding_step_channels(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_step_channels(inputs)
	if (locale === "ko") return ko_onboarding_step_channels(inputs)
	return fr_onboarding_step_channels(inputs)
});