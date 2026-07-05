/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} App_NameInputs */

const en_app_name = /** @type {(inputs: App_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii`)
};

const zh_cn2_app_name = /** @type {(inputs: App_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii`)
};

const es_app_name = /** @type {(inputs: App_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii`)
};

const ja_app_name = /** @type {(inputs: App_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii`)
};

const hi_app_name = /** @type {(inputs: App_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii`)
};

const pt_br2_app_name = /** @type {(inputs: App_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii`)
};

const ko_app_name = /** @type {(inputs: App_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii`)
};

const fr_app_name = /** @type {(inputs: App_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii`)
};

/**
* | output |
* | --- |
* | "Zenii" |
*
* @param {App_NameInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const app_name = /** @type {((inputs?: App_NameInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<App_NameInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_app_name(inputs)
	if (locale === "zh-CN") return zh_cn2_app_name(inputs)
	if (locale === "es") return es_app_name(inputs)
	if (locale === "ja") return ja_app_name(inputs)
	if (locale === "hi") return hi_app_name(inputs)
	if (locale === "pt-BR") return pt_br2_app_name(inputs)
	if (locale === "ko") return ko_app_name(inputs)
	return fr_app_name(inputs)
});