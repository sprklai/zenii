/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Hide_ButtonInputs */

const en_settings_providers_hide_button = /** @type {(inputs: Settings_Providers_Hide_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide`)
};

const zh_cn2_settings_providers_hide_button = /** @type {(inputs: Settings_Providers_Hide_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐藏`)
};

const es_settings_providers_hide_button = /** @type {(inputs: Settings_Providers_Hide_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar`)
};

const ja_settings_providers_hide_button = /** @type {(inputs: Settings_Providers_Hide_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非表示`)
};

const hi_settings_providers_hide_button = /** @type {(inputs: Settings_Providers_Hide_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`छुपाएँ`)
};

const pt_br2_settings_providers_hide_button = /** @type {(inputs: Settings_Providers_Hide_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar`)
};

const ko_settings_providers_hide_button = /** @type {(inputs: Settings_Providers_Hide_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`숨기기`)
};

const fr_settings_providers_hide_button = /** @type {(inputs: Settings_Providers_Hide_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masquer`)
};

/**
* | output |
* | --- |
* | "Hide" |
*
* @param {Settings_Providers_Hide_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_hide_button = /** @type {((inputs?: Settings_Providers_Hide_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Hide_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_hide_button(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_hide_button(inputs)
	if (locale === "es") return es_settings_providers_hide_button(inputs)
	if (locale === "ja") return ja_settings_providers_hide_button(inputs)
	if (locale === "hi") return hi_settings_providers_hide_button(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_hide_button(inputs)
	if (locale === "ko") return ko_settings_providers_hide_button(inputs)
	return fr_settings_providers_hide_button(inputs)
});