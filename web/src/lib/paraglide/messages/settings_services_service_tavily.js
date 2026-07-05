/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Services_Service_TavilyInputs */

const en_settings_services_service_tavily = /** @type {(inputs: Settings_Services_Service_TavilyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tavily`)
};

const zh_cn2_settings_services_service_tavily = /** @type {(inputs: Settings_Services_Service_TavilyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tavily`)
};

const es_settings_services_service_tavily = /** @type {(inputs: Settings_Services_Service_TavilyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tavily`)
};

const ja_settings_services_service_tavily = /** @type {(inputs: Settings_Services_Service_TavilyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tavily`)
};

const hi_settings_services_service_tavily = /** @type {(inputs: Settings_Services_Service_TavilyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tavily`)
};

const pt_br2_settings_services_service_tavily = /** @type {(inputs: Settings_Services_Service_TavilyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tavily`)
};

const ko_settings_services_service_tavily = /** @type {(inputs: Settings_Services_Service_TavilyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tavily`)
};

const fr_settings_services_service_tavily = /** @type {(inputs: Settings_Services_Service_TavilyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tavily`)
};

/**
* | output |
* | --- |
* | "Tavily" |
*
* @param {Settings_Services_Service_TavilyInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_services_service_tavily = /** @type {((inputs?: Settings_Services_Service_TavilyInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Services_Service_TavilyInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_services_service_tavily(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_services_service_tavily(inputs)
	if (locale === "es") return es_settings_services_service_tavily(inputs)
	if (locale === "ja") return ja_settings_services_service_tavily(inputs)
	if (locale === "hi") return hi_settings_services_service_tavily(inputs)
	if (locale === "pt-BR") return pt_br2_settings_services_service_tavily(inputs)
	if (locale === "ko") return ko_settings_services_service_tavily(inputs)
	return fr_settings_services_service_tavily(inputs)
});