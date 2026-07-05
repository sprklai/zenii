/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Compact_Prompts_LabelInputs */

const en_settings_general_compact_prompts_label = /** @type {(inputs: Settings_General_Compact_Prompts_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compact Prompts`)
};

const zh_cn2_settings_general_compact_prompts_label = /** @type {(inputs: Settings_General_Compact_Prompts_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`紧凑提示词`)
};

const es_settings_general_compact_prompts_label = /** @type {(inputs: Settings_General_Compact_Prompts_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompts compactos`)
};

const ja_settings_general_compact_prompts_label = /** @type {(inputs: Settings_General_Compact_Prompts_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コンパクトプロンプト`)
};

const hi_settings_general_compact_prompts_label = /** @type {(inputs: Settings_General_Compact_Prompts_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कॉम्पैक्ट प्रॉम्प्ट`)
};

const pt_br2_settings_general_compact_prompts_label = /** @type {(inputs: Settings_General_Compact_Prompts_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompts Compactos`)
};

const ko_settings_general_compact_prompts_label = /** @type {(inputs: Settings_General_Compact_Prompts_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`간결한 프롬프트`)
};

const fr_settings_general_compact_prompts_label = /** @type {(inputs: Settings_General_Compact_Prompts_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompts compacts`)
};

/**
* | output |
* | --- |
* | "Compact Prompts" |
*
* @param {Settings_General_Compact_Prompts_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_compact_prompts_label = /** @type {((inputs?: Settings_General_Compact_Prompts_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Compact_Prompts_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_compact_prompts_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_compact_prompts_label(inputs)
	if (locale === "es") return es_settings_general_compact_prompts_label(inputs)
	if (locale === "ja") return ja_settings_general_compact_prompts_label(inputs)
	if (locale === "hi") return hi_settings_general_compact_prompts_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_compact_prompts_label(inputs)
	if (locale === "ko") return ko_settings_general_compact_prompts_label(inputs)
	return fr_settings_general_compact_prompts_label(inputs)
});