/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Appearance_DescriptionInputs */

const en_settings_general_appearance_description = /** @type {(inputs: Settings_General_Appearance_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose your preferred color theme`)
};

const zh_cn2_settings_general_appearance_description = /** @type {(inputs: Settings_General_Appearance_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择你喜欢的颜色主题`)
};

const es_settings_general_appearance_description = /** @type {(inputs: Settings_General_Appearance_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige tu tema de color preferido`)
};

const ja_settings_general_appearance_description = /** @type {(inputs: Settings_General_Appearance_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`お好みのカラーテーマを選択`)
};

const hi_settings_general_appearance_description = /** @type {(inputs: Settings_General_Appearance_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अपनी पसंदीदा रंग थीम चुनें`)
};

const pt_br2_settings_general_appearance_description = /** @type {(inputs: Settings_General_Appearance_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha seu tema de cores preferido`)
};

const ko_settings_general_appearance_description = /** @type {(inputs: Settings_General_Appearance_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`선호하는 색상 테마를 선택하세요`)
};

const fr_settings_general_appearance_description = /** @type {(inputs: Settings_General_Appearance_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez votre thème de couleur préféré`)
};

/**
* | output |
* | --- |
* | "Choose your preferred color theme" |
*
* @param {Settings_General_Appearance_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_appearance_description = /** @type {((inputs?: Settings_General_Appearance_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Appearance_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_appearance_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_appearance_description(inputs)
	if (locale === "es") return es_settings_general_appearance_description(inputs)
	if (locale === "ja") return ja_settings_general_appearance_description(inputs)
	if (locale === "hi") return hi_settings_general_appearance_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_appearance_description(inputs)
	if (locale === "ko") return ko_settings_general_appearance_description(inputs)
	return fr_settings_general_appearance_description(inputs)
});