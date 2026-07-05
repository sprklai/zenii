/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Tab_ConfigurationsInputs */

const en_settings_tab_configurations = /** @type {(inputs: Settings_Tab_ConfigurationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurations`)
};

const zh_cn2_settings_tab_configurations = /** @type {(inputs: Settings_Tab_ConfigurationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配置`)
};

const es_settings_tab_configurations = /** @type {(inputs: Settings_Tab_ConfigurationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuraciones`)
};

const ja_settings_tab_configurations = /** @type {(inputs: Settings_Tab_ConfigurationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定`)
};

const hi_settings_tab_configurations = /** @type {(inputs: Settings_Tab_ConfigurationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`विन्यास`)
};

const pt_br2_settings_tab_configurations = /** @type {(inputs: Settings_Tab_ConfigurationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurações`)
};

const ko_settings_tab_configurations = /** @type {(inputs: Settings_Tab_ConfigurationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`구성`)
};

const fr_settings_tab_configurations = /** @type {(inputs: Settings_Tab_ConfigurationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurations`)
};

/**
* | output |
* | --- |
* | "Configurations" |
*
* @param {Settings_Tab_ConfigurationsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_tab_configurations = /** @type {((inputs?: Settings_Tab_ConfigurationsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Tab_ConfigurationsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_tab_configurations(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_tab_configurations(inputs)
	if (locale === "es") return es_settings_tab_configurations(inputs)
	if (locale === "ja") return ja_settings_tab_configurations(inputs)
	if (locale === "hi") return hi_settings_tab_configurations(inputs)
	if (locale === "pt-BR") return pt_br2_settings_tab_configurations(inputs)
	if (locale === "ko") return ko_settings_tab_configurations(inputs)
	return fr_settings_tab_configurations(inputs)
});