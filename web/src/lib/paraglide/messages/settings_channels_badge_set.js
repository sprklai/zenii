/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Channels_Badge_SetInputs */

const en_settings_channels_badge_set = /** @type {(inputs: Settings_Channels_Badge_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set`)
};

const zh_cn2_settings_channels_badge_set = /** @type {(inputs: Settings_Channels_Badge_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已设置`)
};

const es_settings_channels_badge_set = /** @type {(inputs: Settings_Channels_Badge_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurado`)
};

const ja_settings_channels_badge_set = /** @type {(inputs: Settings_Channels_Badge_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定済み`)
};

const hi_settings_channels_badge_set = /** @type {(inputs: Settings_Channels_Badge_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सेट`)
};

const pt_br2_settings_channels_badge_set = /** @type {(inputs: Settings_Channels_Badge_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Definido`)
};

const ko_settings_channels_badge_set = /** @type {(inputs: Settings_Channels_Badge_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`설정됨`)
};

const fr_settings_channels_badge_set = /** @type {(inputs: Settings_Channels_Badge_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Défini`)
};

/**
* | output |
* | --- |
* | "Set" |
*
* @param {Settings_Channels_Badge_SetInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_channels_badge_set = /** @type {((inputs?: Settings_Channels_Badge_SetInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Channels_Badge_SetInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_channels_badge_set(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_channels_badge_set(inputs)
	if (locale === "es") return es_settings_channels_badge_set(inputs)
	if (locale === "ja") return ja_settings_channels_badge_set(inputs)
	if (locale === "hi") return hi_settings_channels_badge_set(inputs)
	if (locale === "pt-BR") return pt_br2_settings_channels_badge_set(inputs)
	if (locale === "ko") return ko_settings_channels_badge_set(inputs)
	return fr_settings_channels_badge_set(inputs)
});