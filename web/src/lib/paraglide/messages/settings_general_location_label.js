/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Location_LabelInputs */

const en_settings_general_location_label = /** @type {(inputs: Settings_General_Location_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Location`)
};

const zh_cn2_settings_general_location_label = /** @type {(inputs: Settings_General_Location_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`位置`)
};

const es_settings_general_location_label = /** @type {(inputs: Settings_General_Location_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ubicación`)
};

const ja_settings_general_location_label = /** @type {(inputs: Settings_General_Location_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所在地`)
};

const hi_settings_general_location_label = /** @type {(inputs: Settings_General_Location_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`स्थान`)
};

const pt_br2_settings_general_location_label = /** @type {(inputs: Settings_General_Location_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Localização`)
};

const ko_settings_general_location_label = /** @type {(inputs: Settings_General_Location_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`위치`)
};

const fr_settings_general_location_label = /** @type {(inputs: Settings_General_Location_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Localisation`)
};

/**
* | output |
* | --- |
* | "Location" |
*
* @param {Settings_General_Location_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_location_label = /** @type {((inputs?: Settings_General_Location_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Location_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_location_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_location_label(inputs)
	if (locale === "es") return es_settings_general_location_label(inputs)
	if (locale === "ja") return ja_settings_general_location_label(inputs)
	if (locale === "hi") return hi_settings_general_location_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_location_label(inputs)
	if (locale === "ko") return ko_settings_general_location_label(inputs)
	return fr_settings_general_location_label(inputs)
});