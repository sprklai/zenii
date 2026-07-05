/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Config_Content_LabelInputs */

const en_settings_config_content_label = /** @type {(inputs: Settings_Config_Content_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Content`)
};

const zh_cn2_settings_config_content_label = /** @type {(inputs: Settings_Config_Content_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内容`)
};

const es_settings_config_content_label = /** @type {(inputs: Settings_Config_Content_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenido`)
};

const ja_settings_config_content_label = /** @type {(inputs: Settings_Config_Content_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内容`)
};

const hi_settings_config_content_label = /** @type {(inputs: Settings_Config_Content_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सामग्री`)
};

const pt_br2_settings_config_content_label = /** @type {(inputs: Settings_Config_Content_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conteúdo`)
};

const ko_settings_config_content_label = /** @type {(inputs: Settings_Config_Content_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`내용`)
};

const fr_settings_config_content_label = /** @type {(inputs: Settings_Config_Content_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenu`)
};

/**
* | output |
* | --- |
* | "Content" |
*
* @param {Settings_Config_Content_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_config_content_label = /** @type {((inputs?: Settings_Config_Content_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Config_Content_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_config_content_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_config_content_label(inputs)
	if (locale === "es") return es_settings_config_content_label(inputs)
	if (locale === "ja") return ja_settings_config_content_label(inputs)
	if (locale === "hi") return hi_settings_config_content_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_config_content_label(inputs)
	if (locale === "ko") return ko_settings_config_content_label(inputs)
	return fr_settings_config_content_label(inputs)
});