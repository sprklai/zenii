/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Name_LabelInputs */

const en_settings_general_name_label = /** @type {(inputs: Settings_General_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your Name`)
};

const zh_cn2_settings_general_name_label = /** @type {(inputs: Settings_General_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的名字`)
};

const es_settings_general_name_label = /** @type {(inputs: Settings_General_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu nombre`)
};

const ja_settings_general_name_label = /** @type {(inputs: Settings_General_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの名前`)
};

const hi_settings_general_name_label = /** @type {(inputs: Settings_General_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`आपका नाम`)
};

const pt_br2_settings_general_name_label = /** @type {(inputs: Settings_General_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu Nome`)
};

const ko_settings_general_name_label = /** @type {(inputs: Settings_General_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이름`)
};

const fr_settings_general_name_label = /** @type {(inputs: Settings_General_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre nom`)
};

/**
* | output |
* | --- |
* | "Your Name" |
*
* @param {Settings_General_Name_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_name_label = /** @type {((inputs?: Settings_General_Name_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Name_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_name_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_name_label(inputs)
	if (locale === "es") return es_settings_general_name_label(inputs)
	if (locale === "ja") return ja_settings_general_name_label(inputs)
	if (locale === "hi") return hi_settings_general_name_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_name_label(inputs)
	if (locale === "ko") return ko_settings_general_name_label(inputs)
	return fr_settings_general_name_label(inputs)
});