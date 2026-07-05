/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Services_Service_BraveInputs */

const en_settings_services_service_brave = /** @type {(inputs: Settings_Services_Service_BraveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brave Search`)
};

const zh_cn2_settings_services_service_brave = /** @type {(inputs: Settings_Services_Service_BraveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brave Search`)
};

const es_settings_services_service_brave = /** @type {(inputs: Settings_Services_Service_BraveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brave Search`)
};

const ja_settings_services_service_brave = /** @type {(inputs: Settings_Services_Service_BraveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brave Search`)
};

const hi_settings_services_service_brave = /** @type {(inputs: Settings_Services_Service_BraveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brave Search`)
};

const pt_br2_settings_services_service_brave = /** @type {(inputs: Settings_Services_Service_BraveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brave Search`)
};

const ko_settings_services_service_brave = /** @type {(inputs: Settings_Services_Service_BraveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brave Search`)
};

const fr_settings_services_service_brave = /** @type {(inputs: Settings_Services_Service_BraveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brave Search`)
};

/**
* | output |
* | --- |
* | "Brave Search" |
*
* @param {Settings_Services_Service_BraveInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_services_service_brave = /** @type {((inputs?: Settings_Services_Service_BraveInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Services_Service_BraveInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_services_service_brave(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_services_service_brave(inputs)
	if (locale === "es") return es_settings_services_service_brave(inputs)
	if (locale === "ja") return ja_settings_services_service_brave(inputs)
	if (locale === "hi") return hi_settings_services_service_brave(inputs)
	if (locale === "pt-BR") return pt_br2_settings_services_service_brave(inputs)
	if (locale === "ko") return ko_settings_services_service_brave(inputs)
	return fr_settings_services_service_brave(inputs)
});