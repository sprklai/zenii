/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Saved_LabelInputs */

const en_settings_general_saved_label = /** @type {(inputs: Settings_General_Saved_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saved`)
};

const zh_cn2_settings_general_saved_label = /** @type {(inputs: Settings_General_Saved_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已保存`)
};

const es_settings_general_saved_label = /** @type {(inputs: Settings_General_Saved_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardado`)
};

const ja_settings_general_saved_label = /** @type {(inputs: Settings_General_Saved_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存済み`)
};

const hi_settings_general_saved_label = /** @type {(inputs: Settings_General_Saved_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सहेजा गया`)
};

const pt_br2_settings_general_saved_label = /** @type {(inputs: Settings_General_Saved_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvo`)
};

const ko_settings_general_saved_label = /** @type {(inputs: Settings_General_Saved_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`저장됨`)
};

const fr_settings_general_saved_label = /** @type {(inputs: Settings_General_Saved_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistré`)
};

/**
* | output |
* | --- |
* | "Saved" |
*
* @param {Settings_General_Saved_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_saved_label = /** @type {((inputs?: Settings_General_Saved_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Saved_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_saved_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_saved_label(inputs)
	if (locale === "es") return es_settings_general_saved_label(inputs)
	if (locale === "ja") return ja_settings_general_saved_label(inputs)
	if (locale === "hi") return hi_settings_general_saved_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_saved_label(inputs)
	if (locale === "ko") return ko_settings_general_saved_label(inputs)
	return fr_settings_general_saved_label(inputs)
});