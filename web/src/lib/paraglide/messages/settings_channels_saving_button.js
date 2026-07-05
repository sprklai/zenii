/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Channels_Saving_ButtonInputs */

const en_settings_channels_saving_button = /** @type {(inputs: Settings_Channels_Saving_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saving...`)
};

const zh_cn2_settings_channels_saving_button = /** @type {(inputs: Settings_Channels_Saving_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存中...`)
};

const es_settings_channels_saving_button = /** @type {(inputs: Settings_Channels_Saving_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardando...`)
};

const ja_settings_channels_saving_button = /** @type {(inputs: Settings_Channels_Saving_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存中...`)
};

const hi_settings_channels_saving_button = /** @type {(inputs: Settings_Channels_Saving_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सहेजा जा रहा है...`)
};

const pt_br2_settings_channels_saving_button = /** @type {(inputs: Settings_Channels_Saving_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvando...`)
};

const ko_settings_channels_saving_button = /** @type {(inputs: Settings_Channels_Saving_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`저장 중...`)
};

const fr_settings_channels_saving_button = /** @type {(inputs: Settings_Channels_Saving_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrement...`)
};

/**
* | output |
* | --- |
* | "Saving..." |
*
* @param {Settings_Channels_Saving_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_channels_saving_button = /** @type {((inputs?: Settings_Channels_Saving_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Channels_Saving_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_channels_saving_button(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_channels_saving_button(inputs)
	if (locale === "es") return es_settings_channels_saving_button(inputs)
	if (locale === "ja") return ja_settings_channels_saving_button(inputs)
	if (locale === "hi") return hi_settings_channels_saving_button(inputs)
	if (locale === "pt-BR") return pt_br2_settings_channels_saving_button(inputs)
	if (locale === "ko") return ko_settings_channels_saving_button(inputs)
	return fr_settings_channels_saving_button(inputs)
});