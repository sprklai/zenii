/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_About_WebsiteInputs */

const en_settings_about_website = /** @type {(inputs: Settings_About_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website`)
};

const zh_cn2_settings_about_website = /** @type {(inputs: Settings_About_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`官网`)
};

const es_settings_about_website = /** @type {(inputs: Settings_About_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sitio web`)
};

const ja_settings_about_website = /** @type {(inputs: Settings_About_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ウェブサイト`)
};

const hi_settings_about_website = /** @type {(inputs: Settings_About_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वेबसाइट`)
};

const pt_br2_settings_about_website = /** @type {(inputs: Settings_About_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site`)
};

const ko_settings_about_website = /** @type {(inputs: Settings_About_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`웹사이트`)
};

const fr_settings_about_website = /** @type {(inputs: Settings_About_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site web`)
};

/**
* | output |
* | --- |
* | "Website" |
*
* @param {Settings_About_WebsiteInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_about_website = /** @type {((inputs?: Settings_About_WebsiteInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_About_WebsiteInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_about_website(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_about_website(inputs)
	if (locale === "es") return es_settings_about_website(inputs)
	if (locale === "ja") return ja_settings_about_website(inputs)
	if (locale === "hi") return hi_settings_about_website(inputs)
	if (locale === "pt-BR") return pt_br2_settings_about_website(inputs)
	if (locale === "ko") return ko_settings_about_website(inputs)
	return fr_settings_about_website(inputs)
});