/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Timezone_LabelInputs */

const en_settings_general_timezone_label = /** @type {(inputs: Settings_General_Timezone_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Timezone`)
};

const zh_cn2_settings_general_timezone_label = /** @type {(inputs: Settings_General_Timezone_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`时区`)
};

const es_settings_general_timezone_label = /** @type {(inputs: Settings_General_Timezone_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zona horaria`)
};

const ja_settings_general_timezone_label = /** @type {(inputs: Settings_General_Timezone_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タイムゾーン`)
};

const hi_settings_general_timezone_label = /** @type {(inputs: Settings_General_Timezone_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`टाइमज़ोन`)
};

const pt_br2_settings_general_timezone_label = /** @type {(inputs: Settings_General_Timezone_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fuso horário`)
};

const ko_settings_general_timezone_label = /** @type {(inputs: Settings_General_Timezone_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`시간대`)
};

const fr_settings_general_timezone_label = /** @type {(inputs: Settings_General_Timezone_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fuseau horaire`)
};

/**
* | output |
* | --- |
* | "Timezone" |
*
* @param {Settings_General_Timezone_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_timezone_label = /** @type {((inputs?: Settings_General_Timezone_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Timezone_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_timezone_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_timezone_label(inputs)
	if (locale === "es") return es_settings_general_timezone_label(inputs)
	if (locale === "ja") return ja_settings_general_timezone_label(inputs)
	if (locale === "hi") return hi_settings_general_timezone_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_timezone_label(inputs)
	if (locale === "ko") return ko_settings_general_timezone_label(inputs)
	return fr_settings_general_timezone_label(inputs)
});