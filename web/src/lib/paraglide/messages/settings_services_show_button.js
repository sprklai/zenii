/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Services_Show_ButtonInputs */

const en_settings_services_show_button = /** @type {(inputs: Settings_Services_Show_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show`)
};

const zh_cn2_settings_services_show_button = /** @type {(inputs: Settings_Services_Show_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示`)
};

const es_settings_services_show_button = /** @type {(inputs: Settings_Services_Show_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar`)
};

const ja_settings_services_show_button = /** @type {(inputs: Settings_Services_Show_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示`)
};

const hi_settings_services_show_button = /** @type {(inputs: Settings_Services_Show_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`दिखाएँ`)
};

const pt_br2_settings_services_show_button = /** @type {(inputs: Settings_Services_Show_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar`)
};

const ko_settings_services_show_button = /** @type {(inputs: Settings_Services_Show_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`표시`)
};

const fr_settings_services_show_button = /** @type {(inputs: Settings_Services_Show_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher`)
};

/**
* | output |
* | --- |
* | "Show" |
*
* @param {Settings_Services_Show_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_services_show_button = /** @type {((inputs?: Settings_Services_Show_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Services_Show_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_services_show_button(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_services_show_button(inputs)
	if (locale === "es") return es_settings_services_show_button(inputs)
	if (locale === "ja") return ja_settings_services_show_button(inputs)
	if (locale === "hi") return hi_settings_services_show_button(inputs)
	if (locale === "pt-BR") return pt_br2_settings_services_show_button(inputs)
	if (locale === "ko") return ko_settings_services_show_button(inputs)
	return fr_settings_services_show_button(inputs)
});