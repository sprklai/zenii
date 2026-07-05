/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Services_Badge_ConfiguredInputs */

const en_settings_services_badge_configured = /** @type {(inputs: Settings_Services_Badge_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configured`)
};

const zh_cn2_settings_services_badge_configured = /** @type {(inputs: Settings_Services_Badge_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已配置`)
};

const es_settings_services_badge_configured = /** @type {(inputs: Settings_Services_Badge_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurado`)
};

const ja_settings_services_badge_configured = /** @type {(inputs: Settings_Services_Badge_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定済み`)
};

const hi_settings_services_badge_configured = /** @type {(inputs: Settings_Services_Badge_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कॉन्फ़िगर्ड`)
};

const pt_br2_settings_services_badge_configured = /** @type {(inputs: Settings_Services_Badge_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurado`)
};

const ko_settings_services_badge_configured = /** @type {(inputs: Settings_Services_Badge_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`설정됨`)
};

const fr_settings_services_badge_configured = /** @type {(inputs: Settings_Services_Badge_ConfiguredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuré`)
};

/**
* | output |
* | --- |
* | "Configured" |
*
* @param {Settings_Services_Badge_ConfiguredInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_services_badge_configured = /** @type {((inputs?: Settings_Services_Badge_ConfiguredInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Services_Badge_ConfiguredInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_services_badge_configured(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_services_badge_configured(inputs)
	if (locale === "es") return es_settings_services_badge_configured(inputs)
	if (locale === "ja") return ja_settings_services_badge_configured(inputs)
	if (locale === "hi") return hi_settings_services_badge_configured(inputs)
	if (locale === "pt-BR") return pt_br2_settings_services_badge_configured(inputs)
	if (locale === "ko") return ko_settings_services_badge_configured(inputs)
	return fr_settings_services_badge_configured(inputs)
});