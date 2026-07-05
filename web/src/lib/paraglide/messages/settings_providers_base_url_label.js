/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Base_Url_LabelInputs */

const en_settings_providers_base_url_label = /** @type {(inputs: Settings_Providers_Base_Url_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Base URL`)
};

const zh_cn2_settings_providers_base_url_label = /** @type {(inputs: Settings_Providers_Base_Url_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Base URL`)
};

const es_settings_providers_base_url_label = /** @type {(inputs: Settings_Providers_Base_Url_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL base`)
};

const ja_settings_providers_base_url_label = /** @type {(inputs: Settings_Providers_Base_Url_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Base URL`)
};

const hi_settings_providers_base_url_label = /** @type {(inputs: Settings_Providers_Base_Url_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Base URL`)
};

const pt_br2_settings_providers_base_url_label = /** @type {(inputs: Settings_Providers_Base_Url_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL Base`)
};

const ko_settings_providers_base_url_label = /** @type {(inputs: Settings_Providers_Base_Url_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Base URL`)
};

const fr_settings_providers_base_url_label = /** @type {(inputs: Settings_Providers_Base_Url_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL de base`)
};

/**
* | output |
* | --- |
* | "Base URL" |
*
* @param {Settings_Providers_Base_Url_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_base_url_label = /** @type {((inputs?: Settings_Providers_Base_Url_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Base_Url_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_base_url_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_base_url_label(inputs)
	if (locale === "es") return es_settings_providers_base_url_label(inputs)
	if (locale === "ja") return ja_settings_providers_base_url_label(inputs)
	if (locale === "hi") return hi_settings_providers_base_url_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_base_url_label(inputs)
	if (locale === "ko") return ko_settings_providers_base_url_label(inputs)
	return fr_settings_providers_base_url_label(inputs)
});