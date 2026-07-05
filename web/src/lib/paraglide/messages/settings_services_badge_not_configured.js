/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Services_Badge_Not_ConfiguredInputs */

const en_settings_services_badge_not_configured = /** @type {(inputs: Settings_Services_Badge_Not_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not configured`)
};

const zh_cn2_settings_services_badge_not_configured = /** @type {(inputs: Settings_Services_Badge_Not_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未配置`)
};

const es_settings_services_badge_not_configured = /** @type {(inputs: Settings_Services_Badge_Not_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No configurado`)
};

const ja_settings_services_badge_not_configured = /** @type {(inputs: Settings_Services_Badge_Not_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未設定`)
};

const hi_settings_services_badge_not_configured = /** @type {(inputs: Settings_Services_Badge_Not_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कॉन्फ़िगर नहीं`)
};

const pt_br2_settings_services_badge_not_configured = /** @type {(inputs: Settings_Services_Badge_Not_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não configurado`)
};

const ko_settings_services_badge_not_configured = /** @type {(inputs: Settings_Services_Badge_Not_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`미설정`)
};

const fr_settings_services_badge_not_configured = /** @type {(inputs: Settings_Services_Badge_Not_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non configuré`)
};

/**
* | output |
* | --- |
* | "Not configured" |
*
* @param {Settings_Services_Badge_Not_ConfiguredInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_services_badge_not_configured = /** @type {((inputs?: Settings_Services_Badge_Not_ConfiguredInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Services_Badge_Not_ConfiguredInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_services_badge_not_configured(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_services_badge_not_configured(inputs)
	if (locale === "es") return es_settings_services_badge_not_configured(inputs)
	if (locale === "ja") return ja_settings_services_badge_not_configured(inputs)
	if (locale === "hi") return hi_settings_services_badge_not_configured(inputs)
	if (locale === "pt-BR") return pt_br2_settings_services_badge_not_configured(inputs)
	if (locale === "ko") return ko_settings_services_badge_not_configured(inputs)
	return fr_settings_services_badge_not_configured(inputs)
});