/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Channels_TitleInputs */

const en_onboarding_channels_title = /** @type {(inputs: Onboarding_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connect Channels`)
};

const zh_cn2_onboarding_channels_title = /** @type {(inputs: Onboarding_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`连接频道`)
};

const es_onboarding_channels_title = /** @type {(inputs: Onboarding_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conectar canales`)
};

const ja_onboarding_channels_title = /** @type {(inputs: Onboarding_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャンネルを接続`)
};

const hi_onboarding_channels_title = /** @type {(inputs: Onboarding_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैनल कनेक्ट करें`)
};

const pt_br2_onboarding_channels_title = /** @type {(inputs: Onboarding_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conectar Canais`)
};

const ko_onboarding_channels_title = /** @type {(inputs: Onboarding_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채널 연결`)
};

const fr_onboarding_channels_title = /** @type {(inputs: Onboarding_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connecter des canaux`)
};

/**
* | output |
* | --- |
* | "Connect Channels" |
*
* @param {Onboarding_Channels_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_channels_title = /** @type {((inputs?: Onboarding_Channels_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Channels_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_channels_title(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_channels_title(inputs)
	if (locale === "es") return es_onboarding_channels_title(inputs)
	if (locale === "ja") return ja_onboarding_channels_title(inputs)
	if (locale === "hi") return hi_onboarding_channels_title(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_channels_title(inputs)
	if (locale === "ko") return ko_onboarding_channels_title(inputs)
	return fr_onboarding_channels_title(inputs)
});