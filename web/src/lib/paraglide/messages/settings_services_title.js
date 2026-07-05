/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Services_TitleInputs */

const en_settings_services_title = /** @type {(inputs: Settings_Services_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Services`)
};

const zh_cn2_settings_services_title = /** @type {(inputs: Settings_Services_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`服务`)
};

const es_settings_services_title = /** @type {(inputs: Settings_Services_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servicios`)
};

const ja_settings_services_title = /** @type {(inputs: Settings_Services_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サービス`)
};

const hi_settings_services_title = /** @type {(inputs: Settings_Services_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सेवाएं`)
};

const pt_br2_settings_services_title = /** @type {(inputs: Settings_Services_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serviços`)
};

const ko_settings_services_title = /** @type {(inputs: Settings_Services_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`서비스`)
};

const fr_settings_services_title = /** @type {(inputs: Settings_Services_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Services`)
};

/**
* | output |
* | --- |
* | "Services" |
*
* @param {Settings_Services_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_services_title = /** @type {((inputs?: Settings_Services_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Services_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_services_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_services_title(inputs)
	if (locale === "es") return es_settings_services_title(inputs)
	if (locale === "ja") return ja_settings_services_title(inputs)
	if (locale === "hi") return hi_settings_services_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_services_title(inputs)
	if (locale === "ko") return ko_settings_services_title(inputs)
	return fr_settings_services_title(inputs)
});