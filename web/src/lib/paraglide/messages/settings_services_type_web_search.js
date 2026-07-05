/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Services_Type_Web_SearchInputs */

const en_settings_services_type_web_search = /** @type {(inputs: Settings_Services_Type_Web_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Web Search API`)
};

const zh_cn2_settings_services_type_web_search = /** @type {(inputs: Settings_Services_Type_Web_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`网络搜索 API`)
};

const es_settings_services_type_web_search = /** @type {(inputs: Settings_Services_Type_Web_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API de búsqueda web`)
};

const ja_settings_services_type_web_search = /** @type {(inputs: Settings_Services_Type_Web_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ウェブ検索 API`)
};

const hi_settings_services_type_web_search = /** @type {(inputs: Settings_Services_Type_Web_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वेब सर्च API`)
};

const pt_br2_settings_services_type_web_search = /** @type {(inputs: Settings_Services_Type_Web_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API de Busca na Web`)
};

const ko_settings_services_type_web_search = /** @type {(inputs: Settings_Services_Type_Web_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`웹 검색 API`)
};

const fr_settings_services_type_web_search = /** @type {(inputs: Settings_Services_Type_Web_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API de recherche web`)
};

/**
* | output |
* | --- |
* | "Web Search API" |
*
* @param {Settings_Services_Type_Web_SearchInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_services_type_web_search = /** @type {((inputs?: Settings_Services_Type_Web_SearchInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Services_Type_Web_SearchInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_services_type_web_search(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_services_type_web_search(inputs)
	if (locale === "es") return es_settings_services_type_web_search(inputs)
	if (locale === "ja") return ja_settings_services_type_web_search(inputs)
	if (locale === "hi") return hi_settings_services_type_web_search(inputs)
	if (locale === "pt-BR") return pt_br2_settings_services_type_web_search(inputs)
	if (locale === "ko") return ko_settings_services_type_web_search(inputs)
	return fr_settings_services_type_web_search(inputs)
});