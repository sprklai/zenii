/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Channels_Remove_ButtonInputs */

const en_settings_channels_remove_button = /** @type {(inputs: Settings_Channels_Remove_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove`)
};

const zh_cn2_settings_channels_remove_button = /** @type {(inputs: Settings_Channels_Remove_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除`)
};

const es_settings_channels_remove_button = /** @type {(inputs: Settings_Channels_Remove_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar`)
};

const ja_settings_channels_remove_button = /** @type {(inputs: Settings_Channels_Remove_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除`)
};

const hi_settings_channels_remove_button = /** @type {(inputs: Settings_Channels_Remove_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`हटाएँ`)
};

const pt_br2_settings_channels_remove_button = /** @type {(inputs: Settings_Channels_Remove_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover`)
};

const ko_settings_channels_remove_button = /** @type {(inputs: Settings_Channels_Remove_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`제거`)
};

const fr_settings_channels_remove_button = /** @type {(inputs: Settings_Channels_Remove_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer`)
};

/**
* | output |
* | --- |
* | "Remove" |
*
* @param {Settings_Channels_Remove_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_channels_remove_button = /** @type {((inputs?: Settings_Channels_Remove_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Channels_Remove_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_channels_remove_button(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_channels_remove_button(inputs)
	if (locale === "es") return es_settings_channels_remove_button(inputs)
	if (locale === "ja") return ja_settings_channels_remove_button(inputs)
	if (locale === "hi") return hi_settings_channels_remove_button(inputs)
	if (locale === "pt-BR") return pt_br2_settings_channels_remove_button(inputs)
	if (locale === "ko") return ko_settings_channels_remove_button(inputs)
	return fr_settings_channels_remove_button(inputs)
});