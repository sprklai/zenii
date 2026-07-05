/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Name_PlaceholderInputs */

const en_settings_general_name_placeholder = /** @type {(inputs: Settings_General_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g., John Doe`)
};

const zh_cn2_settings_general_name_placeholder = /** @type {(inputs: Settings_General_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例如：张三`)
};

const es_settings_general_name_placeholder = /** @type {(inputs: Settings_General_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p. ej., Juan Pérez`)
};

const ja_settings_general_name_placeholder = /** @type {(inputs: Settings_General_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例：山田太郎`)
};

const hi_settings_general_name_placeholder = /** @type {(inputs: Settings_General_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`जैसे, राहुल शर्मा`)
};

const pt_br2_settings_general_name_placeholder = /** @type {(inputs: Settings_General_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ex.: João Silva`)
};

const ko_settings_general_name_placeholder = /** @type {(inputs: Settings_General_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`예: 홍길동`)
};

const fr_settings_general_name_placeholder = /** @type {(inputs: Settings_General_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p. ex., Jean Dupont`)
};

/**
* | output |
* | --- |
* | "e.g., John Doe" |
*
* @param {Settings_General_Name_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_name_placeholder = /** @type {((inputs?: Settings_General_Name_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Name_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_name_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_name_placeholder(inputs)
	if (locale === "es") return es_settings_general_name_placeholder(inputs)
	if (locale === "ja") return ja_settings_general_name_placeholder(inputs)
	if (locale === "hi") return hi_settings_general_name_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_name_placeholder(inputs)
	if (locale === "ko") return ko_settings_general_name_placeholder(inputs)
	return fr_settings_general_name_placeholder(inputs)
});