/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Tab_ProvidersInputs */

const en_settings_tab_providers = /** @type {(inputs: Settings_Tab_ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI Providers`)
};

const zh_cn2_settings_tab_providers = /** @type {(inputs: Settings_Tab_ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI 提供商`)
};

const es_settings_tab_providers = /** @type {(inputs: Settings_Tab_ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Proveedores de IA`)
};

const ja_settings_tab_providers = /** @type {(inputs: Settings_Tab_ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI プロバイダー`)
};

const hi_settings_tab_providers = /** @type {(inputs: Settings_Tab_ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI प्रदाता`)
};

const pt_br2_settings_tab_providers = /** @type {(inputs: Settings_Tab_ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Provedores de IA`)
};

const ko_settings_tab_providers = /** @type {(inputs: Settings_Tab_ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI 공급자`)
};

const fr_settings_tab_providers = /** @type {(inputs: Settings_Tab_ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fournisseurs d'IA`)
};

/**
* | output |
* | --- |
* | "AI Providers" |
*
* @param {Settings_Tab_ProvidersInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_tab_providers = /** @type {((inputs?: Settings_Tab_ProvidersInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Tab_ProvidersInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_tab_providers(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_tab_providers(inputs)
	if (locale === "es") return es_settings_tab_providers(inputs)
	if (locale === "ja") return ja_settings_tab_providers(inputs)
	if (locale === "hi") return hi_settings_tab_providers(inputs)
	if (locale === "pt-BR") return pt_br2_settings_tab_providers(inputs)
	if (locale === "ko") return ko_settings_tab_providers(inputs)
	return fr_settings_tab_providers(inputs)
});