/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Location_PlaceholderInputs */

const en_settings_general_location_placeholder = /** @type {(inputs: Settings_General_Location_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g., Toronto, Canada`)
};

const zh_cn2_settings_general_location_placeholder = /** @type {(inputs: Settings_General_Location_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例如：北京，中国`)
};

const es_settings_general_location_placeholder = /** @type {(inputs: Settings_General_Location_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p. ej., Ciudad de México, México`)
};

const ja_settings_general_location_placeholder = /** @type {(inputs: Settings_General_Location_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例：東京、日本`)
};

const hi_settings_general_location_placeholder = /** @type {(inputs: Settings_General_Location_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`जैसे, मुंबई, भारत`)
};

const pt_br2_settings_general_location_placeholder = /** @type {(inputs: Settings_General_Location_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ex.: São Paulo, Brasil`)
};

const ko_settings_general_location_placeholder = /** @type {(inputs: Settings_General_Location_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`예: 서울, 대한민국`)
};

const fr_settings_general_location_placeholder = /** @type {(inputs: Settings_General_Location_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p. ex., Paris, France`)
};

/**
* | output |
* | --- |
* | "e.g., Toronto, Canada" |
*
* @param {Settings_General_Location_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_location_placeholder = /** @type {((inputs?: Settings_General_Location_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Location_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_location_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_location_placeholder(inputs)
	if (locale === "es") return es_settings_general_location_placeholder(inputs)
	if (locale === "ja") return ja_settings_general_location_placeholder(inputs)
	if (locale === "hi") return hi_settings_general_location_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_location_placeholder(inputs)
	if (locale === "ko") return ko_settings_general_location_placeholder(inputs)
	return fr_settings_general_location_placeholder(inputs)
});